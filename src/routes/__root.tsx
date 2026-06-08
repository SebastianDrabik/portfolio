import {HeadContent, Scripts, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtoolsPanel} from '@tanstack/react-router-devtools'
import {TanStackDevtools} from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import {Header} from "#/components/Header.tsx";
import {Footer} from "#/components/Footer.tsx";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: 'Sebastian Drabik • Software Engineer',
            },
        ],
        links: [
            {
                rel: 'stylesheet',
                href: appCss,
            },
            {
                rel: 'icon',
                href: '/icon/favicon.ico'
            }
        ],
    }),
    shellComponent: RootDocument,
})

function RootDocument({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <HeadContent/>
        </head>
        <body className="bg-gray-800 text-gray-900 font-jetbrains-mono font-bold">
        <Header/>
        {children}
        <TanStackDevtools
            config={{
                position: 'bottom-right',
            }}
            plugins={[
                {
                    name: 'Tanstack Router',
                    render: <TanStackRouterDevtoolsPanel/>,
                },
            ]}
        />
        <Footer/>
        <Scripts/>
        </body>
        </html>
    )
}
