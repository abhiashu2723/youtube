import React from "react";

const VideoCard = ({ info }) => {
//   console.log(info, "data");

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-80 shadow-lg  hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnails"
      />
      <ul>
        <li className="font-bold py-2 line-clamp-1 overflow-hidden 	whitespace-nowrap ">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
