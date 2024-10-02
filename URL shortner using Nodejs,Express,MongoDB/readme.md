# URL shortner
A simple and functional URL shortener that lets users create short links, track how often they are visited, and handle redirects. It demonstrates basic server-side programming techniques for building reliable and scalable web applications. 

## Features

* **Create Short URLs**: Generate concise URLs that redirect users to the original links.
* **Track Visit History**: Log and track the number of times each shortened URL is accessed.
* **URL Redirection**: Seamlessly redirect users from the shortened URL to the original page.
* **Database Management**: Use MongoDB to store and manage URL data and visit statistics.
* **Server-Side Routing**: Handle HTTP requests and responses using Express.js for efficient URL 
management.


## Topics covered

* Redirecting user to a new page in Express.
* MVC architecture to organize code efficiently.
* Creating and managing objects in MongoDB.


## Other related projects
[building rest apis](https://github.com/vrmrohit23/learn-nodejs/tree/main/building%20rest%20apis)<br/>
[MVC in nodejs](https://github.com/vrmrohit23/learn-nodejs/tree/main/MVC%20in%20nodejs)

## For running the project
**Note:** Ensure MongoDB is properly installed and running locally on your machine. Start the MongoDB server before sending any requests to the database. You will need to provide the database URL in the 'makeconnection' method in index.js file.
```bash
1. Fork this repository.
2. Navigate to the folder: "http module for requests and responses".
3. Run npm install in your terminal to install dependencies.
4. Run the server with node <file-name> in the terminal.
```
