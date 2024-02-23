import React from "react";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Divider from "../components/Divider/Divider";

const Songs = () => {
  return (
    <>
      <Hero />;
      <Section album="topAlbums" label="Top Albums" />
      <Section album="newAlbums" label="New Albums" />
      <Divider />;
    </>
  );
};

export default Songs;
