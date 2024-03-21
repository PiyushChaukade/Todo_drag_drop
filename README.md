# Task Board Application

# Introduction
This repository contains a Task Board Application built using React. The application allows users to manage tasks across different stages, including "To Do", "In Progress", "Review", and "Done". Users can add, delete, and drag tasks between these stages to reflect their progress.

# Deployed Link
Check out the deployed version of project [Here](https://piyush-todo-drag-drop.netlify.app/)
![image](https://github.com/PiyushChaukade/Todo_drag_drop/assets/93372962/9557ec42-0f23-4ec2-acb7-715b68b54128)


# Features
Task Management: Users can add tasks to each stage and drag tasks between stages.
Dynamic Display: Icons for adding tasks, deleting tasks, and additional actions are displayed dynamically based on user interaction.
Colorful Task Indicators: Each task is assigned a random color indicator for visual appeal.

# Usage
1. Run the application locally.

 npm run dev
  

2. Follow up the link given in the terminal or else (http://127.0.0.1:5173/)

# Application Structure
used MVC to structure the components
CardComponent- where all the components get together and work.
Todos - where all the array of data gets fetched so you can use it multiple times.
Popup- where i write popup code and used multiple times.
Data - where all the data is saved so the user can experience the proper UI.

#reused the same components multiple times by writing them as a reusable component.


# Dependencies
React-vite,
react-iconn,
react-beautiful-dnd.
