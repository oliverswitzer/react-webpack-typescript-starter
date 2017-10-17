# MultiTrak 
An app to help musicians store and play back their music 
  
## Installation
1. Clone/download repo
2. `yarn install`

## Usage
**Development**

`yarn run start-dev`

* Build app continously (HMR enabled)
* App served @ `http://localhost:8080` 

**Production**

`yarn run start-prod`

* Build app once (HMR disabled)
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`yarn run start-dev` | Build app continously (HMR enabled) and serve @ `http://localhost:8080`
`yarn run start-prod` | Build app once (HMR disabled) and serve @ `http://localhost:3000`
`yarn run build` | Build app to `/dist/bundle.min.js` 
`yarn run test` | Run tests
`yarn run lint` | Run Typescript and SASS linter
`yarn run lint:ts` | Run Typescript linter
`yarn run lint:sass` | Run SASS linter
`yarn run start` | (alias of `yarn run start-dev`)

