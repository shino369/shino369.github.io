"use client";
import clsx from "clsx";
import NextImage from "next/image";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";

export default function WithPlaceholder({
  src,
  alt,
  className,
  ...rest
}: { src: string; alt: string; className?: string } & Record<string, unknown>) {
  const [ready, setReady] = useState(false);
  const [width, setWidth] = useState(60);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const calW = img.width * (160 / img.height);
      setWidth(calW);
    };
  }, [src]);

  return (
    <div className={clsx("relative min-w-max h-40")}>
      {!ready && (
        <div
          className="mb-2 animate-pulse text-xl font-medium text-neutral-900 dark:text-white absolute h-full  px-2"
          style={{
            width: width,
          }}
        >
          <span className="inline-block min-h-[1em]  cursor-wait bg-current align-middle opacity-50 w-full h-full"></span>
        </div>
      )}
      <NextImage
        {...rest}
        className={clsx(ready ? "opacity-100" : "opacity-0", className)}
        src={src}
        alt={alt}
        onLoad={() => {
          setReady(true);
        }}
      />
    </div>
  );
}
