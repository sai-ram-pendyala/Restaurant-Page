# Restaurant Page

This project is a restaurant website that showcases the menu, provides information about the restaurant, and allows users to navigate between different pages.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

## Project Structure

The project follows the following directory structure:
```
dist
|--index.html
|--main.js
functions
|--remove.js
node_modules
pages
|--about.js
|--header.js
|--home.js
|--menu.js
src
|--index.js
|--style.css
package-lock.json
package.json
webpack.config.js
```
- `dist`: Contains the distribution files, including the main HTML file (`index.html`) and the bundled JavaScript file (`main.js`).
- `functions`: Contains the JavaScript module for removing content from the DOM (`remove.js`).
- `node_modules`: Contains the dependencies installed for the project.
- `pages`: Contains the JavaScript modules for different pages of the website, including `about.js`, `header.js`, `home.js`, and `menu.js`.
- `src`: Contains the main JavaScript file (`index.js`) and the CSS file (`style.css`) for styling the website.
- `package-lock.json` and `package.json`: Configuration files for managing project dependencies.
- `webpack.config.js`: Configuration file for the Webpack bundler.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/sai-ram-pendyala/Restaurant-Page.git`
2. Navigate to the project directory: `cd Restaurant-Page`
3. Install the dependencies: `npm install`
4. Build the project: `npm run build`
5. Open the `index.html` file located in the `dist` directory in your web browser.

## Usage

The website provides the following features:

- **Home**: Displays information about the restaurant and its philosophy.
- **Menu**: Showcases the restaurant's menu, including appetizers, main courses, and desserts.
- **About**: Provides the restaurant's story, philosophy, and information on sustainability, hospitality, and culinary excellence.

To navigate between pages, click on the respective tabs in the header.

## Contributing

Contributions to the project are welcome. If you find any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/sai-ram-pendyala/Restaurant-Page/issues). Pull requests are also appreciated.
