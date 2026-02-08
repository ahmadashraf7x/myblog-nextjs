import { Article } from "@/app/types/article";

export function addArticle(
    articles: Article[],
    title: string,
    category: string,
    content: string
): Article[] {
    if (!title.trim() || !category.trim() || !content.trim()) {
        return articles
    }

    const newArticle: Article = {
        id: Date.now(),
        title: title.trim(),
        category: category.trim(),
        content: content.trim(),
    };

    const updated = [...articles, newArticle];

    return updated
}


export function deleteArticle(articles: Article[], id: number): Article[] {

    const updated = articles.filter((article) => article.id !== id);
    return updated;
}


export function updateArticle(
    articles: Article[],
    id: number,
    title: string,
    category: string,
    content: string
): Article[] {
    if (!title.trim() || !category.trim() || !content.trim()) {
        return articles;
    }

    const updatedList = articles.map((article) =>
        article.id === id
            ? {
                ...article,
                title: title.trim(),
                category: category.trim(),
                content: content.trim(),
            }
            : article
    );
    return updatedList;
}

