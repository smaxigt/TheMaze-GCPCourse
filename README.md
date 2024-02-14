# Into the Labyrinth: Navigating the Maze

In this course, our primary emphasis is on mastering GCP (Google Cloud Platform) services to develop a fully functional application deployed on GCP. Throughout the course, we will explore various services offered by GCP and learn how to effectively utilize them, ensuring all aspects necessary for real-world project implementation.

![OpenAnalytic Setup](https://github.com/smaxigt/TheMaze-GCPCourse/blob/main/Images/TheMaze.webp?raw=true)

# Table of Contents

1. [Into the Labyrinth: Navigating the Maze](#into-the-labyrinth-navigating-the-maze)
   - [Step by Step](#step-by-step)
   - [What is the Goal?](#what-is-the-goal)
2. [Creating a GCP account](#creating-a-gcp-account)
   - [Download Google Cloud Command Line Interface](#download-google-cloud-command-line-interface)
3. [Create a project](#create-a-project)
   - [Choosing Source Repositories](#choosing-source-repositories)
     - [Create your GCP Repositories](#create-your-gcp-repositories)
     - [Download Your Repository](#download-your-repository)
4. [Cloud build](#cloud-build)
   - [Dockerfile](#dockerfile)
   - [Cloudbuild.yaml](#cloudbuildyaml)
   - [Nginx](#nginx)
   - [How to add a Trigger](#how-to-add-a-trigger)
5. [Cloud Run](#cloud-run)
   - [Two Running Cloud runs ( Frontend / Backend )](#two-running-cloud-runs--frontend--backend-)
6. [Cloud Functions](#cloud-functions)
   - [The different between Cloud Function / Cloud Run](#the-different-between-cloud-function--cloud-run)
   - [Lets Create a Cloud Function](#lets-create-a-cloud-function)
   - [Cloud Functions API](#cloud-functions-api)
   - [Setup Automatic Pipeline](#setup-automatic-pipeline)
   - [Get Cloud Function URL](#get-cloud-function-url)
7. [Time to build some cool stuff!](#time-to-build-some-cool-stuff)
   - [Firebase Auth](#firebase-auth)
   - [OpenAnalytic Solution](#openanalytic-solution)
   - [Firestore - NoSQL database](#firestore---nosql-database)
   - [Chat GPT API (OpenAI)](#chat-gpt-api-openai)
8. [Open Web Application Security Project (OWASP)](#open-web-application-security-project-owasp)
   - [OWASP top 10 security risk](#owasp-top-10-security-risk)

## Step by Step

In this course, we will guide you through the process of building both a simple backend,frontend and a cloud function solution, enabling you to create a complete pipeline from development to production environments.

The examples presented in this course will utilize Node.js for the backend and React for the frontend. However, you have the flexibility to choose your preferred code stack. If you're new to this, I recommend sticking with the suggested code stack.

## What is the Goal?

The objective of this course is to develop a functional application deployed on Google Cloud Platform (GCP) suitable for both development and production environments. Additionally, we aim to integrate different services such as Firebase authentication, a service simplifying account management and creation.

Ensuring a secure login interface for users is a priority. Moreover, we seek to establish an administrative portal enabling the admin (you) to manage user accounts, including deletion. Furthermore, we intend to incorporate an own created analytics tool to facilitate application analysis.

The final step of the course involves assessing your application's security posture against the Open Web Application Security Project (OWASP) Top 10 vulnerabilities. This evaluation is crucial for determining the effectiveness of your app's defenses against various threats.

![GCP](https://github.com/smaxigt/TheMaze-GCPCourse/blob/main/Images/GCP.png?raw=true)

# Creating a GCP account

Firstly, you'll need to create a GCP account, which requires a payment card. Don't fret, though—Google offers a free tier with $300 in credits, which should be more than sufficient if you follow along with this course.

## Download Google Cloud Command Line Interface

Once you've set up your account, the next step is to download the Google Cloud Command Line Interface (CLI). This tool enables you to seamlessly access and push code to a GCP source repository. Simply follow the provided [guide](https://cloud.google.com/sdk/docs/install) to install it on your local machine.

After downloading, you can type "gcloud init" in your terminal to log in to the cloud. Are you logged in? If yes, excellent! You now have a connection to Google Cloud Platform through your local machine!

# Create a project

Let's create your project in Google Cloud Platform (GCP). We'll need to set up two separate projects: one for development and one for production. Let's begin by focusing on the development project.

To do this, I recommend using the GCP UI for a smoother experience.
Here are the steps to create the development project in GCP:

1. Log in to your Google Cloud Console at https://console.cloud.google.com/.
2. Once logged in, navigate to the "Select a project" dropdown menu at the top of the page.
3. Click on the dropdown menu and select "New Project."
4. Enter a name for your development project, such as "The Maze" and click "Create."

## Choosing Source Repositories

Source Repository is a tool for storing code, and in this course, we recommend experimenting with GCP Cloud Source Repositories to gain hands-on experience with storing code directly in GCP. However, if you prefer to use other platforms like GitHub, that's perfectly fine too. Just ensure that you're vigilant about not exposing any sensitive keys or information.

![Source Repositories Alternatives](https://github.com/smaxigt/TheMaze-GCPCourse/blob/main/Images/sourceRepo.png?raw=true)

### Create your GCP Repositories

To initiate a new Source Repository, begin by navigating to the service's search function. Within the user interface, locate the "Add repository" option and click on it. From the subsequent menu, select "Create new repository" and proceed to assign a name to the repository.

Given the structure of our project, which adheres to a monorepo setup, we will segregate the API and frontend into distinct repositories. Let's commence with establishing the frontend repository, which we'll name "theMaze-frontend." Ensure that you designate your project as "theMaze."

Note that while setting up the repository, you may be prompted to associate it with a billing account. However, there's no need for concern as long as you're utilizing the free tier, as there will be no associated costs.

### Download Your Repository

It's time to download the Git repository. You have different options such as SSH or SDK. Let's opt for SDK since we can utilize the gcloud CLI for this task. Follow the guide on how to download the Git repository accordingly.

Once you have downloaded the theMaze-frontend repository, proceed to create and download the theMaze-backend repository using the same process.

# Lets Create a React application!

To create a React application, you can navigate to your Git repository in Visual Studio Code and open the terminal. Once in the terminal, navigate to the desired folder and run the command:
npx create-react-app NameOnProject

This will generate a new React app with the specified name. Now copy the folder files and place it in the root of the repo, remove the folder NameOnProject after.
Now that you have your React app set up, the next step is to set up a pipeline for automatic build using Google Cloud Platform (GCP) service called Cloud Build.
To do this, your Git repository will need to add three files: one Dockerfile, cloudbuild.yaml and Ngnix.

## Dockerfile

A Dockerfile is needed to build a Cloud Run service because Cloud Run requires containerized applications to run. By defining a Dockerfile, developers can specify the environment and dependencies necessary for their application to run successfully within a container, which can then be deployed and managed on Cloud Run's serverless platform.

[Example in folder frontend](/frontend/Dockerfile)

[Read more about Docker.](https://docs.docker.com/engine/reference/builder/)

## Cloudbuild.yaml

Cloudbuild.yaml is a configuration file used with Cloud Build, specifying the steps and actions needed to build, test, and deploy software artifacts within Google Cloud Platform. It defines the build process in a declarative format, allowing for automation and reproducibility of builds.

[Example in folder frontend](/frontend/cloudbuild.yaml)

[Read more about Cloudbuild.yaml](https://cloud.google.com/build/docs/configuring-builds/create-basic-configuration)

## Nginx

Nginx is a high-performance web server known for its scalability and efficiency in handling concurrent connections. It also functions as a reverse proxy server, efficiently directing incoming web traffic to backend servers, making it a popular choice for serving web content and managing network traffic.

[Example in folder frontend/nginx](/frontend/nginx/nginx.conf)

[Read more about Nginx ](https://www.nginx.com/resources/glossary/nginx/)

# Cloud build

Cloud Build is a fully managed continuous integration and continuous delivery (CI/CD) platform that automates the process of building, testing, and deploying applications on Google Cloud. It allows developers to focus on writing code while Cloud Build handles the infrastructure and workflow management, enabling faster and more reliable software delivery.

## How to add a Trigger

Let's navigate to Cloud Build to set up a new trigger specifically for our development environment. First, click on "Triggers," then proceed to select the option to "Create Trigger." Assign a name to the trigger; for instance, we'll label it as "dev-frontend," and configure it to activate upon pushing to a branch.

Choose the appropriate repository and specify the Cloud Build configuration file (either YAML or JSON), then finalize the process by clicking "Create."

Once you've completed setting up the trigger, you have two options to initiate the build process. You can either push your Git repository to the designated branch, triggering an automatic build, or alternatively, you can click on the "Run" button located on the right side to manually initiate the build process.

If this process executes smoothly, you're either fortunate or exceptionally skilled. Often, when reviewing cloud build logs, you'll notice the necessity to grant permissions for cloud build to interface with other services.

If your build is highlighted in red, take a moment to click on it and review the logs. Sometimes, GCP provides hints or clickable links that can assist you. If not, don't hesitate to Google the error message; this proactive approach will steadily guide you towards resolving your build.

# Cloud Run

If the build was successful, congratulations! You've now deployed a Cloud Run service, which you can find on Google Cloud Platform (GCP). Navigate to Cloud Run to view all your active services. Click on one of them to access its domain, where your React app is now live on the web! Pretty cool, isn't it? Now, it's time to deploy the API. Unlike before, you won't need an NGINX server. Try to tackle this step on your own, and don't worry if you encounter errors along the way. Remember, learning by doing is key

## Two Running Cloud runs ( Frontend / Backend )

Congratulations! If you've reached this step, you now have two active Cloud Run instances up and running – how cool is that! Now, it's time to connect them. This step is straightforward and can be accomplished in numerous ways, but we'll guide you through the simplest method.

First, navigate to your backend Cloud Run instance and locate the generated URL. Copy this URL and save it for later use.

Next, let's move on to the React application. Add a .env file if you haven't already and create an environment variable named REACT_APP_BACKEND_URL

**REACT_APP_BACKEND_URL="https:www.test.se"**

You can now incorporate the following code snippet into your project to retrieve the environment variable. This code will create a paragraph element with the text https:www.test.se, which represents the backend URL.

**Run it locally and see if the code is working.**

Now, let's navigate to the Google Cloud Platform (GCP) UI and locate the Cloud Build trigger to add a variable. Follow these steps:

1. Navigate to the Cloud Build section.
2. You can find it in the left-hand navigation menu under "Build".
3. In the Cloud Build dashboard, locate the trigger you want to edit and click on it.
4. This will open the details for the trigger. Look for an "Edit" button or similar option, and click on it.
5. In the trigger settings, find the section where you can add variables or environment variables.
6. Click on the option to add a new variable.

Enter the variable name. In this case, it would be **REACT_APP_BACKEND_URL** but be sure to add a in the beginning, as this is default for GCP.
Provide the value for this variable. This could be the URL of your backend Cloud Run instance.
Once you've added the variable and its value, save your changes.

We also need to inform Docker and the cloudbuild.yaml that during cloud build, there will be a variable that needs to be retrieved and used as REACT_APP_BACKEND_URL. To accomplish this, we will need to add both in Docker and Cloudbuild.yaml.

**See example in the Docker & Cloudbuild.yaml in frontend**

**Now, let's rebuild the application and witness some magic!**

What have we accomplished here? We've integrated a variable into our trigger and enhanced the cloudbuild.yaml file. This file dictates the environment setup for building and deploying a React application, encompassing tasks such as configuring build arguments and environment variables. By utilizing the Cloud Build configuration file (cloudbuild.yaml), we orchestrate the build process and enable dynamic substitution of variables specified in the Cloud Build trigger. This approach ensures adaptability and customization throughout the build and deployment pipeline.

With this configuration, we can effortlessly modify the trigger variable in the build for production by specifying a new URL, facilitating a streamlined pipeline setup.

# Cloud Functions

Cloud functions are event-driven, serverless functions that allow developers to execute code in response to various triggers without worrying about managing servers. They offer scalability, flexibility, and cost-efficiency, enabling rapid development and deployment of lightweight, microservice-based applications.

## The different between Cloud Function / Cloud Run

Cloud Functions are event-driven, serverless functions ideal for quick response to events like HTTP requests or database changes. Cloud Run allows running containerized applications, offering more flexibility in language choice and execution environment.

Let's say you're building a microservice architecture for an e-commerce website. For the product recommendation service, which needs to respond rapidly to user activity such as clicks and purchases, Cloud Functions would be an excellent choice. Its event-driven nature fits perfectly for this real-time, event-triggered workload.

However, for a more complex service like image processing, where you might need specific dependencies or libraries not supported directly by Cloud Functions, Cloud Run would be a better option. You could containerize your image processing application with all its dependencies and deploy it on Cloud Run, gaining flexibility and control over the execution environment.

## Lets Create a Cloud Function

Let's embark on creating a Cloud Function. To streamline the process, we'll initiate a new Git repository named "cloudF". Our primary objective is to develop a simple Cloud Function that responds with "Hello, World". Setting up this function can be intricate, so we'll start there. Once you've successfully implemented the Cloud Function and grasp its functionality, you can integrate it into your application as needed.

Within the "cloudF" repository, we'll require a "cloudbuild.yaml" file and a folder containing the function. Notably, we can omit the Dockerfile for the Cloud Function. Feel free to try to create the structure of the "cloudbuild.yaml" file by urself or googling. if further assistance is needed, reference the "cloudF" folder in the GitHub repository.

### Cloud Functions API

To facilitate this setup, you'll need to activate the Cloud Functions API. Navigate to the Cloud Functions API and enable the service. Additionally, ensure that Cloud Functions are enabled within the Cloud Build settings. This can be accomplished by accessing the settings and enabling Cloud Functions.

## Setup Automatic Pipeline

To set up a build trigger on Cloud Build, the process remains unchanged. We create a trigger and then link it to our new Git repository. For this scenario, I would suggest altering the trigger from "Push to branch" to "Manually invoke." This adjustment allows for more control, especially if you plan to add multiple Cloud Function builds, as the building process can be time-consuming.

In this example, we're utilizing an open HTTPS trigger with the "--allow-unauthenticated" flag, allowing anyone on the internet to access this cloud function. While it's possible to configure it to only permit specific services to access the function, for the purpose of this demonstration, the current setup suffices.

**Let's proceed with this setup and observe if our build successfully completes.**

## Get Cloud Function URL

Great news! It worked! Congratulations on creating your first cloud function. Now, let's proceed to grab the URL as follows:

1. Navigate to Cloud Functions in your cloud platform.
2. Locate and select the cloud function you've created.
3. Access the Triggers section.
4. Retrieve the URL to open your newly created Cloud Function!

# Time to build some cool stuff!

Now that both the backend,frontend and your cloud function are live on the internet, it's time to elevate our application with thrilling features. In this step, the choice is yours regarding what you wish to construct and utilize for services. The following text provides examples of what you can implement.

## Firebase Auth

Firebase auth is a comprehensive mobile and web application development platform that offers authentication setup. To accomplish this, you'll need to integrate Firebase authentication. Let's proceed to activate this feature on the designated page. Following this, we'll incorporate the login page into our React application. You can find detailed instructions on how to do this in the provided [documentation](https://blog.bitsrc.io/firebase-authentication-with-react-for-beginners-implementing-email-password-and-google-sign-in-e62d9094e22) and [videos](https://www.youtube.com/watch?v=Vv_Oi7zPPTw).

Using Firebase Auth for login and account creation directly from the frontend may seem unconventional, but that's how it's designed to function.

If we want to add information, change users, or make calls that require users to be logged in, we need to handle that on the backend with the assistance of Firebase Admin SDK for authentication. This allows us to securely manage user authentication, including adding custom claims, updating user profiles, and performing various administrative tasks.

[Read more about firebase-admin](https://firebase.google.com/docs/admin/setup)

## OpenAnalytic Solution

Is Google Analytics a magical solution? The answer is no. However, we can effortlessly establish our own methodology! Our approach involves leveraging GCP services like Cloud functions & Pub/Sub, which facilitates the creation of API calls that are asynchronous and queued. This enables swift execution for users, eliminating the need to wait for responses.

Data in this example can be:

```json
{
  "page": "/home",
  "buttonClicked": "Created account"
}
```

![OpenAnalytic Setup](https://github.com/smaxigt/TheMaze-GCPCourse/blob/main/Images/OpenAnalytic.png?raw=true)

**Here's what's happening**: The user sends data to a cloud function, which then routes it to a Pub/Sub queue. Subsequently, the cloud function promptly responds with a 200 status directly to the user, eliminating the need for the user to await any further response. Once the Pub/Sub receives the data, it enqueues it for processing by another set of cloud functions, which subsequently store the data into BigQuery.

## Firestore - NoSQL database

Firebase is a comprehensive NoSQL database platform offered by Google for developing mobile and web applications, providing tools and services like real-time database, authentication, hosting, and analytics to streamline app development and improve user experience.

[Read more about firestore](https://firebase.google.com/docs/firestore/quickstart)

## Chat GPT API (OpenAI)

Why not create your own specialized chatbot using GPT, tailored to specific tasks? To achieve this, you'll need to register an account on openai.com and set up an API key.

[Read more about OpenAI KEY](https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt)

[Read more about OpenAI Implementation](https://firebase.google.com/docs/admin/setup)

# Open Web Application Security Project ( OWASP )

OWASP, which stands for the Open Web Application Security Project, is a non-profit organization committed to enhancing software security. Now, it's time to assess whether your application aligns with OWASP standards. Examine each aspect meticulously and identify any areas for improvement or modification. If you encounter a security threat and are unsure of how to address it, that's acceptable for this exercise. However, it's crucial to understand why it poses a threat.

[OWASP top 10 security risk](https://owasp.org/www-project-top-ten/)

- A01:2021 – Broken Access Control
- A02:2021 – Cryptographic Failures
- A03:2021 – Injection
- A04:2021 – Insecure Design
- A05:2021 – Security Misconfiguration
- A06:2021 – Vulnerable and Outdated Components
- A07:2021 – Identification and Authentication Failures
- A08:2021 – Software and Data Integrity Failures
- A09:2021 – Security Logging and Monitoring Failures
- A10:2021 – Server-Side Request Forgery (SSRF)
