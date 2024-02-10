"use client"

import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { trpc } from "@/trpc/client";
import { httpBatchLink } from "@trpc/client";


/**
 * Higher-order component responsible for providing necessary context providers for state management.
 * It initializes and manages the state for the query client and TRPC client,
 * then wraps its children with the QueryClientProvider and trpc.Provider to propagate the initialized clients.
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped and provided with context.
 * @returns {React.ReactNode} Rendered component with context providers.
 */
const Providers = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
                fetch(url, options) {
                    return fetch(url, {
                        ...options,
                        credentials: 'include',
                    })
                }
            })
        ]
    }))

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}

export default Providers;