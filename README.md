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
- When a project is clicked in the summary tab the main screen is cleared and project items are displayed in the main tab with the project title
- When add project is clicked a form text input is displayed to input the project title. This adds another project to summary tab, clears main screen and displays project items as well as add item button
- When add item button is clicked a form is presented which asks for the following information: item title, basic description, due date (calendar selector??), priority level(dropdown selection form item)
- The displayed project item should display all the requested information as well as a toggle button to indicate when an item is complete. When this button is toggled the itme is greyed out
- sort items by priority level?
- project items grayed out when all tasks are completed?

Modules:
- Project create
- task create

Next:
- Try Create new array on creation of new project (in the for loop) named projectForm.projectTitle.value and import to addTask to seperate each 'list' of tasks????
    >> When a new project is created a new tasks object is created which is tied to project element id or project array index
    >> Push tasks class to a new array taskArray (it's fine if they all have the same name they will be identified by their index in the array)
    >> when a new project is created or an alternative project is clicked let tasks = []; << empty the object as the old one has been pushed to the taskArray
    >> When project variables are clicked return either project index from array or projectItem element id
    >> fetch the corresponding tasks[i] from taskArray
    >> render corresponding tasks[i]