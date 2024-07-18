import {
  primaryNavBarLinks,
  vendors,
  vendorsFilterDrawer,
  vendorsAddNewVendorModal,
  vendorsAddNewVendorModalNewVendor,
  vendorsAddNewVendorModalMailingAddress,
  vendorsAddNewVendorModalPaymentSpecs,
  vendorsAddNewVendorSmartyModal,
  vendorDetailsPage,
  vendorDetailsPaymentSpecsEditMode,
  vendorDetailsPaymentSpecs,
  vendorDetailsEditVendorSmartyModal,
  vendorDetailsModals,
  vendorDetailsPaymentHistory,
  vendorsGrid,
} from '../testIds.ts'
import Actions from '../actions.ts'
import { generateRandomNumber, generateRandomString, setGlobal, getGlobal } from './commons.ts'
const actions = new Actions()

export class vendorsPage {
  navigateToVendorsTab() {
    actions.clickElement(primaryNavBarLinks.primaryNavBarVendorsLink)
  }

  headingsValidation() {
    const vendorList: string = 'Vendor List'
    actions.getText(vendors.header).then(function (valueFromLocator) {
      expect(valueFromLocator).to.equal(vendorList)
    })
    actions.verifyIsVisible(vendors.searchFieldInput)
    actions.verifyIsVisible(vendors.filterButton)
    actions.getText(vendors.filterButton).then(function (valueFromLocator) {
      expect(valueFromLocator).to.contain('filter')
    })
    actions.verifyIsVisible(vendors.addNewVendorButton)
    actions.getText(vendors.addNewVendorButton).then(function (valueFromLocator) {
      expect(valueFromLocator).to.equal('+ Add new vendor')
    })
    actions.verifyIsVisible(vendors.countLabel)
    actions.getText(vendors.countLabel).then(function (valueFromLocator) {
      expect(valueFromLocator).to.contain('Vendor Count:')
    })
  }

  filterTrayValidation() {
    actions.clickElement(vendors.filterButton)
    actions.verifyIsVisible(vendorsFilterDrawer.header)
    actions.verifyIsVisible(vendorsFilterDrawer.clearAllButton)
    actions.verifyIsVisible(vendorsFilterDrawer.vendorFilterStatusLabel)
    actions.verifyIsVisible(vendorsFilterDrawer.applyFilterButton)
    actions.verifyIsVisible(vendorsFilterDrawer.vendorFilterStatusActiveCheckboxLabel)
    actions.verifyIsVisible(vendorsFilterDrawer.vendorFilterStatusInactiveCheckboxLabel)
    actions.verifyIsVisible(vendorsFilterDrawer.vendorFilterStatusOfacHoldCheckboxLabel)
    actions.clickElement(vendorsFilterDrawer.applyFilterButton)
  }

  filterTray_applyFilterAndValidate() {
    actions.clickElement(vendors.filterButton)
    actions.clickElement(vendorsFilterDrawer.vendorFilterStatusInactiveCheckbox)
    actions.clickElement(vendorsFilterDrawer.vendorFilterStatusOfacHoldCheckbox)
    actions.clickElement(vendorsFilterDrawer.applyFilterButton)
  }

  validateFilterLabelAfterFilterApply() {
    actions.verifyIsVisible(vendors.vendorsActiveFilterTagLabelAfterApply)
    actions.verifyIsVisible(vendors.vendorsInActiveFilterTagLabelAfterApply)
    actions.verifyIsVisible(vendors.vendorsStatusOfacHoldTagLabelAfterApply)
    actions.getText(vendors.filterSelectedFiltersCount).then(function (valueFromLocator) {
      expect(valueFromLocator).to.contain('3')
    })
  }

  clearFilter_validation_vendorPage() {
    actions.clickElement(vendors.filterButton)
    actions.clickElement(vendorsFilterDrawer.clearAllButton)
    actions.getText(vendors.filterButton).then(function (valueFromLocator) {
      expect(valueFromLocator).to.equal('filter')
    })
  }

  validateAddNewVendorButtonFunctionality() {
    actions.clickElement(vendors.addNewVendorButton)
    actions.verifyIsVisible(vendorsAddNewVendorModal.header)
    actions.verifyIsVisible(vendorsAddNewVendorModalNewVendor.newVendorHeader)
    actions.getText(vendorsAddNewVendorModal.header).then(function (valueFromLocator) {
      expect(valueFromLocator).to.contain('Add New Vendor')
    })
    actions.getText(vendorsAddNewVendorModalNewVendor.newVendorHeader).then(function (valueFromLocator) {
      expect(valueFromLocator).to.contain('New Vendor')
    })
  }

