import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '~/support/commands/homePage.ts'
import { environment } from '~/support/e2e.ts'
import { secondaryNavBar, keyInPayments } from '~/support/testIds.ts'
const homePage = new HomePage()

Given('I access the PA application and log in as a {string} user from the {string} client', (userType, client) => {
  cy.log(`Accessing PA web application in ${environment.platform} environment`)
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const jsonObject = require(`../../config/${environment.platform}.json`)

  /* ==============================
    Client Name: PMG AUTO1
    ROSETTATRANSLATOR : M3
    REQUIRES BATCH APPROVAL: YES
    Funding Method :ACH
    
    Client Name: PMG AUTO2
    ROSETTATRANSLATOR : Paymerang Base
    REQUIRES BATCH APPROVAL: NO
    Funding Method :ACH
  ==================================== */

  if (client == 'PMG_CLIENT_1' && userType == 'client_admin') {
    cy.DoUserLogin(jsonObject.PMG_CLIENT_1.client_admin.email, jsonObject.PMG_CLIENT_1.client_admin.password)
  } else if (client === 'PMG_CLIENT_1' && userType == 'client_user') {
    cy.DoUserLogin(jsonObject.PMG_CLIENT_1.client_user.email, jsonObject.PMG_CLIENT_1.client_user.password)
  } else if (client === 'PMG_CLIENT_2' && userType == 'client_admin') {
    cy.DoUserLogin(jsonObject.PMG_CLIENT_1.client_admin.email, jsonObject.PMG_CLIENT_1.client_admin.password)
  } else if (client === 'PMG_CLIENT_2' && userType == 'client_user') {
    cy.DoUserLogin(jsonObject.PMG_CLIENT_1.client_user.email, jsonObject.PMG_CLIENT_1.client_user.password)
  }
  cy.visit(environment.url + 'batches')
  cy.get('[data-testid="secondaryNavBar_keyInPayments_link"]').should('be.visible')
})

When('I click on key-In Payments', () => {
  cy.get(secondaryNavBar.secondaryNavBarKeyInPaymentsLink).should('be.visible')
  cy.get(secondaryNavBar.secondaryNavBarKeyInPaymentsLink).click().wait(3000)
  cy.get(keyInPayments.keyInPaymentsHeader).should('be.visible')
})

Then('I Validate the Home Page layout of {string}', userType => {
  if (userType == 'client_admin') {
    homePage.validateHomePageLayoutForClientAdmin()
  } else if (userType == 'client_user') {
    homePage.validateHomePageLayoutForClientUser()
  }
})

Then('I click on Reports and validate the {string} types', (availableTypes: string) => {
  homePage.validateTheReportsTypeAvailable(availableTypes)
})
