import React from 'react';
import ReadMoreButton from './ReadMoreButton';
import { Article as ArticleType } from '@/types/newResponse';
import LiveTimeStamp from './LiveTimeStamp';

type PropsTypes = {
    article: ArticleType;
};

export const Article: React.FC<PropsTypes> = ({ article }) => {
    return (
        <article className='flex flex-col rounded-lg bg-slate-100 shadow-sm transition-all duration-200 ease-out hover:scale-105 hover:bg-slate-200 hover:text-gray-950 hover:shadow-lg dark:bg-slate-800 dark:text-white'>
            {article.image && (
                <img
                    src={article.image}
                    alt='Not Image Found..'
                    loading='lazy'
                    className='h-56 w-full rounded-t-lg object-cover shadow-md  '
                />
            )}
            <div className='m-3 flex flex-1 flex-col'>
                <div className='flex flex-1 flex-col '>
                    <h2 className='line-clamp-2 font-serif font-bold '>
                        {article.title}
                    </h2>
                    <section className='mt-1.5 flex-1'>
                        <p className='line-clamp-3 text-sm'>
                            {article.description}
                        </p>
                    </section>
                    <footer className='mt-1.5 flex flex-1 justify-end text-xs '>
                        <p>{article.source} - </p>
                        <div>
                            <LiveTimeStamp time={article.published_at} />
                        </div>
                    </footer>
                </div>

                {/* read more button */}
                <ReadMoreButton article={article} />
            </div>
        </article>
    );
};
