import React, { useContext, useEffect, useState } from "react";
import Hero from "../component/Hero";
import useFetch from "../hooks/APIsFunctions/useFetch";
import Loading from "../component/Loading/Loading";
import Posts from "../component/Posts";
import { contentStyles, heroStyles } from "../component/styles";
import Card from "../component/Card";
import MainContent from "../component/MainContent";
import { LanguageContext } from "../context/Language";
import { defaultProjectProxyRoute } from "../request";
import MainContentSection from "../component/MainContentSection";
function Home() {
  const { localization, Lan } = useContext(LanguageContext);
  return (
    <div>
      <Hero />
      <div className={contentStyles.container} key={Lan}>
        <h2 className={contentStyles.title}>
          {localization.home.mainContentTitle}
        </h2>
        <MainContentSection />
      </div>
      {/* <div className={heroStyles.container}>
        {postData?.dataSource.map((post) => (
          <Card key={post.homePostID} postTitle={post.postTitle} />
        ))}
      </div> */}
      <Posts />
    </div>
  );
}

export default Home;
