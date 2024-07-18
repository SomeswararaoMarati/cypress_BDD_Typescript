import Actions from '../actions.ts'
import { environment } from '../e2e.js'
import { navAccountDd } from '../testIds.ts'
import { setGlobal } from './commons.ts';
const actions = new Actions()

// Cypress.Commands.add('DoUserLogin', (username: string, password: string) => {
//   cy.visit(environment.url)
//   cy.log(environment.url)
//   cy.get('#username').should('be.visible')
//   cy.get('#username').type(username)
//   cy.log(`Log in with the username ${username}`)
//   cy.get('#password').type(password)
//   cy.get('button[type="submit"]').click().wait(10000)
// })

Cypress.Commands.add("DoUserLogin", (username, password) => {
  cy.log("Creating or loading user session.");
  cy.session(
    [username, password],
    () => {
      cy.visit(environment.url);
      cy.get("#username").type(username);
      cy.get("#password").type(password, { log: false });
      cy.get("button[type='submit']").click();
      cy.url(environment.url).should("match", new RegExp(environment.url));
    },
    {
      cacheAcrossSpecs: true,
    }
  );
});

Cypress.Commands.add('Logout', () => {
  actions.clickElement(navAccountDd.navAccountDdUserIcon)
  actions.clickElement(navAccountDd.navAccountDdLogoutLinkDdOption)
  cy.get('#username').should('be.visible').wait(10000)
  cy.reload();
  cy.visit(environment.url) 
})



Cypress.Commands.add("JSONtoCSV", (NoOfRows) => {
  const jsonKeys = [
    "Import No",
    "Payor ID",
    "Payor Name",
    "Address 1",
    "Address 2",
    "City",
    "State",
    "ZIP",
    "Payment ID",
    "Vendor ID",
    "Vendor Name",
    "Payment Amt",
    "Account No",
    "Invoice No",
    "Invoice Date",
    "Original Inv Amt",
    "Discount",
    "Partial Payment Amt",
    "Description",
    "Company ID",
    "Company Name",
    "Customer ID",
    "Bank ID",
    "Vendor Address Line 1",
    "Vendor Address Line 2",
    "Vendor Address City",
    "Vendor Address State",
    "Vendor Address Postal Code",
    "Vendor Address Country",
    "Vendor Account Number",
    "Vendor Phone",
    "Vendor Email",
  ];

  setGlobal('NoOfRows',NoOfRows.toString())
  const data = [];
  let amount = 0;
  let companyName = "";
  let totalPaymentAmount = 0;
  for (let i = 1; i <= NoOfRows; i++) {
    const row: { [key: string]: any } = {}; // Type
    jsonKeys.forEach((key) => {
      if (key === "Import No") {
        row[key] = 100 + i;
      } else if (key === "Payor ID") {
        const generateSimilarRandomString = // Random String in Format QA123456-Test-4D76-9D8F-4DFCFA2FB1FC
          `QA${Math.floor(Math.random() * 1000000)}-Test-${Math.floor(
            Math.random() * 10000
          )}-` +
          `${Math.floor(Math.random() * 10000)}-` +
          `A${Math.floor(Math.random() * 1000000000000)}`;
        row[key] = generateSimilarRandomString;
      } else if (key === "Payor Name") {
        const payorName = ["Hotel QA", "HOTEL DEV", "HOTEL STG"];
        companyName = payorName[Math.floor(Math.random() * payorName.length)]
        row[key] = companyName;
      } else if (key === "Address 1") {
        row[key] = "1211 Catherine Street";
      } else if (key === "Address 2") {
        row[key] = "";
      } else if (key === "City") {
        row[key] = "Richmond";
      } else if (key === "State") {
        row[key] = "VA";
      } else if (key === "ZIP") {
        row[key] = 23234;
      } else if (key === "Payment ID") {
        row[key] = 100 + i;
      } else if (key === "Vendor ID") {
        row[key] = "LilyInternalID";
      } else if (key === "Vendor Name") {
        const vendorName = [
          "LilyVendor1",
          "LilyVendor2",
          "LilyVendor3",
          "LilyVendor4",
        ];
        row[key] = vendorName[Math.floor(Math.random() * vendorName.length)];
      } else if (key === "Payment Amt") {
        const paymentAmount = Math.floor(Math.random() * 1000);
        totalPaymentAmount = totalPaymentAmount + paymentAmount;
        row[key] = paymentAmount.toFixed(2);
      }
      else if (key === "Account No") {
        const accountNumber = `AC_${Math.floor(Math.random() * 100000000)}`;
        row[key] = accountNumber;
      } else if (key === "Invoice No") {
        const invNumber = `INV_${Math.floor(Math.random() * 10000000)}`;
        row[key] = invNumber;
      } else if (key === "Invoice Date") {
        const pastYearDate = new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(new Date().getFullYear()).getTime())))
          .toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
        row[key] = pastYearDate;
      } else if (key === "Original Inv Amt") {
        amount = Math.floor(Math.random() * 1000);
        row[key] = amount.toFixed(2);
      } else if (key === "Discount") {
        row[key] = 0;
      } else if (key === "Partial Payment Amt") {
        row[key] = amount.toFixed(2);
      } else if (key === "Description") {
        row[key] = "Automation Regression";
      } else if (key === "Company ID") {
        row[key] = Math.floor(Math.random() * 1000)
      } else if (key === "Company Name") {
        row[key] = companyName;
      } else if (key === "Customer ID") {
        const customerID = [
          "QA1",
          "QA2",
          "QA3",
          "QA4",
          "QA5"
        ];
        row[key] = customerID[Math.floor(Math.random() * customerID.length)];
      } else if (key === "Bank ID") {
        row[key] = Math.floor(Math.random() * 1000);
      } else if (key === "Vendor Address Line 1") {
        row[key] = "1211 Catherine Street";
      } else if (key === "Vendor Address Line 2") {
        row[key] = "";
      } else if (key === "Vendor Address City") {
        row[key] = "Richmond";
      } else if (key === "Vendor Address State") {
        row[key] = "VA";
      } else if (key === "Vendor Address Postal Code") {
        row[key] = 23234;
      } else if (key === "Vendor Address Country") {
        row[key] = "United States of America";
      } else if (key === "Vendor Account Number") {
        row[key] = "";
      } else if (key === "Vendor Phone") {
        row[key] = "";
      } else if (key === "Vendor Email") {
        row[key] = "";
      }

    });
    data.push(row);
    setGlobal('totalPaymentAmount',totalPaymentAmount.toString())
  }

  let csv = "";

  // Extract headers
  const headers = Object.keys(data[0]);
  csv += headers.join(",") + "\n";
  // Extract values
  data.forEach((obj) => {
    const values = headers.map((header) => obj[header]);
    csv += values.join(",") + "\n";
  });

  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const year = String(now.getFullYear());
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const timeStamp = `${day}${month}${year}_${hours}${minutes}${seconds}`;
  setGlobal('PaymentFileToImport',`payments_${timeStamp}.csv`)
  cy.writeFile(`cypress/fixtures/payments_${timeStamp}.csv`, csv);
  setGlobal('generatedPaymentsFile', `payments_${timeStamp}.csv`)
});