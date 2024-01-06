import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";

export const companyRouter = createTRPCRouter({

    createCompany: protectedProcedure
        .input(z.object({
            companyName: z.string(),
            image: z.string(),
            status: z.string(),
            typeOfOrganization: z.string(),
            industryOrSector: z.string(),
            sizeEmployees: z.string(),
            historyBackground: z.string(),
            missionStatementVision: z.string(),
            targetMarketCustomerBase: z.string(),
            partner: z.boolean(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.company.create({
                data: {
                    companyName: input.companyName,
                    image: input.image,
                    status: input.status,
                    typeOfOrganization: input.typeOfOrganization,
                    industryOrSector: input.industryOrSector,
                    sizeEmployees: input.sizeEmployees,
                    historyBackground: input.historyBackground,
                    missionStatementVision: input.missionStatementVision,
                    targetMarketCustomerBase: input.targetMarketCustomerBase,
                    partner: input.partner,
                    user: {
                        connect: {
                            id: ctx.session.user.id,
                        },
                    },
                },
            });
        }),

    createContact: protectedProcedure
        .input(z.object({
            address: z.string(),
            phoneNumber: z.string(),
            email: z.string(),
            website: z.string(),
            district: z.string(),
            id: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.company.update({
                where: {
                    id: input.id,
                },
                data: {
                    address: input.address,
                    phoneNumber: input.phoneNumber,
                    email: input.email,
                    website: input.website,
                    district: input.district,
                },
            });
        }),

    addTag: protectedProcedure
        .input(z.object({
            tag: z.string(),
            id: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.tags.create({
                data: {
                    name: input.tag,
                    company: {
                        connect: {
                            id: input.id,
                        },
                    }
                }
            });
        }),



    // createProfile: protectedProcedure
    //     .input(z.object({
    //         name: z.string().min(3).max(255),
    //         industry: z.string().optional(),
    //         description: z.string().optional(),
    //         partner: z.boolean(),
    //         image: z.string().optional(),
    //     }))
    //     .mutation(async ({ ctx, input }) => {
    //         return ctx.db.user.update({
    //             where: {
    //                 id: ctx.session.user.id,
    //             },
    //             data: {
    //                 companies: {
    //                     create: {
    //                         name: input.name,
    //                         industry: input.industry,
    //                         description: input.description,
    //                         partner: input.partner,
    //                         image: input.image,
    //                     },
    //                 },
    //             },
    //         });
    //     }),

    getLatestProfile: protectedProcedure
        .query(async ({ ctx }) => {
            return ctx.db.company.findFirst({
                where: {
                    userId: ctx.session.user.id,
                },
                orderBy: {
                    createdAt: "desc",
                },
            });
        }),

    addContact: protectedProcedure
        .input(z.object({
            phone: z.string().min(3).max(255),
            email: z.string(),
            address: z.string(),
            link: z.string(),
            id: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    companies: {
                        update: {
                            where: {
                                id: input.id,
                            },
                            data: {
                                contact: {
                                    create: {
                                        phone: input.phone,
                                        email: input.email,
                                        address: input.address,
                                        link: input.link,
                                    },
                                },
                            },
                        },
                    },
                },
            });
        }),

    addSocialMedia: protectedProcedure
        .input(z.object({
            name: z.string().min(3).max(255),
            logo: z.string(),
            link: z.string(),
            id: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    companies: {
                        update: {
                            where: {
                                id: input.id,
                            },
                            data: {
                                socialmedia: {
                                    create: {
                                        name: input.name,
                                        logo: input.logo,
                                        link: input.link,
                                    },
                                },
                            },
                        },
                    },
                },
            });
        }),

    addTeamMember: protectedProcedure
        .input(z.object({
            name: z.string().min(3).max(255),
            phone: z.string(),
            email: z.string(),
            address: z.string(),
            position: z.string(),
            image: z.string(),
            id: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    companies: {
                        update: {
                            where: {
                                id: input.id,
                            },
                            data: {
                                teammembers: {
                                    create: {
                                        name: input.name,
                                        phone: input.phone,
                                        email: input.email,
                                        address: input.address,
                                        position: input.position,
                                        image: input.image,
                                    },
                                },
                            },
                        },
                    },
                },
            });
        }),

    createDemoProfile: protectedProcedure
        .input(z.object({
            name: z.string().min(3).max(255),
            industry: z.string(),
            description: z.string(),
            partner: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    company: {
                        create: {
                            name: input.name,
                            industry: input.industry,
                            description: input.description,
                            partner: input.partner,
                        },
                    },
                },
            });
        }),

    addInfo2: protectedProcedure
        .input(z.object({
            mainProduct: z.string(),
            descriptionOfProducts: z.string(),
            financialsRevenueModel: z.string(),
            facebook: z.string(),
            twitter: z.string(),
            linkedin: z.string(),
            companyValuesCulture: z.string(),
            id: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.company.update({
                where: {
                    id: input.id
                },
                data: {
                    mainProduct: input.mainProduct,
                    descriptionOfProducts: input.descriptionOfProducts,
                    financialsRevenueModel: input.financialsRevenueModel,
                    facebook: input.facebook,
                    twitter: input.twitter,
                    linkedin: input.linkedin,
                    companyValuesCulture: input.companyValuesCulture,
                },
            });
        }),

    addProducts: protectedProcedure
        .input(z.object({
            id: z.string(),
            listOfProductService: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.listOfProductsServices.create({
                data: {
                    name: input.listOfProductService,
                    company: {
                        connect: {
                            id: input.id,
                        },
                    }
                },
            });
        }),

    addKeyPersonnel: protectedProcedure
        .input(z.object({
            name1: z.string(),
            position1: z.string(),
            phoneNumber1: z.string(),
            email1: z.string(),
            avatarImage1: z.string(),
            name2: z.string(),
            position2: z.string(),
            phoneNumber2: z.string(),
            email2: z.string(),
            avatarImage2: z.string(),
            name3: z.string(),
            position3: z.string(),
            phoneNumber3: z.string(),
            email3: z.string(),
            avatarImage3: z.string(),
            id: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.company.update({
                where: {
                    id: input.id
                },
                data: {
                    name1: input.name1,
                    position1: input.position1,
                    phoneNumber1: input.phoneNumber1,
                    email1: input.email1,
                    avatarImage1: input.avatarImage1,
                    name2: input.name2,
                    position2: input.position2,
                    phoneNumber2: input.phoneNumber2,
                    email2: input.email2,
                    avatarImage2: input.avatarImage2,
                    name3: input.name3,
                    position3: input.position3,
                    phoneNumber3: input.phoneNumber3,
                    email3: input.email3,
                    avatarImage3: input.avatarImage3,
                },
            });
        }),


    addAwardTestimonial: protectedProcedure
        .input(z.object({
            award1Name: z.string(),
            award1Description: z.string(),
            award2Name: z.string(),
            award2Description: z.string(),
            testimonialName1: z.string(),
            testimonialFeedback1: z.string(),
            testimonialName2: z.string(),
            testimonialFeedback2: z.string(),
            id: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.company.update({
                where: {
                    id: input.id
                },
                data: {
                    award1Name: input.award1Name,
                    award1Description: input.award1Description,
                    award2Name: input.award2Name,
                    award2Description: input.award2Description,
                    testimonialName1: input.testimonialName1,
                    testimonialFeedback1: input.testimonialFeedback1,
                    testimonialName2: input.testimonialName2,
                    testimonialFeedback2: input.testimonialFeedback2,
                },
            });
        }),



});