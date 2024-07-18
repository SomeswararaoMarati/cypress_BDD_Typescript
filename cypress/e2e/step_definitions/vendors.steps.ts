import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { vendorsPage } from '~/support/commands/vendorsPage.ts'
const vendorsPageInstance = new vendorsPage()

When('Navigate to the Vendors tab', () => {
  vendorsPageInstance.navigateToVendorsTab()
})

Then('I validate the fields in vendors page displayed', () => {
  vendorsPageInstance.headingsValidation()
})

Then('I validate the Filter Tray fields in Vendors page displayed', () => {
  vendorsPageInstance.filterTrayValidation()
})

Then('I Apply Filter options and verify Vendors page', () => {
  vendorsPageInstance.filterTray_applyFilterAndValidate()
  vendorsPageInstance.validateFilterLabelAfterFilterApply()
})

Then('Clear Filter functionality in Vendors page', () => {
  vendorsPageInstance.clearFilter_validation_vendorPage()
})

Then('I validate the Add Vendor functionality', () => {
  vendorsPageInstance.validateAddNewVendorButtonFunctionality()
})

Then('Add New Vendor Details', () => {
  vendorsPageInstance.addNewVendorDetails()
})

Then('I validate the Edit Vendor functionality', () => {
  vendorsPageInstance.validateEditVendorButtonFunctionality()
})

Then('I validate the Remove Vendor functionality', () => {
  vendorsPageInstance.validateRemoveVendorButtonFunctionality()
})

Then('I validate the Add new Vendor duplication validation', () => {
  vendorsPageInstance.addVendorwithDatatisForDateDuplicationValidation()
})

Then('Select Active vendor and make it Inactive and validate', () => {
  vendorsPageInstance.changeVendorStatusAndValidate()
})

Then('I validate added vendor details in grid section', () => {
  vendorsPageInstance.validateAddedVendorDetailsInGrid()
})

Then('Total Vendors count validation in Vendors page', () => {
  vendorsPageInstance.totalVendorsCountValidation()
})

Then('Verify the Payment History section in vendor details page', () => {
  vendorsPage.verifyPaymentHistorySection()
})
