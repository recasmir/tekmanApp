# TekmanApp

The Tekman App is a platform where the user can check the syllabus of mathematics of a pre-school year. See the subjects divided by sessions and check its contents by selecting and playing them. 

## Structure

* The first page is the home page where the user can select the content that would like to check. The content is divided by the 1st, 2nd and 3rd quarter of a school year.
* On the home page the user can also see which session was played last as it is saved in the local storage.

* The second page is one component that renders the information of the quarter that has been chosen. You can scroll through the different sessions and play one. If the session has been already checked there will appear an icon of an eye on the right column, whereas if it hasn't been checked yet, it will show a faded eye with a diagonal line on top of it.

* When a session has been clicked, it will navigate to the third page where the instructions on what to do before playing the session will be shown.

* By clicking the settings option on the top right corner of the screen, a popup window will appear with a drop-down menu. The user can select the language and the school year. These options can be saved in the user's session.

## How to run TekmanApp

* Clone the repository locally `git clone https://github.com/recasmir/tekmanApp.git`.
* Run `npm install` to install the node modules.
* Run `ng serve` and navigate to `http://localhost:4200/` or run `ng serve -o` for the app to open directly on the browser. 

## Code scaffolding

The app it's been divided by pages and shared components and services.

#### Considerations

* To obtain the data of the sessions three json files are created as mockups and stored in assets.
* Stylesheets managed by Bootstrap and CSS.
