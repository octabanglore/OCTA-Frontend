import { Kanit, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ToastProvider } from "@/providers/toast-provider";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kanit",
});
const nunito_sans = Nunito_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata = {
  title: "Octa",
  description: "Octa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} ${kanit.className} ${nunito_sans.variable} custom-bg-grey100 custom-text-grey800`}
      >
        <ToastProvider />
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
