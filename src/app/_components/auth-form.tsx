"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/server/utils"
import { userAuthSchema } from "@/server/validations/auth"
import { buttonVariants } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { Label } from "@/app/_components/ui/label"
import { toast } from "@/app/_components/ui/use-toast"
import { Icons } from "@/app/_components/icons"
import Link from "next/link"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(userAuthSchema),
    })
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)
    const searchParams = useSearchParams()

    async function onSubmit(data: FormData) {
        setIsLoading(true)

        const signInResult = await signIn("email", {
            email: data.email.toLowerCase(),
            redirect: false,
            callbackUrl: searchParams?.get("from") || "/dashboard",
        })

        setIsLoading(false)

        if (!signInResult?.ok) {
            return toast({
                title: "Something went wrong.",
                description: "Your sign in request failed. Please try again.",
                variant: "destructive",
            })
        }

        return toast({
            title: "Check your email",
            description: "We sent you a login link. Be sure to check your spam too.",
        })
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <button
                type="button"
                className={cn(buttonVariants({ variant: "outline" }), "rounded-2xl bg-teal-300/20")}
                onClick={async () => {
                    setIsGitHubLoading(true)
                    await signIn("google")
                }}
                disabled={isLoading || isGitHubLoading}
            >
                {isGitHubLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.google className="mr-2 h-6 w-6" />
                )}{" "}
                Google
            </button>

        </div>
    )
}