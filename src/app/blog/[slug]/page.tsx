
import { notFound } from 'next/navigation';
import { getBlogPosts, getPostBySlug } from '@/lib/blog';
import { compileMDX } from 'next-mdx-remote/rsc';
import { MdxComponents } from '@/components/blog/MdxComponents';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }
  
  const ogImageUrl = `https://www.praverse.ai/api/og?title=${encodeURIComponent(post.metadata.title)}`;

  return {
    title: `${post.metadata.title} | Praverse Tech`,
    description: post.metadata.excerpt,
    openGraph: {
        title: post.metadata.title,
        description: post.metadata.excerpt,
        type: 'article',
        publishedTime: post.metadata.date,
        authors: [post.metadata.author],
        url: `/blog/${post.slug}`,
        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: post.metadata.title,
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: post.metadata.title,
        description: post.metadata.excerpt,
        images: [ogImageUrl],
    }
  };
}


export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const isFounderPost = post.metadata.tags.includes('Founder Insights');

  const { content, frontmatter } = await compileMDX<{ title: string; date: string; author: string }>({
    source: post.content,
    components: MdxComponents,
    options: { parseFrontmatter: true },
  });

  const image = PlaceHolderImages.find(p => p.id === post.metadata.image);
  const authorAvatar = PlaceHolderImages.find(p => p.id === 'avatar-2');

  return (
    <article>
      <AnimatedSection as="header" className="relative bg-muted/30 py-24 md:py-40" amount={0.4}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10" />
         <div className="absolute inset-0 border-b border-white/5" />

        <div className="container relative z-10 text-center">
            {isFounderPost && (
              <AnimatedItem>
                <Badge variant="secondary" className="mb-4">Founder Insight</Badge>
              </AnimatedItem>
            )}
          <AnimatedItem className="mb-4 flex justify-center gap-2">
            {post.metadata.tags && post.metadata.tags.filter(t => t !== 'Founder Insights').map(tag => (
              <Badge key={tag} variant="outline" className="bg-background/30 text-sm backdrop-blur-sm">{tag}</Badge>
            ))}
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold md:text-5xl">{post.metadata.title}</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                {authorAvatar && <AvatarImage src={authorAvatar.imageUrl} alt={post.metadata.author} />}
                <AvatarFallback>{post.metadata.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.metadata.author}</p>
                {isFounderPost && <p className="text-xs text-muted-foreground">Founder, Praverse Tech Pvt Ltd</p>}
              </div>
            </div>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4"/>{new Date(post.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4"/>{post.readingTime}</span>
          </AnimatedItem>
        </div>
      </AnimatedSection>
      <AnimatedSection as="div" className="container prose mx-auto max-w-3xl pb-20 dark:prose-invert" amount={0.3}>
        {content}
      </AnimatedSection>

       {isFounderPost && (
        <AnimatedSection className="bg-muted/50 py-20" amount={0.35}>
            <div className="container text-center">
                <h2 className="text-2xl font-bold">Want to collaborate on the future of AI in healthcare?</h2>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Talk to Us</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/pharma-ai">Explore Our Healthcare AI Work</Link>
                    </Button>
                </div>
            </div>
        </AnimatedSection>
       )}
    </article>
  );
}
