import Mainlayouts from "@/pages/layouts/Mainlayouts";
import Head from "next/head";
import React from "react";
import Hero from "./Hero";

const Homepage = () => {
  return (
    <Mainlayouts>
      <Head>
        <title>Maritime Edu</title>
      </Head>
      <section>
        <Hero />
      </section>
    </Mainlayouts>
  );
};

export default Homepage;
