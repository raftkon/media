import React from "react";

const AlbumsList = ({ user }) => {
  return (
    <div>
      User's name: <span className="underline">{user.name}</span>
    </div>
  );
};

export default AlbumsList;
