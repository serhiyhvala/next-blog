import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@config/queryClient";

export default function App({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {/* @ts-ignore*/}
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}
