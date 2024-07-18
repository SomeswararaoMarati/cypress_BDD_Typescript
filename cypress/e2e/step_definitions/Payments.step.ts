import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { getGlobal } from '~/support/commands/commons.ts'
import { PaymentsPages } from '~/support/commands/paymentsPage.ts'
const keyInPaymentsPages = new PaymentsPages()

When('I add a Key-In Payment for vendor {string}', (vendorName: string) => {
  cy.log(`Create keyInPayments`)
  keyInPaymentsPages.addNewPayments(vendorName)
})

Then('I validate the pending KeyInPayments on vendor {string}', (vendorName: string) => {
  cy.log(`search and validate vendor ${vendorName}`)
  keyInPaymentsPages.validateDetailsOnPendingKeyedInPaymentsGrid()
})

Then('I confirm the Key-In Payments', () => {
  cy.log(`Click on Confirm Key-In Payments`)
  keyInPaymentsPages.clickOnConfirmKeyInPayments()
})

Then('I review the payment import details', () => {
  cy.log(`validatating the Payment review`)
  keyInPaymentsPages.saveTheImportID()
  keyInPaymentsPages.validateThePaymentImportReview()
})

When('I create a new batch and select the import ID', () => {
  cy.log('create batch')
  keyInPaymentsPages.createBatch()
})

Then('I verify that the batch is successfully created', () => {
  cy.log('Validating batch is Created successfully')
  keyInPaymentsPages.validateCreatedBatchDetails()
})

Then('I click on View Batch Details to validate the batch details and payments', () => {
  cy.log('Click on view batch details and validate the details')
  keyInPaymentsPages.clickOnViewBatchDetails()
  keyInPaymentsPages.validateDetailsOnBatchDetailPage()
  keyInPaymentsPages.ValidateThePayments()
})

When('I click on Approve batch', () => {
  cy.log('Click on Approve Batch button')
})

Then('I navigate to Key-In Payment', () => {
  cy.log('Navigate to Key-In Payment')
  keyInPaymentsPages.clickOnKeyInPaymentsButton()
})

Then('I click on download batch', () => {
  cy.log('Navigate to Key-In Payment')
  keyInPaymentsPages.clickOnDownloadBatch()
  cy.wait(5000)
})

Then('I validate the downloaded pdf batch file content', () => {
  const fileName = `batch${getGlobal('batchId')}.pdf`
  cy.exec(`python cypress/fixtures/extract_pdf_data.py cypress/downloads/${fileName}`, {
    failOnNonZeroExit: false,
  }).then(result => {
    cy.log(result.stdout)
    expect(result.stdout).include('No of Pages : 1')
    expect(result.stdout).include(getGlobal('batchId'))
    expect(result.stdout).include(getGlobal('vendorName'))
    expect(result.stdout).include(getGlobal('internalPaymentId'))
    cy.log(`---> ${getGlobal('paymentAmount')}`)
  })
})

Then('I search for active batch and approve it', () => {
  const recentlyCreatedBatchId = getGlobal('batchId')
  keyInPaymentsPages.clickOnBatchNumber(recentlyCreatedBatchId)
  keyInPaymentsPages.clickOnApproveBatch()
  keyInPaymentsPages.verifySuccessMsgOnBatchApprove()
})

Then('I add new invoice with details', () => {
  keyInPaymentsPages.AddNewInvoice()
})

Then('I click on Add Payment & Invoice button', () => {
  keyInPaymentsPages.clickOnAddPaymentAndInvoice()
})

When('I click on payment ID to view the Payment details', () => {
  keyInPaymentsPages.navigateToPaymentDetails()
})

Then('I validate the payment details', () => {
  keyInPaymentsPages.validatePaymentDetails()
})

Then('I validate the invoice details on payment details page', () => {
  keyInPaymentsPages.validateInvoiceDetailsOnPaymentDetails()
})

When('I click on download PDF on payment details', () => {
  keyInPaymentsPages.clickOnPaymentsDownloadPDF()
})

Then('I validate the downloaded pdf payments file content', () => {
  const fileName = `payment${getGlobal('paymentID')}.pdf`
  cy.exec(`python cypress/fixtures/extract_pdf_data.py cypress/downloads/${fileName}`, {
    failOnNonZeroExit: true,
  }).then(result => {
    // cy.log(result.stdout)
    expect(result.stdout).include('No of Pages : 1')
    expect(result.stdout).include(getGlobal('invoiceNumber'))
    expect(result.stdout).include('Check')
    expect(result.stdout).include('In Batch')
  })
})

Then('I Click on Key-In Payments and validate the Key-In Payments page', () => {
  cy.log('entered ')
  keyInPaymentsPages.validateKeyInPaymentsPage()
})

Then('I Generate a payments file to imports with rows {string}', (NoOfRows:string) => {  
   cy.JSONtoCSV(Number(NoOfRows));
})

Then('I Delete the previously generated payment files', () => { 
  cy.exec('del cypress\\fixtures\\payments_*_*.csv ', { failOnNonZeroExit: false }).then((result) => {
    if (result.code === 0) {
      cy.log('Files deleted successfully.');
    } else {
      cy.log('No files matching the pattern found.');
    } 
  });
})

Then('I import the generated Payment file', () => { 
   keyInPaymentsPages.importPaymentsFile();
})

Then('I validate the total payment amount from imported Payments file', () => {
  
})

Then('I cancel the import and validate the cancel message', function () {
  keyInPaymentsPages.cancelImport()
})

Then('Verify the import ID should not be available in the batch list', function () {
  cy.log('Go to Imports Tab and verify the import ID is not available in the batch list')
  keyInPaymentsPages.verifyImportIdInBatchList()
})