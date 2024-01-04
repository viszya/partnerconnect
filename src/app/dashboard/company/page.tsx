import { twp, cn } from "@/server/utils";
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/_components/ui/carousel";
import { api } from "@/trpc/react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/_components/ui/drawer"

const data = {
  companyName: "Tech Solutions Inc.",
  typeOfOrganization: "Private",
  industryOrSector: "Technology",
  contactInformation: {
    address: "123 Tech Street, San Francisco, CA",
    phone: "+1 (555) 123-4567",
    email: "info@techsolutions.com",
    website: "https://news.microsoft.com/",
  },
  keyPersonnel: [
    { name: "John Smith", title: "CEO" },
    { name: "Jane Doe", title: "CTO" },
    // Add more key personnel as needed
  ],
  missionStatement: "Empowering innovation through cutting-edge technology solutions",
  productsOrServices: "Tech Solutions Inc. specializes in providing innovative solutions, including software development, cloud computing, data analytics, and more, to businesses of all sizes.",
  history: {
    foundingDate: "Founded in 1975",
    milestones: "Tech Solutions Inc. has been a leader in the technology industry, consistently achieving milestones in innovation and client success.",
  },
  sizeAndEmployees: "10,001+ employees",
  financials: "Confidential",
  partnerships: "Tech Solutions Inc. has established strategic partnerships and collaborations with industry leaders to enhance its offerings and reach.",
  awardsAndRecognitions: "Tech Solutions Inc. has received numerous awards and recognitions for its outstanding contributions to the technology sector.",
  targetMarket: "Businesses of all sizes seeking cutting-edge technology solutions",
  socialMediaProfiles: {
    facebook: "https://www.facebook.com/techsolutions",
    twitter: "https://twitter.com/techsolutions",
    linkedIn: "https://www.linkedin.com/company/techsolutions",
  },
  companyValuesAndCulture: "At Tech Solutions Inc., we foster a culture of collaboration, continuous learning, and diversity. Our team members are our greatest asset, and we prioritize their well-being, growth, and work-life balance. Join us in shaping the future of technology!",
  customerTestimonials: [
    {
      clientName: "ABC Corporation",
      feedback: "Tech Solutions Inc. has been an invaluable partner in our digital transformation journey. Their expertise and commitment to excellence have significantly contributed to our success."
    },
    {
      clientName: "XYZ Enterprises",
      feedback: "We chose Tech Solutions Inc. for their innovative solutions and they exceeded our expectations. Their team is responsive, knowledgeable, and always ready to tackle new challenges."
    }
  ],
  educationalPrograms: "Tech Solutions Inc. is committed to education and offers various programs and scholarships to support students pursuing careers in technology.",
  volunteeringOpportunities: "Our employees have the opportunity to participate in volunteering activities, contributing to the community and making a positive impact.",
  networkingEvents: "Tech Solutions Inc. organizes networking events to connect professionals, share knowledge, and foster collaboration within the industry.",
  trainingMaterials: "We provide comprehensive training materials and resources to our employees, ensuring their continuous growth and development.",
  professionalDevelopmentOpportunities: "Tech Solutions Inc. offers various opportunities for professional development, including training workshops aimed at educators and learning experiences such as internships and apprenticeships.",
};

