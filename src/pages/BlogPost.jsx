import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogPosts';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" />;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const otherPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{post.title} - Dewata Home Living</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="bg-[var(--dark-black)] text-white pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-[var(--dewata-gold)] hover:underline mb-8">
              <ArrowLeft size={20} />
              Kembali ke Blog
            </Link>

            <h1 className="text-4xl md:text-6xl mb-6 leading-tight text-white font-playfair-display">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-base text-white/60 mb-8">
              <span className="flex items-center gap-2"><User size={18} /> {post.author}</span>
              <span className="flex items-center gap-2"><Calendar size={18} /> {formatDate(post.date)}</span>
            </div>

            <div className="aspect-video max-h-[500px] rounded-2xl overflow-hidden mb-12">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div 
              className="prose prose-invert max-w-none text-lg leading-relaxed font-body 
                         prose-h3:text-3xl prose-h3:font-playfair-display prose-h3:text-[var(--dewata-gold)] prose-h3:mb-4
                         prose-p:mb-6 prose-p:text-white/80
                         prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                         prose-li:text-white/80"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </motion.div>

          {/* More Articles */}
          <section className="mt-20 pt-16 border-t border-[var(--dewata-gold)]/20">
            <h2 className="text-4xl mb-10 text-center text-[var(--dewata-gold)] font-playfair-display">Artikel Lainnya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherPosts.map((otherPost) => (
                <Link key={otherPost.id} to={`/blog/${otherPost.slug}`} className="block group glass-card rounded-2xl overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img src={otherPost.image} alt={otherPost.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-playfair-display text-white mb-3 group-hover:text-[var(--dewata-gold)] transition-colors">{otherPost.title}</h3>
                    <p className="text-sm text-white/70 font-body line-clamp-2">{otherPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogPost;