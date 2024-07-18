Feature: PA Automation : Vendors

    @vendors
    Scenario: Login to PA where client : "<client>" and user : "<userType>" and Navigate to Vendors Tab
        Given I access the PA application and log in as a "<userType>" user from the "<client>" client
        When Navigate to the Vendors tab
        And I validate the fields in vendors page displayed
        Then I validate the Filter Tray fields in Vendors page displayed
        And I Apply Filter options and verify Vendors page
        Then Clear Filter functionality in Vendors page
        And I validate the Add Vendor functionality
        Examples:
            | client       | userType     |
            | PMG_CLIENT_1 | client_user  |
            | PMG_CLIENT_1 | client_admin |


    @vendors
    Scenario: Login to PA where client : "<client>" and user : "<userType>" and Navigate to Vendors Tab and Add New vednor
        Given I access the PA application and log in as a "<userType>" user from the "<client>" client
        When Navigate to the Vendors tab
        And I validate the Add Vendor functionality
        Then Add New Vendor Details
        Examples:
            | client       | userType     |
            | PMG_CLIENT_1 | client_user  |
            | PMG_CLIENT_1 | client_admin |

    @vendors
    Scenario: Login to PA where client : "<client>" and user : "<userType>" and Navigate to Vendors Tab and Add New vednor and edit vendor and validate
        Given I access the PA application and log in as a "<userType>" user from the "<client>" client
        When Navigate to the Vendors tab
        And I validate the Add Vendor functionality
        Then Add New Vendor Details
        And I validate the Edit Vendor functionality
        Then Verify the Payment History section in vendor details page
        Examples:
            | client       | userType     |
            | PMG_CLIENT_1 | client_user  |
            | PMG_CLIENT_1 | client_admin |

    @vendors
    Scenario: Login to PA where client : "<client>" and user : "<userType>" and Navigate to Vendors Tab and Add New vednor and Remove vendor and validate
        Given I access the PA application and log in as a "<userType>" user from the "<client>" client
        When Navigate to the Vendors tab
        And I validate the Add Vendor functionality
        Then Add New Vendor Details
        And I validate the Remove Vendor functionality
        Examples:
            | client       | userType     |
            | PMG_CLIENT_1 | client_user  |
            | PMG_CLIENT_1 | client_admin |

    @vendors
    Scenario: Login to PA where client : "<client>" and user : "<userType>" and Navigate to Vendors Tab and Add New vednor duplication validation
        Given I access the PA application and log in as a "<userType>" user from the "<client>" client
        When Navigate to the Vendors tab
        And I validate the Add Vendor functionality
        And I validate the Add new Vendor duplication validation
        Examples:
            | client       | userType     |
            | PMG_CLIENT_1 | client_admin |

    @vendors
    Scenario: Login to PA where client : "<client>" and user : "<userType>" and Navigate to Vendors Tab and Add New vednor make inactive and validate and make active and validate
        Given I access the PA application and log in as a "<userType>" user from the "<client>" client
        When Navigate to the Vendors tab
        And Select Active vendor and make it Inactive and validate
        Examples:
            | client       | userType     |
            | PMG_CLIENT_1 | client_admin |

    @vendors
    Scenario: Login to PA where client : "<client>" and user : "<userType>" and Navigate to Vendors Tab and Add New vednor and validate the fields added in grid section
        Given I access the PA application and log in as a "<userType>" user from the "<client>" client
        When Navigate to the Vendors tab
        And I validate the Add Vendor functionality
        Then Add New Vendor Details
        Then I validate added vendor details in grid section
        Examples:
            | client       | userType     |
            | PMG_CLIENT_1 | client_user  |
            | PMG_CLIENT_1 | client_admin |

    @vendors
    Scenario: Login to PA where client : "<client>" and user : "<userType>" and Navigate to Vendors Tab and Add New vednor and validate the fields added in grid section
        Given I access the PA application and log in as a "<userType>" user from the "<client>" client
        When Navigate to the Vendors tab
        And Total Vendors count validation in Vendors page
        
        Examples:
            | client       | userType     |
            | PMG_CLIENT_1 | client_user  |
            | PMG_CLIENT_1 | client_admin |
