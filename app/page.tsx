import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import { client, urlFor } from '@/lib/sanity'

async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...3] {
      title,
      slug,
      mainImage,
      publishedAt
    }
  `)
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <>
      <Navbar />
      <Hero />
      <Services />

      {/* Blog Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Latest Insights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <div key={post.slug.current} className="border border-slate-800 rounded-xl overflow-hidden">
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage).width(600).url()}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {new Date(post.publishedAt).toDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
