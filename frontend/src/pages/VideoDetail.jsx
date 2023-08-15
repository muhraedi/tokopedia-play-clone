import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useForm from '../hooks/useForm';
import Product from "../components/Product";
import Comment from "../components/Comment";
import { API_URL } from "../config";

function VideoDetail() {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState({});
    const [products, setProducts] = useState([]);
    const {
        comments,
        setFormDataObject,
        onSubmitComment,
        setInitialComments,
        setVideoId
    } = useForm();

    const formDataObject = {
        username: "",
        comment: ""
      };

    const getVideoDetail = async () => {
        try {
            const response = await fetch (
                `${API_URL}/video/${videoId}`
            );
            const data = await response.json();
            setVideoDetail(data);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    }

    const getComments = async () => {
        try {
            const response = await fetch(
                `${API_URL}/comments/${videoId}`
            )
            const data = await response.json();
            setInitialComments(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getVideoDetail();
        getComments();
        setFormDataObject(formDataObject);
        setVideoId(videoId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="text-white grid grid-rows-3 grid-flow-col gap-4 pt-4 mt-2">
            {products.map((product) => (
                <Product product={product} key={product._id}/>
            ))}
            <div className="row-start-1 col-span-4 row-span-4">
                <h1 className="text-3xl font-bold mb-6">{videoDetail.title}</h1>
                <div className="mb-8">
                    <iframe
                        width="100%"
                        height="360"
                        src={videoDetail.urlVideo}
                        title={videoDetail.title}
                        allowFullScreen
                    />
                </div>
            </div>
            <div className="row-start-1 row-end-4">
                {comments.map((comment) => (
                    <Comment comment={comment} key={comment._id}/>
                ))}
                <form onSubmit={onSubmitComment} className="bg-green-500 p-3 rounded">
                    <input className="w-full p-2 rounded bg-gray-800 text-gray-100"
                        type="text"
                        name="username"
                        placeholder="Username"
                    />
                    <textarea className="w-full p-2 mt-2 rounded bg-gray-800 text-gray-100"
                        name="comment"
                        placeholder="Enter your comment"
                    />
                    <button className="block mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
                        type="submit"
                    >
                        Submit Comment
                    </button>
                </form>
            </div>
        </div>
    )
}

export default VideoDetail