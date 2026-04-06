import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { blogPosts } from "@/lib/data"
import { getArticleForSlug, getBlogImage } from "@/lib/blog-articles"
import { BlogArticleContent } from "./article-content"

interface Props {
  params: Promise<{
    slug: string
  }>
}

/* Generate SEO Metadata */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Article Not Found | PixoraNest",
      description: "The requested blog article could not be found.",
    }
  }

  const article = getArticleForSlug(slug)
  const heroImage = article?.heroImage || getBlogImage(slug)

  return {
    title: `${post.title} | PixoraNest Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: heroImage,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
  }
}

/* Static Blog Routes */
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

/* Blog Article Page */
export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const article = getArticleForSlug(slug)
  const heroImage = article?.heroImage || getBlogImage(slug)

  return (
    <BlogArticleContent
      post={post}
      article={article}
      heroImage={heroImage}
      slug={slug}
    />
  )
}