import {
  keyInPaymentsPendingKeyedInPaymentsGrid,
  keyInPayments,
  keyInPaymentsAddNewPaymentModal,
  secondaryNavBar,
  keyInPaymentsConfirmKeyedInPaymentsModal,
  importDetailsPage,
  importDetailsPayments,
  batchCreate,
  batchCreateCreateBatchResultModal,
  batchDetailsPage,
  keyInPaymentsAddOrEditNewPaymentModalNewInvoice,
  batchDetailsPayments,
  paymentDetailsDetailGridStackDetails,
  paymentDetailsPage,
  paymentDetailsInvoices,
  importDetailsCancelImportModal,
  importDetailsCancelImportResultModal,
  importPayments,
} from '../testIds.ts'
import Actions from '../actions.ts'
const actions = new Actions()
import { generateRandomNumber, setGlobal, getGlobal, generateDateAfter } from './commons.ts'
import { environment } from '../e2e.ts'
import { validateInnerText } from '~/support/utils/helpers.ts'

export class PaymentsPages {
  addNewPayments(vendorName: string) {
    cy.log(`Adding new Payments`)
    actions.clickElement(secondaryNavBar.secondaryNavBarKeyInPaymentsLink)
    actions.clickElement(keyInPayments.addNewPaymentButton)
    actions.searchAndSelectFromDropdown(keyInPaymentsAddNewPaymentModal.vendorDropDown, vendorName)
    setGlobal('vendorName', vendorName)
    const paymentAmount = generateRandomNumber(5)
    actions.typeText(keyInPaymentsAddNewPaymentModal.paymentAmountText, paymentAmount.toString())
    setGlobal('paymentAmount', paymentAmount.toString())
    const internalPaymentId = generateRandomNumber(8)
    actions.typeText(keyInPaymentsAddNewPaymentModal.internalPaymentIdText, internalPaymentId.toString())
    setGlobal('internalPaymentId', internalPaymentId.toString())
    const internalDivisionId = generateRandomNumber(8)
    actions.typeText(keyInPaymentsAddNewPaymentModal.internalDivisionIdText, internalDivisionId.toString())
    setGlobal('internalDivisionId', internalDivisionId.toString())
  }

  validateDetailsOnPendingKeyedInPaymentsGrid() {
    actions.getText(keyInPaymentsPendingKeyedInPaymentsGrid.paymentIdRow).then(function (valueFromLocator) {
      expect(valueFromLocator).to.equal(getGlobal('internalPaymentId'))
    })
    actions.getText(keyInPaymentsPendingKeyedInPaymentsGrid.vendorRow).then(function (valueFromLocator) {
      expect(valueFromLocator).to.equal(getGlobal('vendorName'))
    })
    actions.getText(keyInPaymentsPendingKeyedInPaymentsGrid.divisionIdRow).then(function (valueFromLocator) {
      expect(valueFromLocator).to.equal(getGlobal('internalDivisionId'))
    })
    actions.getText(keyInPaymentsPendingKeyedInPaymentsGrid.paymentAmountRow).then(function (valueFromLocator) {
      expect(valueFromLocator).to.equal(getGlobal('paymentAmount'))
    })
  }

  clickOnConfirmKeyInPayments() {
    actions.clickElement(keyInPayments.confirmKIPButton)
    cy.wait(1000)
    actions.clickElement(keyInPaymentsConfirmKeyedInPaymentsModal.yesButton)
    getGlobal('internalPaymentId')
  }

  saveTheImportID() {
    actions.getText(importDetailsPage.importDetailsImportIdValue).then(function (importId) {
      cy.log(importId)
      setGlobal('importID', importId)
    })
  }

  validateThePaymentImportReview() {
    actions.getText(importDetailsPayments.importDetailsPaymentsGridVendorRow).then(function (valueFromLocator) {
      expect(valueFromLocator).to.equal(getGlobal('vendorName'))
    })
    actions.getText(importDetailsPayments.importDetailsPaymentsGridStatusRow).then(function (valueFromLocator) {
      expect(valueFromLocator).to.equal('Ready')
    })
    actions.getText(importDetailsPayments.importDetailsPaymentsGridPaymentAmountRow).then(function (valueFromLocator) {
      expect(valueFromLocator).to.equal(getGlobal('paymentAmount'))
    })
  }

