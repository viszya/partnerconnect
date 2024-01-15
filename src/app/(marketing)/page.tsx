import Link from "next/link";
import { cn } from "@/server/utils";
import { twp } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import Image from "next/image"


export default function Home() {
  return (<main className={cn("mb-12 mt-28 sm:mt-20 flex flex-col items-center justify-center text-center", twp().wrapper)}>

    {/* Hero Section */}
    <h1 className="max-w-4xl text-5xl mb-2 mt-10 font-semibold md:text-6xl text-primary lg:text:7xl">
      Elevate Your Company Insights!
    </h1>
    <p className="mt-5 max-w-prose mb-2 text-primary sm:text-lg">
      Unleash the power of data with PartnerInsight - Your Ultimate Business Companion.
    </p>
    <div className="flex flex-row mt-4">
      <Link href="/signup" className={buttonVariants({ size: "lg", className: "mr-5 bg-background ease-in-out border-2 border-primary duration-200 hover:text-primary hover:bg-background hover:shadow-xl rounded-2xl" })}>
        Get Started <Icons.arrowRight className="ml-2 h-5 w-5" />
      </Link>

    </div>

    {/* Example Section */}
    <div className="mx-auto w-full max-w-screen-xl px-2.5 mb-32">
      <div className='relative isolate'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu orveflow-hidden blur-3xl sm:-top-80'>
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-teal-400 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          />
        </div>

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-primary/10 p-2 ring-1 ring-inset ring-secondary/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                priority={true}
                src='/connect.png'
                alt='product preview'
                width={1364}
                height={866}
                quality={100}
                className='rounded-md bg-primary shadow-2xl ring-1 ring-gray-900/10'
              />
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
            className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-500 to-green-300 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
          />
        </div>
      </div>
    </div>

    {/* Features */}
    {/*
    <section>

      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl border-1 mt-11 rounded-2xl ">
        <div className="w-full mx-auto text-left">
          <div className="relative flex-col items-center m-auto align-middle">
            <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                  <div className='mt-16 flow-root sm:mt-24'>
                    <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                      <Image
                        priority={true}
                        src='/dashboard-preview.png'
                        alt='product preview'
                        width={1364}
                        height={866}
                        quality={100}
                        className='rounded-md bg-primary shadow-2xl ring-1 ring-gray-900/10'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-6 lg:mt-0">
                <div className="max-w-xl">
                  <div>
                    <p className="text-2xl font-medium tracking-tight text-primary sm:text-4xl">
                      Features
                    </p>
                  </div>
                </div>
                <div className="mx-auto mt-6 lg:max-w-7xl">
                  <ul role="list" className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-3">
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-primary">
                          Smart Connections
                        </p>

                      </div>
                      <div className="mt-2 text-base text-primary/80">
                        Instantly connect with top tech talent or exciting job opportunities, driven by our intelligent matchmaking system.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-primary">
                          Personalized Matches
                        </p>
                      </div>
                      <div className="mt-2 text-base text-primary/80">
                        Tailored algorithms ensure businesses find ideal candidates, and individuals discover opportunities aligned with their skills and aspirations.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-primary">
                          Effortless Experience
                        </p>
                      </div>
                      <div className="mt-2 text-base text-primary/80">
                        Streamlined platform navigation for businesses to post jobs seamlessly and individuals to apply with just a few clicks.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-primary">
                          Vibrant Tech Ecosystem
                        </p>
                      </div>

                      <div className="mt-2 text-base text-primary/80">
                        Join a collaborative community fostering innovation and growth, connecting businesses and individuals in the dynamic world of tech.
                      </div>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 */}



    {/* CTA */}

    {/* <section className="flex justify-center items-center text-5xl mb-2 mt-10 font-semibold md:text-6xl text-primary lg:text:7xl w-full bg-primary/10 rounded-2xl">
      <div className="max-w-4xl text-5xl mb-2 mt-10 justify-center font-semibold md:text-6xl text-primary lg:text:7xl">
        <div className="max-w-xl mx-auto text-center lg:p-10">
          <div>
            <p className="text-2xl font-medium tracking-tight text-primary sm:text-4xl">
              Ready to Ignite Your Tech Journey? Join Sparktup Today!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <Link
              className={buttonVariants({
                variant: "heroButton2",
                size: "lg",
                className:
                  'mx-auto mb-4 max-w-fit items-center justify-center space-x-2 overflow-hidden flex flex-colum text-primary rounded-2xl border border-red-400 bg-primary ease-in-out px-7 py-2 shadow-md backdrop-blur transition-all hover:border-red-400 hover:bg-gradient-to-r hover:from-red-400 hover:to-red-300 hover:shadow-xl  hover:text-primary'
              })}
              href="amazon.com"
            >
              G
            </Link>
          </div>
        </div>
      </div>
    </section> */}
  </main>);
}
