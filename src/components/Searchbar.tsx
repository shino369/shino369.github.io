"use client";
import { debounce } from "@/helper/client-utils";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";

export default function SearchBar({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    const searching = searchParams.get("search");
    searching && setText(searching);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce(
      (
        text: string,
        _router: typeof router,
        _searchParams: typeof searchParams,
        _pathname: typeof pathname,
        keyword: string
      ) => {
        const current = new URLSearchParams(
          Array.from(_searchParams.entries())
        );

        // console.log(Array.from(_searchParams.entries()))

        const value = text.trim();
        if (!value) {
          current.delete(keyword);
        } else {
          current.set(keyword, value);
        }

        const search = current.toString();
        const query = search ? `?${search}` : "";
        _router.push(`${_pathname}${query}`);
      },
      500
    ),
    []
  );

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
    debouncedSearch(
      e.currentTarget.value,
      router,
      searchParams,
      pathname,
      "search"
    );
  };

  const handlePassInput = (e: FormEvent<HTMLInputElement>) => {
    setPass(e.currentTarget.value);
    debouncedSearch(
      e.currentTarget.value,
      router,
      searchParams,
      pathname,
      "password"
    );
  };

  return (
    <div className={clsx(className, "flex")}>
      <input
        className="h-full w-full text-lg focus:outline-gray-500 p-1 bg-[rgba(255,255,255,0.8)] rounded"
        value={text}
        onInput={handleInput}
      />
      <input
        className="h-full w-16 text-lg focus:outline-gray-500 p-1 bg-[rgba(255,255,255,0.8)] rounded ml-2"
        value={pass}
        onInput={handlePassInput}
        placeholder="pass"
      />
    </div>
  );
}
