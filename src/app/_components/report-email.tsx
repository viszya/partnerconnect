import {
  Body,
  Container,
  Head,
  Html,
  Link,
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

export function ReportEmail() {
  const previewText = `Company Report`;

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white text-black">
          <Container className="mx-auto my-8 max-w-2xl rounded-lg border border-gray-200 bg-white p-6">
            <Text className="text-3xl font-bold text-purple-600">
              Company Profile
            </Text>
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
                  <Text className="text-lg font-semibold">For-Profit</Text>
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
              <Text>{newData.partner === "checkmark" ? "Yes" : "No"}</Text>
            </Section>

            <Hr className="my-6 border-gray-200" />

            <Section>
              <Heading className="text-2xl font-bold">Contact Info</Heading>
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
              <Heading className="text-2xl font-bold">Key Personnel</Heading>
              <Row>
                {newData.keyPersonnel.map((person, index) => (
                  <Column key={index} className="w-1/3 px-2">
                    <Container className="rounded-lg border border-gray-200 bg-gray-100 p-4">
                      <Row>
                        <Column className="w-1/4">
                          <Img
                            src={person.avatarImage}
                            className="h-12 w-12 rounded-full"
                            alt={`${person.name} avatar`}
                          />
                        </Column>
                        <Column className="w-3/4 pl-4">
                          <Text className="font-semibold">{person.name}</Text>
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
              <Heading className="text-2xl font-bold">Product Info</Heading>
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
              <Heading className="text-2xl font-bold">Financial Info</Heading>
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
                  className="mt-4 rounded-lg border border-gray-200 bg-gray-100 p-4"
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
                  className="mt-4 rounded-lg border border-gray-200 bg-gray-100 p-4"
                >
                  <Text className="text-sm font-semibold uppercase text-purple-500">
                    {award.title}
                  </Text>
                  <Text>{award.description}</Text>
                </Container>
              ))}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ReportEmail;
