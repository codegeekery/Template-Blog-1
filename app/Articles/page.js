'use client'
import { useState } from 'react';

// Datos de ejemplo con imágenes y categorías
const articles = [
    { id: 1, title: 'Los Beneficios de la Meditación', category: 'Salud Mental', excerpt: 'Explora cómo la meditación puede mejorar tu bienestar mental y físico.', image: '/ejemplo6.jpg' },
    { id: 2, title: 'Cómo Mantener una Dieta Equilibrada', category: 'Nutrición', excerpt: 'Consejos para mantener una dieta equilibrada y saludable.', image: '/ejemplo6.jpg' },
    { id: 3, title: 'Ejercicio Regular: Clave para una Vida Saludable', category: 'Fitness', excerpt: 'La importancia del ejercicio regular y cómo comenzar una rutina.', image: '/ejemplo6.jpg' },
    { id: 4, title: 'La Importancia del Sueño para la Salud', category: 'Sueño', excerpt: 'Cómo el sueño afecta tu salud y consejos para mejorar la calidad del sueño.', image: '/ejemplo6.jpg' },
    { id: 5, title: 'Cómo Reducir el Estrés Laboral', category: 'Manejo del Estrés', excerpt: 'Técnicas para gestionar y reducir el estrés relacionado con el trabajo.', image: '/ejemplo6.jpg' },
    { id: 6, title: 'Los Efectos del Estrés en la Salud Física', category: 'Manejo del Estrés', excerpt: 'Impacto del estrés crónico en el cuerpo y formas de mitigarlo.', image: '/ejemplo6.jpg' },
    { id: 7, title: 'Beneficios de una Hidratación Adecuada', category: 'Hidratación', excerpt: 'La importancia de mantenerse hidratado y sus efectos en tu salud.', image: '/ejemplo6.jpg' },
    { id: 8, title: 'Cómo Combatir la Fatiga Mental', category: 'Salud Mental', excerpt: 'Estrategias para superar la fatiga mental y mejorar tu enfoque.', image: '/ejemplo6.jpg' },
    { id: 9, title: 'Alimentos que Refuerzan el Sistema Inmunológico', category: 'Nutrición', excerpt: 'Descubre qué alimentos pueden ayudar a fortalecer tu sistema inmunológico.', image: '/ejemplo6.jpg' },
    { id: 10, title: 'La Conexión Entre la Salud Mental y Física', category: 'Bienestar', excerpt: 'Explora cómo la salud mental y física están interconectadas.', image: '/ejemplo6.jpg' },
    { id: 11, title: 'El Papel de la Salud Intestinal en el Bienestar General', category: 'Nutrición', excerpt: 'Entender el impacto de la salud intestinal en tu bienestar general.', image: '/ejemplo6.jpg' },
    { id: 12, title: 'Yoga para Aliviar el Estrés', category: 'Fitness', excerpt: 'Cómo el yoga puede ayudar a manejar el estrés y mejorar la flexibilidad.', image: '/ejemplo6.jpg' },
    { id: 13, title: 'Hábitos Alimenticios Saludables para un Estilo de Vida Ocupado', category: 'Nutrición', excerpt: 'Consejos para mantener hábitos alimenticios saludables incluso con una agenda apretada.', image: '/ejemplo6.jpg' },
    { id: 14, title: 'Cómo Crear una Rutina de Ejercicio Equilibrada', category: 'Fitness', excerpt: 'Crear una rutina de ejercicio bien equilibrada para una salud óptima.', image: '/ejemplo6.jpg' },
    { id: 15, title: 'El Impacto del Tiempo Frente a la Pantalla en el Sueño', category: 'Sueño', excerpt: 'Cómo el tiempo excesivo frente a la pantalla afecta tu sueño y formas de mejorarlo.', image: '/ejemplo6.jpg' },
    { id: 16, title: 'Técnicas de Atención Plena para la Vida Diaria', category: 'Salud Mental', excerpt: 'Incorporar prácticas de atención plena en tu rutina diaria.', image: '/ejemplo6.jpg' },
    { id: 17, title: 'Beneficios del Entrenamiento de Fuerza', category: 'Fitness', excerpt: 'Cómo el entrenamiento de fuerza contribuye a la salud y el fitness general.', image: '/ejemplo6.jpg' },
    { id: 18, title: 'La Conexión Entre la Dieta y la Salud Mental', category: 'Nutrición', excerpt: 'Explorando cómo la dieta afecta la salud mental y el estado de ánimo.', image: '/ejemplo6.jpg' },
    { id: 19, title: 'Gestionar la Ansiedad a través de Ejercicios de Respiración', category: 'Salud Mental', excerpt: 'Utilizar técnicas de respiración para gestionar la ansiedad y el estrés.', image: '/ejemplo6.jpg' },
    { id: 20, title: 'Ideas de Bocadillos Saludables para la Pérdida de Peso', category: 'Nutrición', excerpt: 'Bocadillos nutritivos que pueden ayudar en el control de peso.', image: '/ejemplo6.jpg' },
    { id: 21, title: 'Los Beneficios del Estiramiento Regular', category: 'Fitness', excerpt: 'Por qué el estiramiento es importante para mantener la flexibilidad y prevenir lesiones.', image: '/ejemplo6.jpg' },
    { id: 22, title: 'Entendiendo los Trastornos del Sueño', category: 'Sueño', excerpt: 'Una visión general de los trastornos del sueño comunes y sus opciones de tratamiento.', image: '/ejemplo6.jpg' },
    { id: 23, title: 'Cómo Crear una Rutina Relajante Antes de Dormir', category: 'Sueño', excerpt: 'Establecer una rutina antes de dormir para mejorar la calidad del sueño.', image: '/ejemplo6.jpg' },
    { id: 24, title: 'Técnicas de Reducción del Estrés para Profesionales Ocupados', category: 'Manejo del Estrés', excerpt: 'Estrategias efectivas de reducción del estrés para profesionales con horarios exigentes.', image: '/ejemplo6.jpg' },
    { id: 25, title: 'Hidratación y Ejercicio: Por Qué Es Importante', category: 'Hidratación', excerpt: 'La importancia de mantenerse hidratado antes, durante y después del ejercicio.', image: '/ejemplo6.jpg' },
    { id: 26, title: 'La Importancia de los Días de Salud Mental', category: 'Salud Mental', excerpt: 'Por qué tomar días de salud mental es crucial para el bienestar general.', image: '/ejemplo6.jpg' },
    { id: 27, title: 'Equilibrar el Trabajo y la Vida Personal', category: 'Manejo del Estrés', excerpt: 'Estrategias para lograr un equilibrio saludable entre el trabajo y la vida personal.', image: '/ejemplo6.jpg' },
    { id: 28, title: 'Cómo Mantener una Postura Saludable', category: 'Fitness', excerpt: 'Consejos para mejorar y mantener una buena postura durante todo el día.', image: '/ejemplo6.jpg' },
    { id: 29, title: 'Alimentos que Apoyan la Salud del Corazón', category: 'Nutrición', excerpt: 'Alimentos ricos en nutrientes que pueden ayudar a promover la salud del corazón.', image: '/ejemplo6.jpg' },
    { id: 30, title: 'Prácticas de Alimentación Consciente', category: 'Nutrición', excerpt: 'Cómo practicar la alimentación consciente puede mejorar tu relación con la comida.', image: '/ejemplo6.jpg' },
    { id: 31, title: 'Cómo Combatir el Trastorno Afectivo Estacional', category: 'Salud Mental', excerpt: 'Entender y gestionar el trastorno afectivo estacional (SAD).', image: '/ejemplo6.jpg' },
    { id: 32, title: 'El Papel de la Nutrición en la Prevención de Enfermedades Crónicas', category: 'Nutrición', excerpt: 'Cómo una dieta saludable puede ayudar a prevenir enfermedades crónicas.', image: '/ejemplo6.jpg' },
    { id: 33, title: 'La Ciencia de los Ciclos de Sueño', category: 'Sueño', excerpt: 'Entender los ciclos de sueño y su impacto en la salud.', image: '/ejemplo6.jpg' },
    { id: 34, title: 'Rutinas de Ejercicio para Todas las Edades', category: 'Fitness', excerpt: 'Crear rutinas de ejercicio adecuadas para diferentes grupos de edad.', image: '/ejemplo6.jpg' },
    { id: 35, title: 'La Conexión Entre el Estrés y el Aumento de Peso', category: 'Manejo del Estrés', excerpt: 'Cómo el estrés puede llevar al aumento de peso y formas de gestionarlo.', image: '/ejemplo6.jpg' },
    { id: 36, title: 'Técnicas Efectivas de Gestión del Estrés para Estudiantes', category: 'Manejo del Estrés', excerpt: 'Estrategias para que los estudiantes gestionen el estrés académico y personal.', image: '/ejemplo6.jpg' },
    { id: 37, title: 'Mejorar la Claridad Mental a través de la Nutrición', category: 'Nutrición', excerpt: 'Alimentos y nutrientes que pueden ayudar a mejorar la claridad mental y el enfoque.', image: '/ejemplo6.jpg' },
    { id: 38, title: 'El Impacto de la Actividad Física en la Salud Mental', category: 'Fitness', excerpt: 'Cómo la actividad física regular puede beneficiar la salud mental.', image: '/ejemplo6.jpg' },
    { id: 39, title: 'Entender y Gestionar la Fatiga Crónica', category: 'Salud Mental', excerpt: 'Qué causa la fatiga crónica y estrategias para gestionarla.', image: '/ejemplo6.jpg' },
    { id: 40, title: 'El Papel de la Vitamina D en la Salud Inmunológica', category: 'Nutrición', excerpt: 'Cómo la vitamina D apoya la función inmunológica y la salud en general.', image: '/ejemplo6.jpg' },
];

const categories = ['Todo', 'Salud Mental', 'Nutrición', 'Fitness', 'Sueño', 'Manejo del Estrés', 'Hidratación', 'Bienestar'];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('Todo');

  const filteredArticles = selectedCategory === 'Todo'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Artículos de Salud</h1>
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
              <p className="text-gray-600 mb-2">Categoría: <span className="font-medium">{article.category}</span></p>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <a href={`/`} className="text-blue-500 hover:underline">Leer más</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
