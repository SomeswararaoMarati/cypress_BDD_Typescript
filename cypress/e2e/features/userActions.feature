Feature: PA Automation

  @homePageValidations
  Scenario Outline: Login to PA Application as "<userType>" of "<client>" and validate the home page layout
    Given I access the PA application and log in as a "<userType>" user from the "<client>" client
    Then I Validate the Home Page layout of "<userType>"
    Then I click on Reports and validate the "<availableReports>" types

    Examples:
      | client       | userType     | availableReports                                                                                  |
      | PMG_CLIENT_1 | client_user  | All Vendor Report,ACH Enrollment History,Batch Insights,Payment Status Report,Analytics Dashboard |
      | PMG_CLIENT_1 | client_admin | All Vendor Report,ACH Enrollment History,Batch Insights,Payment Status Report,Analytics Dashboard |
      | PMG_CLIENT_2 | client_user  | All Vendor Report,ACH Enrollment History,Batch Insights,Payment Status Report,Analytics Dashboard |
      | PMG_CLIENT_2 | client_admin | All Vendor Report,ACH Enrollment History,Batch Insights,Payment Status Report,Analytics Dashboard |

