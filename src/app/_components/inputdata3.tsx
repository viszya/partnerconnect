"use client";
import { useToast } from "@/app/_components/ui/use-toast";
import { api } from "@/trpc/react";

const data = [
  {
    nID: "3422",
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
  },
];
export function InputData() {
  const { toast } = useToast();

  const addCompany = api.company.addCompany.useMutation();
  // const createContactInformation = api.test.createContactInformation.useMutation();
  // const createCareerOpportunity = api.test.createCareerOpportunity.useMutation();
  // const createTestimonial = api.test.createTestimonial.useMutation();
  // const createTeamMember = api.test.createTeamMember.useMutation();
  // const createEvent = api.test.createEvent.useMutation();
  // const company = api.test.getCompanyProfilePrivate.useQuery();
  // const companyData = company.data;

  function onSubmit() {
    addCompany.mutate({
      nID: data[0].nID,
      name: data[0].name,
      avatar: data[0].avatar,
      status: data[0].status,
      partner: data[0].partner,
      typeOfOrganization: data[0].typeOfOrganization,
      industry: data[0].industry,
      size: data[0].size,
      historyBackground: data[0].historyBackground,
      missionStatementVision: data[0].missionStatementVision,
      targetMarketCustomerBase: data[0].targetMarketCustomerBase,
      product: data[0].product,
      descriptionOfProducts: data[0].descriptionOfProducts,
      financialsRevenueModel: data[0].financialsRevenueModel,
      companyValuesCulture: data[0].companyValuesCulture,
      tags: data[0].tags,
      listOfProductsServices: data[0].listOfProductsServices,
    });

    // createContactInformation.mutate({
    //     id: companyData.company[0].id,
    //     email: data.contactInformation.email,
    //     phone: data.contactInformation.phone,
    //     address: data.contactInformation.address,
    // });

    // createCareerOpportunity.mutate({
    //     id: companyData.company[0].id,
    //     position: data.careerOpportunities[0].position,
    //     location: data.careerOpportunities[0].location,
    //     applyLink: data.careerOpportunities[0].applyLink,
    //     companyLogo: data.careerOpportunities[0].companyLogo,
    //     description: data.careerOpportunities[0].description,
    //     pricingDescription: data.careerOpportunities[0].pricingDescription,
    //     sizeDescription: data.careerOpportunities[0].sizeDescription,
    //     skills: data.careerOpportunities[0].skills,
    //     jobLink: data.careerOpportunities[0].jobLink,
    //     seeSrc: data.careerOpportunities[0].seeSrc,
    //     thumbnail: data.careerOpportunities[0].thumbnail,
    //     about: data.careerOpportunities[0].about,
    //     pay: data.careerOpportunities[0].pay,
    //     companyAbout: data.careerOpportunities[0].companyAbout,
    // });
    // createCareerOpportunity.mutate({
    //     id: companyData.company[0].id,
    //     position: data.careerOpportunities[1].position,
    //     location: data.careerOpportunities[1].location,
    //     applyLink: data.careerOpportunities[1].applyLink,
    //     companyLogo: data.careerOpportunities[1].companyLogo,
    //     description: data.careerOpportunities[1].description,
    //     pricingDescription: data.careerOpportunities[1].pricingDescription,
    //     sizeDescription: data.careerOpportunities[1].sizeDescription,
    //     skills: data.careerOpportunities[1].skills,
    //     jobLink: data.careerOpportunities[1].jobLink,
    //     seeSrc: data.careerOpportunities[1].seeSrc,
    //     thumbnail: data.careerOpportunities[1].thumbnail,
    //     about: data.careerOpportunities[1].about,
    //     pay: data.careerOpportunities[1].pay,
    //     companyAbout: data.careerOpportunities[1].companyAbout,
    // });

    // createTestimonial.mutate({
    //     id: companyData.company[0].id,
    //     clientName: data.testimonials[0].clientName,
    //     feedback: data.testimonials[0].feedback,
    // });
    // createTestimonial.mutate({
    //     id: companyData.company[0].id,
    //     clientName: data.testimonials[1].clientName,
    //     feedback: data.testimonials[1].feedback,
    // });
    // createTestimonial.mutate({
    //     id: companyData.company[0].id,
    //     clientName: data.testimonials[2].clientName,
    //     feedback: data.testimonials[2].feedback,
    // });
    // // createTestimonial.mutate({
    // //     id: companyData.company[0].id,
    // //     clientName: data.testimonials[3].clientName,
    // //     feedback: data.testimonials[3].feedback,
    // // });
    // // createTestimonial.mutate({
    // //     id: companyData.company[0].id,
    // //     clientName: data.testimonials[4].clientName,
    // //     feedback: data.testimonials[4].feedback,
    // // });

    // createTeamMember.mutate({
    //     id: companyData.company[0].id,
    //     name: data.teamMembers[0].name,
    //     role: data.teamMembers[0].role,
    //     photoSrc: data.teamMembers[0].photoSrc,
    // });
    // createTeamMember.mutate({
    //     id: companyData.company[0].id,
    //     name: data.teamMembers[1].name,
    //     role: data.teamMembers[1].role,
    //     photoSrc: data.teamMembers[1].photoSrc,
    // });

    // createEvent.mutate({
    //     id: companyData.company[0].id,
    //     date: data.eventData[0].date,
    //     eventType: data.eventData[0].eventType,
    //     seeSrc: data.eventData[0].seeSrc,
    //     title: data.eventData[0].title,
    //     location: data.eventData[0].location,
    //     eventBy: data.eventData[0].eventBy,
    //     imgsrc: data.eventData[0].imgsrc,
    //     about: data.eventData[0].about,
    //     attendees: data.eventData[0].attendees,
    //     viewLink: data.eventData[0].viewLink,
    //     attendSrc: data.eventData[0].attendSrc,
    //     photoSrc: data.eventData[0].photoSrc,
    // });
    // createEvent.mutate({
    //     id: companyData.company[0].id,
    //     date: data.eventData[1].date,
    //     eventType: data.eventData[1].eventType,
    //     seeSrc: data.eventData[1].seeSrc,
    //     title: data.eventData[1].title,
    //     location: data.eventData[1].location,
    //     eventBy: data.eventData[1].eventBy,
    //     imgsrc: data.eventData[1].imgsrc,
    //     about: data.eventData[1].about,
    //     attendees: data.eventData[1].attendees,
    //     viewLink: data.eventData[1].viewLink,
    //     attendSrc: data.eventData[1].attendSrc,
    //     photoSrc: data.eventData[1].photoSrc,
    // });

    toast({
      title: "Data Inputted!",
    });
  }

  return (
    <div>
      <section>
        <div className="m-auto flex flex-col justify-center">
          <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
            <div className="flex max-w-2xl flex-col justify-center space-y-12 p-10">
              <div className="mt-3 text-3xl tracking-tighter text-black">
                TEST DATA INPUT
              </div>
              <form
                className="flex flex-col gap-y-9"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
              >
                <div className="col-span-full">
                  <button
                    className="inline-flex w-full items-center justify-center rounded-full border-2 border-black bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black"
                    type="submit"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
