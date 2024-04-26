import { Footer } from "@/app/_components/footer";
import { twp } from "@/server/utils";
import Nav from "@/app/_components/main-nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import Image from "next/image";
import { Toaster } from "@/app/_components/ui/sonner";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      {children}
      <Footer className={twp().wrapper} />
      <Toaster />
      <DropdownMenu>
        <DropdownMenuTrigger className="sticky bottom-4 ml-auto mr-1 sm:mr-4">
          <Image
            alt="Bot Image"
            src="/bot-white.png"
            width={50}
            height={100}
            className="mb-2 w-[40px] rounded-full bg-black p-2 shadow-2xl shadow-black sm:mb-0 sm:w-[50px]"
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mx-2 mb-2 mr-4  pr-4 bg-transparent sm:mx-0 sm:w-[30rem]">
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
    </div>
  );
}
