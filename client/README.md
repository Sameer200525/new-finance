# Client (Angular)
Minimal Angular 20.3.5 scaffold configured to use the Express backend at http://localhost:5000

## Notes
- This is a simplified scaffold (not a full Angular CLI-generated project) provided because npm install cannot be run in this environment.
- To run locally:
  1. Install Node.js 22.18.0 (nvm, nvm-windows, or direct installer).
  2. In the client folder run:
     ```
     npm install
     npm start
     ```
  3. Open http://localhost:4200

- If you prefer a full Angular CLI project, run:
     ```
     npx @angular/cli@20.3.5 new client --directory client
     ```
  then replace the generated src/app files with the ones in this scaffold.
