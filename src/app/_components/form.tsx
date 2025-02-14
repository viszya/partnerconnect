"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { useToast } from "@/app/_components/ui/use-toast";
import { UploadButton } from "@/utils/uploadthing";

export function SettingsForm() {
	const { toast } = useToast();
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [sendToEmail, setSendToEmail] = useState("");
	const [department, setDepartment] = useState("");
	const [isLoading] = useState<boolean>(false)
	const [isNextLoading, setIsNextLoading] = useState<boolean>(false)


	const updateUser = api.user.updateUser.useMutation({
		onSuccess: () => {
			setIsNextLoading(false);
			toast({
				title: "Success",
				description: "Your profile has been updated at " + formatDate(Date()),
			});
		},
	});

	function onSubmit() {
		setIsNextLoading(true)
		updateUser.mutate({
			name,
			image,
			sendToEmail,
			department,
		});
	}

	return (
		<section>
			<div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl bg-background ">
				<div className="flex flex-col justify-center text-center md:flex-row md:text-left">
					<div className="flex flex-col justify-center max-w-5xl w-full  space-y-12">
						<form
							className="flex flex-col gap-y-9"
							onSubmit={(e) => {
								e.preventDefault();
								onSubmit();
							}}
						>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-primary/90">
									Full name (first / last)
								</label>
								<Input placeholder="John Carter"
									className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-primary/90" >
									Upload your profile picture
								</label>
								<Input placeholder="Jeff Bezos"
									className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
									type="text"
									value={image}
									onChange={(e) => setImage(e.target.value)}
								/>
							</div>
							{/* <UploadButton
								className="bg-primary/5 rounded-2xl border-2 border-dashed border-primary text-primary w-32 h-32 upload"
								endpoint="imageUploader"
								onClientUploadComplete={(res) => {
									console.log("Files: ", res);
									alert("Upload Completed");
								}}
								onUploadError={(error: Error) => {
									alert(`ERROR! ${error.message}`);
								}}
							/> */}
							<div className="col-span-full">
								<label className="block mb-3 text-sm font-medium text-primary/90">
									Where would like you like your reports to be sent?
								</label>
								<Input
									placeholder="alerts@example.com"
									className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
									type="email"
									value={sendToEmail}
									onChange={(e) => setSendToEmail(e.target.value)}
								/>
							</div>
							<div>
								<label className="block mb-3 text-sm font-medium text-primary/90">
									What department do you work in?
								</label>
								<Input
									placeholder="Career Tech Education"
									className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
									type="text"
									value={department}
									onChange={(e) => setDepartment(e.target.value)}
								/>
							</div>
							<div className="col-span-full">
								<button
									type="submit"
									className={cn(buttonVariants({ variant: "outline" }), "max-w-40 w-40 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
									disabled={isLoading || isNextLoading}
								>
									{isNextLoading ? (
										<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
									) : (<></>
									)}{" "}
									Save Changes
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
