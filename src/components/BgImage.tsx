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
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  wrapperClassName?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={clsx(
        "w-full h-full absolute top-0 left-0 opacity-30 filter brightness-50 -z-20",
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
