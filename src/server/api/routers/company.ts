import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";

export const companyRouter = createTRPCRouter({
    createProfile: protectedProcedure
        .input(z.object({
            name: z.string().min(3).max(255),
            industry: z.string(),
            description: z.string(),
            partner: z.string(),
            image: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.create({
                data: {
                    company: {
                        create: {
                            name: input.name,
                            industry: input.industry,
                            description: input.description,
                            partner: input.partner,
                            image: input.image,
                        },
                    },
                },
            });
        }),

    addContact: protectedProcedure
        .input(z.object({
            phone: z.string().min(3).max(255),
            email: z.string(),
            address: z.string(),
            link: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    company: {
                        create: {
                            phone: input.phone,
                            email: input.email,
                            address: input.address,
                            link: input.link,
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
                            logo: input.logo,
                            link: input.link,
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
                            phone: input.phone,
                            email: input.email,
                            address: input.address,
                            position: input.position,
                            image: input.image,
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
});