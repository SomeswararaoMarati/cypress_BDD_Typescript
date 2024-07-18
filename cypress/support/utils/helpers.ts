import Actions from '../actions.ts'
const actions = new Actions() /**
 *
 * @verify the innter text of the element and validated whether it is expected or not
 */
export const validateInnerText = (selector: string, InnerText: string) => {
  actions.getText(selector).then(function (valuetobeValdiated: string) {
    cy.log('value fetched' + valuetobeValdiated)
    cy.log('value to be validated' + InnerText)
    expect(valuetobeValdiated).to.equal(InnerText)
  })
}
