import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const companyRouter = createTRPCRouter({


  addCompany: protectedProcedure
    .input(z.object({
      nID: z.string(),
      name: z.string(),
      avatar: z.string(),
      status: z.string(),
      partner: z.string(),
      typeOfOrganization: z.string(),
      industry: z.string(),
      size: z.string(),
      historyBackground: z.string(),
      missionStatementVision: z.string(),
      targetMarketCustomerBase: z.string(),
      product: z.string(),
      descriptionOfProducts: z.string(),
      financialsRevenueModel: z.string(),
      companyValuesCulture: z.string(),
      tags: z.array(z.string()),
      listOfProductsServices: z.array(z.string()),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          company: {
            create: {
              nID: input.nID,
              name: input.name,
              avatar: input.avatar,
              status: input.status,
              partner: input.partner,
              typeOfOrganization: input.typeOfOrganization,
              industry: input.industry,
              size: input.size,
              historyBackground: input.historyBackground,
              missionStatementVision: input.missionStatementVision,
              targetMarketCustomerBase: input.targetMarketCustomerBase,
              product: input.product,
              descriptionOfProducts: input.descriptionOfProducts,
              financialsRevenueModel: input.financialsRevenueModel,
              companyValuesCulture: input.companyValuesCulture,
              tags: input.tags,
              listOfProductsServices: input.listOfProductsServices
            }
          }

        },
      });
    }),


});
