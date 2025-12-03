"use client";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

// 💡 شكل المقال الواحد
type Article = {
  id: number;
  title: string;
  category: string;
  content: string;
};

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
const [filterCategory, setFilterCategory] = useState("all");
    useEffect(() => {
    const stored = localStorage.getItem("articles");
    if (stored) {
      try {
        const parsed: Article[] = JSON.parse(stored);
        setArticles(parsed);
      } catch (err) {
        console.log("Error parsing articles from localStorage", err);
      }
    }
  }, []);

  const categoryOptions = Array.from(
  new Set(
    articles
      .map((article) => article.category.trim())
      .filter((cat) => cat !== "")
  )
);

  const filteredArticles = articles.filter((article) => {
  const matchesTitle = article.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    filterCategory === "all" ||
    article.category.toLowerCase() === filterCategory.toLowerCase();

  return matchesTitle && matchesCategory;
});

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!title.trim() || !category.trim() || !content.trim()) {
      return;
    }

    const newArticle: Article = {
      id: Date.now(),
      title,
      category,
      content,
    };
    setArticles((prev) => {
    const updated = [...prev, newArticle];
    localStorage.setItem("articles", JSON.stringify(updated));
    return updated;
  });
setTitle("");
    setCategory("");
    setContent("");}

   function handleDelete (id:number){
     setArticles((prev)=>{
 const updated = prev.filter((article) => article.id !== id);
    localStorage.setItem("articles", JSON.stringify(updated));
    return updated;
  });
}

  return (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
        My Blog
      </h1>
      <p className="text-sm text-gray-600">
        Create, edit, delete and browse your articles. Stored locally in your browser.
      </p>
    </div>


<div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6">
  <input
    type="text"
    placeholder="Search by title..."
    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    className="w-full md:w-52 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={filterCategory}
    onChange={(e) => setFilterCategory(e.target.value)}
  >
  <option value="all">All categories</option>

  {categoryOptions.map((cat) => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ))}
</select>
</div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-sm p-4 md:p-6 mb-6 space-y-4"
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
            className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Add Article
          </button>
        </form>

    


        <div className="mt-6 space-y-4">
          {filteredArticles.length === 0 ? (
            <p className="text-gray-500">
              No articles yet. Add your first one!
            </p>
          ) : (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-sm p-4"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {article.title}
                </h2>
                <p className="text-xs text-gray-500 mb-2">
                  Category: {article.category}
                </p>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {article.content}
                </p>
              <div className="mt-3 flex items-center gap-5" >
                  <Link
                  href={`/articles/${article.id}`}
                  className="text-sm text-blue-600 hover:underline">
                  Read more →
                </Link>

                  <Link
    href={`/articles/edit/${article.id}`}
    className="text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
  >
    Edit
  </Link>
                 <button
        onClick={() => handleDelete(article.id)}
        className="text-sm text-red-600 hover:text-red-700 font-semibold"
      >
        Delete
      </button>
      </div>
              </div>
            ))
          )}
        </div>
      </div>

  );
}

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore porro reprehenderit sint molestiae? Qui deleniti, obcaecati omnis magni enim sequi fugiat dolor, animi culpa, alias accusantium! Neque excepturi nostrum non dolores? Voluptate eveniet eaque maiores, ratione sit asperiores quam nam quisquam cupiditate eos porro doloribus nemo debitis deserunt inventore, dicta saepe quis ipsa? Culpa quas dolorem deleniti explicabo et fuga odit, officia exercitationem ullam commodi perspiciatis voluptatum alias. Corrupti minus minima, aspernatur blanditiis ad ipsam quis reiciendis quaerat tenetur voluptates et! Magni necessitatibus nihil tempore rerum id dolor molestiae, mollitia commodi distinctio aliquam suscipit dicta sapiente illo aliquid natus at.</p>