"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/server/utils";

interface FormProps {
	onNextClick: () => void;
}

export function Form1({ onNextClick }: FormProps) {
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [sendToEmail, setSendToEmail] = useState("");
	const [department, setDepartment] = useState("");
	const [isLoading] = useState<boolean>(false)
	const [isNextLoading, setIsNextLoading] = useState<boolean>(false)


	const createUser = api.user.createUser.useMutation({
		onSuccess: () => {
			onNextClick();
		},
	});

	function onSubmit() {
		setIsNextLoading(true)
		createUser.mutate({
			name,
			image,
			sendToEmail,
			department,
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
									01
								</span>
							</span>
							<div className="mt-3 text-3xl tracking-tighter text-black">
								Welcome! Let&apos;s get started.
							</div>
							<div className="mt-4 text-gray-500">
								Let&apos;s get started! Please fill out the following
								form to the best of your ability. All this information will be
								used to create your profile. You can always edit your profile
								later.
							</div>
						</article>

						<form
							className="flex flex-col gap-y-9"
							onSubmit={(e) => {
								e.preventDefault();
								onSubmit();
							}}
						>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									What is your full name (first / last)?
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="Jeff Bezos"
									type="text"
									value={name}
									required
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600" >
									Upload your profile picture
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="jeffbezos@example.com"
									type="text"
									value={image}
									required
									onChange={(e) => setImage(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-gray-600">
									Where would like you like your reports to be sent?
								</label>
								<input
									className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="jeffbezos"
									type="text"
									value={sendToEmail}
									required
									onChange={(e) => setSendToEmail(e.target.value)}
								/>
							</div>
							<div>
								<label className="block mb-3 text-sm font-medium text-gray-600">
									What department do you work in?
								</label>
								<input className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-red-300 sm:text-sm"
									placeholder="jeffbezos"
									type="text"
									value={department}
									required
									onChange={(e) => setDepartment(e.target.value)}
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
		</section>
	);
}
