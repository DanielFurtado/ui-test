
# UI Test

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

-  `npm run test` to run unit tests

-  `npm run test -- --coverage` to run tests and vi ew unit test coverage  


## Notes:

Browser of choice for testing: **Chrome**

**Additional packages installed:**

react-hook-form: https://react-hook-form.com/ 
Simple React Forms validation

react-query: https://react-query-v3.tanstack.com/ 
Used to cache fetched data

react-router-dom: https://reactrouter.com/en/main 
For client side routing

react-paginate: https://www.npmjs.com/package/react-paginate
Component to render pagination

sass: https://sass-lang.com/ 
CSS Pre-processor

## Further improvements (TODO):

* Gallery pagination improvements
* Dropdown for number of images to load per page
* Gallery layout grid / Skeleton loader
* Add a footer
* Add styled components (CSS in JS)
* Additional unit test coverage
