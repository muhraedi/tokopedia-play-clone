# Video
* Video object
```
{
  id: objectId
  title: string
  urlVideo: string
  urlImageThumbnail: string
  products: array
}
```
**GET /videos**
----
  Returns all videos in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <video_object> }`

**GET /video/:id**
----
  Returns the specified video.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <video_object> }` 
* **Error Response:**  
  **Code:** 404  
  **Content:** `{ message: error.message }`  

**POST /video**
----
  Creates a new Video and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
{
  "title": "Title 1",
  "urlVideo": "https://www.youtube.com/embed/youtubeVideoId",
  "views": 7782,
  "products": [
    {
      "linkProduct": "https://example.com/product1",
      "linkImage": "https://example.com/product1.jpg"
      "title": "Product 1",
      "price": 18490000
    },
    // More products...
  ]
}
```
* **Success Response:**  
* **Code:** 200  
  **Content:** `{ <video_object> }` 

**PATCH /video/:id**
----
  Updates fields on the specified video and returns the updated object.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
```
{
  "title": "Title 1",
  "urlVideo": "https://www.youtube.com/embed/youtubeVideoId",
  "views": 7782,
  "products": [
    {
      "linkProduct": "https://example.com/product1",
      "linkImage": "https://example.com/product1.jpg"
      "title": "Product 1",
      "price": 18490000
    },
    // More products...
  ]
}
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <video_object> }` 
* **Error Response:**  
  * **Code:** 404
  **Content:** `{ message: error.message }`  

**DELETE /video/:id**
----
  Deletes the specified video.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
  * **Code:** 204 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message: error.message }`  

# Products
* Product object
```
{
  id: objectId
  linkProduct: string
  linkImage: string
  title: string
  price: float
}
```
**GET /products/videoId**
----
  Returns all products in the specified video.
* **URL Params**  
  *Required:* `videoId=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <product_object> }` 

# Comments
* Comment object
```
{
  id: objectId
  username: string
  comment: string
  videoId: objectId
}
```

**POST /comment**
----
  Adds a new comment to a specific video.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
 {
  "username": "john_doe",
  "comment": "Great video! Thanks for sharing.",
  "videoId": "64c1264d49a4811254a59f41"
 }
```
* **Success Response:**  
* **Code:** 200  
  **Content:** `{ message : "Success" }`
* **Error Response:**  
  **Code:** 404  
  **Content:** `{ message : "Fail" }` 

**GET /comments/:videoId**
----
  Returns all comments for a specific video
* **URL Params**  
  *Required:* `videoId=[string]`
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
  None
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <comment_object> }` 