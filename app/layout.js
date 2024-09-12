import "./globals.css";
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
})


export const metadata = {
  title: "AEIS tech homepage",
  description: "Homepage for AEIS technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
