'use client';

import clsx from "clsx";
import Image from "next/image";

export default function BgImage({
  src,
  alt,
  width,
  height,
  priority,
  wrapperClassName = "",
  imgClassName = "",
  opacity = "opacity-30",
  contrast = true,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  wrapperClassName?: string;
  imgClassName?: string;
  opacity?: string;
  contrast?: boolean;
}) {
  return (
    <div
      className={clsx(
        "w-full h-full absolute top-0 left-0 -z-20",
        contrast && "filter brightness-50",
        opacity,
        wrapperClassName
      )}
    >
      <Image
        className={clsx(
          "absolute h-full w-full top-0 left-0 object-cover object-center",
          imgClassName
        )}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </div>
  );
}
