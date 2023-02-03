# todo

Create a todo app.

Display:
- header (basic heading,info etc.)

- Summary tab on the left which contains:
    - View All projects
    - Project name (main)
    - Add project button (maximum of 10)
    - Task title (sub)

- Main tab adjacent to summary tab which displays:
    - all projects if it is selected
    - current project items

- Footer 

Functionality:
- When view all projects is clicked main screen is cleared and all current projects populate
- When a project is clicked in the summary tab or the populated main screen the main screen is cleared and project items are displayed
- When add project is clicked a form text input is displayed to input the project title. This adds another project to summary tab, clears main screen and displays project items as well as add item button
- When add item button is clicked a form is presented which asks for the following information: item title, basic description, due date (calendar selector??), priority level(dropdown selection form item)
- The displayed project item should display all the requested information as well as a toggle button to indicate when an item is complete. When this button is toggled the itme is greyed out
- sort items by priority level?

Modules:
- Project create
- task create