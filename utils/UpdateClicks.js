// Función para actualizar los clics
export const updatePostClicks = async (postId) => {
  try {
    // Hacer una petición fetch al endpoint de la API
    const response = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN_DOMAIN}/api/updateClick`, {
      method: 'POST', // Tipo de petición POST
      headers: {
        'Content-Type': 'application/json', // Asegúrate de que sea JSON
      },
      body: JSON.stringify({ postId }), // Enviar el postId en el cuerpo de la petición
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Failed to update click count');
    }

    await response.json(); // Obtener la respuesta del servidor
  } catch (error) {
    console.error("Error updating clicks:", error);
  }
};
