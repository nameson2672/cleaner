"use server";
import type Stripe from "stripe";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";

export const paymentRouter = createTRPCRouter({
  session: publicProcedure
  .input(() => { return; })
    .mutation(async () => {
      const origin: string = headers().get("origin")!;

      // const params: Stripe.Checkout.SessionCreateParams = {
      //   submit_type: 'donate',
      //   payment_method_types: ['card'],
      //   line_items: [
      //     {
      //       quantity: 1,
      //       price_data: {
      //         currency: "cad",
      //         product_data: {
      //           name: "Custom amount donation",
      //         },
      //         unit_amount: 12 //formatAmountForStripe(20,"cad"),
      //       },
      //     }
      //   ],
      //   success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      //   cancel_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      // };

      // const checkoutSession: Stripe.Checkout.Session =
      //   await stripe.checkout.sessions.create(params);
      //   console.log(checkoutSession)
      return "checkoutSession";
    })
})