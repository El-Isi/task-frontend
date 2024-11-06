# Task Management System - Technical Exercise

## Table of Contents

- [Approach](#approach)
- [Architecture](#architecture)
- [Structure](#structure)
- [Backend Installation](#backend-installation)
- [Frontend Installation](#frontend-installation)
- [Usage](#usage)
- [Improvments](#improvments)

## Approach

Approach
In the provided document, it is mentioned that we are going to build the foundation of a task management system that will eventually:

- Scale to thousands of users
- Integrate with multiple third-party services
- Be used by other development teams
- Support multiple clients (web, mobile, third-party)
- Handle real-time updates
- Support offline capabilities

This project is a task management system. Based on the requirements, I concluded that it might be a platform for a supervisor to manage, assign, and change the status of tasks within a company. I envisioned several potential applications: it could be a task board similar to Trello, where a large number of tasks are handled, or perhaps something more structured, where a user initiates a process, and multiple tasks are initialized and executed in the background. Regardless of the exact application, the requirements are clear:

The Frontend should be a web application built with React + TypeScript that includes a single page with:

- A display of a task list
- A form to add new tasks
- Basic styling (any UI library can be used)

The Backend should be a Node + TypeScript server that functions as an API for managing our data. It should have two endpoints:

- GET /tasks
- POST /tasks
- Database: There is no database, so tasks should be stored in memory.

The system does not need to be fully complete, but it is important to explain the design and construction approach. With this in mind, the following sections outline the architecture and structure used in this project.

## Architecture

For the architecture, I opted for a Layered Architecture. We simplified it slightly since there is no database, and we don’t have a complete view of the product, which limits our understanding of the business logic. Our system's layers function as follows:

1. Presentation Layer (Frontend): This layer is where users can interact with our system. To streamline the process, we will only showcase three functionalities initially:

    - Viewing Tasks: Display a list of tasks, regardless of status, using simple but effective cards.
    - Creating Tasks: A form accessible via a button, allowing users to add new tasks.
    - Deleting Tasks: A delete button to clear tasks. Initially, tasks accumulated during testing required a server restart to clear, as they were stored in memory. This functionality was added for convenience.

    Using TypeScript, we define interfaces and structures to control the data entered by users and the data projected back to them.

2. Application Layer (Backend): The backend will be a Node.js RESTful API with simple routes connecting our frontend to the business logic. The API will include:

    - Create Task Endpoint: Stores tasks in memory as long as the server is running.
    - View Task Endpoint: Retrieves tasks from memory.
    - Delete Task Endpoint: Clears the global memory variable.

3. Domain Layer: This layer would handle specific business logic such as calculations, data transformations, alerts, notifications, etc. For now, we only perform simple Create, Read, and Delete operations on the global memory variable storing our data.

4. Persistence Layer: This would be the database layer; however, since no database is being used in this project, this layer is not implemented.

## Structure

Frontend Structure:
The frontend structure is organized modularly, with components and containers. Modules within each component allow for easier scalability and onboarding of new team members. Additional folders such as constants for globally accessible constant variables, models to define interfaces, services for API connections, and utils for general-purpose functions are also included. Below is an example structure:

```bash
src
│
├── components
│   ├── Common
│   │   ├── SelectField
│   │   │   ├── SelectInput.tsx
│   │   │   └── useStyles.ts
│   │   └── TextInput
│   │       ├── TextInput.tsx
│   │       └── useStyles.ts
│   │
│   └── Tasks
│       ├── AddTaskForm
│       │   └── AddTaskForm.tsx
│       │
│       ├── TaskItem
│       │   ├── TaskItem.tsx
│       │   └── useStyles.ts
│       │
│       └── TasksList
│           └── TasksList.tsx
│
├── constants
│   ├── Status.ts
│   └── Tasks.ts
│
├── containers
│   └── Tasks
│       ├── TasksContainer.tsx
│       └── useStyles.ts
│
├── models
│   └── ITask.ts
│
├── services
│   ├── config.ts
│   └── TasksService.ts
│
├── utils
│
├── App.css
├── App.test.tsx
├── App.tsx
├── index.css
├── index.tsx
└── logo.svg

```

Backend Structure
For the backend, a common structure for RESTful APIs is used. It includes folders for models, with basic logic in routes, controllers, models, and repository. Additional folders for constants and utils (with general-purpose functions) are also included. Below is an example structure:

```bash
src
│
│   ├── constants
│   │   └── Status.ts
│   │
│   ├── routes
│   │   └── apiRoutes.ts
│   │
│   ├── tasks
│   │   ├── controllers
│   │   │   └── TasksController.ts
│   │   │
│   │   ├── models
│   │   │   └── ITask.ts
│   │   │
│   │   ├── repositories
│   │   │   └── TasksRepository.ts
│   │   │
│   │   └── routes
│   │       └── TasksRoutes.ts
│   │
│   ├── utils
│   │   └── baseInterfaces
│   │       └── IRoute.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── package-lock.json
├── package.json
└── tsconfig.json
```

## Backend Installation

1. Ensure you have Node.js 20 installed.

2. Clone this repository https://github.com/El-Isi/task-backend.

3. Navigate to the backend folder.

    ``` bash
    cd task-backend
    ```

4. Install dependencies.

    ``` bash
    npm install
    ```

5. Start the server.

    ``` bash
    npm run start
    ```

## Frontend Installation

NOTE: Start the frontend installation once you completed the backend installation.

1. Ensure you have Node.js 20 installed.

2. Clone this repository https://github.com/El-Isi/task-frontend.

3. Navigate to the frontend folder.

    ``` bash
    cd task-frontend
    ```

4. Install dependencies.

    ``` bash
    npm install
    ```

5. Start the development server.

    ``` bash
    npm run start
    ```

6. It should open your browser in the route http://localhost:3000 showing the application.

## Usage

Once you complete the installation steps navigate to http://localhost:3000 to view the application in your browser.

1. You will see a screen like the following, where you can view the tasks; there will always be one default task displayed.

![Main](https://github.com/user-attachments/assets/f503cba6-8159-4511-bd19-ea7594a8f0b7)

2. You can add tasks by clicking on the "Add Task" button, which will show a form for you to create your task.

![2024-11-0613-57-31online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/af9271e6-02da-40fc-8656-1b0f859e35e2)

3. If you have created many tasks and want to start over, you can delete them all with the "Clear Tasks" button; all tasks will be deleted except for the default one in the system.

![2024-11-0613-57-31online-video-cutter com1-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/a2145a57-fae7-4b10-8227-45bf839d7d91)

4. The application also works in mobile, it can be used in multi platforms.

![mobile](https://github.com/user-attachments/assets/2fadf0db-408c-444d-bf31-deb2924b1bc5)
![mobile2](https://github.com/user-attachments/assets/30d61ca8-c73a-4e91-8889-0f8b6fcedbc9)

Note: I added the default task so that the user always has something to look at, making the interface more user-friendly. Additionally, the default task includes a message encouraging the user to create more tasks.

## Improvments
In this section, we will explain which improvements, functionalities, and features could be developed in the future with adequate time. We will divide them into three categories: interface, server, and scalability.

#### Interface:
Short-term: Currently, the styles in use allow for these modifications, as they were considered during the software's development. Possible improvements include:

- Adding loaders when the user interacts with the created functionalities.
- Updating the page’s style to make it more user-friendly and using Parent Lab's default themes.
- Adding functionalities to tasks, such as updating their status.
- Dividing tasks into two columns, one for pending and another for completed tasks.

Medium-term: At this stage, completely new functionalities would need to be implemented, always considering scalability and platform optimization. Possible improvements include:
- Adding an authentication screen so that only authorized users can create, edit, or delete tasks.
- Gradually adding new properties to tasks, such as description, creator, creation date, urgency level, and assignee.
- Adding more statuses to tasks and organizing them by columns for better viewing and interpretation.

Long-term: Here, we would need to evaluate which architecture and design patterns to use, but with teamwork, it’s achievable:
- Enabling real-time task updates and modifications using technologies like WebSockets.
- Creating a notification system to inform specific users when a task is created or modified, with options for notifications via Slack, email, SMS, WhatsApp, or Telegram.
- Integrating a payment gateway, such as Stripe, to charge for platform usage.
- Adding an API to monitor users and how they interact with the platform.

#### Server:
Short-term: The current server structure is ready to support these features, aligned with the interface improvements:
- Add endpoints to update and delete individual tasks.
- Develop business logic to add endpoints with additional query filters, such as fetching tasks by specific statuses.
- Create a database structure, either relational or non-relational, to store tasks and prevent data loss when the server restarts.

Medium-term: The project’s modular structure supports these features without issues:
- Create endpoints for user authentication, potentially using Passport.js.
- Establish user roles within the system and assign different permissions.
- Implement middleware to protect endpoints from unauthorized users.
- Add security layers to encrypt user information.
- Introduce error handling and notifications for the development team when issues occur.

Long-term: Similarly, the project’s modular structure supports these advanced features:
- Develop business logic to connect WebSockets to the application and enable real-time communication with the frontend.
- Add middleware to grant premium users access to specific features.
- Integrate the notification API mentioned in the interface improvements.
- Configure alerts for all our services and third-party APIs.

#### Scalability:
Short-term: The software, both frontend and backend, is ready for the following features:
- As the project scales and new features are added, new modules can be created, thanks to the modular folder structure. We just need to follow the established path.
- Set up accounts for databases and cloud platforms, configuring user roles and team member alerts for resource usage.
- Host the project on a platform to make it accessible to clients.

Medium-term: The current project structure allows for:
- Implementing technologies like Docker and Kubernetes to containerize the project, preparing it for scalability.
- Setting up a CI/CD process to deploy the project, using GitHub Actions and other tools to automate the deployment pipeline.
- Establishing a testing system, using technologies from code-based solutions like Jest and Cypress to custom AI-powered testing tools, ensuring the system remains stable.

Long-term: At this stage, we would establish maintenance structures for previously mentioned improvements:
- Define the deployment process thoroughly, document everything needed, and create steps to ensure developers don’t skip any steps.
- Set up commit-time testing processes to prevent untested code from being merged into the repository.
- Maintain backend, frontend, and DevOps systems updated to avoid security vulnerabilities or deprecated code.

