'use client'
import { useState } from 'react';

// Sample data with images and categories
const articles = [
    { id: 1, title: 'The Benefits of Meditation', category: 'Mental Health', excerpt: 'Explore how meditation can improve your mental and physical well-being.', image: '/ejemplo6.jpg' },
    { id: 2, title: 'How to Maintain a Balanced Diet', category: 'Nutrition', excerpt: 'Tips for keeping a balanced and healthy diet.', image: '/ejemplo6.jpg' },
    { id: 3, title: 'Regular Exercise: Key to a Healthy Life', category: 'Fitness', excerpt: 'The importance of regular exercise and how to start a routine.', image: '/ejemplo6.jpg' },
    { id: 4, title: 'The Importance of Sleep for Health', category: 'Sleep', excerpt: 'How sleep affects your health and tips for improving sleep quality.', image: '/ejemplo6.jpg' },
    { id: 5, title: 'How to Reduce Work Stress', category: 'Stress Management', excerpt: 'Techniques for managing and reducing work-related stress.', image: '/ejemplo6.jpg' },
    { id: 6, title: 'The Effects of Stress on Physical Health', category: 'Stress Management', excerpt: 'Impact of chronic stress on the body and ways to mitigate it.', image: '/ejemplo6.jpg' },
    { id: 7, title: 'Benefits of Proper Hydration', category: 'Hydration', excerpt: 'The importance of staying hydrated and its effects on your health.', image: '/ejemplo6.jpg' },
    { id: 8, title: 'How to Combat Mental Fatigue', category: 'Mental Health', excerpt: 'Strategies to overcome mental fatigue and improve your focus.', image: '/ejemplo6.jpg' },
    { id: 9, title: 'Foods that Boost the Immune System', category: 'Nutrition', excerpt: 'Discover which foods can help strengthen your immune system.', image: '/ejemplo6.jpg' },
    { id: 10, title: 'The Connection Between Mental and Physical Health', category: 'Wellness', excerpt: 'Explore how mental and physical health are interconnected.', image: '/ejemplo6.jpg' },
    { id: 11, title: 'The Role of Gut Health in Overall Wellness', category: 'Nutrition', excerpt: 'Understanding the impact of gut health on your overall well-being.', image: '/ejemplo6.jpg' },
    { id: 12, title: 'Yoga for Stress Relief', category: 'Fitness', excerpt: 'How yoga can help in managing stress and improving flexibility.', image: '/ejemplo6.jpg' },
    { id: 13, title: 'Healthy Eating Habits for a Busy Lifestyle', category: 'Nutrition', excerpt: 'Tips for maintaining healthy eating habits even with a hectic schedule.', image: '/ejemplo6.jpg' },
    { id: 14, title: 'How to Build a Balanced Exercise Routine', category: 'Fitness', excerpt: 'Creating a well-rounded exercise routine for optimal health.', image: '/ejemplo6.jpg' },
    { id: 15, title: 'The Impact of Screen Time on Sleep', category: 'Sleep', excerpt: 'How excessive screen time affects your sleep and ways to improve it.', image: '/ejemplo6.jpg' },
    { id: 16, title: 'Mindfulness Techniques for Daily Life', category: 'Mental Health', excerpt: 'Incorporating mindfulness practices into your daily routine.', image: '/ejemplo6.jpg' },
    { id: 17, title: 'Benefits of Strength Training', category: 'Fitness', excerpt: 'How strength training contributes to overall health and fitness.', image: '/ejemplo6.jpg' },
    { id: 18, title: 'The Connection Between Diet and Mental Health', category: 'Nutrition', excerpt: 'Exploring how diet affects mental health and mood.', image: '/ejemplo6.jpg' },
    { id: 19, title: 'Managing Anxiety through Breathing Exercises', category: 'Mental Health', excerpt: 'Using breathing techniques to manage anxiety and stress.', image: '/ejemplo6.jpg' },
    { id: 20, title: 'Healthy Snack Ideas for Weight Loss', category: 'Nutrition', excerpt: 'Nutritious snacks that can help with weight management.', image: '/ejemplo6.jpg' },
    { id: 21, title: 'The Benefits of Regular Stretching', category: 'Fitness', excerpt: 'Why stretching is important for maintaining flexibility and preventing injury.', image: '/ejemplo6.jpg' },
    { id: 22, title: 'Understanding Sleep Disorders', category: 'Sleep', excerpt: 'An overview of common sleep disorders and their treatment options.', image: '/ejemplo6.jpg' },
    { id: 23, title: 'How to Create a Relaxing Bedtime Routine', category: 'Sleep', excerpt: 'Establishing a bedtime routine to improve sleep quality.', image: '/ejemplo6.jpg' },
    { id: 24, title: 'Stress Reduction Techniques for Busy Professionals', category: 'Stress Management', excerpt: 'Effective stress reduction strategies for professionals with demanding schedules.', image: '/ejemplo6.jpg' },
    { id: 25, title: 'Hydration and Exercise: Why It Matters', category: 'Hydration', excerpt: 'The importance of staying hydrated before, during, and after exercise.', image: '/ejemplo6.jpg' },
    { id: 26, title: 'The Importance of Mental Health Days', category: 'Mental Health', excerpt: 'Why taking mental health days is crucial for overall well-being.', image: '/ejemplo6.jpg' },
    { id: 27, title: 'Balancing Work and Personal Life', category: 'Stress Management', excerpt: 'Strategies for achieving a healthy work-life balance.', image: '/ejemplo6.jpg' },
    { id: 28, title: 'How to Maintain a Healthy Posture', category: 'Fitness', excerpt: 'Tips for improving and maintaining good posture throughout the day.', image: '/ejemplo6.jpg' },
    { id: 29, title: 'Foods That Support Heart Health', category: 'Nutrition', excerpt: 'Nutrient-rich foods that can help promote heart health.', image: '/ejemplo6.jpg' },
    { id: 30, title: 'Mindful Eating Practices', category: 'Nutrition', excerpt: 'How practicing mindful eating can improve your relationship with food.', image: '/ejemplo6.jpg' },
    { id: 31, title: 'How to Combat Seasonal Affective Disorder', category: 'Mental Health', excerpt: 'Understanding and managing seasonal affective disorder (SAD).', image: '/ejemplo6.jpg' },
    { id: 32, title: 'The Role of Nutrition in Preventing Chronic Diseases', category: 'Nutrition', excerpt: 'How a healthy diet can help prevent chronic illnesses.', image: '/ejemplo6.jpg' },
    { id: 33, title: 'The Science of Sleep Cycles', category: 'Sleep', excerpt: 'Understanding sleep cycles and their impact on health.', image: '/ejemplo6.jpg' },
    { id: 34, title: 'Fitness Routines for All Ages', category: 'Fitness', excerpt: 'Creating exercise routines suitable for different age groups.', image: '/ejemplo6.jpg' },
    { id: 35, title: 'The Connection Between Stress and Weight Gain', category: 'Stress Management', excerpt: 'How stress can lead to weight gain and ways to manage it.', image: '/ejemplo6.jpg' },
    { id: 36, title: 'Effective Stress Management Techniques for Students', category: 'Stress Management', excerpt: 'Strategies for students to manage academic and personal stress.', image: '/ejemplo6.jpg' },
    { id: 37, title: 'Improving Mental Clarity through Nutrition', category: 'Nutrition', excerpt: 'Foods and nutrients that can help improve mental clarity and focus.', image: '/ejemplo6.jpg' },
    { id: 38, title: 'The Impact of Physical Activity on Mental Health', category: 'Fitness', excerpt: 'How regular physical activity can benefit mental health.', image: '/ejemplo6.jpg' },
    { id: 39, title: 'Understanding and Managing Chronic Fatigue', category: 'Mental Health', excerpt: 'What causes chronic fatigue and strategies for management.', image: '/ejemplo6.jpg' },
    { id: 40, title: 'The Role of Vitamin D in Immune Health', category: 'Nutrition', excerpt: 'How vitamin D supports immune function and overall health.', image: '/ejemplo6.jpg' },
  ];
  

const categories = ['All', 'Mental Health', 'Nutrition', 'Fitness', 'Sleep', 'Stress Management', 'Hydration', 'Wellness'];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Health Articles</h1>
        <div className="flex flex-wrap gap-4 mb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredArticles.map(article => (
          <div key={article.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-2">Category: <span className="font-medium">{article.category}</span></p>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <a href={`/articles/${article.id}`} className="text-blue-500 hover:underline">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
