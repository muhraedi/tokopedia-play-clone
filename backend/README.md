# API Documentation - Tokopedia Play Clone

## Database Structure

The database structure for the Tokopedia Play Clone is defined using Mongoose schemas. There are three main schemas: `videoSchema`, `productSchema`, and `commentSchema`.

### Video Schema
```javascript
const videoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    urlVideo: {
        required: true,
        type: String
    },
    urlImageThumbnail: {
        required: true,
        type: String
    },
    views: {
        type: Number
    },
    products: [productSchema]
}, { timestamps: true })
```

The `videoSchema` represents a video in the system. It contains the URL of the video's thumbnail image and an array of associated products. The { timestamps: true } option adds createdAt and updatedAt fields to the comments for tracking when they were created and last updated.

### Product Schema
```javascript
export const productSchema = new mongoose.Schema({
    linkProduct: {
        type: String,
        required: true,
    },
    linkImage: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});
```

The `productSchema` defines the structure of a product associated with a video. It includes the product's link, title, and price.

### Comment Schema
```javascript
const commentSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
    },
    comment: {
        required: true,
        type: String,
    },
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
    }
}, { timestamps: true });
```

The `commentSchema` is used to store comments on videos. It includes the username of the commenter, the comment text, and the `videoId` field to link the comment to a specific video. The `{ timestamps: true }` option adds `createdAt` and `updatedAt` fields to the comments for tracking when they were created and last updated.

## API Structure

The API follows a RESTful design, providing endpoints to manage videos, products, and comments. It supports various HTTP methods like GET, POST, PATCH, and DELETE for different operations.

### API Endpoints

1. **Video Endpoints**
   - `GET /videos`: Returns all videos in the system.
   - `GET /videos/:id`: Returns the details of a specific video.
   - `POST /videos`: Creates a new video.
   - `PATCH /videos/:id`: Updates the details of a specific video.
   - `DELETE /videos/:id`: Deletes a specific video.

2. **Product Endpoints**
   - `GET /products/:videoId`: Returns all products of a specific video.

3. **Comment Endpoints**
   - `GET /comments/:videoId`: Returns all comments of a specific video.
   - `POST /comment`: Creates a new comment and associates it with a video.

## API Request and Response

Please refer to the following link for the API request and response:
[Link - API Request and Response](https://github.com/muhraedi/GG-3.0/blob/main/tokopedia-play-clone/backend/API-Tokopedia-Play-Clone.md)

## How to Run Locally

To run the Tokopedia Play Clone System API on your local machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/muhraedi/GG-3.0/tree/main/tokopedia-play-clone.git
   cd tokopedia-play-clone
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your local database (MongoDB) and update the connection string in the `index.js` file.

4. Start the server:
   ```
   npm start
   ```

5. The API will be accessible at `http://localhost:3000/`.

## Additional Notes

- Make sure you have Node.js and npm installed on your local machine.
- If you encounter any issues, please refer to the troubleshooting section in the repository or contact the maintainers.

Feel free to reach out to us if you have any questions or need further assistance. Happy coding!