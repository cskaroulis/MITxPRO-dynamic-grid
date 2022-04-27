# Dynamic Grid

## Requirements

In this activity, you're going to create a dynamic web page containing a grid and two buttons:

CREATE GRID: When clicked, a grid of 100 squares is created dynamically on the page. This is accomplished by calling the function createGrid()
MOVE: When clicked, the background color of the grid cells need to change from one cell to the next every 100ms. This is accomplished by calling the function move()

The starter code for this activity contains the following files:

**index.html**: This file contains the HTML code. Note the two buttons referenced above and the main div with the id: target. This div will hold the dynamically created grid
styles.css: This file contains the CSS style rules. Note the "on" class here. This class sets the background color to orange
grid.js: This file contains the JavaScript code needed to complete this task. Within this file, note the following functions:

**createGrid()**: This function will create a 100 square grid, which will be dynamically inserted into the HTML element div id="target" using appendChild. You should also place a label on each grid cell that has the cell's number, as well as give each cell a unique ID.

**move()**: This function will increment the position variable by one every 100ms, taking into consideration the gridSize variable value. It will also make use of the toggle function to make CSS changes (turning the cell orange) to its specific div element.

**toggle()**: Takes a position parameter referencing a grid cell and sets the class name of that cell to "on". If a position less than 1 is passed into the function, return 0. This is because the grid positions start at 1.
In grid.png, you can find an example of what your completed grid should look like.

**Hints**:

- Each cell is its own div element.
- You can use setTimeout() to delay the execution of the code by a set number of milliseconds.
- This exercise makes use of loops, dynamic HTML, and comparison operators.
- You can use appendChild() to append new HTML elements to the existing ones.
