"use client";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import { cn } from "@/server/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/app/_components/icons";
import Link from "next/link";
import { buttonVariants } from "@/app/_components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/app/_components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import { Separator } from "@/app/_components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const newData = {
  companyName: "Innovate Tech",
  avatar: "/innovate_tech_logo.png",
  status: "Active",
  typeOfOrganization: "For-Profit",
  industryOrSector: "IT",
  sizeEmployees: "5000+",
  historyBackground:
    "Founded in 2010, Innovate Tech has been a pioneer in delivering cutting-edge technology solutions.",
  missionStatementVision:
    "Empowering businesses through innovative technology solutions",
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
  descriptionOfProducts:
    "Innovate Tech provides a wide range of technology solutions, including software development, cloud services, and digital transformation.",
  listOfProductsServices: [
    "Custom Software Development",
    "Cloud Computing Solutions",
    "Digital Transformation Services",
    "IT Consulting",
  ],
  financialsRevenueModel:
    "Innovate Tech generates revenue through a combination of project-based contracts and recurring service subscriptions.",
  socialMediaProfiles: {
    facebook: "https://www.facebook.com/innovatetech",
    twitter: "https://www.twitter.com/innovatetech",
    linkedin: "https://www.linkedin.com/company/innovatetech",
  },
  companyValuesCulture:
    "At Innovate Tech, we value innovation, collaboration, and diversity. Our culture fosters a dynamic and inclusive work environment.",
  awardsRecognitions: [
    {
      title: "Innovation Award 2022",
      description:
        "Recognized for outstanding innovation in the technology sector.",
    },
    {
      title: "Tech Excellence Award",
      description:
        "Received for excellence in providing tech solutions to clients.",
    },
  ],
  customerTestimonials: [
    {
      clientName: "XYZ Innovations",
      feedback:
        "Innovate Tech has been instrumental in transforming our business. Their solutions are innovative and have significantly enhanced our operations.",
    },
    {
      clientName: "Tech Start",
      feedback:
        "The expertise and dedication of the Innovate Tech team are unmatched. They understand our unique challenges and deliver tailored solutions.",
    },
  ],
};

