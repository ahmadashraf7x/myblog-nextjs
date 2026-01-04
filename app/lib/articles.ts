import { Article } from "@/app/types/article";
export function getArticles(): Article[] {
    const stored = localStorage.getItem("articles");
    if (!stored) {
        return [];
    }
    try {
        return JSON.parse(stored);
    } catch {
        return [];
    }
}

export function addArticle(
    title: string,
    category: string,
    content: string
): Article[] {
    if (!title.trim() || !category.trim() || !content.trim()) {
        return getArticles();
    }

    const newArticle: Article = {
        id: Date.now(),
        title: title.trim(),
        category: category.trim(),
        content: content.trim(),
    };

    const articles = getArticles();
    const updated = [...articles, newArticle];

    localStorage.setItem("articles", JSON.stringify(updated));

    return updated;
}


export function deleteArticle(id: number): Article[] {
    const articles = getArticles();

    const updated = articles.filter((article) => article.id !== id);

    localStorage.setItem("articles", JSON.stringify(updated));

    return updated;
}

export function getArticleById(id: number): Article | null {
    const articles = getArticles();
    return articles.find((article) => article.id === id) || null;
}

export function updateArticle(
    id: number,
    title: string,
    category: string,
    content: string
): Article[] {
    if (!title.trim() || !category.trim() || !content.trim()) {
        return getArticles();
    }

    const articles = getArticles();

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

    localStorage.setItem("articles", JSON.stringify(updatedList));
    return updatedList;
}

