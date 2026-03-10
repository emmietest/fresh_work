import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

const posts = [
  {
    title: "Tips to Find the Best Print on Demand Business Name Ideas",
    category: "Printec",
    date: "Feb 07",
    image: "/images/blog-1.jpg",
  },
  {
    title: "Top 10 Print on Demand Partners to Kickstart Your Business",
    category: "Lifestyle",
    date: "Feb 07",
    image: "/images/blog-2.jpg",
  },
  {
    title: "An Ultimate Guide on How to Make and Sell Merch for Creators",
    category: "Print Company",
    date: "Feb 07",
    image: "/images/blog-3.jpg",
  },
]

export function Blog() {
  return (
    <section className="bg-secondary py-20 lg:py-28" id="blog" aria-label="Latest blog posts">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Most Recent News
          </p>
          <h2 className="mt-2 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Read our latest blog posts</span>
          </h2>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-lg bg-primary px-3 py-1.5">
                  <span className="text-xs font-bold text-primary-foreground">{post.date}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {post.category}
                </span>
                <h3 className="mt-2 font-mono text-base font-bold leading-snug text-card-foreground line-clamp-2">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  Read more
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
