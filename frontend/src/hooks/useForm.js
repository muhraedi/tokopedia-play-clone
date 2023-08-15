// Custom hook: useForm
import { useState } from 'react';
import useCommentSubmission from '../hooks/useCommentSubmission';

function useForm() {
  const [videoId, setVideoId] = useState('');
  const [formData, setFormData] = useState({});
  const {comments, submitComment, pushInitialComments} = useCommentSubmission();

  const setFormDataObject = (formDataObject) => {
    setFormData(formDataObject);
  };

  const onSubmitComment = async (event) => {
    event.preventDefault();

    Object.keys(formData).map((key) => {
      const inputValue = event.target[key]?.value || "";
      if (!inputValue) {
        return alert("harus diisi");
      }
      formData[key] = inputValue;
      return true;
    });

    await submitComment({videoId, ...formData});
    event.target.reset();
  };

  const setInitialComments = (initialComments) => {
    pushInitialComments(initialComments);
  };


return {
    comments,
    setFormDataObject,
    onSubmitComment,
    setInitialComments,
    setVideoId,
  };
}

export default useForm;
