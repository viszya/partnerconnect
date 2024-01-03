"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/server/utils";

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
							<span className="inline-flex items-center text-black rounded-xl">
								<span className="font-mono text-sm" aria-hidden="true">
									02
								</span>
							</span>
							<div className="mt-3 text-3xl tracking-tighter text-black">
								Lets create a demo company profile.
							</div>
							<div className="mt-4 text-gray-500">
								Please fill out the following form to the best of your ability. This info will be used to create a demo company profile for you to view and edit.
							</div>
						</article>
						<form
							className="flex flex-col gap-y-9"
							onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
						>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Is this company a business partner you organization engages with? <em className="text-gray-400">Leave Un-Checked if don&apos;t have a job</em>
								</label>
								<input
									className="mr-2"
									type="checkbox"
									checked={partner}
									onChange={() => setPartner(!partner)}
								/>
								<span className="text-gray-600">Yes, I have a job</span>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									What is the name of the company or orgnanization <span className="text-red-400">*optional</span>
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="Full Stack Developer, etc."
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									What is the industry of the company or orgnanization <span className="text-red-400">*optional</span>
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="10+"
									required
									type="text"
									value={industry}
									onChange={(e) => setIndustry(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									What is the description of the company or orgnanization <span className="text-red-400">*optional</span>
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="10+"
									required
									type="text"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<button
									type="submit"
									className={cn(buttonVariants({ variant: "outline" }), "items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black")}
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
