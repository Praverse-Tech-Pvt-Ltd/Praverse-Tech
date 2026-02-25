
'use client'
import { Post } from "@/lib/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "../ui/badge";
import { AnimatedItem, AnimatedSection } from "@/components/common/AnimatedSection";

interface InsightsProps {
    founderPost?: Post;
    otherPosts: Post[];
}

export function Insights({ founderPost, otherPosts }: InsightsProps) {
    if (!founderPost && otherPosts.length === 0) {
        return null;
    }

    return (
        <AnimatedSection className="py-20 md:py-28 bg-background" staggerChildren={0.15}>
            <div className="container">
                <AnimatedItem className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">Insights & Research</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                        From our blog, the latest in AI, robotics, and industry transformation.
                    </p>
                </AnimatedItem>

                <div className="grid lg:grid-cols-3 gap-8">
                    {founderPost && (
                        <AnimatedItem direction="up" className="lg:col-span-3">
                            <Link href={`/blog/${founderPost.slug}`} className="block group">
                                <Card className="grid md:grid-cols-2 overflow-hidden border-border/40 bg-card transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1">
                                    {(() => {
                                        const imageMeta = PlaceHolderImages.find(p => p.id === founderPost.metadata.image);
                                        if (!imageMeta) return null;
                                        return (
                                            <div className="relative h-64 md:h-full w-full">
                                                <Image
                                                    src={imageMeta.imageUrl}
                                                    alt={founderPost.metadata.title}
                                                    fill
                                                    sizes="(min-width: 768px) 50vw, 100vw"
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                            </div>
                                        );
                                    })()}
                                    <div className="flex flex-col p-8">
                                        <Badge variant="default" className="w-fit mb-4">Founder's Insight</Badge>
                                        <CardTitle className="text-3xl font-bold group-hover:text-primary transition-colors font-headline">{founderPost.metadata.title}</CardTitle>
                                        <CardDescription className="mt-4 text-lg text-muted-foreground flex-grow">{founderPost.metadata.excerpt}</CardDescription>
                                        <CardFooter className="p-0 pt-6 text-sm text-muted-foreground flex justify-between items-center">
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4"/>{new Date(founderPost.metadata.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4"/>{founderPost.readingTime}</span>
                                            </div>
                                            <span className="hidden sm:flex items-center gap-2 font-semibold text-primary">
                                                Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </CardFooter>
                                    </div>
                                </Card>
                            </Link>
                        </AnimatedItem>
                    )}
                    
                    {otherPosts.map(post => {
                        const image = PlaceHolderImages.find(p => p.id === post.metadata.image);
                        return (
                            <AnimatedItem key={post.slug} className="lg:col-span-1">
                                <Link href={`/blog/${post.slug}`} className="block group h-full">
                                    <Card className="flex h-full flex-col overflow-hidden border-border/40 bg-card transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
                                        {image && (
                                            <div className="relative h-48">
                                                <Image
                                                    src={image.imageUrl}
                                                    alt={post.metadata.title}
                                                    fill
                                                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                                                    className="object-cover"
                                                    data-ai-hint={image.imageHint}
                                                />
                                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                            </div>
                                        )}
                                        <CardHeader className="flex-grow">
                                            <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors leading-tight">{post.metadata.title}</CardTitle>
                                            <CardDescription className="text-base mt-2">{post.metadata.excerpt}</CardDescription>
                                        </CardHeader>
                                        <CardFooter className="text-sm text-muted-foreground pb-4 px-6">
                                            <div className="flex items-center gap-4">
                                                 <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4"/>{new Date(post.metadata.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                                 <span className="flex items-center gap-1.5"><Clock className="h-4 w-4"/>{post.readingTime}</span>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            </AnimatedItem>
                        );
                    })}
                </div>
                 <AnimatedItem className="text-center mt-16">
                    <Link href="/blog" className="text-lg font-semibold text-primary inline-flex items-center gap-2 group">
                        View All Insights <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </AnimatedItem>
            </div>
        </AnimatedSection>
    );
}
