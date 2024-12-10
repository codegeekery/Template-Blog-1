
import "@/app/globals.css";


export const metadata = {
  title: "Admin Panel",
  description: "Administrative dashboard for managing blog content.",
  robots: {
    index: false, // Evita que los motores de búsqueda indexen el panel
    follow: false,
  },
  icons: {
    icon: "/asset/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}