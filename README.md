# Marcos` HackerYou Final Project

## Movie Database API

Store movies in a collection called `movies`.  

## To Do

* Add `search` feature

## Test, Build and Run

The project is built using [NodeJS 10.14.x](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/).  
You therefore need to install NodeJS and MongoDB.

### NPM

The standard npm command should be used :

* `npm install` to download all dependencies declared in the `package.json` file,  
* `npm start` to start the server and seed MongoDB.

## Environment variables

|Environment variable|Notes                                                                            |
|--------------------|---------------------------------------------------------------------------------|
|PORT                |Used to start the service in a specific port, default `8080`                     |
|MONGODB_URI         |MongoDB connection endpoint, default `mongodb://localhost:27017/hackerYouProject`|
 

### Endpoints

* The following API is used to retrieve all movies:

`GET {{host}}/movies`


```json
{
  "_id": "5c1e8c233927f400173bb9af",
  "title": "Aquaman",
  "overview": "The film reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime—one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be… a king.",
  "release_date": 2018,
  "rate": 7,
  "poster_path": "http://image.tmdb.org/t/p/original/ydUpl3QkVUCHCq1VWvo2rW4Sf7y.jpg",
  "__v": 0
}
```

You can also filter for information of specific movies using id.

`GET {{host}}/movies/{{_id}}`

* The following API is used to enroll new movies:

`POST {{host}}/movies`

```json
{
  "title": "Aquaman",
  "overview": "The film reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime—one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be… a king.",
  "release_date": 2018,
  "rate": 7,
  "poster_path": "http://image.tmdb.org/t/p/original/ydUpl3QkVUCHCq1VWvo2rW4Sf7y.jpg",
}
```

* The following API is used to remove movies.

`DELETE {{host}}/movies/{{_id}}`

