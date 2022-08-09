Feature: Show/hide an event details

Scenario: An event element is collapsed by default.
Given the user opens the app
When the user sees a list of all upcoming events
Then the user sees list of collapsed events

Scenario: User can expand an event to see its details.
Given user has not selected an event
When the user selects an event
Then the user can see the details of the event they selected.


Scenario: User can collapse an event to hide its details.
Given user shows details of event
When the user hides details
Then the user can continue scrolling through collapsed events.
