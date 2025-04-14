Feature: Amazon Cucumber.js auto-test

    Background:
        Given the user is on the homepage

    Scenario: User should observe the main tab on the Home Page
        When the user is on the home screen he should observe the main tab
        Then the user should see the "Today`s Deals" tab
        
    Scenario: User is able to navigate to the Customer Page
        When the user clicks on the "Customer Service" on the tab
        Then the user should observe the "Customer Service" page with expected elements
        And the user should be able to see 11 areas with helpful information