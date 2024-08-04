'use client'

import Alert from '@/alert/aler'
import Consent from '@/consent/consent'
import Footer from '@/footer/footer'
import Header from '@/header/header'
import Article from '&/article/article'
import Main from '&/main/main'
import Fonts from '$/fonts/fonts'
import { ThemeProvider } from '$/theme/provider'
import Script from 'next/script'
import { useEffect } from 'react'
import useComponent from '$/components/useComponent'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const callCC = () => {
      let cc
      try {
        cc = (window as any).initCookieConsent()
      } catch (error) {
        console.error(error)
      }
      if (cc) {
        cc.run({})
      }
    }

    if (
      location.hostname === 'seb.io' &&
      document.cookie
        .split('; ')
        .find((row) => row.startsWith('GDS Cookie Consent'))
    ) {
      const script = document.createElement('script')
      script.src =
        'https://content.seb.se/dsc/da/launch/public/30e54a9d6c99/f9d07ef22744/launch-89d260357525.min.js'
      script.type = 'application/javascript'
      document.head.appendChild(script)

      const timer = setTimeout(() => {
        callCC()
      }, 1000)

      return () => {
        clearTimeout(timer)
      }
    }
    Fonts()
  }, [])

  useComponent([
    'theme',
    'card',
    'container',
    'divider',
    'flex',
    'img',
    'text',
    'button',
    'icon',
    'video',
    'icons',
  ])

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="theme"
          defaultTheme="system"
          enableColorScheme={false}
          enableSystem
        >
          <Main>
            <Alert />
            <Header />
            <Article>
              <gds-theme>
                <gds-grid columns="xs{1} m{3} l{3}">
                  <gds-card
                    shadow="s{xs} m{xs} l{s}"
                    radius="xs"
                    overflow="hidden"
                  >
                    <gds-flex
                      display="flex"
                      gap="0"
                      direction="column"
                      align="stretch"
                    >
                      <gds-container position="relative">
                        <gds-img
                          src="https://github.com/seb-oss/green/assets/2398447/cd458a77-13f1-495c-960c-ce23a18e5d9f"
                          ratio="1/1"
                        ></gds-img>
                        <gds-container
                          position="absolute"
                          inset="20px 20px auto auto"
                        >
                          <gds-button>
                            <gds-icon-arrow-down></gds-icon-arrow-down>
                          </gds-button>
                        </gds-container>
                      </gds-container>
                      <gds-flex
                        direction="column"
                        padding="s{xs} m{l} l{l}"
                        align="flex-start"
                        gap="l"
                      >
                        <gds-flex gap="s" direction="column">
                          <gds-text tag="h2" size="title-large">
                            James Doe
                          </gds-text>
                          <gds-text>
                            Passionate software engineer with a love for coding
                            and problem-solving.
                          </gds-text>
                        </gds-flex>
                        <gds-divider opacity="0.2"></gds-divider>
                        <gds-button>
                          Follow
                          <gds-icon-circles-three slot="lead"></gds-icon-circles-three>
                        </gds-button>
                      </gds-flex>
                    </gds-flex>
                  </gds-card>
                  <gds-card
                    shadow="l"
                    radius="m"
                    border="3xs/base300"
                    overflow="hidden"
                  >
                    <gds-flex gap="m" direction="column" padding="s">
                      <gds-container position="relative">
                        <gds-img
                          src="https://github.com/seb-oss/green/assets/2398447/dff488cc-700e-47f9-b7f7-3788eb742c11"
                          ratio="1/1"
                          radius="xs"
                        ></gds-img>
                        <gds-container
                          position="absolute"
                          inset="20px 20px auto auto"
                        >
                          <gds-button>
                            <gds-icon-arrow-down></gds-icon-arrow-down>
                          </gds-button>
                        </gds-container>
                      </gds-container>
                      <gds-flex
                        direction="column"
                        padding="s{xs} m{s} l{s}"
                        align="flex-start"
                        gap="l"
                      >
                        <gds-flex gap="s" direction="column">
                          <gds-text tag="h2" size="title-large">
                            Lorem Ipsum
                          </gds-text>
                          <gds-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </gds-text>
                        </gds-flex>
                        <gds-button>
                          Button
                          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
                        </gds-button>
                      </gds-flex>
                    </gds-flex>
                  </gds-card>
                  <gds-card radius="m" overflow="hidden">
                    <gds-flex position="relative" height="100%">
                      <gds-video
                        src="https://github.com/seb-oss/green/assets/2398447/d77a95d0-e4d7-4c49-bd95-50d0f72f1a7a"
                        fit="cover"
                        ratio="1/1"
                        events="none"
                        autoplay=""
                        muted=""
                        loop=""
                      ></gds-video>
                      <gds-card
                        position="absolute"
                        inset="50% 0px 0px 0px"
                        filter="0"
                        background="base900/0.6"
                        color="white-text"
                        mask="top"
                      >
                        <gds-flex
                          direction="column"
                          justify="flex-end"
                          padding="4xl 2xl 2xl 2xl"
                          gap="l"
                          height="100%"
                        >
                          <gds-container>
                            <gds-text size="title-large">Jane Doe</gds-text>
                            <gds-text size="body-medium">UX Designer</gds-text>
                          </gds-container>
                          <gds-flex gap="s">
                            <gds-button rank="secondary">Message</gds-button>
                            <gds-button rank="secondary">Follow</gds-button>
                          </gds-flex>
                        </gds-flex>
                      </gds-card>
                    </gds-flex>
                  </gds-card>
                </gds-grid>
              </gds-theme>
              {children}
            </Article>
            <Consent />
            <Footer />
          </Main>
        </ThemeProvider>
        <Script id="data-layer">
          {`window["dataLayer"] = {
            "pageName":"seb.io",
            "pagetype":"StandardPage",
            "language":"en",
            "environment":"prod",
            "project":"green",
            "website":"seb.io",
          };`}
        </Script>
        <Script id="show-banner">
          {`globalThis.GDS_DISABLE_VERSIONED_ELEMENTS = true`}
        </Script>
        <Script src="/core-out/index.bundle.js" />
      </body>
    </html>
  )
}
