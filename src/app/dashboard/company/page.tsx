"use client"

import { twp, cn } from "@/server/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/app/_components/ui/button";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/app/_components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";
import { Separator } from "@/app/_components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



// Define the new company data
const newData = {
  companyName: "Innovate Tech",
  id: "1234",
  avatar: "/innovate_tech_logo.png",
  status: "Active",
  typeOfOrganization: "For-Profit",
  industryOrSector: "IT",
  sizeEmployees: "5000+",


  historyBackground: "Founded in 2010, Innovate Tech has been a pioneer in delivering cutting-edge technology solutions.",
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
    <div className="">
      <div>
        <Tabs defaultValue="model" className="w-full my-4">
          <TabsList className="w-full">
            <TabsTrigger value="model" className="w-full">Model View</TabsTrigger>
            <TabsTrigger value="pdf" className="w-full">PDF View</TabsTrigger>
          </TabsList>
          <TabsContent value="pdf">
            <Link href="" className={cn(buttonVariants({ variant: "outline" }), "border-dashed border-teal-300 hover:border-solid border-2 py-10 font-semibold tracking-widest w-full text-2xl uppercase")}>
              Generate Pdf
            </Link>
          </TabsContent>
        </Tabs>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="mb-4">
            <div className="flex flex-row ">
              <Avatar>
                <AvatarImage src={newData.avatar} />
                <AvatarFallback className="uppercase">{newData.companyName.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <h2 className="ml-4 text-5xl font-bold tracking-tight flex flex-col mb-4">
                <span className="text-primary/80 text-sm uppercase tracking-widest">Company Profile</span>
                {newData.companyName}
              </h2>
            </div>
            <Separator />
          </CardTitle>
          <CardContent className="grid grid-cols-5 gap-x-2 w-full mt-10 ">
            <Card className="px-4 py-2">
              <div className="flex flex-col">
                <span className=" text-lg font-semibold">{newData.id}</span>
                <span className="text-teal-400/80 text-xs uppercase tracking-wide">ID</span>
              </div>
            </Card>
            <Card className="px-4 py-2">
              <div className="flex flex-col">
                <span className=" text-lg font-semibold">{newData.status}</span>
                <span className="text-teal-400/80 text-xs uppercase tracking-wide">Status</span>
              </div>
            </Card>
            <Card className="px-4 py-2">
              <div className="flex flex-col">
                <span className=" text-lg font-semibold">{newData.industryOrSector}</span>
                <span className="text-teal-400/80 text-xs  uppercase tracking-wide">Industry</span>
              </div>
            </Card>
            <Card className="px-4 py-2 ">
              <div className="flex flex-col">
                <span className=" text-lg font-semibold">{newData.typeOfOrganization}</span>
                <span className="text-teal-400/80 text-xs uppercase tracking-wide">Type</span>
              </div>
            </Card>
            <Card className="px-4 py-2">
              <div className="flex flex-col">
                <span className=" text-lg font-semibold">{newData.sizeEmployees}</span>
                <span className="text-teal-400/80 text-xs uppercase tracking-wide">Size</span>
              </div>
            </Card>

            <Separator />

          </CardContent>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col text-base mb-4">
                  <span className="font-semibold text-sm text-teal-400/80 uppercase">History Background</span>
                  {newData.historyBackground}
                </div>
                <div className="flex flex-col text-base mb-4">
                  <span className="font-semibold text-sm text-teal-400/80 uppercase">Mission Statement & Vision</span>
                  {newData.missionStatementVision}
                </div>
                <div className="flex flex-col text-base mb-4">
                  <span className="font-semibold text-sm text-teal-400/80 uppercase">Target Market & Customer Base</span>
                  {newData.targetMarketCustomerBase}
                </div>
                <div className="flex flex-col text-base mb-4">
                  <span className="font-semibold text-sm text-teal-400/80 uppercase">Tags</span>
                  <div className="gap-x-2 flex flex-row mt-2">
                    {newData.tags.map((tag, index) => (
                      <Badge key={index} className="mr-2">{tag}</Badge>
                    ))}
                  </div>

                </div>
              </CardContent>
            </Card>
          </CardContent>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Contact Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col text-base mb-4">
                  <div className="flex flex-row gap-x-1 justify0center items-center mb-1">
                    <Icons.map className="w-4 h-4 text-teal-400" />
                    <span className="font-semibold text-sm text-teal-400/80 uppercase">Address</span>
                  </div>
                  {newData.companyContactInformation.address}
                </div>
                <div className="flex flex-col text-base mb-4">
                  <div className="flex flex-row gap-x-1 justify0center items-center mb-1">
                    <Icons.phone className="w-4 h-4 text-teal-400" />
                    <span className="font-semibold text-sm text-teal-400/80 uppercase">Phone Number</span>
                  </div>
                  {newData.companyContactInformation.phoneNumber}
                </div>
                <div className="flex flex-col text-base mb-4">
                  <div className="flex flex-row gap-x-1 justify0center items-center mb-1">
                    <Icons.Mail className="w-4 h-4 text-teal-400" />
                    <span className="font-semibold text-sm text-teal-400/80 uppercase">Email</span>
                  </div>
                  {newData.companyContactInformation.email}
                </div>
                <div className="flex flex-col text-base mb-4">
                  <div className="flex flex-row gap-x-1 justify0center items-center mb-1">
                    <Icons.globe className="w-4 h-4 text-teal-400" />
                    <span className="font-semibold text-sm text-teal-400/80 uppercase">Website</span>
                  </div>
                  <a href={newData.companyContactInformation.website} target="_blank" className="text-primary/80 hover:text-primary">{newData.companyContactInformation.website}</a>
                </div>
                <div className="flex flex-col text-base mb-4">
                  <div className="flex flex-row gap-x-1 justify0center items-center mb-1">
                    <Icons.building className="w-4 h-4 text-teal-400" />
                    <span className="font-semibold text-sm text-teal-400/80 uppercase">District</span>
                  </div>
                  {newData.companyContactInformation.district}
                </div>

              </CardContent>
            </Card>
          </CardContent>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Key Personnel</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-x-2">
                {newData.keyPersonnel.map((person, index) => (
                  <Card key={index} className="px-4 py-2 flex flex-row gap-x-2 items-center ">
                    <Avatar>
                      <AvatarImage src={person.avatarImage} />
                      <AvatarFallback className="uppercase">{person.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className=" text-lg font-semibold">{person.name}</span>
                      <div>
                        <span className="text-teal-400/80 text-xs uppercase tracking-wide">{person.position}</span>
                        <Dialog>
                          <DialogTrigger className={cn("ml-2 py-1 px-1 border border-secondary text-xs uppercase rounded-sm hover:bg-secondary")}>
                            View Contact
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{person.name} Contact Info</DialogTitle>
                              <DialogDescription>
                                <div className="flex flex-col text-base mb-4">
                                  <span className="font-semibold text-sm text-teal-400/80 uppercase">Phone Number</span>
                                  {person.phoneNumber}
                                </div>
                                <div className="flex flex-col text-base mb-4">
                                  <span className="font-semibold text-sm text-teal-400/80 uppercase">Email</span>
                                  {person.email}
                                </div>
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </CardContent>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Product Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col text-base mb-4">
                  <span className="font-semibold text-sm text-teal-400/80 uppercase">Main Product</span>
                  {newData.mainProduct}
                </div>
                <div className="flex flex-col text-base mb-4">
                  <span className="font-semibold text-sm text-teal-400/80 uppercase">Description of Products</span>
                  {newData.descriptionOfProducts}
                </div>
                <div className="flex flex-col text-base mb-4">
                  <span className="font-semibold text-sm text-teal-400/80 uppercase">List of Products & Services</span>
                  <div className="gap-x-2 flex flex-row mt-2">
                    {newData.listOfProductsServices.map((product, index) => (
                      <Badge key={index} className="mr-2">{product}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Financial Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col text-base mb-4">
                  <span className="font-semibold text-sm text-teal-400/80 uppercase">Revenue Model</span>
                  {newData.financialsRevenueModel}
                </div>

              </CardContent>
            </Card>
          </CardContent>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Customer Testimonials</CardTitle>
              </CardHeader>
              <CardContent>
                {newData.customerTestimonials.map((testimonial, index) => (
                  <div key={index} className="flex flex-col text-base mb-4 border p-2 border-dashed border-secondary rounded-xl">
                    <span className="font-semibold text-sm text-teal-400/80 uppercase">{testimonial.clientName}</span>
                    {testimonial.feedback}
                  </div>
                ))}
              </CardContent>
            </Card>
          </CardContent>


          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Social Media</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-x-2">
                <div className="flex flex-col justify-center items-center border border-secondary rounded-xl p-2">
                  <div className="flex flex-row text-base">
                    <Icons.facebook className="w-10 h-10 text-teal-400" />
                    <div className="flex flex-col ml-4">
                      <span className="font-semibold text-sm text-teal-400/80 uppercase">Facebook</span>
                      <a href={newData.socialMediaProfiles.facebook} target="_blank" className="text-primary/80 hover:text-primary">Facebook</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center border border-secondary rounded-xl p-2">
                  <div className="flex flex-row text-base ">
                    <Icons.twitter className="w-10 h-10 text-teal-400" />
                    <div className="flex flex-col ml-4">
                      <span className="font-semibold text-sm text-teal-400/80 uppercase">Twitter</span>
                      <a href={newData.socialMediaProfiles.twitter} target="_blank" className="text-primary/80 hover:text-primary">Twitter</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center border border-secondary rounded-xl p-2">
                  <div className="flex flex-row text-base">
                    <Icons.linkedin className="w-10 h-10 text-teal-400" />
                    <div className="flex flex-col ml-4">
                      <span className="font-semibold text-sm text-teal-400/80 uppercase">LinkedIn</span>
                      <a href={newData.socialMediaProfiles.linkedin} target="_blank" className="text-primary/80 hover:text-primary">LinkedIn</a>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </CardContent>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Company Values & Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col text-base mb-4">
                  {newData.companyValuesCulture}
                </div>
              </CardContent>
            </Card>
          </CardContent>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Award Info</CardTitle>
              </CardHeader>
              <CardContent>
                {newData.awardsRecognitions.map((award, index) => (
                  <div key={index} className="flex flex-col text-base mb-4">
                    <span className="font-semibold text-sm text-teal-400/80 uppercase">{award.title}</span>
                    {award.description}
                  </div>
                ))}
              </CardContent>
            </Card>
          </CardContent>

        </CardHeader>
      </Card>


    </div>
  );
}
