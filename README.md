# 🌌 SWAPI Azure Functions Project 🚀

Welcome to the **Star Wars API (SWAPI)** project, built with Azure Functions v4 and Node.js! This project provides serverless HTTP endpoints for Star Wars planets, characters, films, species, starships, and vehicles.

## ✨ Features
- Serverless API using Azure Functions
- ESM module support
- Fun Star Wars data for planets, characters, films, species, starships, and vehicles

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/softchris/swapi-project.git
   cd swapi-project
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🏁 Running Locally

1. **Start the Azure Functions host:**
   ```bash
   npm start
   ```
2. **Endpoints:**
   - `GET /api/planets` — List all planets
   - `GET /api/planets/{id}` — Get a planet by ID
   - `GET /api/characters` — List all characters
   - `GET /api/characters/{id}` — Get a character by ID
   - `GET /api/films` — List all films
   - `GET /api/films/{id}` — Get a film by ID
   - `GET /api/species` — List all species
   - `GET /api/species/{id}` — Get a species by ID
   - `GET /api/starships` — List all starships
   - `GET /api/starships/{id}` — Get a starship by ID
   - `GET /api/vehicles` — List all vehicles
   - `GET /api/vehicles/{id}` — Get a vehicle by ID
   - `GET /api/root` - Show all routes 

## 🛠️ Project Structure
```
src/
  functions/
    planets.js
    characters.js
    films.js
    species.js
    starships.js
    vehicles.js
    root.js
  utils/
    planets.js
    characters.js
    films.js
    species.js
    starships.js
    vehicles.js
host.json
local.settings.json
package.json
LICENSE
README.md
```

## 📝 Notes
- This project uses the Azure Functions v4 programming model.
- Make sure you have [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local) installed.
- Have fun exploring the Star Wars universe! ✨

## 📄 License
MIT