  addNewVendorDetails() {
    let vendorId = generateRandomNumber(5)
    const alphabet = generateRandomString(1)
    vendorId = alphabet + vendorId
    let vendorName = generateRandomNumber(3)
    vendorName = 'Test Vendor' + vendorName
    setGlobal('vendorName', vendorName)
    setGlobal('vendorId', vendorId)
    actions.typeText(vendorsAddNewVendorModalNewVendor.vendorNameField_Input, vendorName)
    actions.typeText(vendorsAddNewVendorModalNewVendor.internalVendorIdFieldInput, vendorId)
    cy.fixture('vendorDetails').then(function (data) {
      this.data = data
      const min = 0
      const max = 4
      const indexrandomNumber = Math.floor(Math.random() * (max - min)) + min
      setGlobal('address1', this.data.address[indexrandomNumber].address1)
      setGlobal('city', this.data.address[indexrandomNumber].city)
      setGlobal('zip', this.data.address[indexrandomNumber].zip)
      setGlobal('state', this.data.address[indexrandomNumber].state)
      setGlobal('phone', this.data.address[indexrandomNumber].phone)
      setGlobal('email', this.data.address[indexrandomNumber].email)

      actions.typeText(
        vendorsAddNewVendorModalMailingAddress.addressInput,
        this.data.address[indexrandomNumber].address1,
      )
      actions.typeText(vendorsAddNewVendorModalMailingAddress.cityInput, this.data.address[indexrandomNumber].city)
      actions.typeText(vendorsAddNewVendorModalMailingAddress.zipInput, this.data.address[indexrandomNumber].zip)
      actions.typeText(
        vendorsAddNewVendorModalMailingAddress.stateAutocompleteFieldInput,
        this.data.address[indexrandomNumber].state,
      )
      actions.typeText(
        vendorsAddNewVendorModalPaymentSpecs.payeeTelephoneInput,
        this.data.address[indexrandomNumber].phone,
      )
      actions.typeText(vendorsAddNewVendorModalPaymentSpecs.payeeEmailInput, this.data.address[indexrandomNumber].email)
      actions.clickElement(vendorsAddNewVendorModal.saveButton)
      actions
        .getText(vendorsAddNewVendorSmartyModal.vendorsAddNewVendorSmartyModalMessage)
        .then(function (valueFromLocator) {
          if (
            valueFromLocator.toString() ===
            'We are unable to verify this address. Please verify the address and continue.'
          ) {
            actions.clickElement(vendorsAddNewVendorSmartyModal.vendorsAddNewVendorSmartyModalUnverifiedAddressButton)
          } else {
            actions.clickElement(vendorsAddNewVendorSmartyModal.vendorsAddNewVendorSmartyModalExistingAddressButton)
          }
        })
      actions.clickElement(vendors.vendorsCreateVendorResultModalCloseButton)
      // search vendor given name
      cy.get(vendors.searchFieldInput).type(vendorName).type('{enter}')
      cy.get(vendorsAddNewVendorSmartyModal.vendorsAddNewVendor_grid_vendorName_link)
        .find('a')
        .contains(vendorName)
        .invoke('removeAttr', 'target')
        .click()
      cy.wait(2000)
    })
  }
  validateEditVendorButtonFunctionality() {
    cy.get(vendorDetailsPage.editVendorButton).click()
    cy.wait(1000)
    this.editVendorDetails()
  }
  editVendorDetails() {
    const address1 = '15205 North Kierland Blvd. Suite 100'
    const city = 'Scottsdale'
    const zip = '85254'
    const state = 'AZ'
    actions.clearData(vendorDetailsPaymentSpecs.addressFieldInput)
    actions.typeText(vendorDetailsPaymentSpecs.addressFieldInput, address1)
    actions.clearData(vendorDetailsPaymentSpecs.cityFieldInput)
    actions.typeText(vendorDetailsPaymentSpecs.cityFieldInput, city)
    actions.clearData(vendorDetailsPaymentSpecs.zipFieldInput)
    actions.typeText(vendorDetailsPaymentSpecs.zipFieldInput, zip)
    actions.clearData(vendorDetailsPaymentSpecsEditMode.stateAutocompleteFieldInput)
    actions.typeText(vendorDetailsPaymentSpecsEditMode.stateAutocompleteFieldInput, state)
    actions.clickElement(vendorDetailsPaymentSpecsEditMode.confirmButton)
    actions.clickElement(vendorDetailsEditVendorSmartyModal.vendorDetailsEditVendorSmartyModalExistingAddressButton)
    actions.clickElement(vendorDetailsModals.vendorDetailsEditSuccessOrFailureModalCloseButton)
    // Validation
    cy.get(vendorDetailsPaymentSpecs.addressFieldInput).invoke('val').should('contain', address1)
    actions.verifyValue(vendorDetailsPaymentSpecs.addressFieldInput, address1)
    cy.get(vendorDetailsPaymentSpecs.cityFieldInput).invoke('val').should('contain', city)
    cy.get(vendorDetailsPaymentSpecs.zipFieldInput).invoke('val').should('contain', zip)
    cy.get(vendorDetailsPaymentSpecs.stateFieldInput).invoke('val').should('contain', state)
    actions.verifyValue(vendorDetailsPaymentSpecs.cityFieldInput, city)
    actions.verifyValue(vendorDetailsPaymentSpecs.zipFieldInput, zip)
    actions.verifyValue(vendorDetailsPaymentSpecs.stateFieldInput, state)
  }
  validateRemoveVendorButtonFunctionality() {
    actions.getValue(vendorDetailsPage.vendorNameFieldInput).then(function (vendorNamefromUI) {
      const vendorNameui: string = vendorNamefromUI
      cy.get(vendorDetailsPage.removeVendorButton).click()
      cy.wait(1000)
      cy.get('[data-testid="vendorDetails_removeVendor_modal_confirm_button"]').click()
      cy.wait(1000)
      // serach vendor name
      cy.get(vendors.searchFieldInput).type(vendorNameui).type('{enter}')
      cy.wait(2000)
      actions.getText(vendors.countValue).then(function (valueFromLocator) {
        expect(valueFromLocator).to.equal('0')
      })
    })
  }

