## App 3 - Login Service

Create an Express app that does the following:
  - GET /
     - Displays a welcome message
   - POST /
    - This service will take a user's credentials and ensure that the password matches the user's password from the User's service
    - This service then checks the Tracking service to makes sure the user has not exceeded the number of attempts for the day
      - If both of the above are true, then a successful message is returned including the user's information
      - If either one of the above fails, an appropriate error message should be true
  - Include tests
