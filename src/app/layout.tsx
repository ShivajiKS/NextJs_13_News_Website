import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/components/Provider';
const inter = Inter({ subsets: ['latin'] });
import { Header } from '@/components/Header';

export const metadata: Metadata = {
    title: 'Live News',
    description: 'Live News ',
    applicationName: 'format-detection',
    // formatDetection:
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className=''>
            <body
                className={`${inter.className} bg-gray-200 transition-all duration-700 dark:bg-zinc-900`}
            >
                <Provider>
                    <Header />
                    <div className='mx-auto max-w-6xl px-5 '>{children}</div>
                </Provider>
            </body>
        </html>
    );
}
