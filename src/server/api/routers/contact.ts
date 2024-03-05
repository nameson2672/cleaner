import { type ContactUsDataType } from "~/types/ContactUs";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const contactRouting = createTRPCRouter({
    notify: publicProcedure
    .input((customerInquary)=> {return customerInquary as ContactUsDataType})
    .mutation(async ({ctx, input}): Promise<void> =>{
        const costomerData  = await ctx.db.customerMessage.create({
            data:{
                email:input.email,
                name:input.name,
                message:input.message
            }
        });
        return;
    })
})