# Pokedex Project

This is a simple Pokedex web application that fetches and displays data for 200 Pokémon using the [PokeAPI](https://pokeapi.co/). The project includes basic search functionality and a loading indicator while data is being fetched.

## Files

- **index.html**  
  Contains the structure of the web page, including the search input and display area.

- **script.js**  
  Handles fetching Pokémon data, creating the Pokémon cards dynamically, and implementing the search functionality.

- **style.css**  
  Provides basic styling for the page and the Pokémon cards, including a loading animation.

## How It Works

1. **Data Fetching:**  
   The application fetches data for 200 Pokémon asynchronously from the PokeAPI.

2. **Display:**  
   Once the data is loaded, Pokémon cards are created with their details (ID, name, type, weight, and experience) and appended to the page.

3. **Search:**  
   The search input filters the displayed Pokémon in real-time as you type.

4. **Loader:**  
   A loading indicator is shown while the Pokémon data is being fetched. Once all data is loaded, the loader is hidden.

## How to Run

1. Clone or download the project files.
2. Open the `index.html` file in your browser.
3. Wait for the Pokémon data to load.
4. Use the search input to filter the Pokémon list.

## Note

This project is intended as a simple demonstration of fetching data from an API, manipulating the DOM, and implementing basic interactivity using vanilla JavaScript.
