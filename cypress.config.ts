import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild'
import path from 'path'
import fs from 'fs-extra'

const reportDir = './cypress/report'
const mochaDir = '/mochawesome-report'

const getEnvConfiguration = () => {
  const file = process.env.environment ?? 'dev' // Set default to 'dev' if not set
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  )
  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

if (fs.existsSync(reportDir)) {
  fs.rmdirSync(reportDir, { recursive: true })
}

export default defineConfig({
  trashAssetsBeforeRuns: false,
  video: false,
  defaultCommandTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: reportDir + mochaDir,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    charts: true,
    overwrite: false,
    html: false,
    json: true,
  },
  // ...

  e2e: {
    env: await getEnvConfiguration(),
    specPattern: '**/*.feature',
    supportFile: false,
    setupNodeEvents,
    experimentalModifyObstructiveThirdPartyCode: true,
    chromeWebSecurity: false,
  },
})