  addVendorwithDatatisForDateDuplicationValidation() {
    let vendorId = generateRandomNumber(5)
    const alphabet = generateRandomString(1)
    vendorId = alphabet + vendorId
    const vendorName = 'Test Vendor Duplicate'
    const address1 = '893 Cook Hill Road'
    const city = 'Hartford'
    const zip = '06103'
    const state = 'CT'
    const phone = '203-446-2552'
    const email = 'paymerangautopa+AdminAuto2@gmail.com'
    this.stepsAddingVendor(vendorName, vendorId, address1, city, zip, state, phone, email)
    actions.clickElement(vendors.vendorsCreateVendorResultModalCloseButton)
    actions.clickElement(vendors.addNewVendorButton)
    this.stepsAddingVendor(vendorName, vendorId, address1, city, zip, state, phone, email)
    this.validateDuplicateMessage()
  }
  stepsAddingVendor(
    vendorName: string,
    vendorId: string,
    address1: string,
    city: string,
    zip: string,
    state: string,
    phone: string,
    email: string,
  ) {
    actions.typeText(vendorsAddNewVendorModalNewVendor.vendorNameField_Input, vendorName)
    actions.typeText(vendorsAddNewVendorModalNewVendor.internalVendorIdFieldInput, vendorId)
    actions.typeText(vendorsAddNewVendorModalMailingAddress.addressInput, address1)
    actions.typeText(vendorsAddNewVendorModalMailingAddress.cityInput, city)
    actions.typeText(vendorsAddNewVendorModalMailingAddress.zipInput, zip)
    actions.typeText(vendorsAddNewVendorModalMailingAddress.stateAutocompleteFieldInput, state)
    actions.typeText(vendorsAddNewVendorModalPaymentSpecs.payeeTelephoneInput, phone)
    actions.typeText(vendorsAddNewVendorModalPaymentSpecs.payeeEmailInput, email)
    actions.clickElement(vendorsAddNewVendorModal.saveButton)
    this.mailingAddressPopUphandlingNewVendor()
  }

  validateDuplicateMessage() {
    cy.get(vendorsAddNewVendorSmartyModal.vendorsAddNewVendor_duplicatemessage).contains(
      'already being used by another vendor, please select another.',
    )
  }

