import { navAccountDd, primaryNavBar, primaryNavBarLinks, secondaryNavBar } from '../testIds.ts'

export class HomePage {
  validateHomePageLayoutForClientUser() {
    cy.log(`Default UI fields on Home page for client_user`)
    cy.get(primaryNavBar.primaryNavBarProductName).should('have.text', 'payment automation')
    //cy.get(Footer.allVendorFooter).should('include.text', '© 2019 - 2024');
    cy.get(primaryNavBarLinks.primaryNavBarBatchesLink).should('be.visible')
    cy.get(primaryNavBarLinks.primaryNavBarImportsLink).should('be.visible')
    cy.get(primaryNavBarLinks.primaryNavBarVendorsLink).should('be.visible')
    cy.get(primaryNavBarLinks.primaryNavBarLinksReportsDd).should('be.visible')
    cy.get(secondaryNavBar.secondaryNavBarClientDd).should('be.visible')
    cy.get(secondaryNavBar.secondaryNavBarImportPaymentsLink).should('be.visible')
    cy.get(secondaryNavBar.secondaryNavBarKeyInPaymentsLink).should('be.visible')
    cy.get(primaryNavBar.primaryNavBarWaffleIcon).should('be.visible')
    cy.get(primaryNavBar.primaryNavBarSearchIcon).should('be.visible')
    cy.get(navAccountDd.navAccountDd).should('be.visible')
  }

  validateHomePageLayoutForClientAdmin() {
    cy.log(`Default UI fields on Home page for client_admin`)
    cy.get(primaryNavBar.primaryNavBarProductName).should('have.text', 'payment automation')
    cy.get(primaryNavBarLinks.primaryNavBarBatchesLink).should('be.visible')
    cy.get(primaryNavBarLinks.primaryNavBarImportsLink).should('be.visible')
    cy.get(primaryNavBarLinks.primaryNavBarVendorsLink).should('be.visible')
    cy.get(primaryNavBarLinks.primaryNavBarLinksReportsDd).should('be.visible')
    cy.get(secondaryNavBar.secondaryNavBarClientDd).should('be.visible')
    cy.get(secondaryNavBar.secondaryNavBarImportPaymentsLink).should('be.visible')
    cy.get(secondaryNavBar.secondaryNavBarKeyInPaymentsLink).should('be.visible')
    cy.get(primaryNavBar.primaryNavBarWaffleIcon).should('be.visible')
    cy.get(primaryNavBar.primaryNavBarSearchIcon).should('be.visible')
    cy.get(navAccountDd.navAccountDd).should('be.visible')
  }

  validateTheReportsTypeAvailable(availableTypes: string) {
    cy.get(primaryNavBarLinks.primaryNavBarLinksReportsDd).click().wait(1000)
    const reportTypes = availableTypes.split(',')
    for (const reportType of reportTypes) {
      if (reportType === 'All Vendor Report') {
        cy.get(primaryNavBarLinks.primaryNavBarLinksReportsAllVendorReportDdOption).should('be.visible')
      }
      if (reportType === 'ACH Enrollment History') {
        cy.get(primaryNavBarLinks.primaryNavBarLinksReportsAnalyticsDashboardDdOption).should('be.visible')
      }
      if (reportType === 'Batch Insights') {
        cy.get(primaryNavBarLinks.primaryNavBarLinksReportsAchEnrollmentHistoryDdOption).should('be.visible')
      }
      if (reportType === 'Payment Status Report') {
        cy.get(primaryNavBarLinks.primaryNavBarLinksReportsPaymentStatusReportDdOption).should('be.visible')
      }
      if (reportType === 'Analytics Dashboard') {
        cy.get(primaryNavBarLinks.primaryNavBarLinksReportsAnalyticsDashboardDdOption).should('be.visible')
      }
    }
  }
}

export default HomePage