export default function CompanyProfile() {
  return (
    <div className={cn("", twp().wrapper)}>

      {/* Company Headline */}
      <div className="grid grid-flow-col grid-cols-2 md:grid-cols-1 gap-x-6 m-10 bg-gray-300/10 p-8 rounded-2xl border-2 border-gray-200">
        <div className=" max-w-[30rem]">
          <div className="flex flex-row gap-x-8 mb-4">
            <Image src="/" alt="company-logo" width={100} height={50} className="rounded-full overflow-hidden" />
            <div>
              <div className="mt-4 text-2xl font-medium tracking-tight text-black sm:text-4xl">{data.companyName}</div>
              <div className="mt-2 flex flex-row items-center">
                <Icons.pin className="h-4 w-4 mr-2" />
                <div className="text-gray-500">{data.contactInformation.address}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="w-full flex flex-row justify-center items-center px-3 py-0.5 text-sm border font-medium text-gray-500 duration-200 rounded-sm">
              <Icons.user className="h-4 w-4 mr-2" />
              {data.sizeAndEmployees}
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
                        <p className="text-base text-black font-medium">{data.contactInformation.email}</p>
                        <p className="text-sm text-gray-500">Email</p>
                      </div>
                      <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                        <p className="text-base text-black font-medium">{data.contactInformation.phone}</p>
                        <p className="text-sm text-gray-500">Phone</p>
                      </div>
                      <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                        <p className="text-base text-black font-medium">{data.contactInformation.address}</p>
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
          <Button className="text-md mt-4 bg-primary-500 border-primary-500 hover:bg-primary-600 hover:border-primary-600 focus:ring focus:ring-primary-200">
            Visit Website
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Image src={data.coverImageSrc} alt="company-cover" width={300} height={200} className="rounded-xl" />
        </div>
      </div>

      {/* Company Details */}
      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-3xl font-semibold text-black">About Us</h2>
          <p className="mt-4 text-gray-600">{data.missionStatement}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Key Personnel</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.keyPersonnel.map((person, index) => (
              <div key={index} className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                <p className="text-base text-black font-medium">{person.name}</p>
                <p className="text-sm text-gray-500">{person.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Products and Services</h2>
          <p className="mt-4 text-gray-600">{data.productsOrServices}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">History</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
              <p className="text-base text-black font-medium">{data.history.foundingDate}</p>
              <p className="text-sm text-gray-500">Founded</p>
            </div>
            <div className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
              <p className="text-base text-black font-medium">{data.history.milestones}</p>
              <p className="text-sm text-gray-500">Milestones</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Size and Employees</h2>
          <div className="mt-4 flex flex-row items-center">
            <Icons.user className="h-4 w-4 mr-2" />
            <div className="text-gray-600">{data.sizeAndEmployees}</div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Financials</h2>
          <p className="mt-4 text-gray-600">{data.financials}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Partnerships</h2>
          <p className="mt-4 text-gray-600">{data.partnerships}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Awards and Recognitions</h2>
          <p className="mt-4 text-gray-600">{data.awardsAndRecognitions}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Target Market</h2>
          <p className="mt-4 text-gray-600">{data.targetMarket}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Social Media</h2>
          <div className="mt-4 flex flex-row gap-x-4">
            {data.socialMediaProfiles.facebook && (
              <a href={data.socialMediaProfiles.facebook} target="_blank" rel="noopener noreferrer">
                {/* <Icons.facebook className="h-6 w-6 text-blue-600" /> */}
              </a>
            )}
            {data.socialMediaProfiles.twitter && (
              <a href={data.socialMediaProfiles.twitter} target="_blank" rel="noopener noreferrer">
                <Icons.twitter className="h-6 w-6 text-blue-400" />
              </a>
            )}
            {data.socialMediaProfiles.linkedIn && (
              <a href={data.socialMediaProfiles.linkedIn} target="_blank" rel="noopener noreferrer">
                {/* <Icons.linkedin className="h-6 w-6 text-blue-800" /> */}
              </a>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Company Values and Culture</h2>
          <p className="mt-4 text-gray-600">{data.companyValuesAndCulture}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Customer Testimonials</h2>
          <div className="mt-4 space-y-4">
            {data.customerTestimonials.map((testimonial, index) => (
              <div key={index} className="p-4 bg-gray-300/10 rounded-xl border-2 border-gray-200">
                <p className="text-base text-black font-medium">{testimonial.clientName}</p>
                <p className="text-sm text-gray-500">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Educational Programs</h2>
          <p className="mt-4 text-gray-600">{data.educationalPrograms}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Volunteering Opportunities</h2>
          <p className="mt-4 text-gray-600">{data.volunteeringOpportunities}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Networking Events</h2>
          <p className="mt-4 text-gray-600">{data.networkingEvents}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Training Materials</h2>
          <p className="mt-4 text-gray-600">{data.trainingMaterials}</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black">Professional Development Opportunities</h2>
          <p className="mt-4 text-gray-600">{data.professionalDevelopmentOpportunities}</p>
        </section>
      </div>
    </div>
  );
}