  changeVendorStatusAndValidate() {
    cy.get(vendorDetailsPage.vendorNameLink)
      .first()
      .invoke('text')
      .then(vendorName => {
        const firstVendorName = vendorName
        cy.get(vendorDetailsPage.vendorNameLink).first().invoke('removeAttr', 'target').click()
        // make it inactive first and then verify
        cy.get(vendorDetailsPage.editVendorButton).click()
        cy.get(vendorDetailsEditVendorSmartyModal.vendorDetailsEditVendorStatusActive).click()
        cy.get(vendorDetailsEditVendorSmartyModal.vendorDetailsEditVendorStatusActive_no).click()
        actions.clickElement(vendorDetailsPaymentSpecsEditMode.confirmButton)
        // validate information after inactive done
        this.mailingAddressPopUphandlingEditVendor()
        cy.wait(2000)
        actions.clickElement(vendorDetailsModals.vendorDetailsEditSuccessOrFailureModalCloseButton)
        cy.wait(2000)
        // navigate to vendor page and search for the vendor marked as inactive
        actions.clickElement(primaryNavBarLinks.primaryNavBarVendorsLink)
        actions.clickElement(vendors.filterButton)
        actions.clickElement(vendorsFilterDrawer.vendorFilterStatusInactiveCheckbox)
        actions.clickElement(vendorsFilterDrawer.vendorFilterStatusActiveCheckbox)
        actions.clickElement(vendorsFilterDrawer.applyFilterButton)
        cy.get(vendors.searchFieldInput).type(firstVendorName).type('{enter}')
        cy.get(vendors.vendorStatusInGrid).should('have.text', 'Inactive')
        cy.get(vendors.vendorNameInGrid).should('have.text', firstVendorName)
        // now change inactive to active
        cy.get(vendors.vendorNameInGrid).first().invoke('removeAttr', 'target').click()
        cy.get(vendorDetailsPage.editVendorButton).click()
        cy.get(vendorDetailsEditVendorSmartyModal.vendorDetailsEditVendorStatusActive).click()
        cy.get(vendorDetailsEditVendorSmartyModal.vendorDetailsEditVendorStatusActive_yes).click()
        actions.clickElement(vendorDetailsPaymentSpecsEditMode.confirmButton)
        // validate information after inactive done
        this.mailingAddressPopUphandlingEditVendor()
        cy.wait(2000)
        actions.clickElement(vendorDetailsModals.vendorDetailsEditSuccessOrFailureModalCloseButton)
        cy.wait(2000)
        // navigate to vendor page and search for the vendor marked as active
        actions.clickElement(primaryNavBarLinks.primaryNavBarVendorsLink)
        cy.get(vendors.searchFieldInput).type(firstVendorName).type('{enter}')
        cy.get(vendors.vendorStatusInGridActive).should('have.text', 'Active')
        cy.get(vendors.vendorNameInGrid).should('have.text', firstVendorName)
      })
  }

  mailingAddressPopUphandlingNewVendor() {
    actions
      .getText(vendorsAddNewVendorSmartyModal.vendorsAddNewVendorSmartyModalMessage)
      .then(function (valueFromLocator) {
        if (
          valueFromLocator.toString() ===
          'We are unable to verify this address. Please verify the address and continue.'
        ) {
          actions.clickElement(vendorsAddNewVendorSmartyModal.vendorsAddNewVendorSmartyModalUnverifiedAddressButton)
        } else {
          actions.clickElement(vendorsAddNewVendorSmartyModal.vendorsAddNewVendorSmartyModalExistingAddressButton)
        }
      })
  }

  mailingAddressPopUphandlingEditVendor() {
    actions
      .getText(vendorDetailsEditVendorSmartyModal.vendorDetailsEditVendorSmartyModalMessage)
      .then(function (valueFromLocator) {
        if (
          valueFromLocator.toString() ===
          'We are unable to verify this address. Please verify the address and continue.'
        ) {
          actions.clickElement(
            vendorDetailsEditVendorSmartyModal.vendorDetailsEditVendorSmartyModalUnverifiedAddressButton,
          )
        } else {
          actions.clickElement(
            vendorDetailsEditVendorSmartyModal.vendorDetailsEditVendorSmartyModalExistingAddressButton,
          )
        }
      })
  }