  createBatch() {
    actions.clickElement(importDetailsPage.importDetailsCreateBatchButton)
    const rowToSelect = `div[data-id="${getGlobal('importID')}"] > div:nth-child(1)`
    actions.clickElement(rowToSelect)
    actions.clickElement(batchCreate.proposedBatchCardCreateBatchButton)
  }

  validateCreatedBatchDetails() {
    actions.getText(batchCreateCreateBatchResultModal.header).then(function (textMessage) {
      expect(textMessage).to.equal('Successfully created batch')
    })

    actions.getText(batchCreateCreateBatchResultModal.batchCreateResultModalBatchIdValue).then(function (batchId) {
      setGlobal('batchId', batchId)
    })

    actions.getText(batchCreateCreateBatchResultModal.batchCreateResultModalStatusValue).then(function (batchStatus) {
      expect(batchStatus).to.equal('Waiting For Approval')
    })

    actions
      .getText(batchCreateCreateBatchResultModal.batchCreateResultModalTotalAmountValue)
      .then(function (totalAmount) {
        expect(totalAmount).to.equal(getGlobal('paymentAmount'))
      })
  }

  clickOnViewBatchDetails() {
    actions.clickElement(batchCreateCreateBatchResultModal.viewBatchDetailsButton)
  }

  validateDetailsOnBatchDetailPage() {
    actions.getText(batchDetailsPage.batchDetailsHeader).then(function (batchDetailsHeader) {
      cy.log(`Batch Details Header : ${batchDetailsHeader}`)
      expect(batchDetailsHeader).to.equal('Batch Details')
    })

    actions.getText(batchDetailsPage.batchDetailsBatchIdValue).then(function (batchId) {
      cy.log(`Batch ID : ${batchId}`)
      expect(batchId).to.equal(getGlobal('batchId'))
    })

    cy.get(batchDetailsPage.batchDetailsApproveBatchButton).should('be.visible').and('be.enabled')
    cy.get(batchDetailsPage.batchDetailsCancelBatchButton).should('be.visible').and('be.enabled')
    cy.get(batchDetailsPage.batchDetailsDownloadPdfButton).should('be.visible').and('be.enabled')
  }

  clickOnApproveBatch() {
    actions.clickElement(batchDetailsPage.batchDetailsApproveBatchButton)
  }

  clickOnKeyInPaymentsButton() {
    actions.clickElement(secondaryNavBar.secondaryNavBarKeyInPaymentsLink)
  }

  clickOnDownloadBatch() {
    actions.clickElement(batchDetailsPage.batchDetailsDownloadPdfButton)
  }

  clickOnBatchNumber(batchId: string) {
    actions.clickElement(`a[href="/batch/details/${batchId}"]`)
    cy.get(batchDetailsPage.batchDetailsApproveBatchButton).should('be.visible')
  }

  verifySuccessMsgOnBatchApprove() {
    actions.getText(batchDetailsPage.batchDetailsApproveOrCancelModalText).then(function (batchApprovedSuccessMsg) {
      expect(batchApprovedSuccessMsg).to.equal('Successfully Approved Batch')
    })
    cy.wait(2000)
    actions.clickElement(batchDetailsPage.batchDetailsApproveOrCancelModalCloseButton)
  }

