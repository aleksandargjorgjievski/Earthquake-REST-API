# Earthquake App

A web app to display earthquake data from an external API.

## Prerequisites
- **Node.js**
- **Java 21**
- **PostgreSQL**
- **IDE that supports Java and Spring Boot**

## Setup the database
* Make a database in postgreSQL
* In the terminal run:
```
$env:DB_USERNAME="your_user"
$env:DB_PASSWORD="your_password"
$env:DB_URL="your_url"
```
## How to run the app
1. Clone the repository
2. Start the backend (root folder)
   ```
   mvnw.cmd spring-boot:run
   ```
3. Start the frontend in a new terminal
```
cd frontend
npm install
npm run dev
```
4. Open the app
- `http://localhost:5173`

## Notice
If you can't run the backend from the terminal then just run `EarthquakeAppApplication.main()` from an IDE that supports Java.
## Implementations
### Map
Implemented a map that gets the geometry data from the postgreSQL database and uses it to show the earthquakes visually.
The earthquakes on the map are represented as circles.
Depending on the magnitude of the earthquake, the circles change color so the user can easly see if the earthquake is dangeorus or not.
If the user clicks on the circle marker, a window will appear that displays the relevant information about the earthquake.
