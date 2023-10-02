import React from 'react';
import { NewsList } from '@/components/NewsList';
import { categories } from '@/constants/categories';
import { getNewsData } from '@/lib/getNewsData';
import { NewsResponse } from '@/types/newResponse';

type propsTypes = {
    searchParams?: { item: string };
};

const SearchPage: React.FC<propsTypes> = async ({ searchParams }) => {
    console.log(searchParams?.item);
    const news: NewsResponse = await getNewsData(
        'general',
        searchParams?.item,
        true
    );
    return (
        <div>
            <h1>
                Search Results for :{' '}
                <span className='underline decoration-orange-400 decoration-2'>
                    {searchParams?.item}
                </span>
            </h1>
            <NewsList news={news} />
        </div>
    );
};

export default SearchPage;
