import './commands/base.ts'


const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', err => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false
  }
})


export const environment = Cypress.env()
export const url = environment.url
export const env = environment.env
export const client_admin = environment.client_admin
export const client_user = environment.client_user
