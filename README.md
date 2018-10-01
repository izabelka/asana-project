A webpage that fetches and displays an Asana project's tasks via the Asana API


## How to run the app
1. Clone this repository
2. Add the `REACT_APP_PERSONAL_ACCESS_TOKEN` variable to the `.env` file. If there is no `.env` file in the main directory, you should create one. The content of the file should look like: ```REACT_APP_PERSONAL_ACCESS_TOKEN=your_personal_asana_access_token```
You can also add this variable in step 4, instead of creating a file. Just run:
`npm start PERSONAL_ACCESS_TOKEN=your_personal_asana_access_token`
3. In the cloned repository directory run the command:
`npm install`
(if you don't have npm installed, [get npm](https://www.npmjs.com/get-npm))
4. Run the app:
`npm start`

The webpage accepts an `Asana project ID` via query parameter `https://localhost:3000?project=project_ID`

## About the app
- This App was created using [Create React App](https://github.com/facebookincubator/create-react-app).
- It displays project name and its task.
- User can visually hide tasks.
- Each individual task links to the associated task in [app.asana.com](app.asana.com),
