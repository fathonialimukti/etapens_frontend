import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from "next-auth/react"
import Layout from 'components/layout';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { lightTheme, darkTheme } from 'theme';
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </NextThemesProvider>
    </SessionProvider>
  );
}

export default MyApp
