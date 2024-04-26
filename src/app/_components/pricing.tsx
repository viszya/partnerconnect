import * as React from "react"
import Link from "next/link"
import { cn } from "@/server/utils"
import { Icons } from "@/app/_components/icons"

export function Pricing({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <section className={cn(className)} aria-labelledby="pricing" id="pricing">
            <div className="items-center px-8 py-12 mx-auto md:px-8 lg:px-8 xl:px-8 max-w-7xl bg-pricing">
                <div className="grid grid-cols-1 gap-12 text-center lg:grid-cols-2 lg:gap-14">
                    <div className="bg-purple-900/10 py-14 px-6 md:px-16 sm:px-20 rounded-2xl border-black border-2">
                        <div className="text-left">
                            <div>
                                <div className="flex items-center justify-center w-12 h-12 text-primary rounded-full bg-white">
                                    <Icons.badge className="h-5 w-5 text-black"/>
                                </div>
                                <p className="mt-4 text-lg font-medium text-primary lg:text-2xl">
                                    Free Tier
                                </p>
                            </div>
                            <p className="mt-6">
                                <span className="text-4xl text-primary lg:text-6xl"> $0</span>
                                <span className="text-base font-medium text-primary/80"> /mo</span>
                            </p>
                            <p className="mt-6 text-sm text-primary/80">
                                Elevate Your Company Insights!
                            </p>
                            <p className="mt-4 text-lg font-medium text-primary lg:text-2xl">
                                Features
                            </p>
                            <ul className="gap-4 mt-6 space-y-3 list-none lg:gap-6" role="list">
                                <li className="flex items-center">
                                    <Icons.badgeCheck />
                                    <span className="ml-3 text-primary/80">Advanced Datatable</span>
                                </li>
                                <li className="flex items-center">
                                    <Icons.badgeCheck />
                                    <span className="ml-3 text-primary/80">Company Insights</span>
                                </li>
                                <li className="flex items-center">
                                    <Icons.badgeCheck />
                                    <span className="ml-3 text-primary/80">Auto Emails</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <Link href="/signin" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-purple-300 border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-primary focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" aria-describedby="tier-starter">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-900/5 py-14 px-6 md:px-16 sm:px-20 rounded-2xl">
                        <div className="text-left">
                            <div>
                                <div className="flex items-center justify-center w-12 h-12 text-primary rounded-full bg-white">
                                    <Icons.spark className="h-5 w-5 text-black"/>
                                </div>
                                <p className="mt-4 text-lg font-medium text-primary lg:text-2xl">
                                    Premium Plan
                                </p>
                            </div>
                            <p className="mt-6">
                                <span className="text-4xl text-primary lg:text-6xl"> $12</span>
                                <span className="text-base font-medium text-primary/80"> /mo</span>
                            </p>
                            <p className="mt-6 text-sm text-primary/80">
                                Unleash the power of data with PartnerInsight - Your Ultimate Business Companion.
                            </p>
                            <p className="mt-4 text-lg font-medium text-primary lg:text-2xl">
                                Features
                            </p>
                            <ul className="gap-4 mt-6 space-y-3 list-none lg:gap-6" role="list">
                                <li className="flex items-center">
                                    <Icons.badgeCheck className="text-purple-300"/>
                                    <span className="ml-3 text-primary/80">Advanced Datatable</span>
                                </li>
                                <li className="flex items-center">
                                    <Icons.badgeCheck className="text-purple-300"/>
                                    <span className="ml-3 text-primary/80">Report Generation</span>
                                </li>
                                <li className="flex items-center">
                                    <Icons.badgeCheck className="text-purple-300"/>
                                    <span className="ml-3 text-primary/80">Company Insights</span>
                                </li>
                                <li className="flex items-center">
                                    <Icons.badgeCheck className="text-purple-300"/>
                                    <span className="ml-3 text-primary/80">Auto Emails</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <Link href="/signin" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-primary focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" aria-describedby="tier-starter">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
