import { Category } from '@/types/category';
import { gql } from 'graphql-request';
import { sortNewsByImages } from './sortNewsByImages';

export const getNewsData = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    const query = gql`
        query myQuery(
            $access_key: String!
            $categories: String!
            $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                categories: $categories
                countries: "us,in"
                keywords: $keywords
                limit: "100"
                offset: "0"
                sort: "published_desc"
            ) {
                data {
                    author
                    category
                    country
                    description
                    image
                    language
                    published_at
                    source
                    title
                    url
                }
                pagination {
                    count
                    limit
                    offset
                    total
                }
            }
        }
    `;
    // cache: isDynamic ? 'no-cache' : 'default',

    // api call with caching and revalidation
    const res = await fetch(
        `https://pratovecchio.stepzen.net/api/plundering-mink/__graphql`,
        {
            method: 'POST',

            next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
            },
            body: JSON.stringify({
                query,
                variables: {
                    access_key: process.env.MEDIA_STACK_API_KEY,
                    categories: category,
                    keywords: keywords,
                },
            }),
        }
    );

    //parsing the data
    const newsResponse = await res.json();

    //sort the news information based on with images and without images
    const news = sortNewsByImages(newsResponse.data.myQuery);

    return news;
};
