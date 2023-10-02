'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { categories } from '@/constants/categories';
import { Navlink } from './Navlink';

export const Navlinks: React.FC = () => {
    const isActive = (path: string) => {
        const pathName = usePathname();
        return pathName?.split('/').pop() === path;
    };

    return (
        <nav className='mx-auto grid max-w-6xl grid-cols-4 gap-4 border-b-2 pb-6 text-xs md:grid-cols-7 md:pb-10 md:text-sm'>
            {categories.map((item) => (
                <Navlink key={item} category={item} isActive={isActive(item)} />
            ))}
        </nav>
    );
};
