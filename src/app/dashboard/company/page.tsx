"use client";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Hr,
  Section,
  Row,
  Column,
  Img,
  Heading,
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
import { useState } from "react";
import { useToast } from "@/app/_components/ui/use-toast";
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
  id: "3422",
  name: "Innovate Tech",
  avatar: "/",
  status: "todo",
  partner: "checkmark",
  typeOfOrganization: "For-Profit",
  industry: "IT",
  size: "5000+",
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
  product: "Tech Solutions",
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
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function sendEmail() {
    setLoading(true);
    try {
      const response = await fetch("/api/send2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully.",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send the message. Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="ml-0 sm:ml-10">
      <div>
        <Tabs
          defaultValue="model"
          className="my-4 flex w-full flex-col items-center justify-center"
        >
          <TabsList className="w-fill mx-6 flex items-center justify-center sm:w-full">
            <TabsTrigger value="model" className="w-full">
              Model View
            </TabsTrigger>
            <TabsTrigger value="email" className="w-full">
              Email Send
            </TabsTrigger>
          </TabsList>
          <TabsContent value="model">
            <Card className="p-2">
              <CardHeader>
                <CardTitle className="mb-4">
                  <div className="flex flex-row ">
                    <Avatar>
                      <AvatarImage src={newData.avatar} />
                      <AvatarFallback className="uppercase">
                        {newData.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <h2 className="mb-4 ml-4 flex flex-col text-5xl font-bold tracking-tight">
                      <span className="text-sm uppercase tracking-widest text-primary/80">
                        Company Profile
                      </span>
                      {newData.name}
                    </h2>
                  </div>
                  <Separator />
                </CardTitle>
                <CardContent className="mt-10 grid w-full grid-cols-2 gap-x-2 px-0 py-2 sm:grid-cols-5  sm:px-6 sm:py-6 ">
                  <Card className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className=" text-lg font-semibold">
                        {newData.id}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-purple-500/80">
                        ID
                      </span>
                    </div>
                  </Card>
                  <Card className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className=" text-lg font-semibold">
                        {newData.status}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-purple-500/80">
                        Status
                      </span>
                    </div>
                  </Card>
                  <Card className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className=" text-lg font-semibold">
                        {newData.industry}
                      </span>
                      <span className="text-xs uppercase  tracking-wide text-purple-500/80">
                        Industry
                      </span>
                    </div>
                  </Card>
                  <Card className="px-4 py-2 ">
                    <div className="flex flex-col">
                      <span className=" text-lg font-semibold">
                        {newData.typeOfOrganization}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-purple-500/80">
                        Type
                      </span>
                    </div>
                  </Card>
                  <Card className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className=" text-lg font-semibold">
                        {newData.size}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-purple-500/80">
                        Size
                      </span>
                    </div>
                  </Card>

                  <Separator />
                </CardContent>
                <CardContent className="px-0 py-2 sm:px-6 sm:py-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-3xl">Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-purple-500/80">
                          History Background
                        </span>
                        {newData.historyBackground}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-purple-500/80">
                          Mission Statement & Vision
                        </span>
                        {newData.missionStatementVision}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-purple-500/80">
                          Target Market & Customer Base
                        </span>
                        {newData.targetMarketCustomerBase}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-purple-500/80">
                          Tags
                        </span>
                        <div className="mt-2 flex flex-col  gap-x-2 sm:flex-row">
                          {newData.tags.map((tag, index) => (
                            <Badge key={index} className="mr-2">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-purple-500/80">
                          Partner (Yes/No)
                        </span>
                        {newData.partner === "checkmark" ? "Yes" : "No"}
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
                <CardContent className="px-0 py-2 sm:px-6 sm:py-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-3xl">Contact Info</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 flex flex-col text-base">
                        <div className="justify0center mb-1 flex flex-row items-center gap-x-1">
                          <Icons.map className="h-4 w-4 text-purple-500" />
                          <span className="text-sm font-semibold uppercase text-purple-500/80">
                            Address
                          </span>
                        </div>
                        {newData.companyContactInformation.address}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <div className="justify0center mb-1 flex flex-row items-center gap-x-1">
                          <Icons.map className="h-4 w-4 text-purple-500" />
                          <span className="text-sm font-semibold uppercase text-purple-500/80">
                            Location
                          </span>
                        </div>
                        <iframe
                          className="hidden sm:block"
                          src="https://www.google.com/maps/embed/v1/place?q=San+Francisco,+CA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                          width="600"
                          height="450"
                          style={{ border: 0 }}
                          aria-hidden="false"
                        />
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <div className="justify0center mb-1 flex flex-row items-center gap-x-1">
                          <Icons.phone className="h-4 w-4 text-purple-500" />
                          <span className="text-sm font-semibold uppercase text-purple-500/80">
                            Phone Number
                          </span>
                        </div>
                        {newData.companyContactInformation.phoneNumber}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <div className="justify0center mb-1 flex flex-row items-center gap-x-1">
                          <Icons.Mail className="h-4 w-4 text-purple-500" />
                          <span className="text-sm font-semibold uppercase text-purple-500/80">
                            Email
                          </span>
                        </div>
                        {newData.companyContactInformation.email}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <div className="justify0center mb-1 flex flex-row items-center gap-x-1">
                          <Icons.globe className="h-4 w-4 text-purple-500" />
                          <span className="text-sm font-semibold uppercase text-purple-500/80">
                            Website
                          </span>
                        </div>
                        <a
                          href={newData.companyContactInformation.website}
                          target="_blank"
                          className="text-primary/80 hover:text-primary"
                        >
                          {newData.companyContactInformation.website}
                        </a>
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <div className="justify0center mb-1 flex flex-row items-center gap-x-1">
                          <Icons.building className="h-4 w-4 text-purple-500" />
                          <span className="text-sm font-semibold uppercase text-purple-500/80">
                            District
                          </span>
                        </div>
                        {newData.companyContactInformation.district}
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
                <CardContent className="px-0 py-2 sm:px-6 sm:py-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-3xl">Key Personnel</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 gap-x-2 sm:grid-cols-3">
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
                              <span className="text-xs uppercase tracking-wide text-purple-500/80">
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
                                        <span className="text-sm font-semibold uppercase text-purple-500/80">
                                          Phone Number
                                        </span>
                                        {person.phoneNumber}
                                      </div>
                                      <div className="mb-4 flex flex-col text-base">
                                        <span className="text-sm font-semibold uppercase text-purple-500/80">
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
                <CardContent className="px-0 py-2 sm:px-6 sm:py-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-3xl">Product Info</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-purple-500/80">
                          Main Product
                        </span>
                        {newData.product}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-purple-500/80">
                          Description of Products
                        </span>
                        {newData.descriptionOfProducts}
                      </div>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-purple-500/80">
                          List of Products & Services
                        </span>
                        <div className="mt-2 flex flex-col gap-x-2 sm:flex-row">
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
                <CardContent className="px-0 py-2 sm:px-6 sm:py-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-3xl">Financial Info</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 flex flex-col text-base">
                        <span className="text-sm font-semibold uppercase text-purple-500/80">
                          Revenue Model
                        </span>
                        {newData.financialsRevenueModel}
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
                <CardContent className="px-0 py-2 sm:px-6 sm:py-6">
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
                            <span className="text-sm font-semibold uppercase text-purple-500/80">
                              {testimonial.clientName}
                            </span>
                            {testimonial.feedback}
                          </div>
                        ),
                      )}
                    </CardContent>
                  </Card>
                </CardContent>

                <CardContent className="px-0 py-2 sm:px-6 sm:py-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-3xl">Social Media</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 gap-x-2 sm:grid-cols-3">
                      <div className="flex flex-col items-center justify-center rounded-xl border border-secondary p-2">
                        <div className="flex flex-row text-base">
                          <Icons.facebook className="h-10 w-10 text-purple-500" />
                          <div className="ml-4 flex flex-col">
                            <span className="text-sm font-semibold uppercase text-purple-500/80">
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
                          <Icons.twitter className="h-10 w-10 text-purple-500" />
                          <div className="ml-4 flex flex-col">
                            <span className="text-sm font-semibold uppercase text-purple-500/80">
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
                          <Icons.linkedin className="h-10 w-10 text-purple-500" />
                          <div className="ml-4 flex flex-col">
                            <span className="text-sm font-semibold uppercase text-purple-500/80">
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
                <CardContent className="px-0 py-2 sm:px-6 sm:py-6">
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
                <CardContent className="px-0 py-2 sm:px-6 sm:py-6">
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
                          <span className="text-sm font-semibold uppercase text-purple-500/80">
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
          <TabsContent value="email" className="bg-background">
            <button
              onClick={sendEmail}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-5 w-full border-2 border-dashed border-purple-500 py-10 text-2xl font-semibold uppercase tracking-widest hover:border-solid",
              )}
            >
              Send Email
            </button>

            <div className="mt-10 bg-background p-4 sm:p-10">
              <Container className="mx-auto my-8 max-w-2xl rounded-lg  border-gray-200 bg-background p-2 sm:p-6">
                <div className="mx-10">
                  <Heading className="text-2xl font-bold uppercase">
                    Company Profile
                  </Heading>
                  <Text className="text-xl font-semibold">Innovate Tech</Text>

                  <Section className="mt-6">
                    <Row>
                      <Column className="w-1/5 px-2">
                        <Text className="text-lg font-semibold">3422</Text>
                        <Text className="text-xs uppercase tracking-wide text-purple-500">
                          ID
                        </Text>
                      </Column>
                      <Column className="w-1/5 px-2">
                        <Text className="text-lg font-semibold">todo</Text>
                        <Text className="text-xs uppercase tracking-wide text-purple-500">
                          Status
                        </Text>
                      </Column>
                      <Column className="w-1/5 px-2">
                        <Text className="text-lg font-semibold">IT</Text>
                        <Text className="text-xs uppercase tracking-wide text-purple-500">
                          Industry
                        </Text>
                      </Column>
                      <Column className="w-1/5 px-2">
                        <Text className="text-lg font-semibold">
                          For-Profit
                        </Text>
                        <Text className="text-xs uppercase tracking-wide text-purple-500">
                          Type
                        </Text>
                      </Column>
                      <Column className="w-1/5 px-2">
                        <Text className="text-lg font-semibold">5000+</Text>
                        <Text className="text-xs uppercase tracking-wide text-purple-500">
                          Size
                        </Text>
                      </Column>
                    </Row>
                  </Section>

                  <Hr className="my-6 border-gray-200" />

                  <Section>
                    <Heading className="text-2xl font-bold">Overview</Heading>
                    <Text className="mt-2 text-sm font-semibold uppercase text-purple-500">
                      History Background
                    </Text>
                    <Text>{newData.historyBackground}</Text>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      Mission Statement &amp; Vision
                    </Text>
                    <Text>{newData.missionStatementVision}</Text>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      Target Market &amp; Customer Base
                    </Text>
                    <Text>{newData.targetMarketCustomerBase}</Text>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      Tags
                    </Text>
                    <Row>
                      {newData.tags.map((tag, index) => (
                        <Column
                          key={index}
                          className="mr-2 mt-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-600"
                        >
                          {tag}
                        </Column>
                      ))}
                    </Row>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      Partner (Yes/No)
                    </Text>
                    <Text>
                      {newData.partner === "checkmark" ? "Yes" : "No"}
                    </Text>
                  </Section>

                  <Hr className="my-6 border-gray-200" />

                  <Section>
                    <Heading className="text-2xl font-bold">
                      Contact Info
                    </Heading>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      Address
                    </Text>
                    <Text>{newData.companyContactInformation.address}</Text>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      Phone Number
                    </Text>
                    <Text>{newData.companyContactInformation.phoneNumber}</Text>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      Email
                    </Text>
                    <Text>{newData.companyContactInformation.email}</Text>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      Website
                    </Text>
                    <Link
                      href={newData.companyContactInformation.website}
                      className="text-blue-600 underline"
                    >
                      {newData.companyContactInformation.website}
                    </Link>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      District
                    </Text>
                    <Text>{newData.companyContactInformation.district}</Text>
                  </Section>

                  <Hr className="my-6 border-gray-200" />

                  <Section>
                    <Heading className="text-2xl font-bold">
                      Key Personnel
                    </Heading>
                    <Row>
                      {newData.keyPersonnel.map((person, index) => (
                        <Column key={index} className="w-1/3 px-2">
                          <Container className="rounded-lg border border-gray-200 bg-background p-4">
                            <Row>
                              <Column className="w-1/4">
                                <Avatar className="px-2">
                                  <AvatarImage src={person.avatarImage} />
                                  <AvatarFallback className="uppercase">
                                    {person.name.slice(0, 2)}
                                  </AvatarFallback>
                                </Avatar>
                              </Column>
                              <Column className="w-3/4 pl-4">
                                <Text className="font-semibold">
                                  {person.name}
                                </Text>
                                <Text className="text-xs uppercase tracking-wide text-purple-500">
                                  {person.position}
                                </Text>
                              </Column>
                            </Row>
                          </Container>
                        </Column>
                      ))}
                    </Row>
                  </Section>

                  <Hr className="my-6 border-gray-200" />

                  <Section>
                    <Heading className="text-2xl font-bold">
                      Product Info
                    </Heading>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      Main Product
                    </Text>
                    <Text>{newData.product}</Text>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      Description of Products
                    </Text>
                    <Text>{newData.descriptionOfProducts}</Text>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      List of Products &amp; Services
                    </Text>
                    <Row>
                      {newData.listOfProductsServices.map((product, index) => (
                        <Column
                          key={index}
                          className="mr-2 mt-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-600"
                        >
                          {product}
                        </Column>
                      ))}
                    </Row>
                  </Section>

                  <Hr className="my-6 border-gray-200" />

                  <Section>
                    <Heading className="text-2xl font-bold">
                      Financial Info
                    </Heading>
                    <Text className="mt-4 text-sm font-semibold uppercase text-purple-500">
                      Revenue Model
                    </Text>
                    <Text>{newData.financialsRevenueModel}</Text>
                  </Section>

                  <Hr className="my-6 border-gray-200" />

                  <Section>
                    <Heading className="text-2xl font-bold">
                      Customer Testimonials
                    </Heading>
                    {newData.customerTestimonials.map((testimonial, index) => (
                      <Container
                        key={index}
                        className="mt-4 rounded-lg border border-gray-200 bg-background p-4"
                      >
                        <Text className="text-sm font-semibold uppercase text-purple-500">
                          {testimonial.clientName}
                        </Text>
                        <Text>{testimonial.feedback}</Text>
                      </Container>
                    ))}
                  </Section>

                  <Hr className="my-6 border-gray-200" />

                  <Section>
                    <Heading className="text-2xl font-bold">
                      Company Values &amp; Culture
                    </Heading>
                    <Text className="mt-4">{newData.companyValuesCulture}</Text>
                  </Section>

                  <Hr className="my-6 border-gray-200" />

                  <Section>
                    <Heading className="text-2xl font-bold">Award Info</Heading>
                    {newData.awardsRecognitions.map((award, index) => (
                      <Container
                        key={index}
                        className="mt-4 rounded-lg border border-gray-200 bg-background p-4"
                      >
                        <Text className="text-sm font-semibold uppercase text-purple-500">
                          {award.title}
                        </Text>
                        <Text>{award.description}</Text>
                      </Container>
                    ))}
                  </Section>
                </div>
              </Container>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
