import { useState } from 'react';
import { API_URL } from '../config';

// Custom hook: useCommentSubmission
function useCommentSubmission() {
  const [comments, setComments] = useState([]);

  const submitComment = async (commentData) => {
    try {
      const response = await fetch(`${API_URL}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (!response.ok) {
        throw new Error('Comment submission failed');
      }

      setComments((prevComments) => [...prevComments, commentData]);
    } catch (error) {
      console.error(error);
    }
  };

  const pushInitialComments = (initialComments) => {
    setComments(initialComments);
  };

  return {
    comments,
    pushInitialComments,
    submitComment,
  };
}

export default useCommentSubmission;
