import Link from 'next/link'
import { buttonVariants } from '@/app/_components/ui/button'
// import { ArrowRight } from 'lucide-react'
// import UserAccountNav from './UserAccountNav'
import { twp, cn } from '@/server/utils'
// import MobileNav from './MobileNav'
import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from './icons';


const Nav = async () => {
  const session = await getServerAuthSession();


  return (<>

    <div className="sticky inset-x-0 top-0 z-30 w-full mx-auto border-b bg-secondary/70 backdrop-blur-lg transition-all">
      <div className={cn(twp().wrapper, "relative flex flex-col w-full p-5 mx-auto  md:items-center md:justify-between md:flex-row md:px-6 lg:px-8")}>
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a className="text-lg tracking-tight primary-black uppercase focus:outline-none focus:ring focus:ring-gray-300/25 rounded-full px-4 lg:text-2xl" href="/">
            <span className="lg:text-lg uppecase font-semibold tracking-widest">
              PARTNER-INSIGHT
            </span>
          </a>
          <button className="inline-flex items-center justify-center p-2 text-secondary hover:text-primary focus:outline-none focus:text-primary md:hidden">
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path className="hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
          <div className='flex-1 mx-4'>
            <Link
              href='/about'
              className="px-2 py-2 text-sm text-primary/80 lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
              About
            </Link>
            <Link
              href='/support'
              className="px-2 py-2 text-sm text-primary/80 lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
              Support
            </Link>
            <Link
              href='/faq'
              className="px-2 py-2 text-sm text-primary/80 lg:px-6 md:px-3 hover:text-teal-400 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10">
              FAQ
            </Link>
          </div>
          <div className="inline-flex items-center gap-2 list-none">
            <Link
              href="/signin"
              className="block px-4 py-2 mt-2 text-sm text-primary bg-teal-400/10 rounded-full font-semibold border-teal-300 border-2  md:mt-0 hover:bg-teal-300/20 transision-all delay-75 :focus:outline-none focus:shadow-outline"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="inline-flex border-2 border-primary/80 items-center justify-center px-4 py-2 text-sm font-semibold text-primary bg-secondary rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-primary/20 active:bg-primary/20 active:text-primary focus-visible:outline-primary"
            >
              Sign up
            </Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className='p-1 border-3 rounded-lg border-primary '>
              <Icons.menu className="w-6 h-6 text-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-2 '>
              <DropdownMenuItem className='flex justify-center items-center px-0'>
                <Link
                  href="/signin"
                  className="w-full text-center block px-4 py-2 mt-2 text-sm text-primary bg-teal-400/10 rounded-full font-semibold border-teal-300 border-2  md:mt-0 hover:bg-teal-300/20 transision-all delay-75 :focus:outline-none focus:shadow-outline"
                >
                  Sign in
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='flex justify-center items-center px-0'>
                <Link
                  href="/signup"
                  className="w-full text-center inline-flex border-2 border-primary/80 items-center justify-center px-4 py-2 text-sm font-semibold text-primary bg-secondary rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-primary/20 active:bg-primary/20 active:text-primary focus-visible:outline-primary"
                >
                  Sign up
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='flex justify-center items-center px-0'>
                <Link
                  href='/about'
                  className="w-full text-center px-2 py-2 text-sm text-primary lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='flex justify-center items-center px-0'>
                <Link
                  href='/support'
                  className="w-full text-center px-2 py-2 text-sm text-primary lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
                  Support
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className='flex justify-center items-center px-0'>
                <Link
                  href='/faq'
                  className="w-full text-center px-2 py-2 text-sm text-primary lg:px-6 transition-colors delay-75 rounded-2xl hover:bg-teal-400/10 md:px-3 hover:text-teal-400 ">
                  FAQ
                </Link>
              </DropdownMenuItem>


            </DropdownMenuContent>
          </DropdownMenu>


        </nav>
      </div>
    </div>
  </>)
}

export default Nav