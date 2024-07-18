Feature: PA Automation : Import Payments

    @ImportPayment @ApproveRequired
    Scenario: Login to PA where client : "<client>" and user : "<userType>" and Create Batch (Approval : YES)
        Given I access the PA application and log in as a "<userType>" user from the "<client>" client
        Then I Delete the previously generated payment files
        When I Generate a payments file to imports with rows "3"
        Then I import the generated Payment file


        Examples:
            | client       | userType     | vendorName  | Approver     |
            | PMG_CLIENT_1 | client_user  | LilyVendor1 | client_admin |
            | PMG_CLIENT_1 | client_admin | LilyVendor1 | client_user  |