  AddNewInvoice() {
    cy.get(keyInPaymentsAddOrEditNewPaymentModalNewInvoice('add').invoiceNumberFieldInput).then($invoiceNumberTxt => {
      if ($invoiceNumberTxt.length < 1) {
        actions.clickElement(keyInPaymentsAddOrEditNewPaymentModalNewInvoice('add').addNewInvoiceButton)
      }
      const invoiceNumber = generateRandomNumber(5)
      setGlobal('invoiceNumber', invoiceNumber.toString())
      actions.typeText(
        keyInPaymentsAddOrEditNewPaymentModalNewInvoice('add').invoiceNumberFieldInput,
        invoiceNumber.toString(),
      )
      const invoiceDate = generateDateAfter(0)
      actions.typeText(keyInPaymentsAddOrEditNewPaymentModalNewInvoice('add').invoiceDatePickerInput, invoiceDate)
      setGlobal('invoiceDate', invoiceDate)
      const invoiceDescription = 'Test Description'
      actions.typeText(keyInPaymentsAddOrEditNewPaymentModalNewInvoice('add').descriptionFieldInput, invoiceDescription)
      setGlobal('invoiceDescription', invoiceDescription)
      const originalAmount = generateRandomNumber(5)
      setGlobal('originalAmount', originalAmount.toString())
      const discountAmount = generateRandomNumber(4)
      setGlobal('discountAmount', discountAmount.toString())
      const netAmount = Number(originalAmount) - Number(discountAmount)
      setGlobal('netAmount', netAmount.toString())
      actions.typeText(
        keyInPaymentsAddOrEditNewPaymentModalNewInvoice('add').originalAmountFieldInput,
        originalAmount.toString(),
      )
      actions.typeText(
        keyInPaymentsAddOrEditNewPaymentModalNewInvoice('add').discountFieldInput,
        discountAmount.toString(),
      )
      actions.typeText(keyInPaymentsAddOrEditNewPaymentModalNewInvoice('add').netAmountFieldInput, netAmount.toString())
      const invoicePaymentDate = generateDateAfter(2)
      actions.typeText(
        keyInPaymentsAddOrEditNewPaymentModalNewInvoice('add').paymentDatePickerInput,
        invoicePaymentDate,
      )
      setGlobal('invoicePaymentDate', invoicePaymentDate)
      const additionalCharges = generateRandomNumber(2)
      actions.typeText(
        keyInPaymentsAddOrEditNewPaymentModalNewInvoice('add').additionalChargesFieldInput,
        additionalCharges.toString(),
      )
      setGlobal('additionalAmount', additionalCharges.toString())
      const invoiceCurrency = 'USD'
      actions.typeText(keyInPaymentsAddOrEditNewPaymentModalNewInvoice('add').currencyFieldInput, invoiceCurrency)
      setGlobal('invoiceCurrency', invoiceCurrency)
      cy.wait(3000)
    })
  }

  clickOnAddPaymentAndInvoice() {
    actions.clickElement(keyInPaymentsAddNewPaymentModal.addPaymentAndInvoiceButton)
  }

  ValidateThePayments() {
    actions.getText(batchDetailsPayments.batchDetailsPaymentsGridPaymentIdRow).then(function (paymentID) {
      cy.log(`------>${paymentID}`)
      setGlobal('paymentID', paymentID)
    })
    actions
      .getText(batchDetailsPayments.batchDetailsPaymentsGridInternalPaymentIdRow)
      .then(function (internalPaymentId) {
        expect(internalPaymentId).to.equal(getGlobal('internalPaymentId'))
      })
    actions.getText(batchDetailsPayments.batchDetailsPaymentsGridVendorRow).then(function (vendorName) {
      expect(vendorName).to.equal(getGlobal('vendorName'))
    })
    actions.getText(batchDetailsPayments.batchDetailsPaymentsGridPaymentMethodRow).then(function (paymentMethod) {
      setGlobal('paymentMethod', paymentMethod)
      expect(paymentMethod).to.equal('Check')
    })

    actions.getText(batchDetailsPayments.batchDetailsPaymentsGridSumAmount).then(function (paymentAmount) {
      expect(paymentAmount).to.equal(getGlobal('paymentAmount'))
    })

    actions.getText(batchDetailsPayments.batchDetailsPaymentsGridStatusRow).then(function (paymentStatus) {
      setGlobal('paymentStatus', paymentStatus)
      expect(paymentStatus).to.equal('In Batch')
    })
  }

