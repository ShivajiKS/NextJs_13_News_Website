export type Pagination = {
    count: number;
    limit: number;
    offset: number;
    total: number;
};

export type Article = {
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
};

export type NewsResponse = {
    pagination: Pagination;
    data: Article[];
};
