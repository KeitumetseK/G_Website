import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter, Montserrat, Roboto } from "next/font/google";
import "react-modern-drawer/dist/index.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/globals.css";
import ChatWidget from "@/components/molecules/ChatWidget/ChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
export const metadata = {
  title: "Gole",
  description: `Empowering Digital Future with Intelligent Cloud Solutions`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${roboto.variable}`}
        suppressHydrationWarning
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
