"use client"

import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { useToast } from "@/app/_components/ui/use-toast";

interface FormProps {
	onNextClick: () => void;
    onBackClick: () => void;
}

export function Form3({ onNextClick, onBackClick }: FormProps) {
    const { toast } = useToast();
    const [submitted, setSubmitted] = useState(false);

    const [name1, setName1] = useState("");
    const [position1, setPosition1] = useState("");
    const [phoneNumber1, setPhoneNumber1] = useState("");
    const [email1, setEmail1] = useState("");
    const [avatarImage1, setAvatarImage1] = useState("");
    const [name2, setName2] = useState("");
    const [position2, setPosition2] = useState("");
    const [phoneNumber2, setPhoneNumber2] = useState("");
    const [email2, setEmail2] = useState("");
    const [avatarImage2, setAvatarImage2] = useState("");
    const [name3, setName3] = useState("");
    const [position3, setPosition3] = useState("");
    const [phoneNumber3, setPhoneNumber3] = useState("");
    const [email3, setEmail3] = useState("");
    const [avatarImage3, setAvatarImage3] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const id = api.company.getLatestProfile.useQuery().data?.id;

    const addKeyPersonnel = api.company.addKeyPersonnel.useMutation({
        onSuccess: () => {
            setIsLoading(false);
            toast({
                title: "Success",
                description: "Social media profile created at " + formatDate(Date()),
            });
        },
    });

    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        addKeyPersonnel.mutate({
            id,
            name1: name1,
            position1: position1,
            phoneNumber1: phoneNumber1,
            email1: email1,
            avatarImage1: avatarImage1,
            name2: name2,
            position2: position2,
            phoneNumber2: phoneNumber2,
            email2: email2,
            avatarImage2: avatarImage2,
            name3: name3,
            position3: position3,
            phoneNumber3: phoneNumber3,
            email3: email3,
            avatarImage3: avatarImage3,
        });

    }

    return (
        <section>
            <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl bg-background">
                <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
                    <div className="flex flex-col justify-center max-w-5xl w-full  space-y-12">
                        <article>
                            <span className="inline-flex items-center text-primary rounded-xl">
                                <span className="font-mono text-sm" aria-hidden="true">
                                    01
                                </span>
                            </span>
                            <div className="mt-3 text-3xl tracking-tighter text-primary">
                                Welcome! Let&apos;s get started.
                            </div>
                            <div className="mt-4 text-primary/80">
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
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Key Personnel 1 Name
                                </label>
                                <Input
                                    placeholder="John Doe"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={name1}
                                    onChange={(e) => setName1(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Key Personnel 1 Position
                                </label>
                                <Input
                                    placeholder="CEO"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={position1}
                                    onChange={(e) => setPosition1(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Key Personnel 1 Phone Number
                                </label>
                                <Input
                                    placeholder="1234567890"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={phoneNumber1}
                                    onChange={(e) => setPhoneNumber1(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Key Personnel 1 Email
                                </label>
                                <Input
                                    placeholder="@gmail.com"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={email1}
                                    onChange={(e) => setEmail1(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Key Personnel 1 Avatar Image
                                </label>
                                <Input
                                    placeholder="https://"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={avatarImage1}
                                    onChange={(e) => setAvatarImage1(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Key Personnel 2 Name
                                </label>
                                <Input
                                    placeholder="John Doe"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={name2}
                                    onChange={(e) => setName2(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Key Personnel 2 Position
                                </label>
                                <Input
                                    placeholder="CEO"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={position2}
                                    onChange={(e) => setPosition2(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Key Personnel 2 Phone Number
                                </label>
                                <Input
                                    placeholder="1234567890"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={phoneNumber2}
                                    onChange={(e) => setPhoneNumber2(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Key Personnel 2 Email
                                </label>
                                <Input
                                    placeholder="@gmail.com"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={email2}
                                    onChange={(e) => setEmail2(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Key Personnel 2 Avatar Image
                                </label>
                                <Input
                                    placeholder="https://"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={avatarImage2}
                                    onChange={(e) => setAvatarImage2(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Key Personnel 3 Name
                                </label>
                                <Input
                                    placeholder="John Doe"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={name3}
                                    onChange={(e) => setName3(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                   Key Personnel 3 Position
                                </label>
                                <Input
                                    placeholder="CEO"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={position3}
                                    onChange={(e) => setPosition3(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                Key Personnel 3 Phone Number
                                </label>
                                <Input
                                    placeholder="1234567890"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={phoneNumber3}
                                    onChange={(e) => setPhoneNumber3(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">Key Personnel 3 Email</label>
                                <Input
                                    placeholder="@gmail.com"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={email3}
                                    onChange={(e) => setEmail3(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">Key Personnel 3 Avatar Image</label>
                                <Input
                                    placeholder="https://"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={avatarImage3}
                                    onChange={(e) => setAvatarImage3(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <button
                                    type="submit"
                                    className={cn(buttonVariants({ variant: "outline" }), "items-center justify-center w-full px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                    ) : (
                                        <></>
                                    )}{" "}
                                    Create Social Media Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {submitted ? (
                <div className="flex justify-center items-center gap-x-4 ">
                    <div className="border border-dashed border-primary/60 p-2 flex justify-center items-center gap-x-4 rounded-xl mt-2">
                        <button onClick={onBackClick} className={cn(buttonVariants({ variant: "outline" }), " rounded-xl w-26")}>
                            <Icons.chevronLeft className="h-5 w-5 mr-2" />
                            Back
                        </button>
                        <button onClick={onNextClick} className={cn(buttonVariants({ variant: "default" }), " rounded-xl w-26")}>
                            Next
                            <Icons.chevronRight className="h-5 w-5 ml-2" />
                        </button>
                    </div>
                </div>
            ) : (<></>)}
        </section>
    );
}
