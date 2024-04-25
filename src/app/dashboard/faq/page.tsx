import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { twp } from "@/server/utils";
import { cn } from "@/server/utils";

export default function Page() {
    return (
        <div className="flex flex-col px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
            </div>
            <Accordion
            type="single"
            collapsible
            className="mb-20 mt-2 w-full rounded-xl  border border-dashed border-secondary bg-white p-4 px-6 text-left"
          >
            {/* Question 1 */}
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What is PartnerInsight?
              </AccordionTrigger>
              <AccordionContent>
                PartnerInsight is a powerful business intelligence tool that
                helps companies unleash the full potential of their data. With
                advanced analytics and intuitive visualization features,
                PartnerInsight provides valuable insights to inform better
                decision-making and drive growth.
              </AccordionContent>
            </AccordionItem>

            {/* Question 2 */}
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                What are the key features of PartnerInsight?
              </AccordionTrigger>
              <AccordionContent>
                PartnerInsight offers an advanced datatable, report generation,
                company insights, and auto emails. These features work together
                to help you analyze and visualize data, gain valuable insights
                into your company's performance, and stay informed through
                regular updates.
              </AccordionContent>
            </AccordionItem>

            {/* Question 3 */}
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                How does the advanced datatable help me?
              </AccordionTrigger>
              <AccordionContent>
                The advanced datatable in PartnerInsight is designed to help you
                analyze and visualize data in a more efficient way. It includes
                powerful filtering and sorting capabilities, allowing you to
                quickly explore and uncover valuable insights from your
                company's data.
              </AccordionContent>
            </AccordionItem>

            {/* Question 4 */}
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                What is the benefit of automatic report generation?
              </AccordionTrigger>
              <AccordionContent>
                The automatic report generation feature in PartnerInsight saves
                you time and effort by creating comprehensive reports on your
                company's performance. These reports provide valuable insights
                and analytics, enabling you to make informed decisions without
                the need for manual data compilation.
              </AccordionContent>
            </AccordionItem>

            {/* Question 5 */}
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                How can company insights help my business?
              </AccordionTrigger>
              <AccordionContent>
                PartnerInsight's company insights feature provides you with
                actionable intelligence to help you make better decisions for
                your company and business deals. By analyzing your data and
                identifying trends and patterns, you can gain a competitive edge
                and make informed strategic moves.
              </AccordionContent>
            </AccordionItem>

            {/* Question 6 */}
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                What are auto emails, and how do they benefit me?
              </AccordionTrigger>
              <AccordionContent>
                Auto emails are regular updates sent to your inbox, keeping you
                informed about your company's performance. These emails provide
                a convenient way to stay up-to-date with the latest insights
                and analytics, ensuring that you never miss important
                developments.
              </AccordionContent>
            </AccordionItem>

            {/* Question 7 */}
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                How can I get started with PartnerInsight?
              </AccordionTrigger>
              <AccordionContent>
                Getting started with PartnerInsight is easy. Simply sign up for
                an account and follow the onboarding process to connect your
                company's data sources. Our support team is available to guide
                you through the process and ensure a seamless setup.
              </AccordionContent>
            </AccordionItem>

            {/* Question 8 */}
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                Is there a free trial or demo available?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a free trial or demo of PartnerInsight to allow
                you to experience the platform firsthand. During the trial
                period, you can explore the full range of features and
                functionality to determine if PartnerInsight is the right fit
                for your company.
              </AccordionContent>
            </AccordionItem>

            {/* Question 9 */}
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">
                Can PartnerInsight integrate with my existing data sources?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! PartnerInsight is designed to seamlessly integrate
                with a wide range of data sources, including databases, cloud
                storage, and third-party applications. Our team will work with
                you to ensure a smooth integration process, ensuring that your
                data is easily accessible within the platform.
              </AccordionContent>
            </AccordionItem>

            {/* Question 10 */}
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left">
                How secure is my company's data with PartnerInsight?
              </AccordionTrigger>
              <AccordionContent>
                At PartnerInsight, we prioritize the security and privacy of
                your company's data. We employ industry-standard encryption and
                security protocols to ensure that your data is protected at all
                times. Our strict data handling policies and practices are
                designed to safeguard your sensitive information.
              </AccordionContent>
            </AccordionItem>

            {/* Question 11 */}
            <AccordionItem value="item-11">
              <AccordionTrigger className="text-left">
                Can individuals receive notifications for relevant job
                opportunities?
              </AccordionTrigger>
              <AccordionContent>
                Yes, individuals can customize their notification preferences in
                their accounts to receive updates on job opportunities that
                match their skills, experience, and preferences.
              </AccordionContent>
            </AccordionItem>

            {/* Question 12 */}
            <AccordionItem value="item-12">
              <AccordionTrigger className="text-left">
                How does Sparktup handle privacy and data security for both
                companies and individuals?
              </AccordionTrigger>
              <AccordionContent>
                Sparktup prioritizes the privacy and security of user data. Our
                platform employs industry-standard encryption and security
                measures to protect sensitive information. Our detailed privacy
                policy outlines how data is collected, used, and stored
                securely.
              </AccordionContent>
            </AccordionItem>

            {/* Question 13 */}
            <AccordionItem value="item-13">
              <AccordionTrigger className="text-left">
                What level of support does Sparktup provide to companies during
                the hiring process?
              </AccordionTrigger>
              <AccordionContent>
                Sparktup offers comprehensive support to companies, including
                documentation, tutorials, and dedicated customer assistance. Our
                support team is available to guide you through the hiring
                process and address any questions or concerns.
              </AccordionContent>
            </AccordionItem>

            {/* Question 14 */}
            <AccordionItem value="item-14">
              <AccordionTrigger className="text-left">
                Can companies set specific criteria for candidate matching on
                Sparktup?
              </AccordionTrigger>
              <AccordionContent>
                Yes, companies can define specific criteria, including skills,
                experience, and cultural fit, to tailor candidate matching on
                Sparktup. Our platform is designed to provide personalized and
                targeted matches based on your unique requirements.
              </AccordionContent>
            </AccordionItem>

            {/* Question 15 */}
            <AccordionItem value="item-15">
              <AccordionTrigger className="text-left">
                Is Sparktup accessible to both small startups and large
                enterprises?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Sparktup caters to the hiring needs of both small
                startups and large enterprises. Our flexible solutions and
                scalable platform ensure that companies of all sizes can benefit
                from our services.
              </AccordionContent>
            </AccordionItem>

            {/* Question 16 */}
            <AccordionItem value="item-16">
              <AccordionTrigger className="text-left">
                Can companies review and assess candidate profiles before
                initiating the hiring process?
              </AccordionTrigger>
              <AccordionContent>
                Yes, companies have the ability to review and assess candidate
                profiles on Sparktup before initiating the hiring process. This
                allows for informed decision-making and ensures compatibility
                with your company&apos;s requirements.
              </AccordionContent>
            </AccordionItem>

            {/* Question 17 */}
            <AccordionItem value="item-17">
              <AccordionTrigger className="text-left">
                How does Sparktup foster a collaborative community between
                companies and individuals?
              </AccordionTrigger>
              <AccordionContent>
                Sparktup provides a vibrant tech community where companies and
                individuals can engage in discussions, networking, and
                collaboration. Explore opportunities for partnerships, exchange
                ideas, and stay updated on industry trends within our
                collaborative space.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
    );
}
