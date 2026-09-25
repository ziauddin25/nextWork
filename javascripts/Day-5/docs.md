module:A module is a separate JavaScript file that contains a specific block of code (like functions, variables, or classes). It helps organize a large codebase into smaller, reusable pieces by using export and import.

export: export is a keyword used to make functions, objects, or variables in one JavaScript file available for use in other files.

import: import is a keyword used to bring in and use those exported functions, objects, or variables from another file into your current file.


export default: not uses carly bracis {}. here normally export, easy changes name. 

            app.js  (entry)
              │
       ┌──────┼──────┐
       ↓      ↓      ↓
   products  render  utils
       │              ↑
       ↓              │
      api ────────────┘