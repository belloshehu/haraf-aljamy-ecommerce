import Header from "./_components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "./GlobalRedux/provider";
import ToasterContext from "./context/ToasterContext";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
import AuthContextProvider from "./context/AuthContext";
import { Footer } from "./_components/Footer";

export const metadata = {
  title: "Aljamay - home",
  description:
    "Aljamay specialises in various types of spices and confectionery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={poppins.className}>
          <Providers>
            <Header />
            <main>
              <ToasterContext />
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
      </AuthContextProvider>
    </html>
  );
}
