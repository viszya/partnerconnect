
import { notFound } from "next/navigation"

import { dashboardConfig } from "@/app/_config/dashboard"
import { MainNav } from "@/app/_components/nav2"
import { DashboardNav } from "@/app/_components/nav"
import { Footer } from "@/app/_components/footer"
import { UserAccountNav } from "@/app/_components/user-account-nav"
import { Icon } from "@radix-ui/react-select"
import { Icons } from "@/app/_components/icons"
//import { api } from "@/server/react"
import { getServerAuthSession } from "@/server/auth"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await getServerAuthSession()

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="mx-32 lg:mx-10 md:mx-8 sm:mx-2  flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          {/* <Icons.help className="w-5 h-5 text-primary " /> */}
          <UserAccountNav
            user={{
              name:  session?.user?.name,
              image: session?.user?.image,
              email: session?.user?.email,
            }}
          />
        </div>
      </header>
      
      <div className="mx-32 lg:mx-10 md:mx-8 sm:mx-2 grid flex-1 gap-12 md:grid-cols-[150px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <Footer className="" />
    </div>
  )
}
