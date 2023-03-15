# TasteBuds: Project Specification

## Objective
Provide a platform to help users decide on restaurants based on their cravings & share their food journey with friends!

## User Motivations
Friends are hungry but can’t decide on what to eat. They will use this app to help them decide based on location, price range, cuisine, meal time, etc

## Technologies
Frontend: React.js
Backend: Flask
Database: MongoDB

## User Interface
Figma File Link
https://www.figma.com/file/OeC9MybkoIXMEPiW5FWtzT/TasteBuds-UI?t=JwCamBixfTPdBtBj-1

## App Runthrough
A new user creates an account and logs into the app. They are now given the ability to create groups or upload new food to the database. When creating groups, they are provided with an URL that can be shared to their friends. Their friends can click on the link to join the group. The group creator has the ability to kick members and set preferences of food (Location, Price Range, Cuisine, Breakfast/Lunch/Dinner, Allergens). Once all friends are in the group and preferences have been set, the group owner clicks on "Start Matching!" button. This will redirect all members to the Swipe Page. Here, the members are prompted with a food cards (based on the preferences that were set previously) where they can choose to swipe left to drop the food or swipe right to like the food. Same ~20 cards will be displayed to each memeber. If a member finishes swiping early, they are redirected to the Waiting for Others Page. Once all members finish, they are all directed to the Final Decision Page where they are matched with a food card based on the card that was liked the most. Upon a tie, both cards will be shown. Now everyones happy :D.

## Pages
### Swipe Page
Where you can swipe left to drop food, right to keep food
### Waiting for Others Page
If one user finishes early, they are redirected to this page until everyone else in the group finishes
### Final Decision Page
Displays food for everyone in that group
### Home Page
Landing Page
### Create Group Page
Where you can make groups to and invite friends
### Manage Group Page
Where you can manage the group members, food preferences
### Upload Page
Where any logged in users can upload food 
### Log-In / Sign-Up Page
Where users can log in or sign up
