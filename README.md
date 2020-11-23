
## Getting the Project Up and running

1. In the project root directory `DBMS/` <br>
    run <br>
    ```npm i```
2. in the client directory `DBMS/client/` <br>
    run <br>
    ```npm i```
3. Create a `.env` file in project root directory `DBMS/.env` to pass the environment variables. <br>
    > #### .env
    > ```
    > DB_HOST=localhost
    > DB_NAME=DBMS
    > DB_USER=root
    > DB_PASS=[your sql password]
    > ```
4. Make sure your SQL server is running (if not start it by running this is terminal) <br>
    ```mysql -u root -p ```
    > then enter your password <br>
    if there is no database `DBMS` in your sql server create one by typing this in sql server command line. <br>
    `create database DBMS;`

5. Start the development react server (hosting development frontend) + express server (hosting backend) by running this in project root directory `DBMS/` <br>
    ```npm run dev``` <br>

    OR <br>

    run both servers manually in two different terminals. (from project root directory) <br>
    ```npm run client``` <br>
    ```npm run server```

6. (OPTIONAL) To run the project in production mode. (as will be deployed) <br>
    - build the react project (in `DBMS/client/`) <br>
        run : ```npm run build``` <br>
        > a new build/ folder will be created in the client directory.
    - add this line to out `.env` file
        > NODE_ENV=production

    - finally in the project root directory run <br>
        ```npm run server```



## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run server`

runs only the express server.[http://localhost:5000](http://localhost:5000)


### `npm run client`

runs only the react-app server.[http://localhost:3000](http://localhost:3000)

### `npm build` (in /client)

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
