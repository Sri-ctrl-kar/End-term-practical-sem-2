import React, { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={toggleLike}
        style={{
          fontSize: "40px",
          border: "none",
          background: "none",
          cursor: "pointer"
        }}
      >
        {liked ? "❤️" : "🤍"}
      </button>

      <p>
        {liked ? "Liked" : "Not Liked"}
      </p>
    </div>
  );
}

export default LikeButton;