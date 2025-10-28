# MEAN Finance (scaffold)
This archive contains a MEAN-stack scaffold intended to resemble the 'finace' app.
## Structure
- server/  -> Express backend (index.js, package.json)
- client/  -> Minimal Angular 20.3.5 scaffold (package.json, src/...)

## Important
- This environment could not run `npm install` (no internet). Dependencies are NOT preinstalled.
- After downloading and extracting:
  1. Ensure Node.js 22.18.0 is installed locally.
  2. Ensure MongoDB is running locally.
  3. In `server/` run:
     ```
     npm install
     npm run dev
     ```
  4. In `client/` run:
     ```
     npm install
     npm start
     ```
- For a full Angular CLI project (recommended), run `npx @angular/cli@20.3.5 new client --directory client` and then copy the `src/app` files from this scaffold into the generated project.

## Customization
- You can adjust `server/.env` to change MongoDB URI or port.
