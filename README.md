# Challenge 1: Simple Web Server for Static Web Pages

## Introduction
In this challenge, I've built a simple web server using Docker to serve static web pages. This README.md file provides information about the project, how to run it, and what I can expect to find in the repository.

## About the Project
This project aims to demonstrate the basics of Docker by creating a Docker image that serves static web pages using NGINX. The web pages are stored in a public folder, and the main page is named index.html, which contains my name and student ID number.

## Getting Started
To run this project locally, you'll need Docker installed on your system. Once Docker is installed, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the challenge1 directory.
3. Build the Docker image using the following command:
   docker build -t my-static-server .
4. Once the image is built, run the Docker container with the following command:
   docker run -d -p 8080:80 my-static-server
5. Access the web server by opening a web browser and navigating to http://localhost:8080.

## Repository Structure
Dockerfile: Defines the instructions for building the Docker image.
public/: Directory containing static web pages and assets.
index.html: Main HTML file with my name and student ID number.
README.md: This file, providing information about the project and how to run it.

## Screenshots
Include screenshots of the running web server and the page being served here.

## Conclusion
This project served as an introduction to Docker and demonstrated how to create a simple web server for serving static web pages. I've learned the basics of Dockerfile creation, image building, and container deployment, which will be valuable for future projects.

# Challenge2 : Creating a Dynamic Application
