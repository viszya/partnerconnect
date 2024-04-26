import * as React from "react";

import { siteConfig } from "@/app/_config/site";
import { Icons } from "@/app/_components/icons";
import { ModeToggle } from "@/app/_components/mode-toggle";
import Link from "next/link";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="bg-background">
      <div className="mx-2 sm:mx-32 flex flex-col items-center  justify-between gap-4 py-10 sm:mx-2 md:mx-8 md:h-24 md:flex-row md:py-0 lg:mx-10">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="grid grid-cols-2 gap-4 gap-x-2 text-center text-sm leading-loose sm:flex sm:flex-row sm:items-center sm:justify-center md:text-left">
            <span className=" font-medium">partner.connect </span>
            <Icons.dot className="hidden h-4 w-4 sm:block" />
            <span>© Copyright 2024</span>
            <Icons.dot className="hidden h-4 w-4 sm:block" />
            <Link
              href="/tos"
              className="font-medium underline underline-offset-4 transition duration-100 hover:text-purple-400"
            >
              TOS
            </Link>
            <Icons.dot className="hidden h-4 w-4 sm:block" />
            <Link
              href="/privacy"
              className="font-medium underline underline-offset-4 transition duration-100 hover:text-purple-400"
            >
              Privacy
            </Link>
          </div>
        </div>
        <div className="-mb-6">
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
