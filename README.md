

This coding exercise demonstrates creative problem solving and modern web development understanding. 
- Add any npm modules you may need for best practices
- Make any changes to this repository as you see fit
- Use comments to critique and guide code review

### [Link to Demo](https://glenturner.github.io/react-interview-exercise/)

## Overview of this repository

- [Vite](https://vitejs.dev/guide/) Typescript React base
- [Chakra-UI](https://chakra-ui.com/docs/principles) interface styling (feel free to replace with your favorite UI)
- [Pretty resolver](tsconfig.paths.json), aliased modules for readability: `import Home from "@components/Home"`
- [Github Actions](.github/workflows/push.yaml) to build and deploy this project to Github Pages (creates `gh-pages` branch)

### Getting Started

1. Clone the repository `git clone https://github.com/CharacterStrong/react-interview-exercise`
2. Install dependencies `cd react-interview-exercise && npm i`
3. Run local development server `npm run dev`
4. Navigate to http://localhost:3000
5. Follow the Prompt

## Prompt

The goal of this exercise is to build a prototype utility that gives users ability to search and view school district information from [NCES + ArcGIS apis](https://data-nces.opendata.arcgis.com/datasets/nces::private-school-locations-current/api). See [this dataset and others](https://data-nces.opendata.arcgis.com/datasets/school-district-characteristics-2019-20/explore). 

