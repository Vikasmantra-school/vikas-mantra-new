"use client";
import HeroBanner from "./Home/Hero";
import VmpsStory from "./Home/vmpsStory";
import Features from "./Home/features";
import VideoSection from "./Home/videoSection";
import JourneySwiper from "./Home/journeySwiper";
import Blog from "./Home/blog";
import Head from "next/head";

const main = () => {
  return (
    <>
      <Head>
        <title>Home | Vikasmantra Mambakkam</title>
        <meta
          name="description"
          content="VIKAS MANTRA PUBLIC SCHOOL, a CBSE School in Chengalpattu Kanchipuram is building a distinctive educational platform through a mix of international learning ..."
        />
      </Head>
      <HeroBanner/>
      <VmpsStory/>
      <Features/>
      <VideoSection/>
      <JourneySwiper/>
      <Blog/>      
      
    </>
  );
};

export default main;
