import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import React from "react";
import Video from "./Video";
import { useState } from "react/cjs/react.development";
import useVideos from "../../../Hooks/useVideos";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideos(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => setPage(page + 8)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link
                key={video.youtubeID}
                to={`/quiz/${video.youtubeID}`}
                state={`${video.title}`}
              >
                <Video
                  id={video.youtubeID}
                  title={video.title}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                id={video.youtubeID}
                title={video.title}
                noq={video.noq}
                key={video.youtubeID}
              />
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No Videos Founds</div>}
      {error && <div>There is an Error</div>}
    </div>
  );
}
