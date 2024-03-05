import { createTRPCRouter } from "~/server/api/trpc";
import { bookingRouter } from "./routers/boooking";
import { paymentRouter } from "./routers/payment";
import { contactRouting } from "./routers/contact";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  booking:bookingRouter,
  contact:contactRouting
});

// export type definition of API
export type AppRouter = typeof appRouter;
