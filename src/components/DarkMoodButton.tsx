'use client';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

export const Darkmood: React.FC = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === 'sysyem' ? systemTheme : theme;

    return (
        <div>
            {currentTheme === 'dark' ? (
                <SunIcon
                    className='h-8 w-10 cursor-pointer text-slate-900 dark:text-gray-100'
                    onClick={() => setTheme('light')}
                />
            ) : (
                <MoonIcon
                    className='h-8 w-10 cursor-pointer text-slate-900 dark:text-gray-100'
                    onClick={() => setTheme('dark')}
                />
            )}
        </div>
    );
};
