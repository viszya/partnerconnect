"use client"

import { buttonVariants } from "@/app/_components/ui/button"
import { cn } from "@/server/utils"
import { useState } from "react";
import { useToast } from "@/app/_components/ui/use-toast";

interface EmailProps {
	className?: string;
	firstName: string;
	lastName: string;
	email: string;
	message: string;
	subject: string;
}

export function Email() {
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);

	async function sendEmail() {
		setLoading(true);
		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
				toast({
					title: 'Message Sent',
					description: 'Your message has been sent successfully.',
				});
			} else {
				toast({
					title: 'Error',
					description: 'Failed to send the message. Please try again later.',
				});
			}
		} catch (error) {
			toast({
				title: 'Error',
				description: 'An unexpected error occurred. Please try again later.',
			});
		} finally {
			setLoading(false);
		}
	}

	return (
		<button
            className={cn(buttonVariants({ variant: "outline" }), "justify-center items-center w-32 px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
			onClick={sendEmail}
			disabled={loading}
		>
			{loading ? 'Sending...' : 'Send Message'}
		</button>
	);
}
