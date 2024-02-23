import React from "react";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Divider from "../components/Divider/Divider";
import GenreFilter from "../components/Filter/GenreFilter";

const Songs = () => {
  return (
    <>
      <Hero />;
      <Section album="topAlbums" label="Top Albums" enableToggle={true} />
      <Section album="newAlbums" label="New Albums" enableToggle={true} />
      <Divider />
      <Section album="songs" label="Songs">
        <GenreFilter />
      </Section>
      <Divider />
    </>
  );
};

export default Songs;
