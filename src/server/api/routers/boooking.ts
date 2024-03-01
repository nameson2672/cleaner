import { type InvoicePropType } from './../../../components/Invoice/Invoice';
import { createTRPCRouter, publicProcedure } from "../trpc";
import { resend } from "../../../utils/resend"
import { BookingInfoEmail, type BookingInfoEmailProps } from '../../../Email/BookingInfo'

export const bookingRouter = createTRPCRouter({
    create: publicProcedure
        .input((bookinInfo) => { return bookinInfo as InvoicePropType })
        .mutation(async ({ ctx, input }):Promise<number> => {
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
            let totalAmount = 0;
            input.packageData.map(e => totalAmount += e.amount);
            const emailProp: BookingInfoEmailProps = {
                userFirstName: input.name,
                bookedDate: input.dateTimeToArrive,
                address: input.address,
                totalAmount,
                packageData: input.packageData
            }
            await resend.emails.send({
                from: "bu@resend.dev",
                to: "delivered@resend.dev",
                subject: "Welcome to Toronto Cleaners!",
                react: BookingInfoEmail(emailProp)
            });
            return bookingCreate.id;
        })
})