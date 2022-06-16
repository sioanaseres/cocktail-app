import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`;

const singleUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`;

window.addEventListener("DOMContentLoaded", function () {
  presentDrinks(url);
});
