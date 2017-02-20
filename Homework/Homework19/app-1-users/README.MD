## App 1 - Users

Create an Express app that does the following;
  - Contains a `users` module
    - This module should contain 5 unique users
    - Users consist of:
      - username
      - First Name
      - Last Name
      - password
      - id
        - should be a unique and un-guessable identifier (i.e. no single digits / letters)
      - created
        - timestamp that indicates the date (YYYY-MM-DD) the user was created
  - GET /
    - Returns all Users
  - POST /
    - Adds a user
      - If successful, creates a new user and a newly generated unique id. This new user is returned
      - If unsuccessful, returns an appropriate error
  - GET /user/:id
    - Returns the user whose id matches the id provided as a route parameter
  - Include tests