  static verifyPaymentHistorySection() {
    actions.verifyIsVisible(vendorDetailsPaymentHistory.exportButton)
    actions.verifyIsVisible(vendorDetailsPaymentHistory.header)
    actions.verifyIsVisible(vendorDetailsPaymentHistory.vendorDetailsPage_ph_paymentId)
    actions.verifyIsVisible(vendorDetailsPaymentHistory.vendorDetailsPage_ph_datecreated)
    actions.verifyIsVisible(vendorDetailsPaymentHistory.vendorDetailsPage_ph_paymentmethod)
    actions.verifyIsVisible(vendorDetailsPaymentHistory.vendorDetailsPage_ph_paymentstatus)
    actions.verifyIsVisible(vendorDetailsPaymentHistory.vendorDetailsPage_ph_amount)
    actions.verifyIsVisible(vendorDetailsPaymentHistory.vendorDetailsPage_ph_rowsperPage)
    cy.get(vendorDetailsPaymentHistory.exportButton).contains('Export')
    cy.get(vendorDetailsPaymentHistory.header).contains('Payment History')
    cy.get(vendorDetailsPaymentHistory.vendorDetailsPage_ph_paymentId).contains('Payment ID')
    cy.get(vendorDetailsPaymentHistory.vendorDetailsPage_ph_datecreated).contains('Date Created')
    cy.get(vendorDetailsPaymentHistory.vendorDetailsPage_ph_paymentmethod).contains('Payment Method')
    cy.get(vendorDetailsPaymentHistory.vendorDetailsPage_ph_paymentstatus).contains('Status')
    cy.get(vendorDetailsPaymentHistory.vendorDetailsPage_ph_amount).contains('Amount')
    cy.get(vendorDetailsPaymentHistory.vendorDetailsPage_ph_rowsperPage).contains('Rows per page:')
    actions
      .getValue(vendorDetailsPaymentHistory.vendorDetailsPage_ph_rowsperPageOptions)
      .then(function (valueFromLocator) {
        expect(valueFromLocator).to.contain('10')
      })
    cy.get(vendorDetailsPaymentHistory.vendorDetailsPage_ph_rowsperPage_downarrow).click({ force: true })
  }


  validateAddedVendorDetailsInGrid() {
    this.navigateToVendorsTab()
    cy.get(vendors.searchFieldInput).type(getGlobal('vendorName')).type('{enter}')
    cy.wait(2000)
    // verify heading
    cy.get(vendorsGrid.vendorGridColumnsHeading).first().should('have.text', 'Vendor Name')
    cy.get(vendorsGrid.vendorGridColumnsHeading).eq(1).should('have.text', 'Internal ID')
    cy.get(vendorsGrid.vendorGridColumnsHeading).eq(2).should('have.text', 'Paymerang ID')
    cy.get(vendorsGrid.vendorGridColumnsHeading).eq(3).should('have.text', 'Email Address')
    cy.get(vendorsGrid.vendorGridColumnsHeading).eq(4).should('have.text', 'Account Number')
    cy.get(vendorsGrid.vendorGridColumnsHeading).eq(5).should('have.text', 'Status')
    cy.get(vendorsGrid.vendorGridRightArrowButton).first().click()
    cy.get(vendorsGrid.vendorGridColumnsHeading).eq(6).should('have.text', 'Address')
    cy.get(vendorsGrid.vendorGridColumnsHeading).eq(7).should('have.text', 'City')
    cy.get(vendorsGrid.vendorGridColumnsHeading).eq(8).should('have.text', 'State')
    cy.get(vendorsGrid.vendorGridColumnsHeading).eq(9).should('have.text', 'Zip')
    cy.get(vendorsGrid.vendorGridColumnsHeading).eq(10).should('have.text', 'Telephone')
    cy.get(vendorsGrid.vendorGridColumnsHeading).eq(11).should('have.text', 'Payee')
    // verifying content
    cy.get(vendors.vendorNameInGrid).contains(getGlobal('vendorName')).click()
    cy.get(vendorsGrid.vendorGridInternalId).contains(getGlobal('vendorId'))
    cy.get(vendorsGrid.vendorGridContactEmailId).contains(getGlobal('email'))
    cy.get(vendorsGrid.vendorGridStatus).contains('Active')

    cy.get(vendorsGrid.vendorGridAddess1).contains(getGlobal('address1'))
    cy.get(vendorsGrid.VendorGridCity).contains(getGlobal('city'))
    cy.get(vendorsGrid.VendorGridState).contains(getGlobal('state'))
    cy.get(vendorsGrid.VendorGridZip).contains(getGlobal('zip'))
    cy.get(vendorsGrid.vendorsGridPhone).contains(getGlobal('phone'))
  }

  totalVendorsCountValidation() {
    actions.getText(vendors.countValue).then(function (valueFromLocator) {
      if (Number(valueFromLocator) > 25) {
        // Add your code here to handle the valueFromLocator
        actions.getText(vendorsGrid.vendorsGridPageCountValue).then(function (text) {
          expect(text).to.contain(valueFromLocator)

          if (Number(valueFromLocator) > 50) {
            // paginationvalidation
            cy.get(vendors.vendorPaginationArrow).click({ force: true })
            cy.wait(5000)
            cy.get(vendorsGrid.vendorsGridPageCountValue)
              .invoke('text')
              .then(function (text) {
                expect(text).to.contain('26–50')
              })
          }
        })
      }
    })
  }
}
export default vendorsPage
