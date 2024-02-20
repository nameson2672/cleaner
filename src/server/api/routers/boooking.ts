import { type InvoicePropType } from './../../../components/Invoice/Invoice';
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const bookingRouter = createTRPCRouter({
    create: publicProcedure
        .input((bookinInfo: unknown) => { return bookinInfo as InvoicePropType })
        .mutation(async ({ ctx, input }) => {
            console.log(input)
            console.log(JSON.stringify(input.packageData))
            const bookingCreate = await ctx.db.booking.create({
                data: {
                    address: input.address,
                    cleaningDate: input.dateTimeToArrive,
                    packages: JSON.stringify(input.packageData),
                    createdBy: {
                        connectOrCreate: {
                            where: {
                                email: input.email
                            },
                            create: {
                                email: input.email,
                                name: input.name
                            }
                        }
                    }
                }
            });
        }
        )
})