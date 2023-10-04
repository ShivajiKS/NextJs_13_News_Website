import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Darkmood } from './DarkMoodButton';
import { Navlinks } from './Navlinks';
import { SearchBar } from './SearchBar';

export const Header: React.FC = () => {
    return (
        <header>
            <div className='grid grid-cols-3 items-center p-7'>
                <Bars3Icon className='h-8 w-10 cursor-pointer text-slate-900 dark:text-gray-100' />
                <Link href='/' prefetch={false} className='lg:ml-10'>
                    <h1 className='text-center font-serif text-2xl dark:text-gray-100 lg:text-4xl'>
                        The{' '}
                        <span className='decoration-6 underline decoration-orange-400'>
                            News
                        </span>{' '}
                        Hub
                    </h1>
                </Link>
                <div className='flex items-center justify-end space-x-5'>
                    <div>
                        <Darkmood />
                    </div>
                    {/* <button className='hidden rounded-full bg-slate-900 px-4 py-2 text-white dark:bg-slate-800 md:block lg:px-8 lg:py-4'>
                        Subscribe Now
                    </button> */}
                </div>
            </div>
            {/* navlinks */}
            <Navlinks />

            {/* search bar  */}
            <SearchBar />
        </header>
    );
};
