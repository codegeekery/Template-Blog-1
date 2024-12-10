'use client'
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function PaginationControls({ currentPage, hasNextPage, length, LIMIT }) {
  const router = useRouter(); // Usamos useRouter para navegar programáticamente

  // Calcular el número total de páginas
  const lastPage = Math.ceil(length / LIMIT);

  const handleNextPage = () => {
    if (hasNextPage) {
      // Redirige a la siguiente página sin recargar la página
      router.push(`/Articles?page=${currentPage + 1}`);
    }
  };

  return (
    <div className="flex justify-center items-center mt-8 gap-10">
      {/* Botón Previous */}
      {currentPage > 1 && (
        <Button
          variant="black"
          onClick={() => router.push(`/Articles?page=${currentPage - 1}`)} // Navega a la página anterior
        >
          Previous
        </Button>
      )}

      {/* Mostrar el número de la página actual y el total */}
      <span className="text-lg font-medium">{`Page ${currentPage} of ${lastPage}`}</span>

      {/* Botón Next */}
      <Button
        variant="black"
        disabled={!hasNextPage} // Deshabilita el botón si no hay siguiente página
        onClick={handleNextPage} // Llama a la función que navega
      >
        Next
      </Button>
    </div>
  );
}
