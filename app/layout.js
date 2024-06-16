import "./globals.css";

export const metadata = {
  title: "Chong Xian Goh - Multi-hyphenate Software Engineers",
  description: "Hi, I am Chong Xian. I design and develop nice product.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
