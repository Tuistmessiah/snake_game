# Project Overview

In this project, you will be divided into three teams, each responsible for a different component of the Snake game system. Each team will have a leader, and all team members are expected to collaborate, likely using mob programming techniques. Team leaders will occasionally meet to discuss progress and requirements.

## Team Assignments

### 1. Game Development Team

-   **Responsibilities:** Build the Snake game, including game logic, UI, and interactions.
-   **Tools:** JavaScript, HTML, CSS - You will mostly work inside `index.js` using the libraries imported.
-   **Setup Instructions:**

    -   Navigate to the game development folder.
    -   Run `npm install` to install dependencies.
    -   Use `npm run start` to start the development server (already set up in `server.js`).
    -   By default running at `localhost:3012`

    **Use backend API:** Remember to talk with the backend team that will provide you with the endpoints you need for the scores register.

### 2. Backend Development Team

-   **Responsibilities:** Develop the backend API and handle database interactions.
-   **Tools:** Node.js, Express, MySQL (or equivalent) - You will mostly work inside `score.js` using the imported `db` for querying.
-   **Setup Instructions:**

    -   Navigate to the backend development folder.
    -   Inside `connection.js` you need to define your database credentials
    -   Create the SQL script to set up the database schema your will need.
    -   Run `npm install` to install dependencies.
    -   Use `npm run start` to start the server (already set up in `server.js`).
    -   By default running at `localhost:3010`

    **SQL Setup Script:** The SQL script will create the database and tables required for storing scores. Ensure to run this script in your MySQL (or equivalent) environment.
    **Use Postman/Thunder Client:** To test your endpoint. Remember to talk with the game frontend team who will fetch these endpoints you are using.

### 3. High Scores Page Team

-   **Responsibilities:** Build the frontend page to display high scores.
-   **Tools:** HTML, CSS, JavaScript - You will mostly work inside `index.js` using the imported `db` for querying.
-   **Setup Instructions:**
    -   Navigate to the high scores page folder.
    -   Run `npm install` to install dependencies.
    -   Use `npm run start` to start the server (already set up in `server.js`).
    -   By default running at `localhost:3011`

## Team Collaboration

-   Each team leader will code alongside their team and will coordinate with other team leaders as needed.
-   Team leaders will meet periodically to discuss progress, dependencies, and requirements.
-   Collaboration and regular updates are crucial for integrating different parts of the project smoothly.
