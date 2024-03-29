import "./globals.css";
import { poppins } from "../../public/fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "./provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <ToastContainer
          theme="colored"
          style={{ width: "80%" }}
          rtl={false}
          hideProgressBar={true}
        />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
