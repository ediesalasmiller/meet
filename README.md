# meet
Meet app to find events in your city!

endpoints:
GET AUTHORIZATION URL: 
    https://p7p7gmvde4.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url
GET ACCESS TOKEN
    https://p7p7gmvde4.execute-api.us-west-1.amazonaws.com/dev/api/token/{code}

GET CALENDAR EVENTS
GET - https://p7p7gmvde4.execute-api.us-west-1.amazonaws.com/dev/api/get-events/{access_token}


FEATURE 1: FILTER EVENTS BY CITY
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
    SCENARIO 1: BY DEFAULT, WHEN A USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL LOCATIONS.
    Given user hasn’t searched for any city
    When the user opens the app
    Then the user should see the list of upcoming events from around the world.
Scenario 2: User should see a list of suggestions when they search for a city.
SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
    Given the main page is open
    When user starts typing in the city textbox
    Then the user should receive a list of cities (suggestions) that match what they’ve typed.
Scenario 3: User can select a city from the suggested list
    Given user was typing “Berlin” in the city textbox
    And the list of suggested cities is showing
    When the user selects a city (e.g., “Berlin, Germany”) from the list
    Then their city should be changed to that city (i.e., “Berlin, Germany”)
    And the list of suggestions should disappear.
    And the user should receive a list of upcoming events in that city.