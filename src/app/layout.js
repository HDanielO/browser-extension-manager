import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "ExtensionHub",
  description:
    "Manage your browser extensions with ease. Toggle, filter, and customize your experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
