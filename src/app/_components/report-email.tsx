import {
    Body,
    Container,
    Head,
    Html,
    Link,
    Preview,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';


export function ReportEmail(props) {
    const previewText = `Company Report`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[1000px]">
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hello Team,
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            You have received a company report:
                        </Text>

                        {/* Company Overview Section */}
                        <Text className="text-black text-[25px] font-extrabold leading-[24px] mt-6">
                            Company Overview:
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Company Name: <span className='text-black font-base'>{props.companyName}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Company ID: <span className='text-black font-base'>{props.id}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Status: <span className='text-black font-base'>{props.status}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Type of Organization: <span className='text-black font-base'>{props.typeOfOrganization}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Industry or Sector: <span className='text-black font-base'>{props.industryOrSector}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Size of Employees: <span className='text-black font-base'>{props.sizeEmployees}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            History & Background: <span className='text-black font-base'>{props.historyBackground}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Mission Statement & Vision: <span className='text-black font-base'>{props.missionStatementVision}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Target Market & Customer Base: <span className='text-black font-base'>{props.targetMarketCustomerBase}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Tags: <span className='text-black font-base'>{props.tags.join(', ')}</span>
                        </Text>

                        {/* Company Contact Information Section */}
                        <Text className="text-black text-[25px] font-extrabold leading-[24px] mt-6">
                            Company Contact Information:
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Address: <span className='text-black font-base'>{props.companyContactInformation.address}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Phone Number: <span className='text-black font-base'>{props.companyContactInformation.phoneNumber}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Email: <span className='text-black font-base'>{props.companyContactInformation.email}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Website: <span className='text-black font-base'>{props.companyContactInformation.website}</span>
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            District: <span className='text-black font-base'>{props.companyContactInformation.district}</span>
                        </Text>


                        {/* Product Information Section */}
                        <Text className="text-black text-[25px] font-extrabold leading-[24px] mt-6">
                            Product Information:
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Main Product:
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {props.mainProduct}
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Description of Products:
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {props.descriptionOfProducts}
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            List of Products & Services:
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {props.listOfProductsServices.join(', ')}
                        </Text>

                        {/* Financial Information Section */}
                        <Text className="text-black text-[25px] font-extrabold  leading-[24px] mt-6">
                            Financial Information:
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Revenue Model:
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {props.financialsRevenueModel}
                        </Text>

                        {/* Customer Testimonials Section */}
                        <Text className="text-black text-[25px] font-extrabold  leading-[24px] mt-6">
                            Customer Testimonials:
                        </Text>
                        {props.customerTestimonials.map((testimonial, index) => (
                            <React.Fragment key={index}>
                                <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                                    {testimonial.clientName}:
                                </Text>
                                <Text className="text-black text-[14px] leading-[24px]">
                                    {testimonial.feedback}
                                </Text>
                            </React.Fragment>
                        ))}

                        {/* Social Media Section */}
                        <Text className="text-black text-[25px] font-extrabold  leading-[24px] mt-6">
                            Social Media:
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Facebook:
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {props.socialMediaProfiles.facebook}
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Twitter:
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {props.socialMediaProfiles.twitter}
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            LinkedIn:
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {props.socialMediaProfiles.linkedin}
                        </Text>

                        {/* Company Values & Culture Section */}
                        <Text className="text-black text-[25px] font-extrabold  leading-[24px] mt-6">
                            Company Values & Culture:
                        </Text>
                        <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                            Values & Culture:
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {props.companyValuesCulture}
                        </Text>

                        {/* Awards Section */}
                        <Text className="text-black text-[25px] font-extrabold  leading-[24px] mt-6">
                            Awards:
                        </Text>
                        {props.awardsRecognitions.map((award, index) => (
                            <React.Fragment key={index}>
                                <Text className="text-teal-600 text-[14px] leading-[24px] font-bold">
                                    {award.title}:
                                </Text>
                                <Text className="text-black text-[14px] leading-[24px]">
                                    {award.description}
                                </Text>
                            </React.Fragment>
                        ))}
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

export default ReportEmail;
