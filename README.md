# User Form Application - React.js 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

This project demonstrates a simple form component using React’s **component-based** architecture. The form collects user data—specifically a **name** and **passport number**—and handles the state using React's `useState` hook.

### Form Breakdown

The form is composed of reusable `TextInput` components, which dynamically display labels, values, and handle user input using **props**. Here's a brief explanation of its features:

- **State Management:** The `UserForm` component manages the form state with the `useState` hook, allowing it to track real-time user input.
- **Props Usage:** The `TextInput` components receive props such as `label`, `value`, and `onChange` to ensure seamless data flow between parent and child components.
- **Input Handling:** The `handleChange` function updates the form data in state as the user types, ensuring the UI reflects the most recent input.
- **Form Submission:** Upon form submission, the data is processed (logged to the console in this version), with future plans for backend integration.

### What’s Next?

Upcoming improvements will include:

- **Backend Integration:** The form will connect to a backend server to store and process the submitted data.
- **Unit Testing:** Comprehensive unit tests will be added to validate the behavior of components, enhancing reliability and maintainability.

Stay tuned for these updates!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It optimizes the build for best performance by minifying and hashing file names.  
Your app will be ready for deployment!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

This command will copy all the build configurations and dependencies into your project, giving you full control. Use this only if you need advanced customizations.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


Stay tuned for more updates!
