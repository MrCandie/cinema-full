import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/homepage/header/Header";
import Search from "../components/homepage/search/Search";
import Movies from "../components/homepage/movies/Movies";
import Recommended from "../components/homepage/recommended/Recommended";
import Navigation from "../components/UI/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Search />
        <Movies />
        <Recommended />
        <Navigation />
      </main>
    </>
  );
}
