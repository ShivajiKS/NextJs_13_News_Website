import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='relative inset-x-0 bottom-0 mt-4 flex h-20 w-full items-center justify-center pb-7 font-mono text-xl font-extrabold  text-gray-900 dark:text-white'>
            <h1>©Shivaji - {new Date().getFullYear()}</h1>
        </div>
    );
};

export default Footer;
