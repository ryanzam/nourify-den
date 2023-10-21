"use client"

import { QueryClientProvider, QueryClient } from "react-query"

interface IProps {
    children: React.ReactNode
}

const client = new QueryClient()

const QueryProvider = ({ children }: IProps) => {

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider