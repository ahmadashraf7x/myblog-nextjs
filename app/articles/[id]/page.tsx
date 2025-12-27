"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getArticleById, } from "@/app/lib/articles";
import { Article } from "@/app/types/article";

export default function ArticleDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (!id) return;
    const found = getArticleById(Number(id));
    setArticle(found);
  }, [id]);

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


      <article className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {article.title}
        </h1>

        <p className="inline-block px-3 py-1 mb-3 rounded-full bg-gray-100 text-xs uppercase tracking-wide text-gray-600">
          {article.category || "Uncategorized"}
        </p>

        <p className="text-sm md:text-base text-gray-800 leading-relaxed whitespace-pre-line">
          {article.content}
        </p>

        <div className="mt-3">
          <Link
            href={`/articles/edit/${article.id}`}
            className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Edit
          </Link>
        </div>

      </article>
    </div>
  );
}


