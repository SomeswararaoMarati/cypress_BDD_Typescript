export class Actions {
  /**
   * Clicks an element identified by the given selector.
   * @param selector - The selector for the element to click.
   */
  clickElement(selector: string): void {
    cy.get(selector).click().wait(2000)
  }

  /**
   * Types text into an element identified by the given selector.
   * @param selector - The selector for the element to type into.
   * @param text - The text to type.
   */
  typeText(selector: string, text: string): void {
    cy.get(selector).type(text)
  }

  /**
   * Verifies that an element identified by the given selector contains the specified text.
   * @param selector - The selector for the element to verify.
   * @param expectedText - The text that the element should contain.
   */
  verifyText(selector: string, expectedText: string): void {
    cy.get(selector).should('contain.text', expectedText)
  }

  /**
   * Selects an option from a dropdown identified by the given selector.
   * @param selector - The selector for the dropdown element.
   * @param option - The option to select.
   */
  selectDropdown(selector: string, option: string): void {
    cy.get(selector).select(option)
  }

  /**
   * Search and Selects an option from a dropdown identified by the given selector.
   * @param selector - The selector for the dropdown element.
   * @param option - The option to select.
   */
  searchAndSelectFromDropdown(selector: string, option: string): void {
    cy.wait(1000)
    cy.get(selector).type(option).type('{downarrow}').type('{enter}').wait(500)
  }

  /**
   * Checks a checkbox identified by the given selector.
   * @param selector - The selector for the checkbox element.
   */
  checkCheckbox(selector: string): void {
    cy.get(selector).check()
  }

  /**
   * Unchecks a checkbox identified by the given selector.
   * @param selector - The selector for the checkbox element.
   */
  uncheckCheckbox(selector: string): void {
    cy.get(selector).uncheck()
  }

  /**
   * Waits for a specified amount of time.
   * @param milliseconds - The time to wait in milliseconds.
   */
  wait(milliseconds: number): void {
    cy.wait(milliseconds)
  }

  /**
   * Gets the attribute value of an element identified by the given selector.
   * @param selector - The selector for the element.
   * @param attribute - The attribute name to get the value of.
   * @returns A Cypress.Chainable containing the attribute value.
   */
  getAttribute(selector: string, attribute: string): Cypress.Chainable<string> {
    return cy.get(selector).invoke('attr', attribute)
  }

  /**
   * Gets the text content of an element identified by the given selector.
   * @param selector - The selector for the element.
   * @returns A Cypress.Chainable containing the text content.
   */

  getText(selector: string): Cypress.Chainable<string> {
    return cy
      .get(selector)
      .invoke('text')
      .then(val => {
        if (selector.toLocaleLowerCase().includes('amount')) {
          val = val.replace(/[$.,]/g, '').slice(0, -2)
        }
        if (val.startsWith('"') && val.endsWith('"')) {
          // Remove first and last character
          return val.slice(1, -1)
        }
        if (val.startsWith("'") && val.endsWith("'")) {
          // Remove first and last character
          return val.slice(1, -1)
        } else return val
      })
  }
  verifyIsVisible = (selector: string): void => {
    cy.get(selector).should('be.visible')
  }
 
  clearData = (selector: string): void => {
    cy.get(selector).clear()
  }

  /**
   * Verifies that an element identified by the given selector value validates the text.
   * @param selector - The selector for the element to verify value.
   */
  verifyValue(selector: string, expectedValue: string): void {
    cy.get(selector).should('have.value', expectedValue)
  }

  /**
   * get value of the element
   * @param selector - The selector for the element to get value.
   */
  getValue(selector: string) {
    return cy.get(selector).invoke('val')
  }
 
}

export default Actions
