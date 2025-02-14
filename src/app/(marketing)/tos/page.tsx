import { cn } from "@/server/utils";
import { twp } from "@/server/utils";

export default function TermsOfService() {
	return (
		<div className={cn(twp().wrapper, "mt-10")}>
			<div className="mx-20 mb-20">
				<article>
					<div className="mt-10 text-5xl tracking-tighter text-primary">
						Terms of Service for PartnerConnect
					</div>
					<div className="mt-4 text-primary/80 text-lg">
						<p>
							<span className="text-lg tracking-tighter text-primary">1. Acceptance of Terms:</span>
							<br />
							By accessing or using the services provided by PartnerConnect, you agree
							to comply with and be bound by these Terms of Service. If you do
							not agree with these Terms, please refrain from using our services.
						</p>
					</div>
				</article>
				<article>
					<div className="mt-20 text-3xl tracking-tighter text-primary">
						2. User Eligibility
					</div>
					<div className="mt-4 text-primary/80 text-lg">
						<p>
							<span className="text-lg tracking-tighter text-primary">a. Account Creation:</span>
							<br />
							Users are required to create an account to access certain features
							of PartnerConnect.
						</p>
						<p>
							<span className="text-lg tracking-tighter text-primary">b. Account Information:</span>
							<br />
							You are responsible for providing accurate and updated information
							during account creation.
						</p>
						<p>
							<span className="text-lg tracking-tighter text-primary">c. Account Security:</span>
							<br />
							Keep your account credentials secure. Notify us immediately of any
							unauthorized use.
						</p>
					</div>
				</article>
				<article>
					<div className="mt-20 text-3xl tracking-tighter text-primary">
						3. Use of Services
					</div>
					<div className="mt-4 text-primary/80 text-lg">
						<p>
							<span className="text-lg tracking-tighter text-primary">a. Lawful Use:</span>
							<br />
							Users agree to use PartnerConnect for lawful purposes only, complying
							with all applicable laws and regulations.
						</p>
						<p>
							<span className="text-lg tracking-tighter text-primary">b. Prohibited Activities:</span>
							<br />
							Users must not engage in activities that violate these Terms,
							infringe on intellectual property rights, or harm the platform&apos;s
							functionality.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-primary">
						4. Privacy
					</div>
					<div className="mt-4 text-primary/80 text-lg">
						<p>
							<span className="text-lg tracking-tighter text-primary">Our Privacy Policy governs the collection, use, and disclosure of user information. By using PartnerConnect, you consent to our privacy practices outlined in the Privacy Policy.</span>
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-primary">
						5. Intellectual Property
					</div>
					<div className="mt-4 text-primary/80 text-lg">
						<p>
							<span className="text-lg tracking-tighter text-primary">a. Ownership:</span>
							<br />
							PartnerConnect retains ownership of all intellectual property associated with the platform.
						</p>
						<p>
							<span className="text-lg tracking-tighter text-primary">b. User Content:</span>
							<br />
							By submitting content to PartnerConnect, users grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute the content.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-primary">
						6. Termination
					</div>
					<div className="mt-4 text-primary/80 text-lg">
						<p>
							We reserve the right to terminate or suspend user accounts for violations of these Terms or for any reason at our discretion
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-primary">
						7. Disclaimer of Warranties
					</div>
					<div className="mt-4 text-primary/80 text-lg">
						<p>
							PartnerConnect is provided &quot;as is&quot; and &quot;as available.&quot; We make no warranties, express or implied, regarding the platform&apos;s reliability, accuracy, or availability.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-primary">
						8. Limitation of Liability
					</div>
					<div className="mt-4 text-primary/80 text-lg">
						<p>
							We are not liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of PartnerConnect.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-primary">
						9. Governing Law
					</div>
					<div className="mt-4 text-primary/80 text-lg">
						<p>
							These Terms are governed by the laws of the United States. Any legal action or proceeding related to PartnerConnect shall be brought exclusively in the courts of Washington.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-primary">
						10. Changes to Terms
					</div>
					<div className="mt-4 text-primary/80 text-lg">
						<p>
							We reserve the right to modify or revise these Terms at any time. Users will be notified of material changes, and continued use of PartnerConnect indicates acceptance of the updated Terms.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-primary">
						11. Contact Information
					</div>
					<div className="mt-4 text-primary/80 text-lg">
						<p>
							For any questions or concerns related to these Terms of Service, please contact us at PartnerConnectfbla@gmail.com.
						</p>
					</div>
				</article>

				<article>
					<div className="mt-20 text-3xl tracking-tighter text-primary">
						These Terms of Service are effective as of 12/31/2025. Continued use of PartnerConnect signifies acceptance of these terms.
					</div>
				</article>
			</div>
		</div>
	);
}
