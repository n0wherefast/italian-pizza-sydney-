import type { Metadata } from "next";
import { Inter } from "next/font/google";
import"./global.scss"
import Navbar from "./components/Navbar";
import ReduxProvider from "./redux/Provider";
import { client } from "./data/sanity";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = 30 //revalidate at 30 seconds

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


const querySpecialPack =`*[_type=='special_pack']`;
const queryEvent =`*[_type=='event']`;


async function getData(query:string) {
const data = await client.fetch(query)
return data;
}

export default async function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {

  const dataPack = await getData(querySpecialPack)
  const dataEvent = await getData(queryEvent)
// console.log(dataEvent[0].isEvent)

  return (
    <html lang="en">
      <body className={`  ${inter.className}` } >
        <ReduxProvider>
          <Navbar data={{dataPack, dataEvent}}/>
          <div className="w-full bg-zinc-900 ">
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
