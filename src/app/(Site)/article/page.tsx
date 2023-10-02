import LiveTimeStamp from '@/components/LiveTimeStamp';
import { Article } from '@/types/newResponse';
import { notFound } from 'next/navigation';
import React from 'react';

type propsTypes = {
    searchParams?: Article;
};

const ArticlePage: React.FC<propsTypes> = ({ searchParams }) => {
    if (
        (searchParams && Object.entries(searchParams).length === 0) ||
        !searchParams
    ) {
        return notFound();
    }

    const article: Article = searchParams;

    return (
        <article>
            <section className='mt-8 flex flex-col px-0 pb-24 lg:flex-row lg:px-10'>
                {searchParams.image !== 'null' && (
                    <img
                        src={article.image}
                        alt={article.title}
                        className='mx-auto h-56 max-w-md rounded-lg object-cover shadow-md md:h-96 md:max-w-lg lg:max-w-xl  '
                    />
                )}
                <div className='pl-3'>
                    <h2 className='px-4 pb-2 pt-5 font-serif text-2xl capitalize underline decoration-orange-400 decoration-solid  decoration-2  underline-offset-4 '>
                        {article.title}
                    </h2>
                    <div className='mt- flex space-x-3 divide-x divide-black px-4 dark:divide-white'>
                        <h2 className='font-bold'>
                            By :
                            <span>
                                {article.author === 'null'
                                    ? 'unknown'
                                    : article.author}
                            </span>
                        </h2>
                        <h2 className='pl-4 font-bold '>
                            source : {article.source}
                        </h2>

                        <div className='pl-2'>
                            <LiveTimeStamp time={article.published_at} />
                        </div>
                    </div>
                    <p className='px-4 pt-4'>{article.description}</p>
                </div>
            </section>
        </article>
    );
};

export default ArticlePage;
