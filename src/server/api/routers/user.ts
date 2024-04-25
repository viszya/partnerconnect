import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
    updateUser: protectedProcedure
        .input(z.object({
            name: z.string().min(3).max(255),
            image: z.string(),
            sendToEmail: z.string().email(),
            department: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.user.update({
                where: {
                    id: ctx.session.user.id,
                },
                data: {
                    name: input.name,
                    image: input.image,
                    sendToEmail: input.sendToEmail,
                    department: input.department,
                },
            })
        }),
});
