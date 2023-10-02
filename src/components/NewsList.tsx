import React from 'react';
import { Article } from './Article';
import { NewsResponse } from '@/types/newResponse';

type PropsTypes = {
    news: NewsResponse;
};

export const NewsList: React.FC<PropsTypes> = ({ news }) => {
    return (
        <main className='grid grid-cols-1 gap-10 px-3 pt-8 md:grid-cols-2 md:p-6 lg:grid-cols-3'>
            {news?.data?.map((item) => (
                <Article key={item.title} article={item} />
            ))}
        </main>
    );
};
