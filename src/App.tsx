import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CourseCard } from './components/CourseCard';
import { BlogPost } from './components/BlogPost';
import { PaymentModal } from './components/PaymentModal';
import type { Course, BlogPost as BlogPostType } from './types';

const COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced Web Development',
    description: 'Master modern web technologies and frameworks',
    price: 199,
    discountedPrice: 149,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    instructor: 'John Doe',
    duration: '12 weeks',
    level: 'Advanced',
  },
  {
    id: '2',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the principles of great user interface design',
    price: 149,
    discountedPrice: 99,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    instructor: 'Jane Smith',
    duration: '8 weeks',
    level: 'Beginner',
  },
  {
    id: '3',
    title: 'Data Science Essentials',
    description: 'Introduction to data analysis and machine learning',
    price: 299,
    discountedPrice: 249,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    instructor: 'Mike Johnson',
    duration: '16 weeks',
    level: 'Intermediate',
  },
];

const BLOG_POSTS: BlogPostType[] = [
  {
    id: '1',
    title: 'The Future of Online Learning',
    content: 'Explore how AI and VR are transforming education...',
    author: 'Sarah Wilson',
    publishDate: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
  },
  {
    id: '2',
    title: 'Tips for Successful Remote Learning',
    content: 'Master the art of learning from home with these strategies...',
    author: 'David Brown',
    publishDate: '2024-03-14',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
  },
];

function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-900 via-teal-800 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6 text-white">
              Discover the Universe of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">
                Scientific Learning
              </span>
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
              Embark on a journey through cutting-edge courses designed to transform your understanding of science and technology
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200 font-semibold">
                Explore Courses
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-cyan-300 text-cyan-300 rounded-lg hover:bg-cyan-300/10 transition-colors duration-200 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Featured Courses */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onPurchase={setSelectedCourse}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest from Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {selectedCourse && (
        <PaymentModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}

export default App;