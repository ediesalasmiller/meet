# Chat Room App
A app to find events near you.

A serverless, progressive web application with React using a
test-driven development technique. The application uses the Google
Calendar API to fetch upcoming events.

## Technical Elements
* Built using the TDD technique
* Google Calendar API 
* OAuth2 authentication flow
* AWS lambda
* Passes [Lighthouse’s PWA checklist](https://developer.chrome.com/docs/lighthouse/overview/)

* JEST dependency  
* Jest-Cucumber for BDD acceptance testing
* PUPPETEER FOR CHROMIUM END TO END TESTING


### FEATURE 1: FILTER EVENTS BY CITY
#### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
    * Given user hasn’t searched for any city
    * When the user opens the app
    * Then the user should see the list of upcoming events from around the world.
#### Scenario 2: User should see a list of suggestions when they search for a city.
    * Given the main page is open
    * When user starts typing in the city textbox
    * Then the user should receive a list of cities (suggestions) that match what they’ve typed.
#### Scenario 3: User can select a city from the suggested list
    *Given user was typing “Berlin” in the city textbox
    * And the list of suggested cities is showing
    * When the user selects a city (e.g., “Berlin, Germany”) from the list
    * Then their city should be changed to that city (i.e., “Berlin, Germany”)
    * And the list of suggestions should disappear.
    * And the user should receive a list of upcoming events in that city.
   
endpoints:
GET AUTHORIZATION URL: 
    https://p7p7gmvde4.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url
GET ACCESS TOKEN
    https://p7p7gmvde4.execute-api.us-west-1.amazonaws.com/dev/api/token/{code}

GET CALENDAR EVENTS
GET - https://p7p7gmvde4.execute-api.us-west-1.amazonaws.com/dev/api/get-events/{access_token}
