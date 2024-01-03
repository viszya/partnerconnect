import { Footer } from "@/app/_components/footer";
import { twp } from "@/server/utils";
import Nav from "@/app/_components/main-nav";
import { Toaster } from "@/app/_components/ui/sonner";

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
        <Nav />
        {children}
        <Footer className={twp().wrapper} />
        <Toaster />
    </div>
  )
}
