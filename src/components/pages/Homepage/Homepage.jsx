import React from "react";
import styles from "./Homepage.module.css";
import { useOutletContext } from "react-router-dom";
import Hero from "../../Hero/Hero";
import Section from "../../Section/Section";
import { fetchFilters } from '../../../api/api';

function HomePage() {
    const { data } = useOutletContext();
    const {topAlbums, newAlbums, songs} = data;
  return (
    <>
       <Hero/>
       <div className={styles.wrapper}>
       <Section title="Top Albums" data={topAlbums} type="album" />
       <Section title="New Albums" data={newAlbums} type="album" />
       <Section title="Songs" data={songs} type="song" filterSource={fetchFilters} />
       </div>
    </>
  )
}

export default HomePage;