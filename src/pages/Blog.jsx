import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogPosts';
import { ArrowRight, Calendar, User } from 'lucide-react';
import PageHeroByRoute from '@/components/HeroImage';

const Blog = () => {
  const featuredPost = blogPosts[1]; // Manually select a featured post
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog | Dewata Home Living</title>
        <meta
          name="description"
          content="Explore insights, tips, and news on Bali's property investment market from the experts at Dewata Home Living."
        />
      </Helmet>

      <PageHeroByRoute />

      <div className="bg-[var(--dark-black)] text-white py-16">
        <div className="container-custom">
          {/* Featured Post */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-10 text-center text-[var(--dewata-gold)] font-playfair-display">
              Featured Post
            </h2>
            <Link to={`/blog/${featuredPost.slug}`} className="block group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center glass-card rounded-2xl overflow-hidden p-4 md:p-0">
                <div className="aspect-video md:aspect-auto md:h-full overflow-hidden rounded-xl">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-8">
                  <h3 className="text-3xl md:text-4xl font-playfair-display text-white mb-4 group-hover:text-[var(--dewata-gold)] transition-colors">
                    {featuredPost.title}
                  </h3>
                  <div className="flex items-center gap-6 text-sm text-white/60 mb-4">
                    <span className="flex items-center gap-2">
                      <User size={16} /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} /> {formatDate(featuredPost.date)}
                    </span>
                  </div>
                  <p className="text-lg text-white/80 font-body mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <span className="font-semibold text-[var(--dewata-gold)] flex items-center gap-2">
                    Read More
                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          </motion.section>

          {/* All Posts */}
          <section>
            <h2 className="text-4xl md:text-5xl mb-10 text-center text-[var(--dewata-gold)] font-playfair-display">
              All Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block group glass-card rounded-2xl overflow-hidden h-full flex flex-col"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-playfair-display text-white mb-3 group-hover:text-[var(--dewata-gold)] transition-colors flex-grow">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-white/60 mb-4">
                        <span className="flex items-center gap-1.5">
                          <User size={14} /> {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} /> {formatDate(post.date)}
                        </span>
                      </div>
                      <p className="text-base text-white/70 font-body mb-4">
                        {post.excerpt}
                      </p>
                      <span className="font-semibold text-sm text-[var(--dewata-gold)] mt-auto flex items-center gap-1">
                        Read More
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blog;