Feature:  Specify number of events.

Scenario: When user has not specified a number of events per page, 32 is the default number.
Given App is running
When User has not changed deafult amount of events per page
Then 32 events are loaded on the page.

Scenario: User can change the number of events per page
Given App is running  
When User changes the number of events in the input box.
Then The event list renders new number of events per page based on user input