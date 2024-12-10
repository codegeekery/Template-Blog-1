import { client } from '@/sanity/lib/client'; // Asegúrate de que esta ruta sea correcta

// Función para actualizar los clics
export const updatePostClicks = async (postId) => {
    try {  
      // Actualiza el número de clics
      await client
        .patch(postId)
        .setIfMissing({ clicks: 0 })  // Establece 0 si el campo clicks no existe
        .inc({ clicks: 1 })           // Incrementa los clics en 1
        .commit(); // Realiza la actualización
  
      console.log(`Post ${postId} updated with new click count.`);
    } catch (error) {
      console.error("Error updating clicks:", error);
    }
  };
  