export default function CompanyProfile() {
  return (
    <div className="">
      <div>
        <Tabs defaultValue="model" className="my-4 w-full">
          <TabsList className="w-full">
            <TabsTrigger value="model" className="w-full">
              Model View
            </TabsTrigger>
            <TabsTrigger value="email" className="w-full">
              Email Send
            </TabsTrigger>
          </TabsList>
          <TabsContent value="model">
            <Card>
              <CardHeader>
                <CardTitle className="mb-4">
                  <div className="flex flex-row ">
                    <Avatar>
                      <AvatarImage src={newData.avatar} />
                      <AvatarFallback className="uppercase">
                        {newData.companyName.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <h2 className="mb-4 ml-4 flex flex-col text-5xl font-bold tracking-tight">
                      <span className="text-sm uppercase tracking-widest text-primary/80">
                        Company Profile
                      </span>
                      {newData.companyName}
                    </h2>
                  </div>
                  <Separator />
                </CardTitle>
                <CardContent className="mt-10 grid w-full grid-cols-5 gap-x-2 ">
                  <Card className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className=" text-lg font-semibold">1982</span>
                      <span className="text-xs uppercase tracking-wide text-teal-500/80">
                        ID
                      </span>
                    </div>
                  </Card>
                  <Card className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className=" text-lg font-semibold">
                        {newData.status}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-teal-500/80">
                        Status
                      </span>
                    </div>
                  </Card>
                  <Card className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className=" text-lg font-semibold">
                        {newData.industryOrSector}
                      </span>
                      <span className="text-xs uppercase  tracking-wide text-teal-500/80">
                        Industry
                      </span>
                    </div>
                  </Card>
                  <Card className="px-4 py-2 ">
                    <div className="flex flex-col">
                      <span className=" text-lg font-semibold">
                        {newData.typeOfOrganization}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-teal-500/80">
                        Type
                      </span>
                    </div>
                  </Card>
                  <Card className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className=" text-lg font-semibold">
                        {newData.sizeEmployees}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-teal-500/80">
                        Size
                      </span>
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
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-teal-500/80">
                          History Background
                        </span>
                        {newData.historyBackground}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-teal-500/80">
                          Mission Statement & Vision
                        </span>
                        {newData.missionStatementVision}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-teal-500/80">
                          Target Market & Customer Base
                        </span>
                        {newData.targetMarketCustomerBase}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-teal-500/80">
                          Tags
                        </span>
                        <div className="mt-2 flex flex-row gap-x-2">
                          {newData.tags.map((tag, index) => (
                            <Badge key={index} className="mr-2">
                              {tag}
                            </Badge>
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
                      <div className="mb-4 flex flex-col text-base">
                        <div className="justify0center mb-1 flex flex-row items-center gap-x-1">
                          <Icons.map className="h-4 w-4 text-teal-500" />
                          <span className="text-sm font-semibold uppercase text-teal-500/80">
                            Address
                          </span>
                        </div>
                        {newData.companyContactInformation.address}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <div className="justify0center mb-1 flex flex-row items-center gap-x-1">
                          <Icons.map className="h-4 w-4 text-teal-500" />
                          <span className="text-sm font-semibold uppercase text-teal-500/80">
                            Location
                          </span>
                        </div>
                        <iframe
                          src="https://www.google.com/maps/embed/v1/place?q=San+Francisco,+CA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                          width="600"
                          height="450"
                          style={{ border: 0 }}
                          aria-hidden="false"
                        />
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <div className="justify0center mb-1 flex flex-row items-center gap-x-1">
                          <Icons.phone className="h-4 w-4 text-teal-500" />
                          <span className="text-sm font-semibold uppercase text-teal-500/80">
                            Phone Number
                          </span>
                        </div>
                        {newData.companyContactInformation.phoneNumber}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <div className="justify0center mb-1 flex flex-row items-center gap-x-1">
                          <Icons.Mail className="h-4 w-4 text-teal-500" />
                          <span className="text-sm font-semibold uppercase text-teal-500/80">
                            Email
                          </span>
                        </div>
                        {newData.companyContactInformation.email}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <div className="justify0center mb-1 flex flex-row items-center gap-x-1">
                          <Icons.globe className="h-4 w-4 text-teal-500" />
                          <span className="text-sm font-semibold uppercase text-teal-500/80">
                            Website
                          </span>
                        </div>
                        <a
                          href={newData.companyContactInformation.website}
                          target="_blank"
                          className="text-primary/80 hover:text-primary"
                        >
                          {newData.companyContactInformation.website}
                          <embed src="https://sparktup.vercel.app/" style={{width: "500px", height: "300px"}}></embed>
                        </a>
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <div className="justify0center mb-1 flex flex-row items-center gap-x-1">
                          <Icons.building className="h-4 w-4 text-teal-500" />
                          <span className="text-sm font-semibold uppercase text-teal-500/80">
                            District
                          </span>
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
                        <Card
                          key={index}
                          className="flex flex-row items-center gap-x-2 px-4 py-2 "
                        >
                          <Avatar>
                            <AvatarImage src={person.avatarImage} />
                            <AvatarFallback className="uppercase">
                              {person.name.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className=" text-lg font-semibold">
                              {person.name}
                            </span>
                            <div>
                              <span className="text-xs uppercase tracking-wide text-teal-500/80">
                                {person.position}
                              </span>
                              <Dialog>
                                <DialogTrigger
                                  className={cn(
                                    "ml-2 rounded-sm border border-secondary px-1 py-1 text-xs uppercase hover:bg-secondary",
                                  )}
                                >
                                  View Contact
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>
                                      {person.name} Contact Info
                                    </DialogTitle>
                                    <DialogDescription>
                                      <div className="mb-4 flex flex-col text-base">
                                        <span className="text-sm font-semibold uppercase text-teal-500/80">
                                          Phone Number
                                        </span>
                                        {person.phoneNumber}
                                      </div>
                                      <div className="mb-4 flex flex-col text-base">
                                        <span className="text-sm font-semibold uppercase text-teal-500/80">
                                          Email
                                        </span>
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
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-teal-500/80">
                          Main Product
                        </span>
                        {newData.mainProduct}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-teal-500/80">
                          Description of Products
                        </span>
                        {newData.descriptionOfProducts}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-teal-500/80">
                          List of Products & Services
                        </span>
                        <div className="mt-2 flex flex-row gap-x-2">
                          {newData.listOfProductsServices.map(
                            (product, index) => (
                              <Badge key={index} className="mr-2">
                                {product}
                              </Badge>
                            ),
                          )}
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
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-teal-500/80">
                          Revenue Model
                        </span>
                        {newData.financialsRevenueModel}
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
                <CardContent>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-3xl">
                        Customer Testimonials
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {newData.customerTestimonials.map(
                        (testimonial, index) => (
                          <div
                            key={index}
                            className="mb-4 flex flex-col rounded-xl border border-dashed border-secondary p-2 text-base"
                          >
                            <span className="text-sm font-semibold uppercase text-teal-500/80">
                              {testimonial.clientName}
                            </span>
                            {testimonial.feedback}
                          </div>
                        ),
                      )}
                    </CardContent>
                  </Card>
                </CardContent>

                <CardContent>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-3xl">Social Media</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-3 gap-x-2">
                      <div className="flex flex-col items-center justify-center rounded-xl border border-secondary p-2">
                        <div className="flex flex-row text-base">
                          <Icons.facebook className="h-10 w-10 text-teal-500" />
                          <div className="ml-4 flex flex-col">
                            <span className="text-sm font-semibold uppercase text-teal-500/80">
                              Facebook
                            </span>
                            <a
                              href={newData.socialMediaProfiles.facebook}
                              target="_blank"
                              className="text-primary/80 hover:text-primary"
                            >
                              Facebook
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-xl border border-secondary p-2">
                        <div className="flex flex-row text-base ">
                          <Icons.twitter className="h-10 w-10 text-teal-500" />
                          <div className="ml-4 flex flex-col">
                            <span className="text-sm font-semibold uppercase text-teal-500/80">
                              Twitter
                            </span>
                            <a
                              href={newData.socialMediaProfiles.twitter}
                              target="_blank"
                              className="text-primary/80 hover:text-primary"
                            >
                              Twitter
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-xl border border-secondary p-2">
                        <div className="flex flex-row text-base">
                          <Icons.linkedin className="h-10 w-10 text-teal-500" />
                          <div className="ml-4 flex flex-col">
                            <span className="text-sm font-semibold uppercase text-teal-500/80">
                              LinkedIn
                            </span>
                            <a
                              href={newData.socialMediaProfiles.linkedin}
                              target="_blank"
                              className="text-primary/80 hover:text-primary"
                            >
                              LinkedIn
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
                <CardContent>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-3xl">
                        Company Values & Culture
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 flex flex-col text-base">
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
                        <div
                          key={index}
                          className="mb-4 flex flex-col text-base"
                        >
                          <span className="text-sm font-semibold uppercase text-teal-500/80">
                            {award.title}
                          </span>
                          {award.description}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </CardContent>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="email">
            <Link
              href=""
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-5 w-full border-2 border-dashed border-teal-500 py-10 text-2xl font-semibold uppercase tracking-widest hover:border-solid",
              )}
            >
              Send Email
            </Link>

            <div className="mt-10 bg-primary p-10">
              <Container className=" mx-auto my-[40px] w-[1000px] rounded border border-solid border-[#eaeaea] bg-white p-10 font-sans">
                <Text className="text-[14px] leading-[24px] text-black">
                  Hello Team,
                </Text>
                <Text className="text-[14px] leading-[24px] text-black">
                  You have received a company report:
                </Text>

                {/* Company Overview Section */}
                <Text className="mt-6 text-2xl font-extrabold leading-[24px] text-black">
                  Company Overview:
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Company Name:{" "}
                  <span className="font-base text-black">
                    {newData.companyName}
                  </span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Company ID:{" "}
                  <span className="font-base text-black">{newData.id}</span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Status:{" "}
                  <span className="font-base text-black">{newData.status}</span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Type of Organization:{" "}
                  <span className="font-base text-black">
                    {newData.typeOfOrganization}
                  </span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Industry or Sector:{" "}
                  <span className="font-base text-black">
                    {newData.industryOrSector}
                  </span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Size of Employees:{" "}
                  <span className="font-base text-black">
                    {newData.sizeEmployees}
                  </span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  History & Background:{" "}
                  <span className="font-base text-black">
                    {newData.historyBackground}
                  </span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Mission Statement & Vision:{" "}
                  <span className="font-base text-black">
                    {newData.missionStatementVision}
                  </span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Target Market & Customer Base:{" "}
                  <span className="font-base text-black">
                    {newData.targetMarketCustomerBase}
                  </span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Tags:{" "}
                  <span className="font-base text-black">
                    {newData.tags.join(", ")}
                  </span>
                </Text>

                {/* Company Contact Information Section */}
                <Text className="mt-6 text-2xl font-extrabold leading-[24px] text-black">
                  Company Contact Information:
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Address:{" "}
                  <span className="font-base text-black">
                    {newData.companyContactInformation.address}
                  </span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Phone Number:{" "}
                  <span className="font-base text-black">
                    {newData.companyContactInformation.phoneNumber}
                  </span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Email:{" "}
                  <span className="font-base text-black">
                    {newData.companyContactInformation.email}
                  </span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Website:{" "}
                  <span className="font-base text-black">
                    {newData.companyContactInformation.website}
                  </span>
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  District:{" "}
                  <span className="font-base text-black">
                    {newData.companyContactInformation.district}
                  </span>
                </Text>

                {/* Product Information Section */}
                <Text className="mt-6 text-2xl font-extrabold leading-[24px] text-black">
                  Product Information:
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Main Product:
                </Text>
                <Text className="text-[14px] leading-[24px] text-black">
                  {newData.mainProduct}
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Description of Products:
                </Text>
                <Text className="text-[14px] leading-[24px] text-black">
                  {newData.descriptionOfProducts}
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  List of Products & Services:
                </Text>
                <Text className="text-[14px] leading-[24px] text-black">
                  {newData.listOfProductsServices.join(", ")}
                </Text>

                {/* Financial Information Section */}
                <Text className="mt-6 text-2xl font-extrabold  leading-[24px] text-black">
                  Financial Information:
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Revenue Model:
                </Text>
                <Text className="text-[14px] leading-[24px] text-black">
                  {newData.financialsRevenueModel}
                </Text>

                {/* Customer Testimonials Section */}
                <Text className="mt-6 text-2xl font-extrabold  leading-[24px] text-black">
                  Customer Testimonials:
                </Text>
                {newData.customerTestimonials.map((testimonial, index) => (
                  <React.Fragment key={index}>
                    <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                      {testimonial.clientName}:
                    </Text>
                    <Text className="text-[14px] leading-[24px] text-black">
                      {testimonial.feedback}
                    </Text>
                  </React.Fragment>
                ))}

                {/* Social Media Section */}
                <Text className="mt-6 text-2xl font-extrabold  leading-[24px] text-black">
                  Social Media:
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Facebook:
                </Text>
                <Text className="text-[14px] leading-[24px] text-black">
                  {newData.socialMediaProfiles.facebook}
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Twitter:
                </Text>
                <Text className="text-[14px] leading-[24px] text-black">
                  {newData.socialMediaProfiles.twitter}
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  LinkedIn:
                </Text>
                <Text className="text-[14px] leading-[24px] text-black">
                  {newData.socialMediaProfiles.linkedin}
                </Text>

                {/* Company Values & Culture Section */}
                <Text className="mt-6 text-2xl font-extrabold  leading-[24px] text-black">
                  Company Values & Culture:
                </Text>
                <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                  Values & Culture:
                </Text>
                <Text className="text-[14px] leading-[24px] text-black">
                  {newData.companyValuesCulture}
                </Text>

                {/* Awards Section */}
                <Text className="mt-6 text-2xl font-extrabold  leading-[24px] text-black">
                  Awards:
                </Text>
                {newData.awardsRecognitions.map((award, index) => (
                  <React.Fragment key={index}>
                    <Text className="text-[14px] font-bold leading-[24px] text-teal-600">
                      {award.title}:
                    </Text>
                    <Text className="text-[14px] leading-[24px] text-black">
                      {award.description}
                    </Text>
                  </React.Fragment>
                ))}
              </Container>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

