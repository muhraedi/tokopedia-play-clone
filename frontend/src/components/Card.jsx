/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Card({ video }) {
  return (
    <Link
      to={`/video/${video._id}`}
      className="h-80 relative items-center rounded-lg overflow-hidden bg-white shadow"
    >
      <img
        className="w-full h-80 object-cover"
        src={video.urlImageThumbnail}
        alt="video image"
      />
      <div className="bg-black/50 absolute bottom-0 px-4 py-3">
        <h3 className="line-clamp-2 text-sm font-bold tracking-tight text-gray-100">
          {video.title}
        </h3>
      </div>
      <p className="bg-black/50 inline-flex items-center rounded-lg absolute top-0 right-0 px-2 mr-2 mt-3 font-light text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 inline-block mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {video.views}
      </p>
    </Link>
  );
}

export default Card;
