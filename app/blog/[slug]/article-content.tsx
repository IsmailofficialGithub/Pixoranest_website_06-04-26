"use client"

import { useState, useEffect, useCallback } from "react"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"

import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  Check,
  ChevronRight,
  Linkedin,
  Facebook,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
  BarChart3,
  Code2,
  Shield,
  Settings,
  GitBranch,
  FileText,
  Rocket,
  Filter,
  CalendarDays,
  Package,
  Megaphone,
  BookOpen
} from "lucide-react"

import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/animations"

import { cn } from "@/lib/utils"

import type { BlogArticle, ArticleSection } from "@/lib/blog-articles"

import { blogPosts } from "@/lib/data"
import { getBlogImage } from "@/lib/blog-articles"



function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}



import type { ReactNode } from "react"

const iconMap: Record<string, ReactNode> = {
  Shield: <Shield className="h-5 w-5" />,
  Settings: <Settings className="h-5 w-5" />,
  GitBranch: <GitBranch className="h-5 w-5" />,
  FileText: <FileText className="h-5 w-5" />,
  Rocket: <Rocket className="h-5 w-5" />,
  Filter: <Filter className="h-5 w-5" />,
  Calendar: <CalendarDays className="h-5 w-5" />,
  Package: <Package className="h-5 w-5" />,
  Megaphone: <Megaphone className="h-5 w-5" />
}

