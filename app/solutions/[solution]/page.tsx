import { notFound } from "next/navigation"
import { solutions } from "@/lib/data"
import {
  Phone,
  MessageCircle,
  PhoneForwarded,
  Mic,
  Share2,
  Settings,
  Bot,
} from "lucide-react"

const iconMap = {
  Phone,
  MessageCircle,
  PhoneForwarded,
  Mic,
  Share2,
  Settings,
  Bot,
}

export async function generateStaticParams() {
  return solutions.map((s) => ({
    solution: s.slug,
  }))
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ solution: string }>
}) {

  const { solution } = await params

  const data = solutions.find((s) => s.slug === solution)

  if (!data) {
    return notFound()
  }

  const Icon =
    iconMap[data.icon as keyof typeof iconMap] || Bot

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>

          <h1 className="text-3xl font-bold text-foreground">
            {data.title}
          </h1>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {data.description}
        </p>

      </div>
    </div>
  )
}