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

export function Form5({ onNextClick, onBackClick }: FormProps) {
    const { toast } = useToast();
    const [award1Name, setAward1Name] = useState("");
    const [award1Description, setAward1Description] = useState("");
    const [award2Name, setAward2Name] = useState("");
    const [award2Description, setAward2Description] = useState("");
    const [testimonialName1, setTestimonialName1] = useState("");
    const [testimonialFeedback1, setTestimonialFeedback1] = useState("");
    const [testimonialName2, setTestimonialName2] = useState("");
    const [testimonialFeedback2, setTestimonialFeedback2] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const id = api.company.getLatestProfile.useQuery().data?.id;

    const addAwardTestimonial = api.company.addAwardTestimonial.useMutation({
        onSuccess: () => {
            setIsLoading(false);
            toast({
                title: "Success",
                description: "Team member created at " + formatDate(Date()),
            });
        },
    });

    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        addAwardTestimonial.mutate({
            id,
            award1Name,
            award1Description,
            award2Name,
            award2Description,
            testimonialName1,
            testimonialFeedback1,
            testimonialName2,
            testimonialFeedback2,
        });
    }

    return (
        <section>
            <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl">
                <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
                    <div className="flex flex-col justify-center max-w-5xl w-full space-y-12">
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
                                    Award 1 Name
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={award1Name}
                                    onChange={(e) => setAward1Name(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Award 1 Description
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={award1Description}
                                    onChange={(e) => setAward1Description(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Award 2 Name
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={award2Name}
                                    onChange={(e) => setAward2Name(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Award 2 Description
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={award2Description}
                                    onChange={(e) => setAward2Description(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Testimonial 1 Name
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={testimonialName1}
                                    onChange={(e) => setTestimonialName1(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Testimonial 1 Feedback
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={testimonialFeedback1}
                                    onChange={(e) => setTestimonialFeedback1(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Testimonial 2 Name
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={testimonialName2}
                                    onChange={(e) => setTestimonialName2(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    Testimonial 2 Feedback
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={testimonialFeedback2}
                                    onChange={(e) => setTestimonialFeedback2(e.target.value)}
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
                                    Create Team Member
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
