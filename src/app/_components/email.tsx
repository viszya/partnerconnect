"use client"

import { Button } from "@/app/_components/ui/button"
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

export function Email({ className, firstName, lastName, email, message, subject }: EmailProps) {
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
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					message,
					subject,
				}),
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
		<Button
			className={cn(className, 'max-w-10 items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black')}
			onClick={sendEmail}
			disabled={loading}
		>
			{loading ? 'Sending...' : 'Send Message'}
		</Button>
	);
}