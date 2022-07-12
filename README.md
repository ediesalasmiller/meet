# meet
Meet app to find events in your city!

endpoints:
GET AUTHORIZATION URL: 
    https://owsyvqjtn2.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url

GET ACCESS TOKEN
    https://owsyvqjtn2.execute-api.us-west-1.amazonaws.com/dev/api/token/{code}

GET CALENDAR EVENTS
GET - https://owsyvqjtn2.execute-api.us-west-1.amazonaws.com/dev/api/get-events/{access_token}