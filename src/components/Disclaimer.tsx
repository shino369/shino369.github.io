'use client';

import Link from "next/link";
import Image from "next/image";
import linkedin from "@/assets/linkedin.svg";
import github from "@/assets/github.svg";
import LocaleSwitcher from "./locale-switcher";

export default function Disclaimer() {
  return (
    <footer className="flex items-center fixed bottom-0 left-0 opacity-70 py-1 md:py-2 w-full justify-center">
      <section>
        <nav>
          <ul className="flex justify-around w-16 md:w-24">
            <li>
              <Link href="https://github.com/shino369">
                <Image
                  src={github}
                  className="w-5 md:w-8 dark:filter dark:invert"
                  alt="github"
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/aw3939/">
                <Image
                  src={linkedin}
                  className="w-5 md:w-8 dark:filter dark:invert"
                  alt="linkedin"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <span className="text-xs md:text-sm font-mono">
          shino369/AnthonyW © 2023
        </span>
      </section>
      <section className="text-xs md:text-sm font-mono">
        <LocaleSwitcher />
      </section>
    </footer>
  );
}
