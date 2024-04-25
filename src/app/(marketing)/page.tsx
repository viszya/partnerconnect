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
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-500 to-green-300 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
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
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 rounded-xl lg:mx-auto">
                      <Icons.brain className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      AI Quiz Generation
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Create, practice, and see the results of quizzes generated from lecture recordings and track your progress
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-blue-100 rounded-xl lg:mx-auto">
                      <Icons.album className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                     Generate Notes and Flashcards
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Auto-generated notes and flashcards based on class objectives
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-teal-100 rounded-xl lg:mx-auto">
                      <Icons.blocks className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Track Student Progress
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Analyze the performance of students and track their progress
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-purple-100 rounded-xl lg:mx-auto">
                      <Icons.zap className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                     Fast & Quick Generation
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Generate learning material in seconds from hour-long lecture recordings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex h-full w-full flex-col items-center justify-center bg-white px-2">
        {/* <Image
          src="/logo-bg.svg"
          alt="bg-svg"
          width={800}
          height={600}
          className="left-1/4 absolute opacity-30"
        /> */}
        {/* <h1 className="mb-2 mt-10 text-xl uppercase text-primary/75">
          Trusted By 500+ of the Best Companies
        </h1> */}
        <Image
          src="/logo-p1.png"
          alt="bg-svg"
          width={1000}
          height={600}
          className="l mt-8"
        />
        <Link
          href="/solutions/company"
          className="gradient-bt mb-28 w-full max-w-5xl rounded-2xl px-[3px] py-[3px]  transition-all hover:shadow-lg"
        >
          <div className="flex flex-row items-center justify-center rounded-2xl bg-white px-8 py-2">
            <div className="mr-4 rounded-2xl border-orange-400 bg-orange-300 px-2 py-1 text-sm">
              NEW
            </div>
            How Sparktup helped startups launch their job network to millions of
            applicants <Icons.arrowRight className="ml-2 h-5 w-5" />
          </div>
        </Link>
      </section>

      <section className="overflow-hidden text-left">
        <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2">
            <div className="lg:pr-24 md:pr-12">
              <h2 className="mt-6 text-3xl font-medium text-black">
                A smart way to track student progress and weaknesses
              </h2>
              <p className="mt-5 text-base text-gray-700">
                PodiumAI uses advanced AI algorithms to generate quizzes, notes, and flashcards from lecture recordings. It also tracks student progress and weaknesses to help them improve their learning experience.
              </p>
              <ul className="grid grid-cols-2 gap-4 mt-12 list-none lg:gap-6" role="list">
                <li>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 rounded-xl">
                      <Icons.link className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                      Seamless Integration
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-700">
                    You are able to connect with students and teachers through classcodes
                  </div>
                </li>
                <li>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-purple-100 rounded-xl">
                      <Icons.boxes className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                    Adjust course material to student needs
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-700">
                    PodiumAI adjusts the generation based on class and topic objectives
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




      {/* Key Features for Companies */}
      {/* gradient-bg-3 */}
      <section className=" py-16 pb-[10rem] text-center">
        <div className={cn(twp().wrapper)}>
          <h1 className="mb-8 text-5xl font-black text-black">
            Key Features of Sparktup for Companies
          </h1>
          <div className="mb-8 inline-flex max-w-4xl items-center justify-center text-lg">
            Empower Your Company: Unveiling the Essential Features of Sparktup
            for Companies
          </div>
          <div className="mx-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="items-left flex flex-col rounded-2xl border border-purple-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
              <Icons.Database className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Extensive Candidate Database
              </h2>
              <p className="w-full text-black/60">
                Access a vast database of tech enthusiasts and professionals
                actively seeking employment opportunities.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="items-left flex flex-col rounded-2xl border border-purple-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
              <Icons.Clock className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Time-Efficient Hiring
              </h2>
              <p className="w-full text-black/60">
                Save time in the hiring process with automated candidate
                matching, allowing you to focus on interviewing qualified
                applicants.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="items-left flex flex-col rounded-2xl border border-purple-300 bg-white/50 p-6 text-left backdrop-blur-2xl">
              <Icons.Mail className="mb-4 h-8 w-8 text-black" />
              <h2 className="mb-2 text-xl font-black text-black">
                Integrated Communication
              </h2>
              <p className="w-full text-black/60">
                Communicate seamlessly with potential hires within the Sparktup
                platform, streamlining your interactions and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="pricing">
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu orveflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-300 to-green-400 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
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

      {/* About Us */}
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
    </main>
  );
}
