"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";

interface FormProps {
	onNextClick: () => void; // Define the type of onNextClick prop
}

export function Form2({ onNextClick }: FormProps) {
	const [name, setName] = useState("");
	const [industry, setIndustry] = useState("");
	const [description, setDescription] = useState("");
	const [partner, setPartner] = useState(false);
	const [isLoading] = useState<boolean>(false)
	const [isNextLoading, setIsNextLoading] = useState<boolean>(false)

	const formUpdate = api.company.createDemoProfile.useMutation({
		onSuccess: () => {
			onNextClick();
		},
	});

	function onSubmit() {
		setIsNextLoading(true)
		formUpdate.mutate({
			name,
			industry,
			description,
			partner,
		});
	}

	return (
		<section>
			<div className="flex flex-col justify-center m-auto">
				<div className="flex flex-col justify-center text-center md:flex-row md:text-left">
					<div className="flex flex-col justify-center max-w-2xl p-10 space-y-12">
						<article>
							<span className="inline-flex items-center text-primary rounded-xl">
								<span className="font-mono text-sm" aria-hidden="true">
									02
								</span>
							</span>
							<div className="mt-3 text-3xl tracking-tighter text-primary">
								Let&apos;s create a demo company profile.
							</div>
							<div className="mt-4 text-primary/80">
								Please fill out the following form to the best of your ability. This info will be used to create a demo company profile for you to view and edit.
							</div>
						</article>
						<form
							className="flex flex-col gap-y-9"
							onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
						>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-primary/90">
									Is this company a business partner your organization engages with?  <br />
									<em className="text-primary/80">Leave Un-Checked if they are not a partner </em>
								</label>
								<input
									className="rounded-xl placeholder:text-primary/40 border-primary/20 mr-2"
									type="checkbox"
									checked={partner}
									onChange={() => setPartner(!partner)}
								/>
								<span className="text-primary/80 text-sm">Yes, this company is a partner</span>
							</div>

							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-primary/90">
									What is the name of the company or orgnanization

								</label>
								<Input placeholder="OpenAI"
									className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
									type="text"
									value={name}
									required
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-primary/90">
									What is the industry of the company or orgnanization
								</label>
								<Input placeholder="AI Tech"
									className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
									type="text"
									value={industry}
									required
									onChange={(e) => setIndustry(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-primary/90">
									What is the description of the company or orgnanization
								</label>
								<Input placeholder=" Company X is a leading provider of Y services."
									className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
									type="text"
									value={description}
									required
									onChange={(e) => setDescription(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<button
									type="submit"
									className={cn(buttonVariants({ variant: "outline" }), "items-center justify-center w-full px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
									disabled={isLoading || isNextLoading}
								>
									{isNextLoading ? (
										<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
									) : (<></>
									)}{" "}
									Next
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section >
	);
}
