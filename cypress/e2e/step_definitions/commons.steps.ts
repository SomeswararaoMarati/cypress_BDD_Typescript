import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Then('I validate the {string} Pages are displayed on PDF File {string}',(noOFPages:number,pdfFileName:string) => {
    const pdfPath = `cypress/downloads/${pdfFileName}`; 
    cy.exec(`python cypress/fixtures/extract_pdf_data.py ${pdfPath}`, { failOnNonZeroExit: true })
    .then((result) => {
      expect(result.stdout).to.contain(`No of Pages : ${noOFPages}`);
    });
  })
  
  Then('I validate the texts {string} should be displayed in the PDF File {string}',(texts:string,pdfFileName:string) => {
    const textsToValidate: string[] = texts.split(',').map(text => text.trim());
    const pdfPath = `cypress/downloads/${pdfFileName}`; 
    cy.exec(`python cypress/fixtures/extract_pdf_data.py ${pdfPath}`, { failOnNonZeroExit: true })
    .then((result) => {
      textsToValidate.forEach((text) => {
        expect(result.stdout).to.contain(text);
      });
    });
  })

  Then('I logout from PA Application', () => {
    cy.Logout();
  })  