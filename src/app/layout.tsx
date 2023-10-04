import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/components/Provider';
const inter = Inter({ subsets: ['latin'] });
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Live News',
    description: 'Live News ',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={`${inter.className} bg-gray-200 transition-all duration-700 dark:bg-zinc-900`}
            >
                <Provider>
                    <Header />
                    <div className='mx-auto max-w-6xl px-5 '>{children}</div>
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
