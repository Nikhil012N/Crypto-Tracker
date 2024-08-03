"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <title>Crypto Tracker</title>
    <meta name="description" content="Track your favorite cryptocurrencies with Crypto Tracker." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="keywords" content="crypto, cryptocurrency, bitcoin, ethereum, tracker" />
    <meta name="author" content="Nikhil" />
    <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png" />
   
      </head>
      <body className={inter.className}><Provider store={store}>{children}</Provider></body>
    </html>
  );
}
