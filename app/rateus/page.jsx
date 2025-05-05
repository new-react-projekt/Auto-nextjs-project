"use client";
import { useState, useEffect } from "react";
import "../../styles/rateus.css"; // Import your CSS file

export default function HomePage() {
  const [like, setLike] = useState(() => {
    const stored = localStorage.getItem("like");
    return stored ? parseInt(stored) : 20070630;
  });

  const [heart, setHeart] = useState(() => {
    const stored = localStorage.getItem("heart");
    return stored ? parseInt(stored) : 1009020;
  });

  const [smile, setSmile] = useState(() => {
    const stored = localStorage.getItem("smile");
    return stored ? parseInt(stored) : 1080105;
  });

  const [comments, setComments] = useState(() => {
    const stored = localStorage.getItem("comments");
    return stored ? JSON.parse(stored) : [];
  });

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0); // ⭐️⭐️⭐️⭐️⭐️

  // localStorage kayıtları
  useEffect(() => {
    localStorage.setItem("like", like.toString());
  }, [like]);

  useEffect(() => {
    localStorage.setItem("heart", heart.toString());
  }, [heart]);

  useEffect(() => {
    localStorage.setItem("smile", smile.toString());
  }, [smile]);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = () => {
    if (comment.trim() !== "" && rating > 0) {
      const newComment = {
        text: comment,
        rating: rating,
      };
      setComments([...comments, newComment]);
      setComment("");
      setRating(0); // Reset after submit
    } else {
      alert("Lütfen yorum yazın ve yıldız puanı seçin.");
    }
  };

  const maxLength = 600;

  const handleCommentChange = (e) => {
    const value = e.target.value;
    if (value.length > maxLength) {
      alert("You have reached maximum 600 character length!");
      return;
    }
    setComment(value);
  };

  return (
    <div className="like-page">
      <div className="like-info">
        <p>
          <strong> How did you find this page?</strong>
        </p>
        <p>
          You can leave a comment, give a star rating, and support us with a
          like. 🌟
        </p>
        <p>
          Share your thoughts with us! You can leave a comment, give a star
          rating, and support us with a like. 🌟
        </p>
        <hr />
        <p>
          <strong> Your opinion matters to us!</strong>
        </p>
        <p>
          Rate this page: give stars ⭐, leave a comment 💬, and show some love
          with a like 👍
        </p>
        <p>Your feedback helps us grow and improve.</p>
        <hr />
        <p>
          <strong>🎯 How much do you like us?</strong>
        </p>
        <p>Give us some stars ⭐⭐⭐⭐⭐</p>
        <p>Leave your comment 💬</p>
        <p>And don’t forget to hit the like button! 👍</p>
        <p>Thanks for your support! 💛</p>
        <hr />
        <p>
          <strong>What do you think about our page?</strong>
        </p>
        <p>
          You can share your experience by leaving a comment, giving a rating
          from 1 to 5 stars, and clicking the like button.
        </p>
        <p>Every piece of feedback helps us improve our service.</p>
      </div>
      {/* comments---------------------- */}
      <div className="like-page-comment">
        <label htmlFor="comment">
          <i className="fa-solid fa-comments"></i> Comments:
        </label>

        {/* ⭐️⭐️⭐️⭐️⭐️ Star Rating */}
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                fontSize: "24px",
                color: star <= rating ? "gold" : "gray",
                cursor: "pointer",
              }}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter your comment"
          rows={10}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
      {/* ---------------------- */}
      {/* --like button-------------------- */}

      <div className="like-container">
        <div className="like-page1">
          <h2>Total Like</h2>
          <input type="text" value={like} readOnly />
          <button onClick={() => setLike(like + 1)}>
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
        </div>
        <div className="like-page1">
          <h2>Total Heart</h2>
          <input type="text" value={heart} readOnly />
          <button onClick={() => setHeart(heart + 1)}>
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
        <div className="like-page1">
          <h2>Total Smile</h2>
          <input type="text" value={smile} readOnly />
          <button onClick={() => setSmile(smile + 1)}>
            <i className="fa-solid fa-face-kiss-wink-heart"></i>
          </button>
        </div>
      </div>

      <div className="commentary">
        <ul>
          <h2>Comments</h2>
          <hr />
          {comments.map((c, index) => (
            <li key={index}>
              <p>{"⭐".repeat(c.rating)}</p>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
