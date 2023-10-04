import { categories } from '@/constants/categories';
import { NewsResponse } from '@/types/newResponse';
import { getNewsData } from '@/lib/getNewsData';
import { NewsList } from '@/components/NewsList';

export default async function Home() {
    //fetch the new data
    const news: NewsResponse = await getNewsData(categories.join(','));
    // await new Promise((resolve, reject) => setTimeout(resolve, 10000)); //testing the loading component
    return (
        <main>
            <NewsList news={news} />
        </main>
    );
}
