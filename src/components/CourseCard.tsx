import { Clock, BookOpen, Star } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onPurchase: (course: Course) => void;
}

export function CourseCard({ course, onPurchase }: CourseCardProps) {
  const discount = Math.round(((course.price - course.discountedPrice) / course.price) * 100);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="h-48 w-full object-cover"
        />
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            {discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold
            ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
              course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'}`}>
            {course.level}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">4.5</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">
              ${course.discountedPrice}
            </span>
            {discount > 0 && (
              <span className="text-sm text-gray-500 line-through">
                ${course.price}
              </span>
            )}
          </div>
          <button
            onClick={() => onPurchase(course)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}