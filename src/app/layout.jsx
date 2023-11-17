import styles from "@/styles/scss/style.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Topbar from "@/components/topbar/Topbar";

export const metadata = {
  title: "Welcome to Famous Care - Empowering Lives",
  description: "Welcome to Famous Care - Empowering Lives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          <div className="container">
            <div className="wrapper">
              <Topbar />
              <Navbar />
              {children}
            </div>
            <Footer />
          </div>
        </>
      </body>
    </html>
  );
}
