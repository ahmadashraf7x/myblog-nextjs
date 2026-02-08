"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import {
  updateArticle,
} from "@/app/lib/articles";
import { Article } from "@/app/types/article";
import { useArticles } from "@/app/context/ArticlesContext";



export default function EditArticlePage() {
  const { articles, setArticles } = useArticles();
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!id) return;

    const article =
      articles.find(a => a.id === Number(id)) || null;
    if (!article) {
      setArticle(null);
      return;
    }
    setArticle(article);
    setTitle(article.title);
    setCategory(article.category);
    setContent(article.content);
  }, [id, articles]);


  function handleSave(e: FormEvent) {
    e.preventDefault();
    if (!article) return;

    setArticles(prev =>
      updateArticle(prev, article.id, title, category, content)
    ); router.push("/");
  }

  if (!article) {
    return (

      <div className="space-y-4">
        <p className="mb-4 text-red-600 font-semibold">
          Article not found.
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          ⬅ Back to blog
        </Link>
      </div>

    );
  }

  return (

    <div className="space-y-4">
      <Link
        href="/"
        className="text-sm md:text-base text-gray-600 hover:text-gray-800 flex items-center gap-1 mb-4"
      >
        <span className="text-lg">⬅</span>
        Back to articles
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Edit Article
      </h1>

      <form
        onSubmit={handleSave}
        className="bg-white rounded-xl shadow-sm p-4 md:p-6 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter article title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g. Tech, Life, Business..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your article content here..."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-green-600 text-white px-4 py-2 text-sm font-semibold hover:bg-green-700 transition-colors"
        >
          Save changes
        </button>
      </form>
    </div>
  );
}
