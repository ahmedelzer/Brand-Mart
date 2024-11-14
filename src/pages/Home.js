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
function Home() {
  const {
    data: fullHomeMainContents,
    isLoading,
    error,
  } = useFetch(
    "/Home/GetFullHomeMainContents?PageSize=11&PageNumber=1",
    defaultProjectProxyRoute
  );
  const { data: postData } = useFetch(
    "/Home/GetFullHomePosts?PageSize=11&PageNumber=1",
    defaultProjectProxyRoute
  );
  const { localization } = useContext(LanguageContext);
  if (isLoading) {
    return <Loading />;
  }
  if (error && !fullHomeMainContents) {
    // Handle error, e.g., display an error message
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <Hero />
      <div className={contentStyles.container}>
        <h2 className={contentStyles.title}>
          {localization.home.mainContentTitle}
        </h2>
        {fullHomeMainContents &&
          fullHomeMainContents?.dataSource?.map((mainContent, index) => (
            <MainContent
              files={mainContent.postWithDisplayFiles.displayFiles}
              postTitle={mainContent?.postWithDisplayFiles.post.postTitle}
              description={
                mainContent?.postWithDisplayFiles.post.postDescription
              }
              playList={true}
              portfolio={false}
              key={index}
              index={index}
            />
          ))}
      </div>
      {/* <div className={heroStyles.container}>
        {postData?.dataSource.map((post) => (
          <Card key={post.homePostID} postTitle={post.postTitle} />
        ))}
      </div> */}
      <Posts data={postData} />
    </div>
  );
}

export default Home;
// {
//   "postWithDisplayFiles": {
//       "post": {
//           "postID": "1a6dca80-4216-429b-a0a0-75047a1f3588",
//           "creationDate": "2024-08-14T20:20:35.007",
//           "postTitle": "string7",
//           "postDescription": "string"
//       },
//       "displayFiles": [
//           {
//               "displayFileForPostID": "e089a7f8-1eeb-4655-9aeb-9ed2d5066366",
//               "displayFile": "ArchivingFiles\\b9494689-2c52-4e0b-8f4e-1a7077e8ce74.png",
//               "fileCodeNumber": 0
//           },
//           {
//               "displayFileForPostID": "0ca5e0d8-90e4-4557-af8e-ccbb6d224a28",
//               "displayFile": "ArchivingFiles\\8b217bff-047f-4a7e-9105-b8f2eb441635.png",
//               "fileCodeNumber": 0
//           },
//           {
//               "displayFileForPostID": "682fbc97-7343-4c62-9485-ce989267505d",
//               "displayFile": "ArchivingFiles\\8b217bff-047f-4a7e-9105-b8f2eb441635.png",
//               "fileCodeNumber": 0
//           },
//           {
//               "displayFileForPostID": "c7260a8e-3f9e-4542-8701-f0ac8aa07ba6",
//               "displayFile": "ArchivingFiles\\8b217bff-047f-4a7e-9105-b8f2eb441635.png",
//               "fileCodeNumber": 0
//           }
//       ]
//   },
//   "postID": "1a6dca80-4216-429b-a0a0-75047a1f3588",
//   "showTime": "2024-09-24T10:13:15.8",
//   "duration": 10000
// }
