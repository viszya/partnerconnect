import * as React from "react"

import { siteConfig } from "@/app/_config/site"
import { Icons } from "@/app/_components/icons"
import { ModeToggle } from "@/app/_components/mode-toggle"
import Link from "next/link"

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="text-center text-sm leading-loose md:text-left sm:flex sm:justify-center sm:items-center flex-row gap-x-2 grid grid-cols-2 gap-4">
            <span className=" font-medium">PARTNER-INSIGHTS {" "} </span>
            <Icons.dot className="h-4 w-4" />
            <span>© Copyright 2024</span>
            <Icons.dot className="h-4 w-4 hidden md:block" />
            <Link
              href="/tos"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-teal-400 transition duration-100"
            >
              TOS
            </Link>
            <Icons.dot className="h-4 w-4" />
            <Link
              href="/privacy"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-teal-400 transition duration-100"
            >
              Policy
            </Link>
          </div>
        </div>
        <ModeToggle />
      </div>
    </footer>
  )
}
