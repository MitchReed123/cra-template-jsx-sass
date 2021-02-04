# Basic Break Down

This project was created to give a base starting point for [React/Redux/SASS].
It will create a functioning boiler plate version to start off with.

## How to use the template

1. Get into the directory you want to store your project
   **Note: Replace "projectname" with the name of your project**
2. Run this command `npx create-react-app projectname --template jsx-sass`

### Scripts that are available

## `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## `npm run watch:sass`

**Note: This command will run in your terminal until you cancel it.**

This command sits in your terminal watching for any changes in any SCSS file and will convert the SCSS to the
local css file in /src

Takes all the imports from your main.scss file and converts it to native css
["watch:sass": "node-sass src/sass/main.scss src/App.css -w"]
