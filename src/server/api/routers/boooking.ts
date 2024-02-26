import { type InvoicePropType } from './../../../components/Invoice/Invoice';
import { createTRPCRouter, publicProcedure } from "../trpc";
import { resend } from "../../../utils/resend"
import {BookingEmail} from '../../../Email/BookingInfo'

export const bookingRouter = createTRPCRouter({
    create: publicProcedure
        .input((bookinInfo) => { return bookinInfo as InvoicePropType })
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
            
            await resend.emails.send({
                from: "bu@resend.dev",
                to: "delivered@resend.dev",
                subject: "Welcome to Toronto Cleaners!",
                react: BookingEmail({verificationCode:"65465"})
              });
            return bookingCreate.id;            
        })
})