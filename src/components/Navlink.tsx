import Link from 'next/link';
import React from 'react';

type PropsTypes = {
    category: string;
    isActive: boolean;
};
export const Navlink: React.FC<PropsTypes> = ({ category, isActive }) => {
    return (
        <>
            <Link
                href={`/news/${category}`}
                className={`cursor-pointer rounded-full p-4 text-center capitalize decoration-orange-400 decoration-2 underline-offset-8 transition-transform duration-200 ease-out hover:scale-110 hover:font-bold hover:underline active:underline dark:text-gray-100 ${
                    isActive && 'font-bold underline decoration-orange-400'
                }`}
            >
                {category}
            </Link>
        </>
    );
};
