"use client"

import { twp, cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/_components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/_components/ui/drawer";

// Define the new company data
const newData = {
  companyName: "Innovate Tech",
  id: "1234",
  avatar: "/innovate_tech_logo.png",
  status: "Active",
  typeOfOrganization: "Tech",
  industryOrSector: "IT",
  historyBackground: "Founded in 2010, Innovate Tech has been a pioneer in delivering cutting-edge technology solutions.",
  sizeEmployees: "5000+",
  missionStatementVision: "Empowering businesses through innovative technology solutions",
  targetMarketCustomerBase: "Enterprise, Startups",
  tags: ["Technology", "Innovation", "Digital Transformation"],
  companyContactInformation: {
    address: "456 Innovation Street, San Francisco, CA",
    phoneNumber: "+1 (555) 987-6543",
    email: "info@innovatetech.com",
    website: "https://www.innovatetech.com",
    district: "Bay Area",
  },
  keyPersonnel: [
    {
      name: "Alice Johnson",
      position: "CEO",
      phoneNumber: "+1 (555) 111-2222",
      email: "alice@innovatetech.com",
      avatarImage: "/alice-johnson-avatar.png",
    },
    {
      name: "Bob Smith",
      position: "CTO",
      phoneNumber: "+1 (555) 333-4444",
      email: "bob@innovatetech.com",
      avatarImage: "/bob-smith-avatar.png",
    },
  ],
  mainProduct: "Tech Solutions",
  descriptionOfProducts: "Innovate Tech provides a wide range of technology solutions, including software development, cloud services, and digital transformation.",
  listOfProductsServices: [
    "Custom Software Development",
    "Cloud Computing Solutions",
    "Digital Transformation Services",
    "IT Consulting",
  ],
  financialsRevenueModel: "Innovate Tech generates revenue through a combination of project-based contracts and recurring service subscriptions.",
  awardsRecognitions: [
    { title: "Innovation Award 2022", description: "Recognized for outstanding innovation in the technology sector." },
    { title: "Tech Excellence Award", description: "Received for excellence in providing tech solutions to clients." },
  ],
  socialMediaProfiles: {
    facebook: "https://www.facebook.com/innovatetech",
    twitter: "https://www.twitter.com/innovatetech",
    linkedin: "https://www.linkedin.com/company/innovatetech",
  },
  companyValuesCulture: "At Innovate Tech, we value innovation, collaboration, and diversity. Our culture fosters a dynamic and inclusive work environment.",
  customerTestimonials: [
    {
      clientName: "XYZ Innovations",
      feedback: "Innovate Tech has been instrumental in transforming our business. Their solutions are innovative and have significantly enhanced our operations."
    },
    {
      clientName: "Tech Start",
      feedback: "The expertise and dedication of the Innovate Tech team are unmatched. They understand our unique challenges and deliver tailored solutions."
    }
  ],
};

export default function CompanyProfile() {
  return (
    <div className={cn("", twp().wrapper)}>
      {/* Company Headline */}
      <div className="grid grid-flow-col grid-cols-2 md:grid-cols-1 gap-x-6 m-10 bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
        <div className=" max-w-[30rem]">
          <div className="flex flex-row gap-x-8 mb-4">
            <Image src={newData.avatar} alt="company-logo" width={100} height={50} className="rounded-full overflow-hidden" />
            <div>
              <div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">{newData.companyName}</div>
              <div className="mt-2 flex flex-row items-center">
                <Icons.pin className="h-4 w-4 mr-2" />
                <div className="text-gray-500">{newData.companyContactInformation.district}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm">
              <Icons.user className="h-4 w-4 mr-2" />
              {newData.sizeEmployees}
            </div>
            <Drawer>
              <DrawerTrigger className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm hover:text-red-300 hover:border-red-400 hover:scale-95 hover:cursor-pointer">
                <Icons.contact className="h-4 w-4 mr-2" />
                Contact Us
              </DrawerTrigger>
              <DrawerContent className="flex justify-center items-center">
                <DrawerHeader className="max-w-5xl flex justify-center items-center">
                  <section className="m-10 flex justify-center items-center">
                    <div className="mt-8 text-xl font-medium tracking-tight text-black sm:text-2xl">Contact Information</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                      <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                        <p className="text-base text-black font-medium">{newData.companyContactInformation.email}</p>
                        <p className="text-sm text-gray-500">Email</p>
                      </div>
                      <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                        <p className="text-base text-black font-medium">{newData.companyContactInformation.phoneNumber}</p>
                        <p className="text-sm text-gray-500">Phone</p>
                      </div>
                      <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                        <p className="text-base text-black font-medium">{newData.companyContactInformation.address}</p>
                        <p className="text-sm text-gray-500">Address</p>
                      </div>
                    </div>
                  </section>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <div className="md:justify-self-end justify-center items-center">
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              // Handle button click
            }}
          >
            Follow
          </Button>
        </div>
      </div>

      {/* About the Company */}
      <div className="bg-white p-8 mt-8 rounded-2xl border-2 border-gray-200">
        <div className="text-2xl font-medium text-black mb-4">About {newData.companyName}</div>
        <p className="text-gray-500">{newData.historyBackground}</p>
      </div>

      {/* Company Solutions */}
      <div className="mt-8">
        <div className="text-2xl font-medium text-black mb-4">Our Solutions</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newData.listOfProductsServices.map((product, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-lg font-medium text-black">{product}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="mt-8">
        <div className="text-2xl font-medium text-black mb-4">Client Testimonials</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newData.customerTestimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-lg font-medium text-black">{testimonial.clientName}</div>
              <p className="text-gray-500">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Personnel */}
      <div className="mt-8">
        <div className="text-2xl font-medium text-black mb-4">Key Personnel</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newData.keyPersonnel.map((person, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <Image src={person.avatarImage} alt={`${person.name}-avatar`} width={80} height={80} className="rounded-full overflow-hidden mb-4" />
              <div className="text-lg font-medium text-black">{person.name}</div>
              <p className="text-gray-500">{person.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Awards and Recognitions */}
      <div className="mt-8">
        <div className="text-2xl font-medium text-black mb-4">Awards and Recognitions</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newData.awardsRecognitions.map((award, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-lg font-medium text-black">{award.title}</div>
              <p className="text-gray-500">{award.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Profiles */}
      {/* <div className="mt-8">
        <div className="text-2xl font-medium text-black mb-4">Connect With Us</div>
        <div className="flex flex-row gap-x-4">
          <Link href={newData.socialMediaProfiles.facebook}>
            {/* <a target="_blank" rel="noopener noreferrer">
              {/* <Icons.facebook className="h-8 w-8 text-blue-500" />
            </a> 
          </Link>
          <Link href={newData.socialMediaProfiles.twitter}>
            <a target="_blank" rel="noopener noreferrer">
              <Icons.twitter className="h-8 w-8 text-blue-400" />
            </a>
          </Link>
          <Link href={newData.socialMediaProfiles.linkedin}>
            <a target="_blank" rel="noopener noreferrer">
              {/* <Icons.linkedin className="h-8 w-8 text-blue-600" /> 
            </a>
          </Link>
        </div>
      </div>
     */}

      {/* Company Culture */}
      <div className="mt-8">
        <div className="text-2xl font-medium text-black mb-4">Our Culture</div>
        <p className="text-gray-500">{newData.companyValuesCulture}</p>
      </div>

  
    </div>
  );
}
