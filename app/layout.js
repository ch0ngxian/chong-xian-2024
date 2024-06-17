import "./globals.css";

export const metadata = {
  title: "Chong Xian Goh - Multi-hyphenate Software Engineer",
  description: "Hi, I am Chong Xian. I design and develop nice product.",
  metadataBase: new URL("https://www.chongxian.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/images/share.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
