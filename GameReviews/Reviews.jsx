import React, { useState } from 'react';

export default function Reviews({ gameTitle, username }) {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewChange = (e) => setReview(e.target.value);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      const newReview = {
        username,
        reviewText: review,
        date: 'November 20, 2024',
        id: Date.now(),
      };
      setReviews([newReview, ...reviews]);
      setReview('');
    }
  };

  const handleEditReview = (id, newText) => {
    const updatedReviews = reviews.map((rev) =>
      rev.id === id ? { ...rev, reviewText: newText } : rev
    );
    setReviews(updatedReviews);
  };

  const handleDeleteReview = (id) => {
    const filteredReviews = reviews.filter((rev) => rev.id !== id);
    setReviews(filteredReviews);
  };

  return (
    <div className="review-container">
      <h3>Review for: {gameTitle}</h3>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          value={review}
          onChange={handleReviewChange}
          placeholder="Write your review here..."
          required
        />
        <button type="submit">Submit Review</button>
      </form>

      <div className="reviews-list">
        <h4>Reviews:</h4>
        {reviews.map((rev) => (
          <div key={rev.id}>
            <p><strong>{rev.username}</strong> - <span>{rev.date}</span></p>
            <p>{rev.reviewText}</p>
            <button onClick={() => handleEditReview(rev.id, prompt('Edit Review:', rev.reviewText))}>Edit</button>
            <button onClick={() => handleDeleteReview(rev.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