interface BlogArticleContentProps {
  post: (typeof blogPosts)[number]
  article: BlogArticle | null
  heroImage: string
  slug: string
}
export function BlogArticleContent({
  post,
  article,
  heroImage,
  slug
}: BlogArticleContentProps) {

  const [activeSection, setActiveSection] = useState("")
  const [copied, setCopied] = useState(false)
  const handleScroll = useCallback(() => {
    if (!article) return
    const sections = article.tableOfContents.map((item) => item.id)
    let current = ""
    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id
        }

      }

    }

    setActiveSection(current)

  }, [article])



  useEffect(() => {

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [handleScroll])



  const copyLink = () => {

    navigator.clipboard.writeText(window.location.href)

    setCopied(true)

    setTimeout(() => setCopied(false), 2000)

  }
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : ""



  const shareText = encodeURIComponent(post.title)



  const relatedPosts = article
    ? blogPosts.filter((p) =>
        article.relatedSlugs.includes(p.slug)
      )
    : blogPosts
        .filter((p) => p.slug !== slug)
        .slice(0, 3)



  return (
    <div className="pt-24">

      {/* Hero Section */}

      <section className="px-4 pb-8 pt-12 sm:px-6 lg:px-8">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl"
        >

          {/* Back Link */}

          <motion.div variants={fadeInUp} className="mb-8">

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >

              <ArrowLeft className="h-4 w-4" />

              Back to Blog

            </Link>

          </motion.div>



          {/* Tags */}

          <motion.div variants={fadeInUp} className="mb-4 flex flex-wrap gap-2">

            {(article?.tags || [post.category]).map((tag) => (

              <span
                key={tag}
                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>

            ))}

          </motion.div>



          {/* Title */}

          <motion.h1
            id="article-title"
            variants={fadeInUp}
            className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
          >
            {post.title}
          </motion.h1>



          {/* Subtitle */}

          <motion.p
            variants={fadeInUp}
            className="mb-6 text-lg text-muted-foreground"
          >
            {article?.subtitle || post.excerpt}
          </motion.p>



          {/* Author & Meta */}

          <motion.div
            variants={fadeInUp}
            className="mb-8 flex flex-wrap items-center gap-4 border-b border-border pb-6 text-sm text-muted-foreground"
          >

            <div className="flex items-center gap-2">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary">

                <User className="h-4 w-4" />

              </div>

              <div>

                <p className="font-medium text-foreground">
                  {post.author}
                </p>

                <p className="text-xs">
                  {article?.authorRole || "AI Automation Experts"}
                </p>

              </div>

            </div>



            <span className="hidden h-4 w-px bg-border sm:block" />



            <span className="flex items-center gap-1.5">

              <Calendar className="h-3.5 w-3.5" />

              {post.date}

            </span>



            <span className="hidden h-4 w-px bg-border sm:block" />



            <span className="flex items-center gap-1.5">

              <Clock className="h-3.5 w-3.5" />

              {post.readTime}

            </span>

          </motion.div>

        </motion.div>

      </section>



      {/* Featured Image */}

<section
  aria-labelledby="featured-image"
  className="px-4 pb-12 sm:px-6 lg:px-8"
>
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border"
  >
  <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border">

    <Image
      src={heroImage}
      alt={post.title}
      width={1200}
      height={600}
      className="w-full h-auto object-cover rounded-2xl"
      priority
    />

  </div>
  </motion.div>
</section>


{/* Content Area with Sidebar */}

<section
  aria-labelledby="blog-content"
  id="blog-content"
  className="px-4 pb-20 sm:px-6 lg:px-8"
>
  <div className="mx-auto max-w-7xl">

    <div className="flex gap-10 lg:gap-12">

      {/* Sidebar - Table of Contents */}

      {article && (
        <aside
          aria-label="Table of Contents"
          className="hidden w-64 shrink-0 lg:block"
        >
          <div className="sticky top-24">

            <motion.nav
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card/50 p-5"
            >

              <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">

                <BookOpen className="h-4 w-4 text-primary" />

                On This Page

              </h2>

              <ul className="flex flex-col gap-1">

                {article.tableOfContents.map((item) => (

                  <li key={item.id}>

                    <a
                      href={`#${item.id}`}
                      aria-current={
                        activeSection === item.id ? "true" : undefined
                      }
                      className={cn(
                        "block rounded-lg px-3 py-2 text-xs font-medium leading-snug transition-all",
                        activeSection === item.id
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-card hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </a>

                  </li>

                ))}

              </ul>

            </motion.nav>

          </div>
        </aside>
      )}

            {/* Main Article Content */}

<article
  aria-labelledby="article-title"
  className="min-w-0 flex-1"
>
  {article ? (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="flex flex-col gap-16"
    >
      {article.sections.map((section) => (
        <ArticleSectionBlock key={section.id} section={section} />
      ))}
    </motion.div>
  ) : (
    <FallbackArticle post={post} />
  )}

  {/* CTA Section */}

  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="mt-16 overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center sm:p-12"
  >

    <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
      Ready to automate your WhatsApp messaging?
    </h2>

    <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
      Get started with LeadNest and transform your customer communication
      using AI-powered WhatsApp automation.
    </p>

    <div className="flex flex-wrap items-center justify-center gap-4">

      <Link
        href="/contact"
        className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
      >
        Book a Demo
      </Link>

      <Link
        href="/contact"
        className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-card"
      >
        Contact Our Team
      </Link>

    </div>

  </motion.div>


  {/* Share Buttons */}

  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8"
  >

    <span className="text-sm font-medium text-muted-foreground">
      Found this article helpful? Share it with your network.
    </span>

    <ShareButtons
      shareUrl={shareUrl}
      shareText={shareText}
      copyLink={copyLink}
      copied={copied}
    />

  </motion.div>


  {/* Related Articles */}

  {relatedPosts.length > 0 && (

    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-16"
    >

      <motion.h2
        variants={fadeInUp}
        className="mb-8 text-2xl font-bold text-foreground"
      >
        Related Articles
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {relatedPosts.map((rp) => (

          <motion.div key={rp.slug} variants={fadeInUp}>

            <Link
              href={`/blog/${rp.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:border-primary/30"
            >

              <div className="relative aspect-video overflow-hidden">

                <Image
                  src={getBlogImage(rp.slug)}
                  alt={`${rp.title} - PixoraNest Blog`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                />

              </div>

              <div className="flex flex-1 flex-col p-4">

                <span className="mb-2 inline-flex w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {rp.category}
                </span>

                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  {rp.title}
                </h3>

                <p className="flex-1 text-xs leading-relaxed text-muted-foreground">
                  {rp.excerpt}
                </p>

                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Read Article
                  <ChevronRight className="h-3 w-3" />
                </span>

              </div>

            </Link>

          </motion.div>

        ))}

      </div>

    </motion.section>

  )}

</article>
          </div>
        </div>
      </section>
    </div>
  )
}
/* ─── Share Buttons ─── */

function ShareButtons({
  shareUrl,
  shareText,
  copyLink,
  copied,
}: {
  shareUrl: string
  shareText: string
  copyLink: () => void
  copied: boolean
}) {
  const encodedUrl = encodeURIComponent(shareUrl)

  return (
    <div className="flex items-center gap-2">

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Share this article on LinkedIn"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
      >
        <Linkedin className="h-3.5 w-3.5" />
      </a>

      {/* X / Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Share this article on X"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
      >
        <XIcon className="h-3.5 w-3.5" />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Share this article on Facebook"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
      >
        <Facebook className="h-3.5 w-3.5" />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${shareText}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Share this article on WhatsApp"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
      >
        <MessageCircle className="h-3.5 w-3.5" />
      </a>

      {/* Copy Link */}
      <button
        onClick={copyLink}
        aria-label="Copy article link"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-green-500" />
        ) : (
          <ExternalLink className="h-3.5 w-3.5" />
        )}
      </button>

    </div>
  )
}
/* ─── Article Section Renderer ─── */
function ArticleSectionBlock({ section }: { section: ArticleSection }) {
  return (
    <motion.section
      variants={fadeInUp}
      id={section.id}
      className="scroll-mt-24"
    >
      {/* Section Title */}
      <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
        {section.title}
      </h2>
 {section.image && (
  <div className="my-10 overflow-hidden rounded-xl shadow-lg">
    <Image
      src={section.image}
      alt={section.title}
      width={1200}
      height={600}
      className="rounded-xl object-cover"
    />
  </div>
)}


  {section.content && (
  <div
    className="prose prose-invert max-w-none prose-p:leading-relaxed prose-strong:text-primary prose-strong:font-semibold"
    dangerouslySetInnerHTML={{ __html: section.content }}
  />
)}
      {/* Subsections */}
      {section.subsections?.map((sub, i) => (
        <div key={`${section.id}-sub-${i}`} className="mb-6">
          <h3 className="mb-3 text-lg font-semibold text-foreground">
            {sub.title}
          </h3>

          <div className="flex flex-col gap-3">
            {sub.content.split("\n\n").map((p, j) => (
              <p
                key={`${section.id}-sub-${i}-p-${j}`}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}

      {/* Stats Grid */}
      {section.type === "stats" && section.stats && (
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {section.stats.map((stat, i) => (
            <div
              key={`${section.id}-stat-${i}`}
              className="rounded-xl border border-border bg-card/50 p-5"
            >
              <div className="mb-1 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                <span className="text-2xl font-bold text-primary">
                  {stat.value}
                </span>
              </div>

              <p className="mb-1 text-sm font-semibold text-foreground">
                {stat.label}
              </p>

              <p className="text-xs leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Case Studies */}
      {section.caseStudies && (
        <div className="mt-8 flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-foreground">
            Real-World Results
          </h3>

          {section.caseStudies.map((cs, i) => (
            <article
              key={`${section.id}-case-${i}`}
              className="rounded-xl border border-border bg-card/50 p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {cs.industry}
                </span>
              </div>

              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="font-semibold text-foreground">
                    Challenge:
                  </span>{" "}
                  <span className="text-muted-foreground">{cs.problem}</span>
                </div>

                <div>
                  <span className="font-semibold text-foreground">
                    Solution:
                  </span>{" "}
                  <span className="text-muted-foreground">{cs.solution}</span>
                </div>

                <div className="rounded-lg border border-green-500/10 bg-green-500/5 px-4 py-2">
                  <span className="font-semibold text-green-400">
                    Result:
                  </span>{" "}
                  <span className="text-muted-foreground">{cs.result}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
{/* Feature Cards */}
{section.type === "features" && section.features && (
  <div className="mt-2 flex flex-col gap-4">
    {section.features.map((feat, i) => {

      const IconComponent =
        feat.icon && iconMap[feat.icon]
          ? iconMap[feat.icon]
          : <Lightbulb className="h-5 w-5" />

      return (
        <div
          key={`${section.id}-feature-${i}`}
          className="flex gap-4 rounded-xl border border-border bg-card/50 p-5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {IconComponent}
          </div>

          <div>
            <h4 className="mb-1 text-sm font-semibold text-foreground">
              {feat.title}
            </h4>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {feat.description}
            </p>
          </div>
        </div>
      )
    })}
  </div>
)}
{/* Code Block */}
{section.type === "code" && section.code && (
  <section className="mt-2 overflow-hidden rounded-xl border border-border">

    <div className="flex items-center gap-2 border-b border-border bg-card/80 px-4 py-2">
      <Code2 className="h-4 w-4 text-primary" />
      <span className="text-xs font-medium text-muted-foreground">
        {section.code.language}
      </span>
    </div>

    <div className="overflow-x-auto bg-neutral-900 p-4">
      <pre className="text-xs leading-relaxed text-muted-foreground">
        <code className={`language-${section.code.language}`}>
          {section.code.code}
        </code>
      </pre>
    </div>

    <div className="border-t border-border bg-card/80 px-4 py-2">
      <p className="text-xs text-muted-foreground">
        {section.code.caption}
      </p>
    </div>

  </section>
)}


{/* Checklist */}
{section.type === "checklist" && section.checklist && (
  <div className="mt-2 flex flex-col gap-3">
    {section.checklist.map((item, i) => (
      <div
        key={`${section.id}-check-${i}`}
        className="flex gap-3 rounded-xl border border-border bg-card/50 p-4"
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />

        <p className="text-sm leading-relaxed text-muted-foreground">
          {item}
        </p>

      </div>
    ))}
  </div>
)}

{/* Pricing Stats */}
{section.type === "pricing" && section.stats && (
  <div className="mt-6 grid gap-4 sm:grid-cols-2">
    {section.stats.map((stat, i) => (
      <div
        key={`${section.id}-price-${i}`}
        className="rounded-xl border border-primary/20 bg-primary/5 p-5"
      >
        <span className="text-2xl font-bold text-primary">
          {stat.value}
        </span>

        <p className="mt-1 text-sm font-semibold text-foreground">
          {stat.label}
        </p>

        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {stat.description}
        </p>
      </div>
    ))}
  </div>
)}

</motion.section>
  )
}

/* ─── Fallback Article (for slugs without full content) ─── */
function FallbackArticle({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="flex flex-col gap-12"
    >

      {/* Overview */}

      <motion.section variants={fadeInUp}>

        <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
          Overview
        </h2>

        <p className="text-base leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          At PixoraNest, we build powerful AI automation solutions that help
          businesses streamline operations, reduce manual work, and deliver
          exceptional customer experiences. Our automation platforms help
          companies scale faster while maintaining high-quality customer
          communication.
        </p>

      </motion.section>



      {/* The Challenge */}

      <motion.section variants={fadeInUp}>

        <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
          The Challenge
        </h2>

        <p className="text-base leading-relaxed text-muted-foreground">
          Modern businesses face increasing pressure to respond faster,
          operate efficiently, and deliver personalized experiences to
          customers. Manual processes create bottlenecks that slow down
          operations and reduce customer satisfaction. Without intelligent
          automation systems, businesses struggle to scale communication
          and maintain consistent service quality.
        </p>

      </motion.section>



      {/* Our Approach */}

      <motion.section variants={fadeInUp}>

        <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
          Our Approach
        </h2>

        <p className="text-base leading-relaxed text-muted-foreground">
          PixoraNest develops AI-powered automation systems designed to
          integrate seamlessly into business workflows. Our technology
          handles repetitive tasks, automates customer communication,
          and generates insights from every interaction to improve
          operational performance.
        </p>


        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {[
            {
              title: "Instant Response",
              desc: "AI-powered systems respond to customer inquiries in under 30 seconds, 24 hours a day."
            },
            {
              title: "Smart Routing",
              desc: "Intelligent automation routes inquiries to the correct department or automated workflow."
            },
            {
              title: "Data-Driven Insights",
              desc: "Every customer interaction generates valuable data that improves performance over time."
            },
            {
              title: "Seamless Integration",
              desc: "PixoraNest solutions connect easily with CRM systems, calendars, and existing tools."
            }

          ].map((item) => (

            <div
              key={item.title}
              className="rounded-xl border border-border bg-card/50 p-5"
            >

              <h4 className="mb-1 text-sm font-semibold text-foreground">
                {item.title}
              </h4>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </motion.section>



      {/* Results */}

      <motion.section variants={fadeInUp}>

        <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
          Results & Impact
        </h2>

        <p className="text-base leading-relaxed text-muted-foreground">
          Businesses implementing PixoraNest automation platforms report
          significant improvements in efficiency, customer engagement,
          and revenue growth. Companies adopting AI automation solutions
          typically see measurable results within the first 30 days of
          deployment.
        </p>


        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {[
            {
              value: "60%",
              label: "Faster Response Times"
            },
            {
              value: "3x",
              label: "Lead Conversion Increase"
            },
            {
              value: "70%",
              label: "Operational Cost Reduction"
            }

          ].map((stat) => (

            <div
              key={stat.label}
              className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-center"
            >

              <span className="text-2xl font-bold text-primary">
                {stat.value}
              </span>

              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </motion.section>



      {/* Getting Started */}

      <motion.section variants={fadeInUp}>

        <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
          Getting Started
        </h2>

        <p className="text-base leading-relaxed text-muted-foreground">
          Ready to transform your business operations using AI automation?
          PixoraNest helps organizations identify the most impactful
          automation opportunities and implement intelligent systems that
          deliver measurable results. Our experts guide you through every
          step of implementation.
        </p>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Explore our{" "}
          <Link
            href="/solutions"
            className="text-primary font-medium hover:underline"
          >
            AI automation solutions
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            className="text-primary font-medium hover:underline"
          >
            contact our automation experts
          </Link>{" "}
          to schedule a personalized demo.
        </p>

      </motion.section>

    </motion.div>
  )
}
