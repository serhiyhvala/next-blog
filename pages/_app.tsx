import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@providers/queryClient";
import {GlobalContextProvider} from "@providers/globalContext";

export default function App({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalContextProvider>
                {/* @ts-ignore*/}
                <Component {...pageProps} />
            </GlobalContextProvider>
        </QueryClientProvider>
    )
}
