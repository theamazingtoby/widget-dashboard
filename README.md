# Widget Dashboard

A customizable Angular dashboard with four panels, each of which can display any of six widgets. Panel preferences and theme choice are persisted to a local JSON backend.

## Features

- **4 panels** arranged in a 2×2 grid
- **6 widgets** — Clock, Weather, Notes, Task List, System Stats, Calendar
- **Per-panel widget picker** — change any panel's widget via a dropdown
- **Light / dark mode toggle** — persisted across sessions
- All preferences saved automatically to a `json-server` backend

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or v20–22 (v26+ is not yet supported by Angular)
- npm (comes with Node)

Install the Angular CLI and json-server globally if you haven't already:

```bash
npm install -g @angular/cli json-server
```

## Getting started

**1. Clone the repo and install dependencies**

```bash
git clone https://github.com/theamazingtoby/widget-dashboard.git
cd widget-dashboard
npm install
```

**2. Start the JSON backend** (in one terminal)

```bash
npm run server
```

This starts `json-server` on `http://localhost:3000`. Your panel layout and theme preference are read from and written to `db.json`.

**3. Start the Angular dev server** (in a second terminal)

```bash
npm start
```

Open `http://localhost:4200` in your browser. The app reloads automatically when you edit source files.

> Both servers must be running at the same time for the app to work correctly.

## Available scripts

| Script | Description |
|---|---|
| `npm start` | Start the Angular dev server on port 4200 |
| `npm run server` | Start the json-server backend on port 3000 |
| `npm run build` | Build for production (output in `dist/`) |
| `npm test` | Run unit tests with Vitest |

## Resetting preferences

To reset your panel layout and theme back to the defaults, replace the contents of `db.json` with:

```json
{
  "preferences": [
    {
      "id": "1",
      "panels": [
        { "id": "panel-1", "position": "top-left",     "widget": "clock"   },
        { "id": "panel-2", "position": "top-right",    "widget": "weather" },
        { "id": "panel-3", "position": "bottom-left",  "widget": "tasks"   },
        { "id": "panel-4", "position": "bottom-right", "widget": "stats"   }
      ],
      "theme": "light"
    }
  ],
  "$schema": "./node_modules/json-server/schema.json"
}
```
