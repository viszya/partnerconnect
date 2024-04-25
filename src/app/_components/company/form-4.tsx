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

export function Form4({ onNextClick, onBackClick }: FormProps) {
    const { toast } = useToast();
    const [submitted, setSubmitted] = useState(true);
    const [mainProduct, setMainProduct] = useState("");
    const [descriptionOfProducts, setDescriptionOfProducts] = useState("");
    const [listOfProductsServices, setListOfProductsServices] = useState<string[]>([""]);
    const [financialsRevenueModel, setFinancialsRevenueModel] = useState("");
    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [companyValuesCulture, setCompanyValuesCulture] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const id = api.company.getLatestProfile.useQuery().data?.id;

    const addInfo2 = api.company.addInfo2.useMutation({
        onSuccess: () => {
            setIsLoading(false);
            toast({
                title: "Success",
                description: "Team member created at " + formatDate(Date()),
            });
        },
    });
    const addProducts = api.company.addProducts.useMutation({
        onSuccess: () => {
            setIsLoading(false);
            toast({
                title: "Success",
                description: "Contact details created at " + formatDate(Date()),
            });
        },
    });


    const addListOfProductsServices = () => {
        setListOfProductsServices([...listOfProductsServices, ""]);
    }

    const removeListOfProductsServices = (index: number) => {
        const updatedListOfProductsServices = [...listOfProductsServices];
        updatedListOfProductsServices.splice(index, 1);
        setListOfProductsServices(updatedListOfProductsServices);
    }

    const updateListOfProductsServices = (index: number, value: string) => {
        const updatedListOfProductsServices = [...listOfProductsServices];
        updatedListOfProductsServices[index] = value;
        setListOfProductsServices(updatedListOfProductsServices);
    }

    function onSubmit() {
        setIsLoading(true);
        setSubmitted(true);
        addInfo2.mutate({
            id: id!,
            mainProduct,
            descriptionOfProducts,
            financialsRevenueModel,
            facebook,
            twitter,
            linkedin,
            companyValuesCulture,
        });
        listOfProductsServices.forEach((listOfProductsService) => {
            addProducts.mutate({
                id,
                listOfProductsService,
            });
        });
    }

    return (
        <section>
            <div className="flex flex-col mt-5 p-5 border border-secondary rounded-xl bg-background">
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
                                    mainProduct
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={mainProduct}
                                    onChange={(e) => setMainProduct(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    descriptionOfProducts
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={descriptionOfProducts}
                                    onChange={(e) => setDescriptionOfProducts(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    listOfProductsServices
                                </label>
                                <div className="flex flex-col gap-y-3">
                                    {listOfProductsServices.map((listOfProductsService, index) => (
                                        <div className="flex flex-row gap-x-2">
                                            <Input
                                                key={index}
                                                type="text"
                                                placeholder="listOfProductsService"
                                                value={listOfProductsService}
                                                className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                                onChange={(e) => {
                                                    updateListOfProductsServices(index, e.target.value);
                                                }}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className={cn(buttonVariants({ variant: "destructive" }), "w-20 rounded-xl ")}
                                                onClick={() => removeListOfProductsServices(index)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className={cn(buttonVariants({ variant: "outline" }), " w-60 items-center justify-center px-6 py-2.5 text-center text-secondary duration-200 bg-primary border-2 border-primary rounded-xl inline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none focus-visible:outline-primary text-sm focus-visible:ring-primary")}
                                        onClick={addListOfProductsServices}
                                    >
                                        Add listOfProductsService
                                    </button>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    financialsRevenueModel
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={financialsRevenueModel}
                                    onChange={(e) => setFinancialsRevenueModel(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    facebook
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={facebook}
                                    onChange={(e) => setFacebook(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    twitter
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={twitter}
                                    onChange={(e) => setTwitter(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    linkedin
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={linkedin}
                                    onChange={(e) => setLinkedin(e.target.value)}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block mb-3 text-sm font-medium text-primary/90">
                                    companyValuesCulture
                                </label>
                                <Input
                                    placeholder="iPhone"
                                    className="rounded-xl px-6 py-3 placeholder:text-primary/40 border-primary/20"
                                    type="text"
                                    value={companyValuesCulture}
                                    onChange={(e) => setCompanyValuesCulture(e.target.value)}
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
