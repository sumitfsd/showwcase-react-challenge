# SHOWWCASE REACT CHALLENGE

## About the app

Special Libraries used:

  - [polished](https://polished.js.org/)
  - [react-icons](https://github.com/react-icons/react-icons)
  - [react-select](https://react-select.com/home)
  - [react-window](https://github.com/bvaughn/react-window)
  - [sweetalert2](https://sweetalert2.github.io/)

The app contains two pages:
  1. First Page contains the following:
     - A form to take user name. Empty name is not alowed.
     - Navigation bar which can contains multiple links to other pages. Ir currently contains link to homepage which is the same one.
  2. The second page contains the following:
     - A welcome message with user name.
     - A modal which takes qualification details from user in a form. These details are validated for the required fields.
     - The university list in the form appears only when user atleast types one letter.
     - A qualification list which shows complete user details on hover,minified details otherwise.
     - A navigation bar which contains list of user qualification titles and acts as a bookmark for all the qualifications. 
     - User can go back to home page by clicking upon SHOWCASEicon in nav bar and change user name.

## How to run

  - Setup the dev env by running `yarn install`
  - Start frontend server by running `yarn start`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
