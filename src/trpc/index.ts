import { authRouter } from "./auth.router";
import { publicProcedure, router } from "./trpc";

/**
 * Defines the application router configuration using TRPC.
 * This configuration specifies the available routes and procedures for the application's TRPC server.
 * @module trpcConfig
 * @exports appRouter - The configured application router.
 * @exports AppRouter - The type representing the application router.
 */

export const appRouter = router({
    auth: authRouter
})

export type AppRouter = typeof appRouter;