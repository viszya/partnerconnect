import { notFound } from "next/navigation";
import { dashboardConfig } from "@/app/_config/dashboard";
import { MainNav } from "@/app/_components/nav2";
import { DashboardNav } from "@/app/_components/nav";
import { Footer } from "@/app/_components/footer";
import { UserAccountNav } from "@/app/_components/user-account-nav";
import { Icons } from "@/app/_components/icons";
import { getServerAuthSession } from "@/server/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import Image from "next/image";


interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await getServerAuthSession();

  return (
    <div className="gradient-bg-2 flex min-h-screen flex-col space-y-6 bg-background">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="mx-2 mr-5 flex h-16 items-center  justify-between py-4 sm:mx-32 md:mx-10 lg:mx-8">
          <MainNav items={dashboardConfig.mainNav} />
          {/* <Icons.help className="w-5 h-5 text-primary " /> */}
          <DropdownMenu>
            <DropdownMenuTrigger className="sticky bottom-4 ml-auto mr-1 sm:mr-4">
              <Image
                alt="Bot Image"
                src="/bot-white.png"
                width={20}
                height={40}
                className="  rounded-full bg-black p-2 shadow-2xl shadow-black w-[35px]"
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mx-2 mb-2 mr-4 bg-transparent pr-4 sm:mx-0 sm:w-[30rem] border-transparent">
              <div className="relative">
                <iframe
                  src="https://www.chatbase.co/chatbot-iframe/bdBwJRZHvYIcIwrbEPI0-"
                  width="100%"
                  style={{ height: "100%", minHeight: "700px" }}
                  className="rounded-xl"
                  frameBorder="0"
                  title="My Chatbot Iframe"
                ></iframe>
                <div className="absolute bottom-0 right-40 h-10 w-48 bg-black"></div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
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
