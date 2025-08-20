import React, { useContext, useState } from "react";
import Posts from "../component/Posts";
import PageHeading from "../component/PageHeading";
import useFetch from "../hooks/APIsFunctions/useFetch";
import Loading from "../component/Loading/Loading";
import MainContent from "../component/MainContent";
import PlayList from "../component/PlayList";
import { LanguageContext } from "../context/Language";

function Portfolio() {
  const { localization } = useContext(LanguageContext);

  const { data: portfolioWorks, isLoading } = useFetch(
    "PortfolioWork/GetFullPortfolioWorks?PageSize=11&PageNumber=1"
  );
  let portfolioWork = {
    dataSource: [
      {
        postWithDisplayFiles: {
          post: {
            postID: "5f78a506-f0f9-43f8-a705-9742c66afd47",
            creationDate: "2024-04-27T15:57:51.33",
            postTitle: "testing",
            postDescription: "done test",
          },
          displayFiles: [
            {
              displayFileForPostID: "00683a17-4c06-4779-bc8e-a0790d16c123",
              postID: "5f78a506-f0f9-43f8-a705-9742c66afd47",
              displayFile:
                "PostFiles\\193d0c55-a837-436d-b2ee-a4cb7bdd8cf6.mp4",
              fileTypeID: "a72beb11-2e0a-4752-a847-bc2ed5da5077",
              indexOfDisplay: 0,
            },
          ],
        },
        portfolioWorkID: "1fec8024-c05c-478e-8a97-8d23266a3288",
        post: {
          postID: "5f78a506-f0f9-43f8-a705-9742c66afd47",
          creationDate: "2024-04-27T15:57:51.33",
          postTitle: "testing",
          postDescription: "done test",
        },
        customerRequestID: "74acbbf2-5295-455d-a5ec-c6a09da24dcb",
        postID: "5f78a506-f0f9-43f8-a705-9742c66afd47",
      },
    ],
    count: 1,
  };
  if (isLoading) {
    return <Loading />;
  }
  // let data = [
  //   { file: "https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg", id: 1 },
  //   { file: "https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg", id: 2 },
  //   { file: "https://mdbcdn.b-cdn.net/img/new/standard/city/079.jpg", id: 3 },
  // ];
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="">
      <div className="container">
        <div className="heading">
          <PageHeading
            subTitle={localization.portfolio.PageHeading.subTitle}
            title={localization.portfolio.PageHeading.title}
            desc={localization.portfolio.PageHeading.desc}
          />
        </div>
        <h2 className="h2 mb-6 text-center">
          {localization.portfolio.headerOfWorking}
        </h2>
        {portfolioWork?.dataSource.map((item) => (
          <MainContent
            key={item.portfolioWorkID}
            files={item.postWithDisplayFiles}
            playList={true}
            portfolio={true}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
