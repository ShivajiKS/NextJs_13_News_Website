'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Article } from '@/types/newResponse';

type PropsTypes = {
    article: Article;
};

const ReadMoreButton: React.FC<PropsTypes> = ({ article }) => {
    const router = useRouter();
    const isReadMoreButtonClick = () => {
        const queryString = Object.entries(article)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
        const url = `/article?${queryString}`;
        router.push(url);
    };

    return (
        <button
            className=' mt-1.5 inline rounded-lg bg-orange-400 px-5 py-2 text-center text-base hover:bg-orange-500 dark:text-gray-900'
            onClick={isReadMoreButtonClick}
        >
            Read more...
        </button>
    );
};

export default ReadMoreButton;
