## App 2 - Tracking

Create an Express app that does the following;
  - GET /tracking
    - Returns an error if no query parameters are provided
    - Query parameters:
      - username
      - currentDate (YYYY-MM-DD)
    - Every time a user calls this app, it tracks the number of requests made. If the number exceeds 5 for a user on a single day, an error is returned stating that the user has exceeded the number of allowed attempts
  - Include tests
