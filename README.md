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
This project served as an introduction to Docker and demonstrated how to create a simple web server for serving static web pages. I've learned the basics of Dockerfile creation, image building, and container deployment, which will be valuable for future projects.

# Challenge2 : Creating a Dynamic Application

## Setup
- Use the "Challenge2" folder.
- Add all files to the challenge's root folder.
- My directory structure looks like this.
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
- Create Dockerfile to buid the server's Docker constainer
*The Dockerfile should include instructions to set up Node.js and copy the application code into*

## Create Docker Compose File
- Create a docker-compose.yml file to define services and orchestrate them.

## NGINX Configuration
- This configuration forwards requests to /api/books to the Node.js application.

## Build and Run
- Run "docker-compose up" command. This will build the Docker image and start the containers defined in the "docker-compose up".

## Verify
- I got 'http://localhost:8080/api/books' and 'http://localhost:8080/api/books/1'.
- Open Browser and navigate to these two URLs.






