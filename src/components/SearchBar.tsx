'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const SearchBar: React.FC = () => {
    const [input, setInput] = useState<string>();
    const router = useRouter();

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!input) return;

        router.push(`/search?item=${input}`);
    };

    return (
        <form
            className='mx-auto flex max-w-6xl items-center justify-between px-5 '
            onSubmit={onSearchSubmit}
        >
            <input
                type='text'
                value={input}
                onChange={onInputChange}
                placeholder='Search Keywords'
                className='h-14 w-full flex-1 rounded-sm bg-transparent placeholder-gray-500 outline-none dark:text-orange-400'
            />
            <button
                type='submit'
                disabled={!input}
                className='text-orange-400 disabled:text-gray-400'
            >
                search
            </button>
        </form>
    );
};