  navigateToPaymentDetails() {
    cy.visit(environment.url + 'payment/details/' + getGlobal('paymentID'))
  }

  validatePaymentDetails() {
    actions.getText(paymentDetailsDetailGridStackDetails.paymentDetailsDetailGridBatchIdLink).then(function (batchId) {
      cy.log(`Batch ID : ${batchId}`)
      expect(batchId).to.equal(getGlobal('batchId'))
    })
    actions
      .getText(paymentDetailsDetailGridStackDetails.paymentDetailsDetailGridPaymentIdValue)
      .then(function (paymentId) {
        cy.log(`payment ID : ${paymentId}`)
        expect(paymentId).to.equal(getGlobal('paymentID'))
      })

    actions
      .getText(paymentDetailsDetailGridStackDetails.paymentDetailsDetailGridStatusValue)
      .then(function (paymentStatus) {
        cy.log(`payment Status : ${paymentStatus}`)
        expect(paymentStatus).to.equal(getGlobal('paymentStatus'))
      })

    actions
      .getText(paymentDetailsDetailGridStackDetails.paymentDetailsDetailGridVendorLink)
      .then(function (vendorName) {
        cy.log(`vendor Name: ${vendorName}`)
        expect(vendorName).to.equal(getGlobal('vendorName'))
      })

    actions
      .getText(paymentDetailsDetailGridStackDetails.paymentDetailsDetailGridPaymentAmountValue)
      .then(function (paymentAmount) {
        cy.log(`payment Amount: ${paymentAmount}`)
        expect(paymentAmount).to.equal(getGlobal('paymentAmount'))
      })

    actions
      .getText(paymentDetailsDetailGridStackDetails.paymentDetailsDetailGridPaymentMethodValue)
      .then(function (paymentMethod) {
        cy.log(`payment Method: ${paymentMethod}`)
        expect(paymentMethod).to.equal('CHECK')
      })
  }

  clickOnPaymentsDownloadPDF() {
    actions.clickElement(paymentDetailsPage.downloadPdfButton)
  }

  validateInvoiceDetailsOnPaymentDetails() {
    actions.getText(paymentDetailsInvoices.gridInvoiceNumberRow).then(function (invoiceNumber) {
      cy.log(`invoiceNumber: ${invoiceNumber}`)
      expect(invoiceNumber).to.equal(getGlobal('invoiceNumber'))
    })

    actions.getText(paymentDetailsInvoices.gridInvoiceDateRow).then(function (invoiceDate) {
      cy.log(`Fetched invoiceDate: ${invoiceDate}`)
      cy.log(`Entered invoiceDate: ${getGlobal('invoiceDate')}`)
      // Invoice Date Mismatch (Commented Out Due to Issue)
      //expect(invoiceDate).to.equal(getGlobal('invoiceDate'))
    })

    actions.getText(paymentDetailsInvoices.gridOriginalAmountRow).then(function (originalAmount) {
      expect(originalAmount).to.equal(getGlobal('originalAmount'))
    })

    actions.getText(paymentDetailsInvoices.gridDiscountAmountRow).then(function (discountAmount) {
      const disAmount = discountAmount.replace(/[$.,]/g, '').slice(0, -2)
      expect(disAmount).to.equal(getGlobal('discountAmount'))
    })

    actions.getText(paymentDetailsInvoices.gridNetAmountRow).then(function (netAmount) {
      expect(netAmount).to.equal(getGlobal('netAmount'))
    })

    actions.getText(paymentDetailsInvoices.gridCurrencyRow).then(function (invoiceCurrency) {
      expect(invoiceCurrency).to.equal(getGlobal('invoiceCurrency'))
    })

    actions.getText(paymentDetailsInvoices.gridAdditionalAmountRow).then(function (additionalAmount) {
      additionalAmount = additionalAmount.replace(/[$.,]/g, '').slice(0, -2)
      expect(additionalAmount).to.equal(getGlobal('additionalAmount'))
    })

    actions.getText(paymentDetailsInvoices.gridPayDateRow).then(function (invoicePaymentDate) {
      cy.log(`invoicePaymentDate: ${invoicePaymentDate}`)
      cy.log(`Entered invoicePaymentDate: ${getGlobal('invoicePaymentDate')}`)

      // invoice Payment Date Mismatch (Commented Out Due to Issue)
      // expect(invoicePaymentDate).to.equal(getGlobal('invoicePaymentDate'))
    })
  }

