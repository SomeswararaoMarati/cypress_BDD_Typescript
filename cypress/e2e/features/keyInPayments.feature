Feature: PA Automation : KeyInPayments

    # @KeyInPayment @KeyInPaymentsWithOutInvoice @ApproveRequired
    # Scenario: Login to PA where client : "<client>" and user : "<userType>" and Create Batch (Approval : YES)
    #     Given I access the PA application and log in as a "<userType>" user from the "<client>" client
    #     When I add a Key-In Payment for vendor "<vendorName>"
    #     Then I click on Add Payment & Invoice button
    #     Then I validate the pending KeyInPayments on vendor "<vendorName>"
    #     When I confirm the Key-In Payments
    #     Then I review the payment import details
    #     When I create a new batch and select the import ID
    #     Then I verify that the batch is successfully created
    #     And I click on View Batch Details to validate the batch details and payments
    #     Then I logout from PA Application
    #     Then I access the PA application and log in as a "<Approver>" user from the "<client>" client
    #     And I search for active batch and approve it
    #     Then I click on download batch
    #     Then I validate the downloaded pdf batch file content
    #     Examples:
    #         | client       | userType     | vendorName  | Approver     |
    #         | PMG_CLIENT_1 | client_user  | LilyVendor3 | client_admin |
    #         | PMG_CLIENT_1 | client_admin | LilyVendor3 | client_user  |

    # @KeyInPayment @KeyInPaymentsWithOutInvoice @ApproveNotRequired
    # Scenario Outline: Login to PA where client : "<client>" and user : "<userType>" and Create Batch (Approval : NO)
    #     Given I access the PA application and log in as a "<userType>" user from the "<client>" client
    #     When I add a Key-In Payment for vendor "<vendorName>"
    #     Then I click on Add Payment & Invoice button
    #     Then I validate the pending KeyInPayments on vendor "<vendorName>"
    #     When I confirm the Key-In Payments
    #     Then I review the payment import details
    #     When I create a new batch and select the import ID
    #     Then I verify that the batch is successfully created
    #     And I click on View Batch Details to validate the batch details and payments
    #     Examples:
    #         | client       | userType     | vendorName  |
    #         | PMG_CLIENT_2 | client_admin | LilyVendor3 |
    #         | PMG_CLIENT_2 | client_user  | LilyVendor3 |

    # @KeyInPayment @KeyInPaymentsWithInvoice @ApproveRequired
    # Scenario: Login to PA where client : "<client>" and user : "<userType>" and Create Batch with invoice(Approval : YES)
    #     Given I access the PA application and log in as a "<userType>" user from the "<client>" client
    #     When I add a Key-In Payment for vendor "<vendorName>"
    #     Then I add new invoice with details
    #     Then I click on Add Payment & Invoice button
    #     Then I validate the pending KeyInPayments on vendor "<vendorName>"
    #     When I confirm the Key-In Payments
    #     Then I review the payment import details
    #     When I create a new batch and select the import ID
    #     Then I verify that the batch is successfully created
    #     And I click on View Batch Details to validate the batch details and payments
    #     When I click on payment ID to view the Payment details
    #     Then I validate the payment details
    #     Then I validate the invoice details on payment details page
    #     When I click on download PDF on payment details
    #     Then I validate the downloaded pdf payments file content
    #     Then I logout from PA Application
    #     Then I access the PA application and log in as a "<Approver>" user from the "<client>" client
    #     And I search for active batch and approve it
    #     Then I click on download batch
    #     Then I validate the downloaded pdf batch file content
    #     Examples:
    #         | client       | userType     | vendorName  | Approver     |
    #         | PMG_CLIENT_1 | client_user  | LilyVendor3 | client_admin |
    #         | PMG_CLIENT_1 | client_admin | LilyVendor3 | client_user  |

    # @KeyInPayment @KeyInPaymentsWithInvoice @ApproveNotRequired
    # Scenario Outline: Login to PA where client : "<client>" and user : "<userType>" and Create Batch with invoice(Approval : NO)
    #     Given I access the PA application and log in as a "<userType>" user from the "<client>" client
    #     When I add a Key-In Payment for vendor "<vendorName>"
    #     Then I add new invoice with details
    #     Then I click on Add Payment & Invoice button
    #     Then I validate the pending KeyInPayments on vendor "<vendorName>"
    #     When I confirm the Key-In Payments
    #     Then I review the payment import details
    #     When I create a new batch and select the import ID
    #     Then I verify that the batch is successfully created
    #     And I click on View Batch Details to validate the batch details and payments
    #     When I click on payment ID to view the Payment details
    #     Then I validate the payment details
    #     Then I validate the invoice details on payment details page
    #     When I click on download PDF on payment details
    #     Then I validate the downloaded pdf payments file content
    #     Examples:
    #         | client       | userType     | vendorName  |
    #         | PMG_CLIENT_2 | client_admin | LilyVendor3 |
    #         | PMG_CLIENT_2 | client_user  | LilyVendor3 |

    #     @KeyInPayment 
    #     Scenario Outline: Login to PA where client : "<client>" and user : "<userType>" Verify Key - In Payment UI Properties
    #     Given I access the PA application and log in as a "<userType>" user from the "<client>" client
    #     Then I Click on Key-In Payments and validate the Key-In Payments page
    #     Examples:
    #         | client       | userType     | 
    #         | PMG_CLIENT_2 | client_admin | 
    #         | PMG_CLIENT_2 | client_user  | 

    #     @KeyInPayment 
    #     Scenario Outline: Login to PA where client : "<client>" and user : "<userType>" Verify Key - In Payment - Add Invoice Details - UI validations  
    #     Given I access the PA application and log in as a "<userType>" user from the "<client>" client
    #     Then I Click on Key-In Payments and validate the Key-In Payments page
    #     When I add a Key-In Payment for vendor "<vendorName>"
    #     Then I click on Add Payment & Invoice button
    #     Examples:
    #         | client       | userType     | vendorName  |
    #         | PMG_CLIENT_2 | client_admin | LilyVendor3 |

        @KeyInPayment @ConfirmKeyinpaymentBuyCanceltheimport
        Scenario Outline: Create Keyin Payment But Cancle The import and Validate the import ID should not be available in the batch list
        Given I access the PA application and log in as a "<userType>" user from the "<client>" client
        When I add a Key-In Payment for vendor "<vendorName>"
        Then I click on Add Payment & Invoice button
        Then I validate the pending KeyInPayments on vendor "<vendorName>"
        When I confirm the Key-In Payments
        Then I review the payment import details
        Then I cancel the import and validate the cancel message
        Then Verify the import ID should not be available in the batch list
        Examples:
             | client       | userType     | vendorName  |
             | PMG_CLIENT_1 | client_admin | LilyVendor4 |