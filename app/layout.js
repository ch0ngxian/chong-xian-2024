import "./globals.css";

export const metadata = {
  title: "Chong Xian Goh",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