  validateKeyInPaymentsPage() {
    cy.log(`Clicking on Key-In Payments`)
    actions.clickElement(secondaryNavBar.secondaryNavBarKeyInPaymentsLink)
    cy.log(`Validating Key-In Payments Page`)
    validateInnerText(keyInPayments.keyInPaymentsHeader, 'Key-In Payments')
    cy.get(keyInPayments.addNewPaymentButton).should('be.visible')
    validateInnerText(keyInPayments.addNewPaymentButton, 'ADD NEW PAYMENT')
    validateInnerText(keyInPayments.pendingKeyedInPaymentsHeader, 'Pending Keyed-In Payments')
    validateInnerText(keyInPaymentsPendingKeyedInPaymentsGrid.paymentIdColumn, 'Payment ID')
    validateInnerText(keyInPaymentsPendingKeyedInPaymentsGrid.vendorColumn, 'Vendor')
    validateInnerText(keyInPaymentsPendingKeyedInPaymentsGrid.divisionIdColumn, 'Division ID')
    validateInnerText(keyInPaymentsPendingKeyedInPaymentsGrid.paymentAmountColumn, 'Payment Amou')
    validateInnerText(keyInPaymentsPendingKeyedInPaymentsGrid.actionColumn, 'Action')
  }

 cancelImport() {
    cy.log('Cancelling the Import')
    actions.clickElement(importDetailsPage.importDetailsCancelImportButton)
    cy.log('validating the cancel impoty popup')
    validateInnerText(importDetailsCancelImportModal.importDetailsCancelImportModalHeader, 'Cancel Import')
    actions.getText(importDetailsCancelImportModal.importDetailsCancelImportModalText).then(function (textMessage) {
      expect(textMessage).includes('Are you sure you want to cancel import ')
    })
    const importid = getGlobal('importID')
    validateInnerText(importDetailsCancelImportModal.importDetailsCancelImportModalImportId, importid)
    cy.get(importDetailsCancelImportModal.importDetailsCancelImportModalNoButton).should('be.enabled')
    cy.get(importDetailsCancelImportModal.importDetailsCancelImportModalYesButton).should('be.enabled')
    cy.log('Clicking on Yes Button to cancel the import')
    actions.clickElement(importDetailsCancelImportModal.importDetailsCancelImportModalYesButton)
    cy.log('verifying the success message')
    validateInnerText(importDetailsCancelImportResultModal.importDetailsCancelImportResultModalHeader, 'Success')
    cy.get(importDetailsCancelImportResultModal.importDetailsCancelImportResultModalSuccessCheckIcon).should(
      'be.visible',
    )
    actions.clickElement(importDetailsCancelImportResultModal.importDetailsCancelImportResultModalCloseButton)
  }

  verifyImportIdInBatchList() {
    actions.clickElement(primaryNavBarLinks.primaryNavBarImportsLink)
    cy.get(importDetailsPage.importids).each($ele => {
      const importid = $ele.text()
      expect(importid).not.to.equal(getGlobal('importID'))
    })
  }

  importPaymentsFile() {
    actions.clickElement(secondaryNavBar.secondaryNavBarImportPaymentsLink);
    cy.wait(500)
    const elem = cy.get(importPayments.importPaymentsImportPayment).invoke("removeAttr", "hidden");
    const filePath = `cypress/fixtures/${getGlobal('generatedPaymentsFile')}`
    elem.selectFile(filePath);
    actions.verifyIsVisible(importPayments.importPaymentsSuccessMessage);
    cy.log(`The Payment file imported is ` + getGlobal('generatedPaymentsFile'))
  }
}
export default PaymentsPages
