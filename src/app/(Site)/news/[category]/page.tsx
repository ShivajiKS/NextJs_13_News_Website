import React from 'react';
import { getNewsData } from '@/lib/getNewsData';
import { NewsList } from '@/components/NewsList';
import { NewsResponse } from '@/types/newResponse';
import { Category } from '@/types/category';
import { categories } from '@/constants/categories';

type PropsTypes = {
    params: { category: Category };
};

const CategoryPage: React.FC<PropsTypes> = async ({ params: { category } }) => {
    //fetch the new data
    const news: NewsResponse = await getNewsData(category);
    return (
        <div>
            <NewsList news={news} />
        </div>
    );
};

export default CategoryPage;

export async function generateStaticParams() {
    return categories.map((category) => ({
        category: category,
    }));
}
