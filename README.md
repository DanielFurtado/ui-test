
# Motorway UI Test

This App is based from Motorway UI technical test
https://github.com/motorway/motorway-ui-test

This test focuses on user experience, and skills with HTML, CSS, a11y and leveraging browser APIs.


## Author

* **Daniel M. F. Costa**


## Set up

This repo is a slightly modified Create React App and an Express server which serves a JSON feed of images.

- Clone the repo and run `npm install`

- `npm run serve` will run the server
- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.

-  `npm run test` to run unit tests

-  `npm run test -- --coverage` to run tests and view unit test coverage  


## Notes:

Browser of choice for testing: **Chrome**

**Installed packages:**

react-hook-form: https://react-hook-form.com/ 
Simple React Forms validation

react-query: https://react-query-v3.tanstack.com/ 
Used to cache fetched data

react-router-dom: https://reactrouter.com/en/main 
For client side routing

sass: https://sass-lang.com/ 
CSS Pre-processor

## Further improvements (TODO):

* Add styled components (CSS in JS)
* Gallery pagination
* Gallery layout grid
* Add a footer
* Additional unit test coverage
