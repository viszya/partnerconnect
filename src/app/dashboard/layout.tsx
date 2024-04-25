import { notFound } from "next/navigation";

import { dashboardConfig } from "@/app/_config/dashboard";
import { MainNav } from "@/app/_components/nav2";
import { DashboardNav } from "@/app/_components/nav";
import { Footer } from "@/app/_components/footer";
import { UserAccountNav } from "@/app/_components/user-account-nav";
import { Icon } from "@radix-ui/react-select";
import { Icons } from "@/app/_components/icons";
//import { api } from "@/server/react"
import { getServerAuthSession } from "@/server/auth";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await getServerAuthSession();

  return (
    <div className="gradient-bg-3 flex min-h-screen flex-col space-y-6 bg-white">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="mx-2 mr-5 flex h-16 items-center  justify-between py-4 sm:mx-32 md:mx-10 lg:mx-8">
          <MainNav items={dashboardConfig.mainNav} />
          {/* <Icons.help className="w-5 h-5 text-primary " /> */}
          <UserAccountNav
            user={{
              name: session?.user?.name,
              image: session?.user?.image,
              email: session?.user?.email,
            }}
          />
        </div>
      </header>

      <div className="mx-0 grid flex-1 gap-12 sm:mx-8 md:grid-cols-[150px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <Footer className="" />
    </div>
  );
}
