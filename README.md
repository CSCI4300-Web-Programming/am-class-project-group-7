# UGA Computer Science Forum

##  Overview

This repository represents the culminating project for CSCI 4300 – Web Programming at UGA.  
Our team collaboratively designed, developed, and deployed this full-stack web application using React + Next.js, Node.js and MongoDB. 

---

## Our Team - Group 7

| Member Name      | GitHub Username      | Role          |
|------------------|----------------------|---------------|
| Aden Rubenstein  |  adenrubenstein      | Project Leader  |
| Noah Horne       |  noahhorne674        | Project Manager   |
| Jake Flanagan    |  jake112000          | GitHub Captain |
|       N/A        |                      |(Communication Leader - opt.)   |

---

## Project Features 

- Open Library API integration.
- Authentication & Authorization (login/sign-up, protected routes)  
- Route Protection for authenticated users   
- Responsive UI 

---

## Repository Structure

```
│── {project-name}
│   └── src
│       └── app - App Router pages & API routes
│            └──   components → list components
│            └──   models → Mongoose schemas / MongoDB models
│            └──   api → Routes for MongoDB & Auth connection
│── design - mockups.md 
│── images - mockup images, etc.
└── status - WEEKLY_STATUS.md

```

---

## Tech Stack

| Layer             | Technology                                   |
|-------------------|----------------------------------------------|
| Frontend          | React + Next.js (App Router)                 |
| Backend           | Next.js API Routes / Node.js                 |
| Database          | MongoDB + Mongoose                           |
| Styling           | Tailwind CSS + Custom CSS Modules            |
| Authentication    | NextAuth.js                                  |

---

## Run the development server

```
npm run dev
```

The project should now be running at:
    http://localhost:3000

## API Endpoints 

| Method      | Endpoint             | Description            |
| ----------- | -------------------- | ---------------------- |
| GET         | /api/posts           | Fetch all posts        |
| POST        | /api/posts           | Create a new item      |
| GET         | /api/posts/[id]      | Get item by ID         |
| PUT         | /api/posts/[id]      | Update item by ID      |
| DELETE      | /api/posts/[id]      | Delete item by ID      |


## Database Models 
Post
| Field    | Type   | Description     |
| -------- | ------ | --------------- |
| title    | String | post title      |
| user     | String | poster username |
| text     | String | the post body   |
| rating   | String | rating out of 5 |
| link     | String | Included link   |

## Client Routes (example)
| Route         | Description       |
| ------------- | ----------------- |
| `/`           | Homepage          |
| `/login`      | User login        |
| `/loggedin`   | User dashboard    |
| `/register`   | User creation     |
| `/bookcover`  | Cover lookup by ID|
| `/mainscreen` | Logged out dashboard |


## Future Improvements
- Check for textbook ID *in* post, change default picture to the uncovered textbook cover.
- Include x/y stars based on user rating.

## Acknowledgements
- Many thanks to the teams responsible for the amazing tools we get to use for this project.
    Developers for Open Books, Next, Node JS, and VS Code made the creation of this project possible.
- Thanks to Dr. Stephens, our TAs and PLAs, and anyone who helped in developing WebDawgs.
- We want to thank one another; we're pleased that this project allowed us all to make new friends.