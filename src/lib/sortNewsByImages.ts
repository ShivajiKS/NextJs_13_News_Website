export const sortNewsByImages = (news: NewsResponse) => {
    const newsWithImages = news.data.filter((item) => item.image !== null);
    const newsWithOutImages = news.data.filter((item) => item.image === null);

    const sortedNewsResponse = {
        pagination: news.pagination,
        data: [...newsWithImages, ...newsWithOutImages],
    };
    return sortedNewsResponse;
};

//
