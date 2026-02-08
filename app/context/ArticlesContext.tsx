"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Article } from "@/app/types/article";

type ArticlesContextType = {
    articles: Article[];
    setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
};

const ArticlesContext = createContext<ArticlesContextType | null>(null);

export function ArticlesProvider({ children }: { children: React.ReactNode }) {
    const [articles, setArticles] = useState<Article[]>([]);
    const [initialized, setInitialized] = useState(false);


 useEffect(() => {
  const stored = localStorage.getItem("articles");
  if (stored) {
    setArticles(JSON.parse(stored));
  }
  setInitialized(true)
}, []);


    useEffect(() => {
        if(!initialized) return
        localStorage.setItem("articles", JSON.stringify(articles));
    }, [articles , initialized]);

    return (
        <ArticlesContext.Provider value={{ articles, setArticles }}>
            {children}
        </ArticlesContext.Provider>
    );
}

export function useArticles() {
    const context = useContext(ArticlesContext);
    if (!context) {
        throw new Error("useArticles must be used inside ArticlesProvider");
    }
    return context;
}
