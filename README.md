# Challenge 1: Simple Web Server for Static Web Pages

## Introduction
For this project, I created a basic web server that serves static web pages by utilizing Docker. About the project, how to run it, and what's in the repository are all explained in this README.md file.

## About the Project
In order to illustrate the fundamentals of Docker, this project uses NGINX to create a Docker image that delivers static web pages. The primary page, index.html, has my name and student ID number on it. The web pages are kept in a public subdirectory.

## Getting Started
To run this project locally, I installed Docker descktop on your system. Once Docker descktop is installed, follow these steps:

1. Cloned this repository to my local machine.
2. Navigated to the challenge 1 directory.
3. Built the Docker image using the following command:
   docker build -t my-static-server .
4. Use the following command to launch the Docker container after the image has been built:
   Docker run 8080:80 -d -p my-static-server
5. Open a web browser and go to http://localhost:8080 to access the web server.

## Repository Structure
Dockerfile: Specifies how the Docker image is to be built.
public/: A directory holding assets and static webpages.
The main HTML file, index.html, has my name and student ID number.
README.md This file, which offers instructions on how to execute the project and its details.

## Screenshots
Include screenshots of the running web server and the page being served here.

<img width="960" alt="Screenshot1" src="https://github.com/Haileyrim/docker-challenge-template/assets/120137270/0a82992e-d2b7-49f1-942b-7ba51bd6e197">
<img width="960" alt="Screenshot2" src="https://github.com/Haileyrim/docker-challenge-template/assets/120137270/e46454bd-451e-4dbc-9151-eccbf3dd09dd">

## Conclusion
This project showed how to build a basic web server for providing static web pages and provided an introduction to Docker. My understanding of the fundamentals of creating Dockerfiles, creating images, and deploying containers will be helpful for next tasks.

# Challenge2 : Creating a Dynamic Application

## Setup
- Used the "Challenge2.zip" folder.
- Added all files to the challenge's root folder.
- My directory structure looks like this!
docker-challenge-template/
│
└── challenge2/
    ├── Dockerfile
    ├── docker-compose.yml
    ├── server.js
    ├── package.json
    ├── package-lock.json
    └── nginx.conf


## Create Dockerfile
- Built the server's Docker container by creating a Dockerfile.
*The Dockerfile should contain instructions on how to install Node.js and move the application code into*

## Create Docker Compose File
- A docker-compose.yml file was created in order to organise and specify services.
  
## NGINX Configuration
- This configuration forwards requests to /api/books to the Node.js application.

## Build and Run
- Run "docker-compose up" command. This built the Docker image and start the containers defined in the "docker-compose up".

## Verify
- I got 'http://localhost:8080/api/books' and 'http://localhost:8080/api/books/1'.
- Open Browser and navigate to these two URLs.

## Screenshots of Outcome
<img width="960" alt="Screenshot4" src="https://github.com/Haileyrim/docker-challenge-template/assets/120137270/228aa733-3b1d-4983-b97c-57e39fae654a">
<img width="960" alt="Screenshot3" src="https://github.com/Haileyrim/docker-challenge-template/assets/120137270/3771e123-a0c1-48fc-a17d-af13678cd38f">


# Challenge3: Full stack application

## Set up
<img width="95" alt="image" src="https://github.com/Haileyrim/docker-challenge-template/assets/120137270/597b2f3f-28c7-4cb5-bf6a-de6587682459">

## Steps
- Create the .env file with the correct values for the variables mentioned in the challenge, like DB_ROOT_PASSWORD, DB_DATABASE, DB_USERNAME, DB_PASSWORD, and DB_HOST.
- Create the docker-compose.yml file to define the services that make up your application. I stuggled this part because of directory like port mapping and connect thing. I wrote 3 parts of services which are nginx, db and node-service. I wrote each build, ports, volumes, and environment. 
- For the nginx.conf, I missed the even{} and my 8081:80 didn't work. Finally, I found my mistake and I fixed it.
- Build and run my app: I did 'docker-compose up' to start my app. 
- AS using 'docker-compose ps', I can check my app status of services.
- I tested my app through “http://localhost:8080/api/books” and “http://localhost:8080/api/books/1” browser.
  
## Verify
When I requested “http://localhost:8080/api/books”, I a JSON message with all books and when I requested “http://localhost:8080/api/books/1”, i got a JSON message with just one book.

## Screenshots of Outcome
<img width="726" alt="image" src="https://github.com/Haileyrim/docker-challenge-template/assets/120137270/6ef395dc-1dd1-4ed5-a182-56b56f329c90">
<img width="737" alt="image" src="https://github.com/Haileyrim/docker-challenge-template/assets/120137270/04d40a58-5c2a-46c5-a8a6-9042a18ebe68">


# Challenge4: Scaling up an application

## Set up

## Steps

## Verify

## Screenshots of Outcome

