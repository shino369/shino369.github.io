"use client";
import { throttle } from "@/helper/client-utils";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InViewDiv } from "./FramerTransitionWrapper";

export default function EmailForm({
  env: { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_PUBLIC_KEY },
}: {
  env: {
    EMAIL_SERVICE_ID?: string;
    EMAIL_TEMPLATE_ID?: string;
    EMAIL_PUBLIC_KEY?: string;
  };
}) {
  const t = useTranslations("page");
  const schema = z.object({
    from_email: z
      .string()
      .min(1, { message: t("required") })
      .email({ message: t("not_email") }),
    from_name: z.string().min(1, { message: t("required") }),
    message: z.string().min(20, { message: t("more_than_20") }),
  });

  const [formStatus, setFormStatus] = useState({
    msg: "",
    error: false,
  });

  const [sending, setSending] = useState(false);

  const ref = useRef<HTMLFormElement>(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({ resolver: zodResolver(schema) });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sendEmail = useCallback(
    throttle(async (value: any) => {
      console.log(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_PUBLIC_KEY);
      if (!EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_PUBLIC_KEY) {
        return;
      }
      // console.log(value);
      setSending(true);
      if (ref.current) {
        try {
          const res = await emailjs.sendForm(
            EMAIL_SERVICE_ID,
            EMAIL_TEMPLATE_ID,
            ref.current,
            EMAIL_PUBLIC_KEY
          );
          console.log(res.text);
          setFormStatus({
            msg: t("success"),
            error: false,
          });
          reset();
          setSending(false);
        } catch (error) {
          console.log(error);
          setFormStatus({
            msg: t("error"),
            error: true,
          });
          setSending(false);
        }
      }
    }, 1000),
    [ref.current]
  );

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit(sendEmail)}
      className="w-full flex justify-center"
    >
      <div className="w-[800px] max-w-[80vw]">
        <div className="flex justify-center mb-6">
          <div className="uppercase w-fit text-2xl text-center font-bold">
            <InViewDiv>{"<Contact/>"}</InViewDiv>
          </div>
        </div>
        <div className="mb-2">
          <input
            className="w-full h-8 md:h-10 rounded-md px-2"
            id="email"
            type="email"
            placeholder={t("email")}
            {...register("from_email")}
          />
          {errors.from_email && (
            <p className="py-3 text-sm text-red-700">
              {errors.from_email.message as string}
            </p>
          )}
        </div>

        <div className="mb-2">
          <input
            className="w-full h-8 md:h-10 rounded-md px-2"
            id="name"
            type="text"
            placeholder={t("name")}
            {...register("from_name")}
          />
          {errors.from_name && (
            <p className="py-3 text-sm text-red-700">
              {errors.from_name.message as string}
            </p>
          )}
        </div>

        <div className="mb-2">
          <textarea
            className="w-full rounded-md px-2"
            id="message"
            placeholder={t("message")}
            rows={6}
            {...register("message")}
          />
          {errors.message && (
            <p className="py-3 text-sm text-red-700">
              {errors.message.message as string}
            </p>
          )}
        </div>
        <button
          disabled={sending}
          type="submit"
          className={clsx(
            "px-2 py-1 bg-gray-600 text-white rounded-xl flex items-center",
            sending ? " cursor-not-allowed" : ""
          )}
        >
          <div>{t("send")}</div>

          {sending && (
            <div role="status" className="ml-2">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </button>
        <div className={clsx(formStatus.error ? "text-red-700" : "")}>
          {formStatus.msg}
        </div>
      </div>
    </form>
  );
}
