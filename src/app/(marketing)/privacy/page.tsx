import { cn } from "@/server/utils"
import { twp } from "@/server/utils"

export default function PrivacyPolicy() {
    return (
        <div className={cn(twp().wrapper, "mt-10 mb-20")}>
            <div className="mx-20">
                <article>
                    <div className="mt-10 text-5xl tracking-tighter text-primary">
                        Privacy Policy for PartnerConnect
                    </div>
                    <div className="mt-4 text-primary/80 text-lg">
                        This Privacy Policy outlines the ways in which PartnerConnect collects, uses, and safeguards personal information of users on our platform. By accessing or using PartnerConnect, you consent to the practices described in this Policy.
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-primary">
                        1. Information Collected
                    </div>
                    <div className="mt-4 text-primary/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-primary">a. Personal Information:</span><br />
                            We collect personal information during the account creation process, which may include names, email addresses, contact details, and other information necessary for account setup.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-primary">b. Usage Information:</span><br />
                            We automatically collect data on user interactions with the platform, such as pages visited, job applications submitted, and other activities.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-primary">
                        2. How We Use Your Information
                    </div>
                    <div className="mt-4 text-primary/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-primary">a. Personalization:</span><br />
                            Collected data is utilized to personalize user experiences, providing tailored content, job recommendations, and notifications.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-primary">b. Communication:</span><br />
                            We may use the provided contact information to communicate with users regarding account-related updates, notifications, and promotional materials.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-primary">c. Improvements:</span><br />
                            Data analysis enables us to enhance our services continually, ensuring a seamless and user-friendly experience.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-primary">
                        3. Information Sharing
                    </div>
                    <div className="mt-4 text-primary/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-primary">a. Businesses and Individuals:</span><br />
                            User profiles and job applications are shared as necessary to fulfill the primary purpose of PartnerConnect: connecting businesses with potential candidates.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-primary">b. Third Parties:</span><br />
                            We do not sell, trade, or share personal information with third parties for their promotional purposes.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-primary">
                        4. Data Security
                    </div>
                    <div className="mt-4 text-primary/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-primary">a. Protection Measures:</span><br />
                            We implement industry-standard security measures to protect user data from unauthorized access, disclosure, alteration, and destruction.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-primary">b. Data Retention:</span><br />
                            User data is retained for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required by law.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-primary">
                        5. Cookies and Tracking
                    </div>
                    <div className="mt-4 text-primary/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-primary">a. Cookies:</span><br />
                            We use cookies to enhance user experiences, track preferences, and collect general usage information.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-primary">b. Opt-Out:</span><br />
                            Users can manage cookie preferences through their browser settings.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-primary">
                        6. User Rights
                    </div>
                    <div className="mt-4 text-primary/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-primary">a. Access and Correction:</span><br />
                            Users can access and edit their personal information through their account settings.
                        </div>
                        <div className="mt-2">
                            <span className="text-lg tracking-tighter text-primary">b. Deletion:</span><br />
                            Users have the right to request the deletion of their accounts and associated data.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-primary">
                        7. Changes to Privacy Policy
                    </div>
                    <div className="mt-4 text-primary/80 text-lg">
                        <div>
                            <span className="text-lg tracking-tighter text-primary">a. Notification:</span><br />
                            Users will be notified of any material changes to the Privacy Policy through the platform or via email.
                        </div>
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-primary">
                        8. Contact Information
                    </div>
                    <div className="mt-4 text-primary/80 text-lg">
                        For any questions, concerns, or requests related to this Privacy Policy, please contact us at PartnerConnectfbla@gmail.com.
                    </div>
                </article>
                <article>
                    <div className=" mt-20 text-3xl tracking-tighter text-primary">
                        This Privacy Policy is effective as of 12/31/2025. Continued use of PartnerConnect signifies acceptance of this policy.
                    </div>
                </article>
            </div>
        </div>
    )
}