import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/app/Components/Menu/Menu"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mindful - Health and Wellness",
  description: "Mindful is a health and wellness website that helps your mental and physical health.",
  icons: {
    icon: [
      '/mindIcon.png',
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
