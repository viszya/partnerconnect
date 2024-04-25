import Link from "next/link";
import { cn } from "@/server/utils";
import { twp } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import Image from "next/image";
import { Pricing } from "@/app/_components/pricing";

export default function Home() {
  return (
    <main
      className={cn(
        "mb-12 flex flex-col items-center justify-center text-center ",
        //twp().wrapper,
      )}
    >
      {/* Hero Section */}
      <section className="hero-image flex flex-col items-center justify-center text-center ">
        <h1 className="lg:text:8xl movein mb-2 mt-20 text-4xl font-semibold text-black sm:mt-24 md:text-7xl">
          Elevate Your Company Insights!
        </h1>
        <p className="mb-2 mt-5 max-w-prose text-primary sm:text-lg">
          Unleash the power of data with PartnerInsight - Your Ultimate Business
          Companion.
        </p>
        <div className="mt-4 flex flex-row">
          <Link
            href="/signup"
            className={buttonVariants({
              size: "lg",
              className:
                "z-10 mr-5 rounded-2xl border-2 border-primary bg-background duration-200 ease-in-out hover:bg-white hover:text-primary hover:shadow-xl",
            })}
          >
            Get Started <Icons.arrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      {/* Example Section */}
      <div className="mx-auto mb-32 w-full max-w-screen-xl px-2.5">
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="overflow-hidden pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu blur-xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-purple-400 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-primary/10 p-2 ring-1 ring-inset ring-secondary/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  priority={true}
                  src="/connect.png"
                  alt="product preview"
                  width={1364}
                  height={866}
                  quality={100}
                  className="rounded-md bg-primary shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-500 to-purple-300 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
      </section>

      <section className="text-left">
        <div className="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24 ">
          <div className="max-w-xl py-12 mx-auto lg:max-w-7xl ">
            <div>
              <div className="grid grid-cols-2 gap-12 lg:grid-cols-4 lg:space-y-0 lg:text-center">
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-purple-100 rounded-xl lg:mx-auto">
                      <Icons.brain className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Advanced Datatable
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    The datatable is designed to help you analyze and visualize data in a more efficient way
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-blue-100 rounded-xl lg:mx-auto">
                      <Icons.album className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                     Report Generation
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Automatic report generation giving you insights into your company&apos;s performance
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-teal-100 rounded-xl lg:mx-auto">
                      <Icons.blocks className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                     Company Insights
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Insights to help you make better decisions for your company and business deals
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-purple-100 rounded-xl lg:mx-auto">
                      <Icons.zap className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                     Auto Emails
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                     Regular updated emails to keep you informed about your company&apos;s performance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden text-left">
        <div className="items-center w-full px-5 pb-20 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2">
            <div className="lg:pr-24 md:pr-12">
              <h2 className="mt-6 text-3xl font-medium text-black">
                A neat and insightful company profile
              </h2>
              <p className="mt-5 text-base text-gray-700">
                PartnerConnect provides you with a detailed company profile that helps you understand your company&apos;s performance and make better decisions. The profile includes a detailed datatable, report generation, company insights, and auto emails to keep you informed about your company&apos;s performance.
              </p>
              <ul className="grid grid-cols-2 gap-4 mt-12 list-none lg:gap-6" role="list">
                <li>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-purple-100 rounded-xl">
                      <Icons.link className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                      Advanced Filters
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-700">
                    The datatable comes with advanced filters to help you analyze data more efficiently
                  </div>
                </li>
                <li>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-purple-100 rounded-xl">
                      <Icons.boxes className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                    Primary Info Prioritization
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-700">
                    The company profile prioritizes primary information to help you make better decisions
                  </div>
                </li>
              </ul>
            </div>
            <div className="h-full lg:mt-0 border-mercury-400 lg:border-l lg:pl-12">
              <div>
                <div className=' flow-root sm:mt-24'>
                  <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                    <Image
                      src='/preview4.png'
                      alt='product preview'
                      width={1364}
                      height={866}
                      quality={100}
                      className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="pricing">
        <div className='relative isolate mb-20'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu orveflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-300 to-purple-400 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Pricing />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className={cn(twp().wrapper, "flex w-full flex-col items-center  justify-center rounded-2xl bg-black p-20 text-white ")}>
        <h1 className="lg:text:7xl mb-2 pt-12 text-3xl font-semibold text-white sm:pt-0 md:text-6xl">
          Get started with a free <br />{" "}
          <span className="text-purple-200">partner.connect</span> account today
        </h1>
        <div className="mt-4 flex flex-col text-black sm:flex-row">
          <Link
            href="/signup"
            className={buttonVariants({
              size: "lg",
              className:
                "ml-0 rounded-xl border-2 border-white bg-white text-black duration-200 ease-in-out hover:border-purple-300 hover:bg-purple-300  hover:shadow-xl sm:ml-5 ",
            })}
          >
            <span className="text-black flex flex-row">Get Started <Icons.arrowRight className="ml-2 h-5 w-5" /></span>
          </Link>
        </div>
      </section>
    </main>
  );
}
