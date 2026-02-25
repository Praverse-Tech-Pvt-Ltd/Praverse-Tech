
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogIdeasGenerator } from '@/components/blog/BlogIdeasGenerator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

export const metadata = {
  title: 'Blog | Praverse Tech',
  description: 'Insights and articles on AI in Pharma, Healthcare, and Technology.',
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const founderPost = posts.find(p => p.slug === 'future-of-ai-in-healthcare');
  const otherPosts = posts.filter(p => p.slug !== 'future-of-ai-in-healthcare');
  const founderAvatar = PlaceHolderImages.find(p => p.id === 'avatar-2');


  return (
    <div>
      <AnimatedSection className="bg-muted pt-24 pb-12 md:pt-32 md:pb-20" amount={0.5}>
        <div className="container text-center">
          <AnimatedItem>
          <h1 className="text-4xl font-bold md:text-5xl">From the Praverse Blog</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Insights on AI in Pharma, HealthTech, and our vision for a smarter industrial future.
          </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {founderPost && (
        <AnimatedSection className="py-20 md:pt-0 md:pb-28" amount={0.35}>
            <div className="container">
                <AnimatedItem className="mb-8 text-center">
                <h2 className="text-2xl font-bold">Founder's Corner</h2>
                </AnimatedItem>
                <Link href={`/blog/${founderPost.slug}`} className="block group">
                    <Card className="overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl md:flex">
                        <div className="relative h-64 w-full md:h-auto md:w-1/2">
                           <Image 
                                src={PlaceHolderImages.find(p => p.id === founderPost.metadata.image)?.imageUrl || ''}
                                alt={founderPost.metadata.title}
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        </div>
                        <div className="flex flex-col justify-center p-8 md:w-1/2">
                            <Badge variant="secondary" className="w-fit mb-4">Founder Insight</Badge>
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{founderPost.metadata.title}</h3>
                            <p className="mt-4 text-muted-foreground">{founderPost.metadata.excerpt}</p>
                            <div className="mt-6 flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={founderAvatar?.imageUrl} />
                                    <AvatarFallback>PS</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{founderPost.metadata.author}</p>
                                    <p className="text-sm text-muted-foreground">Founder, Praverse Tech</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Link>
            </div>
        </AnimatedSection>
      )}

      <AnimatedSection className="pb-20 md:pb-28" staggerChildren={0.12}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {otherPosts.map(post => {
                const image = PlaceHolderImages.find(p => p.id === post.metadata.image);
                return (
                  <AnimatedItem key={post.slug}>
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                    <Card className="flex flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl md:flex-row">
                      {image && (
                        <div className="relative h-48 w-full md:h-auto md:w-1/3">
                          <Image
                            src={image.imageUrl}
                            alt={post.metadata.title}
                            fill
                            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      )}
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex gap-2 mb-2">
                            {post.metadata.tags && post.metadata.tags.map(tag => (
                              <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.metadata.title}</CardTitle>
                          <CardDescription>{post.metadata.excerpt}</CardDescription>
                        </CardHeader>
                        <CardFooter className="text-xs text-muted-foreground flex justify-between">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5"/>{new Date(post.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5"/>{post.readingTime}</span>
                          </div>
                          <span className="flex items-center gap-1 group-hover:text-primary transition-colors">Read More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                        </CardFooter>
                      </div>
                    </Card>
                  </Link>
                  </AnimatedItem>
                );
              })}
            </div>
            <AnimatedItem className="lg:col-span-1 space-y-8">
                <BlogIdeasGenerator />
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
