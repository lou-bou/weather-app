### Javascript modules

- `index.js` - Entry point; where everything executes.
- `dom.js` - DOM logic stuff (displaying weather data, errors, clearing...etc)
- `retrievalWeather.js` - Retrieving weather data from Visual Crossing and parsing it
- `retrievalGif.js` - Retrieving a gif from Giphy and parsing it
- `utilities.js` - Support functions used by other modules

### CSS modules

- `styles.css` - Entry point; all other css modules get called here. This is also where the main css stuff is (page background, font...etc).
- `variables.css` - All variables used by other css modules.
- `form.css` - Styling for the weather form.
- `result.css` - Styling for the weather data display (result).
- `error.css` - Styling for the weather data error (when a query is unsuccessful).

### HTML modules

There's only one; the entry point `template.html`.
