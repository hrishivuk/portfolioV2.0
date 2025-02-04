"use client";
import React from "react";

const SpotifyWidget = ({ playlistUrl }) => {
  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-white rounded-[36px] shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">My Playlist</h2>
      <div className="flex justify-center">
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playlistUrl}`}
          width="300"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          title="Spotify Playlist"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyWidget;
