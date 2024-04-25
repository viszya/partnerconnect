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

export function Form2({ onNextClick, onBackClick }: FormProps) {
    const { toast } = useToast();
    const [submitted, setSubmitted] = useState(false);
    const [address, setAddress] = useState("456 Innovation Street, San Francisco, CA");
    const [phoneNumber, setPhoneNumber] = useState("+1 (555) 987-6543");
    const [email, setEmail] = useState("info@innovatetech.com");
    const [website, setWebsite] = useState("https://www.innovatetech.com");
    const [district, setDistrict] = useState("Bay Area");
    const [tags, setTags] = useState<string[]>([""]);
    const [isLoading, setIsLoading] = useState(false);

    const id = api.company.getLatestProfile.useQuery().data?.id;

    const createContact = api.company.createContact.useMutation({
        onSuccess: () => {
            setIsLoading(false);
            toast({
                title: "Success",
                description: "Contact details created at " + formatDate(Date()),
            });
        },
    });
    const addTag2 = api.company.addTag.useMutation({
        onSuccess: () => {
            setIsLoading(false);
            toast({
                title: "Success",
                description: "Contact details created at " + formatDate(Date()),
            });
        },
    });

    const addTag = () => {
        setTags([...tags, ""]);
    }

    const removeTag = (index: number) => {
        const updatedTags = [...tags];
        updatedTags.splice(index, 1);
        setTags(updatedTags);
    }

    const updateTag = (index: number, value: string) => {
        const updatedTags = [...tags];
        updatedTags[index] = value;
        setTags(updatedTags);
    }

    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        createContact.mutate({
            address,
            phoneNumber,
            email,
            website,
            district,
            id,
        });
        tags.forEach((tag) => {
            addTag2.mutate({
                tag,
                id,
            });
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
                                    Address
                                </label>
                                <Input
                                    placeholder="456 Innovation Street, San Francisco, CA"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={address}
                                    required
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Phone Number
                                </label>
                                <Input
                                    placeholder="+1 (555) 987-6543"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Email
                                </label>
                                <Input
                                    placeholder="info@innovatetech.com"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Website
                                </label>
                                <Input
                                    placeholder="https://www.innovatetech.com"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="url"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    District
                                </label>
                                <Input
                                    placeholder="Bay Area"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={district}
                                    onChange={(e) => setDistrict(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Tags
                                </label>
                                <div className="flex flex-col gap-y-3">
                                    {tags.map((tag, index) => (
                                        <div className="flex flex-row gap-x-2">
                                            <Input
                                                key={index}
                                                type="text"
                                                placeholder="Tag"
                                                value={tag}
                                                className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                                onChange={(e) => {
                                                    updateTag(index, e.target.value);
                                                }}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className={cn(buttonVariants({ variant: "destructive" }), "w-20 rounded-xl ")}
                                                onClick={() => removeTag(index)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className={cn(buttonVariants({ variant: "outline" }), " w-60 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                        onClick={addTag}
                                    >
                                        Add Tag
                                    </button>
                                </div>
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
                                    Create Contact
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
