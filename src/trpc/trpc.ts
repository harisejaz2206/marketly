import { initTRPC } from "@trpc/server";

/**
 * Initializes the TRPC context and creates an instance for defining TRPC routes and procedures.
 * This module exports the router and publicProcedure instances for defining routes and procedures.
 * @module trpcInitialization
 * @exports router - The TRPC router instance for defining routes.
 * @exports publicProcedure - The TRPC procedure instance for defining public procedures.
 */
const t = initTRPC.context().create();

export const router = t.router;
export const publicProcedure  = t.procedure;