import type { Metadata } from "next";
import { Inter } from "next/font/google";
import"./global.scss"
import Navbar from "./components/Navbar";
import ReduxProvider from "./redux/Provider";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default:"Italian Pizza Sydney",
    template : '%s | "Italian Pizza Sydney'
  },
  description: '"Italian Pizza Sydney a taste of Italy directly to your place!',
  icons:{
    icon:"/favicon-32x32.png",
    apple:"/apple-touch-icon.png",
    shortcut:"/apple-touch-icon.png",
  },
  other:{
    rel:'/favicon.ico'
  },
  manifest:"/site.webmanifest"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`  ${inter.className}` } >
        <ReduxProvider>
          <Navbar/>
          <div className="w-full bg-zinc-900 ">
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
