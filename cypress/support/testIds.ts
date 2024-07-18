export type NestedColumnDefTestIdStrings =
  | 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid'
  | 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid'
  | 'batchDetails_payments_invoices_grid'
  | 'paymentApprovals_payments_invoices_grid'
  | 'keyInPayments_pendingKeyedInPayments_invoices_grid'

/** 🔆 Primary and secondary nav, alert banners 🔆 */

export enum alertBanners {
  alertBannersAlertButton = 'alertBanners_alert_button',
  alertBannersBannerMessage = 'alertBanners_bannerMessage',
  alertBannersErrorMessage = 'alertBanners_errorMessage',
}

export enum primaryNavBar {
  primaryNavBarCurrentSearchByCloseButton = 'primaryNavBar_current_searchBy_close_button',
  primaryNavBarCurrentSearchByLabel = 'primaryNavBar_current_searchBy_label',
  primaryNavBarLeftVerticalLineImage = 'primaryNavBar_leftVerticalLine_image',
  primaryNavBarLogo = 'primaryNavBar_logo',
  primaryNavBarProductLinks = 'primaryNavBar_productLinks',
  primaryNavBarProductName = '[data-testid="primaryNavBar_productName"]',
  primaryNavBarSearchBar = 'primaryNavBar_searchBar',
  primaryNavBarSearchBarCloseIcon = 'primaryNavBar_searchBar_close_icon',
  primaryNavBarSearchBarInput = 'primaryNavBar_searchBar_input',
  primaryNavBarSearchBarSearchIcon = 'primaryNavBar_searchBar_search_icon',
  primaryNavBarSearchByDd = 'primaryNavBar_searchBy_dd',
  primaryNavBarSearchByDdCheckNumberDdOption = 'primaryNavBar_searchBy_checkNumber_ddOption',
  primaryNavBarSearchByDdInvoiceNumberDdOption = 'primaryNavBar_searchBy_invoiceNumber_ddOption',
  primaryNavBarSearchByDdPaymentIdDdOption = 'primaryNavBar_searchBy_paymentId_ddOption',
  primaryNavBarSearchByDdVendorIdDdOption = 'primaryNavBar_searchBy_vendorId_ddOption',
  primaryNavBarSearchIcon = '[data-testid="primaryNavBar_search_icon"]',
  primaryNavBarWaffleIcon = '[data-testid="primaryNavBar_waffle_icon"]',
  primaryNavBarWrapper = 'primaryNavBar_wrapper',
}

export enum navAccountDd {
  navAccountDd = '[data-testid="nav_account_dd"]',
  navAccountDdAccountIdentifierDdOption = 'nav_account_accountIdentifier_ddOption',
  navAccountDdArrowIcon = 'nav_account_arrow_icon',
  navAccountDdClientDetails = 'nav_account_client_details',
  navAccountDdGuideLinkDdOption = 'nav_account_guide_link_ddOption',
  navAccountDdList = 'nav_account_ddList',
  navAccountDdLogoutLinkDdOption = '[data-testid="nav_account_logout_link_ddOption"]',
  navAccountDdUserIcon = '[data-testid="nav_account_user_icon"]',
}

export enum primaryNavBarLinks {
  primaryNavBarBatchesLink = '[data-testid="primaryNavBar_batches_link"]',
  primaryNavBarImportsLink = '[data-testid="primaryNavBar_imports_link"]',
  primaryNavBarLinksReportsAchEnrollmentHistoryDdOption = 'a[href="/reports/ach-history"]',
  primaryNavBarLinksReportsAllVendorReportDdOption = 'a[href="/reports/all-vendors"]',
  primaryNavBarLinksReportsAnalyticsDashboardDdOption = 'a[href="/reports/analytics-dashboard"]',
  primaryNavBarLinksReportsBatchInsightsDdOption = 'a[href="/reports/batch-insights"]',
  primaryNavBarLinksReportsDd = '[data-testid="primaryNavBar_reports_dd"]',
  primaryNavBarLinksReportsDdArrowIcon = 'primaryNavBar_reports_dd_arrow_icon',
  primaryNavBarLinksReportsDdList = 'primaryNavBar_reports_ddList',
  primaryNavBarLinksReportsPaymentStatusReportDdOption = 'a[href="/reports/payments-status"]',
  primaryNavBarVendorsLink = '[data-testid="primaryNavBar_vendors_link"]',
}

export enum primaryNavBarMegaMenu {
  primaryNavBarMegaMenu = 'primaryNavBar_megaMenu',
  primaryNavBarMegaMenuHubLogo = 'primaryNavBar_megaMenu_hub_logo',
  primaryNavBarMegaMenuHubText = 'primaryNavBar_megaMenu_hub_text',
  primaryNavBarMegaMenuIaImage = 'primaryNavBar_megaMenu_ia_image',
  primaryNavBarMegaMenuIaLearnMoreLink = 'primaryNavBar_megaMenu_ia_learnMore_link',
  primaryNavBarMegaMenuPaBatchesLink = 'primaryNavBar_megaMenu_pa_batches_link',
  primaryNavBarMegaMenuPaImage = 'primaryNavBar_megaMenu_pa_image',
  primaryNavBarMegaMenuPaImportsLink = 'primaryNavBar_megaMenu_pa_imports_link',
  primaryNavBarMegaMenuPaReportsSubLinkLabel = 'primaryNavBar_megaMenu_pa_reports_subLink_label',
  primaryNavBarMegaMenuPaReportsSubmenuAchEnrollmentHistoryLink = 'primaryNavBar_megaMenu_pa_reports_achEnrollmentHistory_link',
  primaryNavBarMegaMenuPaReportsSubmenuAllVendorReportLink = 'primaryNavBar_megaMenu_pa_reports_allVendorReport_link',
  primaryNavBarMegaMenuPaReportsSubmenuAnalyticsDashboardLink = 'primaryNavBar_megaMenu_pa_reports_analyticsDashboard_link',
  primaryNavBarMegaMenuPaReportsSubmenuBatchInsightsLink = 'primaryNavBar_megaMenu_pa_reports_batchInsights_link',
  primaryNavBarMegaMenuPaReportsSubmenuPaymentStatusReportLink = 'primaryNavBar_megaMenu_pa_reports_paymentStatusReport_link',
  primaryNavBarMegaMenuPaVendorsLink = 'primaryNavBar_megaMenu_pa_vendors_link',
  primaryNavBarMegaMenuPoImage = 'primaryNavBar_megaMenu_po_image',
  primaryNavBarMegaMenuPoLearnMoreLink = 'primaryNavBar_megaMenu_po_learnMore_link',
  primaryNavBarMegaMenuRaImage = 'primaryNavBar_megaMenu_ra_image',
  primaryNavBarMegaMenuRaLearnMoreLink = 'primaryNavBar_megaMenu_ra_learnMore_link',
  primaryNavBarMegaMenuScImage = 'primaryNavBar_megaMenu_sc_image',
  primaryNavBarMegaMenuScoutLearnMoreLink = 'primaryNavBar_megaMenu_scout_learnMore_link',
}

export enum secondaryNavBar {
  secondaryNavBarClientDd = '[data-testid="secondaryNavBar_client_dd"]',
  secondaryNavBarClientDdIcon = 'secondaryNavBar_client_dd_icon',
  secondaryNavBarClientDdList = 'secondaryNavBar_client_ddList',
  secondaryNavBarClientDdListItem = 'secondaryNavBar_client_ddOption',
  secondaryNavBarClientDdListNoSwitchTooltip = 'secondaryNavBar_client_ddList_noSwitch_tooltip',
  secondaryNavBarClientIdLabel = 'secondaryNavBar_clientId_label',
  secondaryNavBarImportPaymentsLink = '[data-testid="secondaryNavBar_importPayments_link"]',
  secondaryNavBarKeyInPaymentsLink = 'a[data-testid="secondaryNavBar_keyInPayments_link"]',
}

export enum pxrSecondaryNavBar {
  pxrSecondaryNavBarClientDd = 'pxr_secondaryNavBar_client_dd',
  pxrSecondaryNavBarClientDdIcon = 'pxr_secondaryNavBar_client_dd_icon',
  pxrSecondaryNavBarClientDdList = 'pxr_secondaryNavBar_client_ddList',
  pxrSecondaryNavBarClientDdListItem = 'pxr_secondaryNavBar_client_ddOption',
  pxrSecondaryNavBarClientDdListNoSwitchTooltip = 'pxr_secondaryNavBar_client_ddList_noSwitch_tooltip',
  pxrSecondaryNavBarImportPaymentsLink = 'pxr_secondaryNavBar_importPayments_link',
}

export enum paymentApprovalsNavBar {
  paymentApprovalsNavBar = 'paymentApprovals_navBar_wrapper',
  paymentApprovalsNavBarLeftVerticalLineImage = 'paymentApprovals_navBar_leftVerticalLine_image',
  paymentApprovalsNavBarLogo = 'paymentApprovals_navBar_logo',
  paymentApprovalsNavBarPaymentApprovalsLink = 'paymentApprovals_navBar_paymentApprovals_link',
}

/** 🔆 Reports - headers only, embed content not available to id 🔆 */

export enum reports {
  achEnrollmentHistoryHeader = 'achEnrollmentHistory_report_header',
  allVendorHeader = 'allVendor_report_header',
  batchInsightsHeader = 'batchInsights_report_header',
  paymentStatusHeader = 'paymentStatus_report_header',
}

/** 🔆 Batches page 🔆 */

export enum batches {
  batchesActiveBatchesGrid = 'batches_activeBatches_grid',
  batchesActiveBatchesGridBatchNumberColumn = 'batches_activeBatchesGrid_batchNumber_column',
  batchesActiveBatchesGridBatchNumberRow = 'batches_activeBatchesGrid_batchNumber_row',
  batchesActiveBatchesGridDateCreatedColumn = 'batches_activeBatchesGrid_dateCreated_column',
  batchesActiveBatchesGridDateCreatedRow = 'batches_activeBatchesGrid_dateCreated_row',
  batchesActiveBatchesGridLoadingSpinner = 'batches_activeBatches_grid_loadingSpinner',
  batchesActiveBatchesGridNoResultsMessage = 'batches_activeBatches_grid_noResultsMessage',
  batchesActiveBatchesGridPaymentCountColumn = 'batches_activeBatchesGrid_paymentCount_column',
  batchesActiveBatchesGridPaymentCountRow = 'batches_activeBatchesGrid_paymentCount_row',
  batchesActiveBatchesGridPayorNameColumn = 'batches_activeBatchesGrid_payorName_column',
  batchesActiveBatchesGridPayorNameRow = 'batches_activeBatchesGrid_payorName_row',
  batchesActiveBatchesGridStatusColumn = 'batches_activeBatchesGrid_status_column',
  batchesActiveBatchesGridStatusRow = 'batches_activeBatchesGrid_status_row',
  batchesActiveBatchesGridTotalColumn = 'batches_activeBatchesGrid_total_column',
  batchesActiveBatchesGridTotalRow = 'batches_activeBatchesGrid_total_row',
  // Active batches grid
  batchesActiveBatchesHeader = 'batches_activeBatches_header',
  batchesActiveBatchesPaginationCountPerPageDd = 'batches_activeBatches_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  batchesActiveBatchesPaginationLabel = 'batches_activeBatches_pagination_label',
  batchesActiveBatchesPaginationNextLink = 'batches_activeBatches_pagination_next_link',
  batchesActiveBatchesPaginationPageCountLabel = 'batches_activeBatches_pagination_pageCount_label',
  batchesActiveBatchesPaginationPreviousLink = 'batches_activeBatches_pagination_previous_link',
  batchesActiveImportsCreateBatchLink = 'batches_activeImports_createBatch_link',
  batchesActiveImportsGrid = 'batches_activeImports_grid',
  batchesActiveImportsGridDateCreatedColumn = 'batches_activeImportsGrid_dateCreated_column',
  batchesActiveImportsGridDateCreatedRow = 'batches_activeImportsGrid_dateCreated_row',
  batchesActiveImportsGridImportIdColumn = 'batches_activeImportsGrid_importId_column',
  batchesActiveImportsGridImportIdRow = 'batches_activeImportsGrid_importId_row',
  batchesActiveImportsGridLoadingSpinner = 'batches_activeImports_grid__loadingSpinner',
  batchesActiveImportsGridNoResultsMessage = 'batches_activeImports_grid_noResultsMessage',
  batchesActiveImportsGridPaymentsRemainingColumn = 'batches_activeImportsGrid_paymentsRemaining_column',
  batchesActiveImportsGridPaymentsRemainingRow = 'batches_activeImportsGrid_paymentsRemaining_row',
  batchesActiveImportsGridStatusColumn = 'batches_activeImportsGrid_status_column',
  batchesActiveImportsGridStatusRow = 'batches_activeImportsGrid_status_row',
  batchesActiveImportsGridTotalColumn = 'batches_activeImportsGrid_total_column',
  batchesActiveImportsGridTotalRow = 'batches_activeImportsGrid_total_row',
  batchesActiveImportsGridUserColumn = 'batches_activeImportsGrid_user_column',
  batchesActiveImportsGridUserRow = 'batches_activeImportsGrid_user_row',
  // Active imports grid
  batchesActiveImportsHeader = 'batches_activeImports_header',
  batchesActiveImportsImportPaymentsLink = 'batches_activeImports_importPayments_link',
  batchesActiveImportsPaginationCountPerPageDd = 'batches_activeImports_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  batchesActiveImportsPaginationLabel = 'batches_activeImports_pagination_label',
  batchesActiveImportsPaginationNextLink = 'batches_activeImports_pagination_next_link',
  batchesActiveImportsPaginationPageCountLabel = 'batches_activeImports_pagination_pageCount_label',
  batchesActiveImportsPaginationPreviousLink = 'batches_activeImports_pagination_previous_link',
  batchesComCanBatchesGrid = 'batches_comCanBatches_grid',
  batchesComCanBatchesGridBatchNumberColumn = 'batches_comCanBatchesGrid_batchNumber_column',
  batchesComCanBatchesGridBatchNumberRow = 'batches_comCanBatchesGrid_batchNumber_row',
  batchesComCanBatchesGridDateCreatedColumn = 'batches_comCanBatchesGrid_dateCreated_column',
  batchesComCanBatchesGridDateCreatedRow = 'batches_comCanBatchesGrid_dateCreated_row',
  batchesComCanBatchesGridLoadingSpinner = 'batches_comCanBatches_grid_loadingSpinner',
  batchesComCanBatchesGridNoResultsMessage = 'batches_comCanBatches_grid_noResultsMessage',
  batchesComCanBatchesGridPaymentCountColumn = 'batches_comCanBatchesGrid_paymentCount_column',
  batchesComCanBatchesGridPaymentCountRow = 'batches_comCanBatchesGrid_paymentCount_row',
  batchesComCanBatchesGridPayorNameColumn = 'batches_comCanBatchesGrid_payorName_column',
  batchesComCanBatchesGridPayorNameRow = 'batches_comCanBatchesGrid_payorName_row',
  batchesComCanBatchesGridStatusColumn = 'batches_comCanBatchesGrid_status_column',
  batchesComCanBatchesGridStatusRow = 'batches_comCanBatchesGrid_status_row',
  batchesComCanBatchesGridTotalColumn = 'batches_comCanBatchesGrid_total_column',
  batchesComCanBatchesGridTotalRow = 'batches_comCanBatchesGrid_total_row',
  // Completed & cancelled batches grid
  batchesComCanBatchesHeader = 'batches_comCanBatches_header',
  batchesComCanBatchesPaginationCountPerPageDd = 'batches_comCanBatches_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  batchesComCanBatchesPaginationLabel = 'batches_comCanBatches_pagination_label',
  batchesComCanBatchesPaginationNextLink = 'batches_comCanBatches_pagination_next_link',
  batchesComCanBatchesPaginationPageCountLabel = 'batches_comCanBatches_pagination_pageCount_label',
  batchesComCanBatchesPaginationPreviousLink = 'batches_comCanBatches_pagination_previous_link',
  batchesHeader = 'batches_header',
}

export enum batchesPayorNamesModals {
  batchesActiveBatchesPayorNamesModal = 'batches_activeBatches_payorNames_modal',
  batchesActiveBatchesPayorNamesModalCloseButton = 'batches_activeBatches_payorNames_modal_close_button',
  batchesActiveBatchesPayorNamesModalCloseIcon = 'batches_activeBatches_payorNames_modal_close_icon',
  batchesActiveBatchesPayorNamesModalHeader = 'batches_activeBatches_payorNames_modal_header',
  batchesActiveBatchesPayorNamesModalNoPayorText = 'batches_activeBatches_payorNames_modal_noPayor_text',
  batchesActiveBatchesPayorNamesModalPayorName = 'batches_activeBatches_payorNames_modal_payorName',
  batchesComCanBatchesPayorNamesModal = 'batches_comCanBatches_payorNames_modal',
  batchesComCanBatchesPayorNamesModalCloseButton = 'batches_comCanBatches_payorNames_modal_close_button',
  batchesComCanBatchesPayorNamesModalCloseIcon = 'batches_comCanBatches_payorNames_modal_close_icon',
  batchesComCanBatchesPayorNamesModalHeader = 'batches_comCanBatches_payorNames_modal_header',
  batchesComCanBatchesPayorNamesModalNoPayorText = 'batches_comCanBatches_payorNames_modal_noPayor_text',
  batchesComCanBatchesPayorNamesModalPayorName = 'batches_comCanBatches_payorNames_modal_payorName',
}

/** 🔆 Batch Details Page 🔆 */

export enum batchDetailsPage {
  batchDetailsApproveBatchButton = 'button[data-testid="batchDetails_approveBatch_button"]',
  batchDetailsApproveOrCancelModal = 'batchDetails_approveOrCancel_modal',
  batchDetailsApproveOrCancelModalCloseButton = '[data-testid="batchDetails_approveOrCancel_modal_close_button"]',
  batchDetailsApproveOrCancelModalCloseIcon = 'batchDetails_approveOrCancel_modal_close_icon',
  batchDetailsApproveOrCancelModalHeader = 'batchDetails_approveOrCancel_modal_header',
  batchDetailsApproveOrCancelModalSuccessCheckIcon = 'batchDetails_approveOrCancel_modal_successCheck_icon',
  batchDetailsApproveOrCancelModalText = '[data-testid="batchDetails_approveOrCancel_modal_text"]',
  batchDetailsBatchIdLabel = 'batchDetails_batchId_label',
  batchDetailsBatchIdValue = '[data-testid="batchDetails_batchId_value"]',
  batchDetailsCancelBatchButton = 'button[data-testid="batchDetails_cancelBatch_button"]',
  batchDetailsDownloadPdfButton = 'button[data-testid="batchDetails_downloadPdf_button"]',
  batchDetailsHeader = '[data-testid="batchDetails_header"]',
  batchDetailsNoBatchFoundMessage = 'batchDetails_noBatchFound_message',
  batchDetailsTotalDollarsLabel = 'batchDetails_totalDollars_label',
  batchDetailsTotalDollarsValue = 'batchDetails_totalDollars_value',
  batchDetailsTotalPaymentsLabel = 'batchDetails_totalPayments_label',
  batchDetailsTotalPaymentsValue = 'batchDetails_totalPayments_value',
  batchDetailsPaymentsGridPaymentIdRow = 'batchDetailsPaymentsGridPaymentIdRow',
}

export enum batchDetailsDetailGridStackDetails {
  batchDetailsDetailGridStackDetailsAchAmountLabel = 'batchDetails_detailGrid_achAmount_label',
  batchDetailsDetailGridStackDetailsAchAmountValue = 'batchDetails_detailGrid_achAmount_value',
  batchDetailsDetailGridStackDetailsAchPaymentsLabel = 'batchDetails_detailGrid_achPayments_label',
  batchDetailsDetailGridStackDetailsAchPaymentsValue = 'batchDetails_detailGrid_achPayments_value',
  batchDetailsDetailGridStackDetailsApprovedByLabel = 'batchDetails_detailGrid_approvedBy_label',
  batchDetailsDetailGridStackDetailsApprovedByValue = 'batchDetails_detailGrid_approvedBy_value',
  batchDetailsDetailGridStackDetailsBatchStatusLabel = 'batchDetails_detailGrid_batchStatus_label',
  batchDetailsDetailGridStackDetailsBatchStatusValue = 'batchDetails_detailGrid_batchStatus_value',
  batchDetailsDetailGridStackDetailsBatchTypeLabel = 'batchDetails_detailGrid_batchType_label',
  batchDetailsDetailGridStackDetailsBatchTypeValue = 'batchDetails_detailGrid_batchType_value',
  batchDetailsDetailGridStackDetailsCardAmountLabel = 'batchDetails_detailGrid_cardAmount_label',
  batchDetailsDetailGridStackDetailsCardAmountValue = 'batchDetails_detailGrid_cardAmount_value',
  batchDetailsDetailGridStackDetailsCardPaymentsLabel = 'batchDetails_detailGrid_cardPayments_label',
  batchDetailsDetailGridStackDetailsCardPaymentsValue = 'batchDetails_detailGrid_cardPayments_value',
  batchDetailsDetailGridStackDetailsCheckAmountLabel = 'batchDetails_detailGrid_checkAmount_label',
  batchDetailsDetailGridStackDetailsCheckAmountValue = 'batchDetails_detailGrid_checkAmount_value',
  batchDetailsDetailGridStackDetailsCheckPaymentsLabel = 'batchDetails_detailGrid_checkPayments_label',
  batchDetailsDetailGridStackDetailsCheckPaymentsValue = 'batchDetails_detailGrid_checkPayments_value',
  batchDetailsDetailGridStackDetailsDateStartedLabel = 'batchDetails_detailGrid_dateStarted_label',
  batchDetailsDetailGridStackDetailsDateStartedValue = 'batchDetails_detailGrid_dateStarted_value',
  batchDetailsDetailGridStackDetailsUserInitiatedLabel = 'batchDetails_detailGrid_userInitiated_label',
  batchDetailsDetailGridStackDetailsUserInitiatedValue = 'batchDetails_detailGrid_userInitiated_value',
}

export enum batchDetailsPayments {
  batchDetailsPaymentsExportButton = 'batchDetails_payments_export_button',
  batchDetailsPaymentsGrid = 'batchDetails_payments_grid',
  // Amount and sum ids not applied, render methods break aggregation, story 42904
  batchDetailsPaymentsGridAmountColumn = 'batchDetails_payments_grid_amount_column',
  batchDetailsPaymentsGridAmountRow = 'batchDetails_payments_grid_amount_row',
  batchDetailsPaymentsGridAttachmentColumn = 'batchDetails_payments_grid_attachment_column',
  batchDetailsPaymentsGridAttachmentRow = 'batchDetails_payments_grid_attachment_row',
  batchDetailsPaymentsGridAttachmentRowCount = 'batchDetails_payments_grid_attachment_row_count',
  batchDetailsPaymentsGridAttachmentRowIcon = 'batchDetails_payments_grid_attachment_row_icon',
  batchDetailsPaymentsGridInternalPaymentIdColumn = 'batchDetails_payments_grid_internalPaymentId_column',
  batchDetailsPaymentsGridInternalPaymentIdRow = '[data-testid="batchDetails_payments_grid_internalPaymentId_row_0"]',
  batchDetailsPaymentsGridInternalVendorIdColumn = 'batchDetails_payments_grid_internalVendorId_column',
  batchDetailsPaymentsGridInternalVendorIdRow = 'batchDetails_payments_grid_internalVendorId_row',
  batchDetailsPaymentsGridNoResultsMessage = 'batchDetails_payments_grid_noResults_message',
  batchDetailsPaymentsGridPaginationCountPerPageDd = 'batchDetails_payments_grid_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  batchDetailsPaymentsGridPaginationLabel = 'batchDetails_payments_grid_pagination_label',
  batchDetailsPaymentsGridPaginationNextLink = 'batchDetails_payments_grid_pagination_next_link',
  batchDetailsPaymentsGridPaginationPageCountLabel = 'batchDetails_payments_grid_pagination_pageCount_label',
  batchDetailsPaymentsGridPaginationPreviousLink = 'batchDetails_payments_grid_pagination_previous_link',
  batchDetailsPaymentsGridPaymentIdColumn = 'batchDetails_payments_grid_paymentId_column',
  batchDetailsPaymentsGridPaymentIdRow = '[data-testid="batchDetails_payments_grid_paymentId_row_0"]',
  batchDetailsPaymentsGridPaymentMethodColumn = 'batchDetails_payments_grid_paymentMethod_column',
  batchDetailsPaymentsGridPaymentMethodRow = '[data-testid="batchDetails_payments_grid_paymentMethod_row_0"]',
  batchDetailsPaymentsGridPayorNameColumn = 'batchDetails_payments_grid_payorName_column',
  batchDetailsPaymentsGridPayorNameRow = 'batchDetails_payments_grid_payorName_row',
  batchDetailsPaymentsGridStatusColumn = 'batchDetails_payments_grid_status_column',
  batchDetailsPaymentsGridStatusRow = '[data-testid="batchDetails_payments_grid_status_row_0"]',
  batchDetailsPaymentsGridSumAmount = '[data-id="0"] [data-field="paymentamount"]',
  batchDetailsPaymentsGridSumHeader = 'batchDetails_payments_grid_sumHeader',
  batchDetailsPaymentsGridToggleRow = 'batchDetails_payments_grid_toggle_row',
  batchDetailsPaymentsGridVendorColumn = 'batchDetails_payments_grid_vendor_column',
  batchDetailsPaymentsGridVendorRow = '[data-testid="batchDetails_payments_grid_vendor_row_0"]',
  batchDetailsPaymentsHeader = 'batchDetails_payments_header',
}

export enum batchDetailsBatchActivity {
  batchDetailsBatchActivityExportButton = 'batchDetails_batchActivity_export_button',
  batchDetailsBatchActivityGrid = 'batchDetails_batchActivity_grid',
  batchDetailsBatchActivityGridActionColumn = 'batchDetails_batchActivity_grid_action_column',
  batchDetailsBatchActivityGridActionDateColumn = 'batchDetails_batchActivity_grid_actionDate_column',
  batchDetailsBatchActivityGridActionDateRow = 'batchDetails_batchActivity_grid_actionDate_row',
  batchDetailsBatchActivityGridActionRow = 'batchDetails_batchActivity_grid_action_row',
  batchDetailsBatchActivityGridNoResultsMessage = 'batchDetails_batchActivity_grid_noResultsMessage',
  batchDetailsBatchActivityGridPaginationCountPerPageDd = 'batchDetails_batchActivity_grid_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  batchDetailsBatchActivityGridPaginationLabel = 'batchDetails_batchActivity_grid_pagination_label',
  batchDetailsBatchActivityGridPaginationNextLink = 'batchDetails_batchActivity_grid_pagination_next_link',
  batchDetailsBatchActivityGridPaginationPageCountLabel = 'batchDetails_batchActivity_grid_pagination_pageCount_label',
  batchDetailsBatchActivityGridPaginationPreviousLink = 'batchDetails_batchActivity_grid_pagination_previous_link',
  batchDetailsBatchActivityGridUserColumn = 'batchDetails_batchActivity_grid_user_column',
  batchDetailsBatchActivityGridUserRow = 'batchDetails_batchActivity_grid_user_row',
  batchDetailsBatchActivityHeader = 'batchDetails_batchActivity_header',
}

export enum batchDetailsPaymentsInvoicesGridPaymentAttachmentModal {
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModal = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalAddRemitDocsButton = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_addRemitDocs_button',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalAddRemitDocsInput = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_addRemitDocs_input',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalCloseButton = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_close_button',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalCloseIcon = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_close_icon',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalFailedUploadFilename = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_failedUpload_filename',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalFailedUploadMessage = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_failedUpload_message',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalGrid = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalGridNoResultsMessage = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_noResultsMessage',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationCountPerPageDd = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationLabel = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_pagination_label',

  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationNextLink = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_pagination_next_link',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationPageCountLabel = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_pagination_pageCount_label',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationPreviousLink = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_pagination_previous_link',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalHeader = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_header',
  batchDetailsPaymentsInvoicesGridPaymentAttachmentModalLoadingSpinner = 'batchDetails_payments_invoices_grid_manageRemitDocs_loading_spinner',
}

export enum batchDetailsPaymentAttachmentModalGrid {
  batchDetailsPaymentAttachmentGridActionsColumn = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_actions_column',
  batchDetailsPaymentAttachmentGridActionsRowButton = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_actions_row_button',
  batchDetailsPaymentAttachmentGridActionsRowDd = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_actions_row_dd',
  batchDetailsPaymentAttachmentGridActionsRowRemoveDdOption = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_actions_row_remove_ddOption',
  batchDetailsPaymentAttachmentGridActionsRowViewAndDownloadDdOption = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_actions_row_viewAndDownload_ddOption',
  batchDetailsPaymentAttachmentGridFilenameColumn = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_filename_column',
  batchDetailsPaymentAttachmentGridFilenameRow = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_filename_row',
  batchDetailsPaymentAttachmentGridTotalRowsCount = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_totalRows_count',
  // Not in use, pending investigation into possibilities for customizing these elements
  batchDetailsPaymentAttachmentGridTotalRowsLabel = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_totalRows_label',
  batchDetailsPaymentAttachmentGridUploadDateColumn = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_uploadDate_column',
  batchDetailsPaymentAttachmentGridUploadDateRow = 'batchDetails_payments_invoices_grid_manageRemitDocs_modal_grid_uploadDate_row',
}

// nestedColumnDefs
export enum batchDetailsPaymentsInvoicesGrid {
  batchDetailsPaymentsInvoicesGrid = 'batchDetails_payments_invoices_grid',
  batchDetailsPaymentsInvoicesGridAccountNumberColumn = 'batchDetails_payments_invoices_grid_accountNumber_column',
  batchDetailsPaymentsInvoicesGridAccountNumberRow = 'batchDetails_payments_invoices_grid_accountNumber_row',
  batchDetailsPaymentsInvoicesGridAdditionalAmountColumn = 'batchDetails_payments_invoices_grid_additionalAmount_column',
  batchDetailsPaymentsInvoicesGridAdditionalAmountRow = 'batchDetails_payments_invoices_grid_additionalAmount_row',
  batchDetailsPaymentsInvoicesGridCurrencyColumn = 'batchDetails_payments_invoices_grid_currency_column',
  batchDetailsPaymentsInvoicesGridCurrencyRow = 'batchDetails_payments_invoices_grid_currency_row',
  batchDetailsPaymentsInvoicesGridDescriptionColumn = 'batchDetails_payments_invoices_grid_description_column',
  batchDetailsPaymentsInvoicesGridDescriptionRow = 'batchDetails_payments_invoices_grid_description_row',

  batchDetailsPaymentsInvoicesGridDiscountColumn = 'batchDetails_payments_invoices_grid_discount_column',
  batchDetailsPaymentsInvoicesGridDiscountRow = 'batchDetails_payments_invoices_grid_discount_row',
  batchDetailsPaymentsInvoicesGridInvoiceDateColumn = 'batchDetails_payments_invoices_grid_invoiceDate_column',
  batchDetailsPaymentsInvoicesGridInvoiceDateRow = 'batchDetails_payments_invoices_grid_invoiceDate_row',
  batchDetailsPaymentsInvoicesGridInvoiceNumberColumn = 'batchDetails_payments_invoices_grid_invoiceNumber_column',
  batchDetailsPaymentsInvoicesGridInvoiceNumberRow = 'batchDetails_payments_invoices_grid_invoiceNumber_row',
  batchDetailsPaymentsInvoicesGridManageRemitDocsButton = 'batchDetails_payments_invoices_grid_manageRemitDocs_button',
  batchDetailsPaymentsInvoicesGridNetAmountColumn = 'batchDetails_payments_invoices_grid_netAmount_column',
  batchDetailsPaymentsInvoicesGridNetAmountRow = 'batchDetails_payments_invoices_grid_netAmount_row',
  batchDetailsPaymentsInvoicesGridNoResultsMessage = 'batchDetails_payments_invoices_grid_noResultsMessage',
  batchDetailsPaymentsInvoicesGridOriginalAmountColumn = 'batchDetails_payments_invoices_grid_originalAmount_column',
  batchDetailsPaymentsInvoicesGridOriginalAmountRow = 'batchDetails_payments_invoices_grid_originalAmount_row',
  batchDetailsPaymentsInvoicesGridPaymentDateColumn = 'batchDetails_payments_invoices_grid_paymentDate_column',
  batchDetailsPaymentsInvoicesGridPaymentDateRow = 'batchDetails_payments_invoices_grid_paymentDate_row',
  batchDetailsPaymentsInvoicesGridUploadErrorModal = 'batchDetails_payments_invoices_grid_uploadError_modal',
  batchDetailsPaymentsInvoicesGridUploadErrorModalCloseButton = 'batchDetails_payments_invoices_grid_uploadError_modal_close_button',
  batchDetailsPaymentsInvoicesGridUploadErrorModalCloseIcon = 'batchDetails_payments_invoices_grid_uploadError_modal_close_icon',
  batchDetailsPaymentsInvoicesGridUploadErrorModalHeader = 'batchDetails_payments_invoices_grid_uploadError_modal_header',
  batchDetailsPaymentsInvoicesGridUploadErrorModalSuccessCheckIcon = 'batchDetails_payments_invoices_grid_uploadError_modal_successCheck_icon',
  batchDetailsPaymentsInvoicesGridUploadErrorModalText = 'batchDetails_payments_invoices_grid_uploadError_modal_text',
}

/** 🔆 Payment Details Page 🔆 */
// Payment 35721385 has invoices, attachments, and notes

export enum paymentDetailsDetailGridStackDetails {
  paymentDetailsDetailGrid = 'paymentDetails_detailGrid',
  paymentDetailsDetailGridAccountNumberLabel = 'paymentDetails_detailGrid_accountNumber_label',
  paymentDetailsDetailGridAccountNumberValue = 'paymentDetails_detailGrid_accountNumber_value',
  paymentDetailsDetailGridBankAliasLabel = 'paymentDetails_detailGrid_bankAlias_label',
  paymentDetailsDetailGridBankAliasValue = 'paymentDetails_detailGrid_bankAlias_value',
  paymentDetailsDetailGridBatchIdLabel = 'paymentDetails_detailGrid_batchId_label',
  paymentDetailsDetailGridBatchIdLink = '[data-testid="paymentDetails_detailGrid_batchId_link"]',
  paymentDetailsDetailGridBatchIdValue = '[data-testid="paymentDetails_detailGrid_batchId_value"]',
  paymentDetailsDetailGridCheckNumberLabel = 'paymentDetails_detailGrid_checkNumber_label',
  paymentDetailsDetailGridCheckNumberValue = 'paymentDetails_detailGrid_checkNumber_value',
  paymentDetailsDetailGridClientNameLabel = 'paymentDetails_detailGrid_clientName_label',
  paymentDetailsDetailGridClientNameValue = 'paymentDetails_detailGrid_clientName_value',
  paymentDetailsDetailGridDateCreatedLabel = 'paymentDetails_detailGrid_dateCreated_label',
  paymentDetailsDetailGridDateCreatedValue = 'paymentDetails_detailGrid_dateCreated_value',
  paymentDetailsDetailGridDivisionLabel = 'paymentDetails_detailGrid_division_label',
  paymentDetailsDetailGridDivisionValue = 'paymentDetails_detailGrid_division_value',
  paymentDetailsDetailGridImportFileNameLabel = 'paymentDetails_detailGrid_importFileName_label',
  paymentDetailsDetailGridImportFileNameLink = 'paymentDetails_detailGrid_importFileName_link',
  paymentDetailsDetailGridImportFileNameValue = 'paymentDetails_detailGrid_importFileName_value',
  paymentDetailsDetailGridPaymentAmountLabel = 'paymentDetails_detailGrid_paymentAmount_label',
  paymentDetailsDetailGridPaymentAmountValue = '[data-testid="paymentDetails_detailGrid_paymentAmount_value"]',
  paymentDetailsDetailGridPaymentDeliveryMethodLabel = 'paymentDetails_detailGrid_paymentDeliveryMethod_label',
  paymentDetailsDetailGridPaymentIdLabel = 'paymentDetails_detailGrid_paymentId_label',
  paymentDetailsDetailGridPaymentIdValue = '[data-testid="paymentDetails_detailGrid_paymentId_value"]',
  paymentDetailsDetailGridPaymentMethodLabel = 'paymentDetails_detailGrid_paymentMethod_label',
  paymentDetailsDetailGridPaymentMethodValue = '[data-testid="paymentDetails_detailGrid_paymentMethod_value"]',
  paymentDetailsDetailGridPayorAccountNumberLabel = 'paymentDetails_detailGrid_payorAccountNumber_label',
  paymentDetailsDetailGridPayorAccountNumberValue = 'paymentDetails_detailGrid_payorAccountNumber_value',
  paymentDetailsDetailGridPayorInformationLabel = 'paymentDetails_detailGrid_payorInformation_label',
  paymentDetailsDetailGridPayorInformationValue = 'paymentDetails_detailGrid_payorInformation_value',
  paymentDetailsDetailGridPayorNameLabel = 'paymentDetails_detailGrid_payorName_label',
  paymentDetailsDetailGridPayorNameValue = 'paymentDetails_detailGrid_payorName_value',
  paymentDetailsDetailGridPmgVendorIdLabel = 'paymentDetails_detailGrid_pmgVendorId_label',
  paymentDetailsDetailGridPmgVendorIdValue = 'paymentDetails_detailGrid_pmgVendorId_value',
  paymentDetailsDetailGridStatusLabel = 'paymentDetails_detailGrid_status_label',
  paymentDetailsDetailGridStatusReissueOfLabel = 'paymentDetails_detailGrid_status_reissueOf_label',
  paymentDetailsDetailGridStatusReissueOfPaymentIdLink = 'paymentDetails_detailGrid_status_reissueOf_paymentId_link',
  paymentDetailsDetailGridStatusReissuedAsLabel = 'paymentDetails_detailGrid_status_reissuedAs_label',
  paymentDetailsDetailGridStatusReissuedAsPaymentIdLink = 'paymentDetails_detailGrid_status_reissuedAs_paymentId_link',
  paymentDetailsDetailGridStatusValue = '[data-testid="paymentDetails_detailGrid_status_value"]',
  paymentDetailsDetailGridVendorLabel = 'paymentDetails_detailGrid_vendor_label',
  paymentDetailsDetailGridVendorLink = '[data-testid="paymentDetails_detailGrid_vendor_link"]',
  paymentDetailsDetailGridVendorValue = 'paymentDetails_detailGrid_vendor_value',
  paymentDetailsDetailGridYourPaymentIdLabel = 'paymentDetails_detailGrid_yourPaymentId_label',
  paymentDetailsDetailGridYourPaymentIdValue = 'paymentDetails_detailGrid_yourPaymentId_value',
  paymentDetailsDetailGridYourVendorIdLabel = 'paymentDetails_detailGrid_yourVendorId_label',
  paymentDetailsDetailGridYourVendorIdValue = '[data-testid="paymentDetails_detailGrid_yourVendorId_value"]',
  pxrPaymentDetailsDetailGridPaymentDeliveryMethodValue = 'paymentDetails_detailGrid_paymentDeliveryMethod_value',
}

export enum paymentDetailsPaymentAttachmentGrid {
  paymentDetailsPaymentAttachmentGridActionsColumn = 'paymentDetails_paymentAttachments_grid_actions_column',
  paymentDetailsPaymentAttachmentGridActionsRowButton = 'paymentDetails_paymentAttachments_grid_actions_row_button',
  paymentDetailsPaymentAttachmentGridActionsRowDd = 'paymentDetails_paymentAttachments_grid_actions_row_dd',
  paymentDetailsPaymentAttachmentGridActionsRowRemoveDdOption = 'paymentDetails_paymentAttachments_grid_actions_row_remove_ddOption',
  paymentDetailsPaymentAttachmentGridActionsRowViewAndDownloadDdOption = 'paymentDetails_paymentAttachments_grid_actions_row_viewAndDownload_ddOption',
  paymentDetailsPaymentAttachmentGridFilenameColumn = 'paymentDetails_paymentAttachments_grid_filename_column',
  paymentDetailsPaymentAttachmentGridFilenameRow = 'paymentDetails_paymentAttachments_grid_filename_row',
  paymentDetailsPaymentAttachmentGridTotalRowsCount = 'paymentDetails_paymentAttachments_grid_totalRows_count',
  // Not in use, pending investigation into possibilities for customizing these elements
  paymentDetailsPaymentAttachmentGridTotalRowsLabel = 'paymentDetails_paymentAttachments_grid_totalRows_label',
  paymentDetailsPaymentAttachmentGridUploadDateColumn = 'paymentDetails_paymentAttachments_grid_uploadDate_column',
  paymentDetailsPaymentAttachmentGridUploadDateRow = 'paymentDetails_paymentAttachments_grid_uploadDate_row',
}

/** 🔆 Import Details Page 🔆 */

export enum importDetailsPage {
  importDetailsCancelImportButton = '[data-testid = "importDetails_cancelImport_button"]',
  importDetailsConfirmAndCreateBatchButton = 'importDetails_confirmAndCreateBatch_button',
  importDetailsCreateBatchButton = '[data-testid="importDetails_createBatch_button"]',
  importDetailsFilenameLabel = 'importDetails_filename_label',
  importDetailsFilenameValue = 'importDetails_filename_value',
  importDetailsHeader = 'importDetails_header',
  importDetailsImportDetailsDateInitiatedLabel = 'importDetails_detailGrid_dateInitiated_label',
  importDetailsImportDetailsDateInitiatedValue = 'importDetails_detailGrid_dateInitiated_value',
  importDetailsImportDetailsFileStatusLabel = 'importDetails_detailGrid_fileStatus_label',
  importDetailsImportDetailsFileStatusValue = 'importDetails_detailGrid_fileStatus_value',
  importDetailsImportDetailsUserInitiatedLabel = 'importDetails_detailGrid_userInitiated_label',
  importDetailsImportDetailsUserInitiatedValue = 'importDetails_detailGrid_userInitiated_value',
  importDetailsImportIdLabel = 'importDetails_importId_label',
  importDetailsImportIdValue = '[data-testid="importDetails_importId_value"] > span',
  importDetailsLoadingSpinner = 'importDetails_loadingSpinner',
  importDetailsPaymentCountLabel = 'importDetails_paymentCount_label',
  importDetailsPaymentCountValue = 'importDetails_paymentCount_value',
  importDetailsTotalAmountLabel = 'importDetails_totalAmount_label',
  importDetailsTotalAmountValue = 'importDetails_totalAmount_value',
  importids = '[class="text-datagrid-link hover:text-datagrid-link-hover"]',
}

export enum importDetailsPayments {
  importDetailsPaymentsGrid = 'importDetails_payments_grid',
  importDetailsPaymentsGridLoadingSpinner = 'importDetails_payments_grid_loadingSpinner',
  importDetailsPaymentsGridNoResultsMessage = 'importDetails_payments_grid_noResultsMessage',
  importDetailsPaymentsGridPaginationCountPerPageDd = 'importDetails_payments_grid_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  importDetailsPaymentsGridPaginationLabel = 'importDetails_payments_grid_pagination_label',
  importDetailsPaymentsGridPaginationNextLink = 'importDetails_payments_grid_pagination_next_link',
  importDetailsPaymentsGridPaginationPageCountLabel = 'importDetails_payments_grid_pagination_pageCount_label',
  importDetailsPaymentsGridPaginationPreviousLink = 'importDetails_payments_grid_pagination_previous_link',
  importDetailsPaymentsGridPaymentAmountColumn = 'importDetails_payments_grid_paymentAmount_column',
  importDetailsPaymentsGridPaymentAmountRow = '[data-testid*="importDetails_payments_grid_paymentAmount_row"]',
  importDetailsPaymentsGridPaymentIdColumn = 'importDetails_payments_grid_paymentId_column',
  importDetailsPaymentsGridPaymentIdRow = '[data-testid*="importDetails_payments_grid_paymentId_row_link"]',
  importDetailsPaymentsGridStatusColumn = 'importDetails_payments_grid_status_column',
  importDetailsPaymentsGridStatusRow = '[data-testid*="importDetails_payments_grid_status_row"]',
  importDetailsPaymentsGridVendorColumn = 'importDetails_payments_grid_vendor_column',
  importDetailsPaymentsGridVendorRow = '[data-testid*="importDetails_payments_grid_vendor_row"]',
  importDetailsPaymentsHeader = 'importDetails_payments_header',
}

export enum importDetailsCancelImportResultModal {
  importDetailsCancelImportResultModal = 'importDetails_cancelImportResult_modal',
  importDetailsCancelImportResultModalCloseButton = '[data-testid="importDetails_cancelImportResult_modal_close_button"]',
  importDetailsCancelImportResultModalCloseIcon = 'importDetails_cancelImportResult_modal_close_icon',
  importDetailsCancelImportResultModalHeader = '[data-testid="importDetails_cancelImportResult_modal_header"]',
  importDetailsCancelImportResultModalSuccessCheckIcon = '[data-testid="importDetails_cancelImportResult_modal_successCheck_icon"]',
  importDetailsCancelImportResultModalText = 'importDetails_cancelImportResult_modal_text',
}

export enum importDetailsConfirmPaymentImportModal {
  importDetailsConfirmPaymentImportModal = 'importDetails_confirmPaymentImport_modal',
  importDetailsConfirmPaymentImportModalCloseIcon = 'importDetails_confirmPaymentImport_modal_closeIcon_button',
  importDetailsConfirmPaymentImportModalFilename = 'importDetails_confirmPaymentImport_modal_filename',
  importDetailsConfirmPaymentImportModalHeader = 'importDetails_confirmPaymentImport_modal_header',
  importDetailsConfirmPaymentImportModalNoButton = 'importDetails_confirmPaymentImport_modal_no_button',
  importDetailsConfirmPaymentImportModalText = 'importDetails_confirmPaymentImport_modal_text',
  importDetailsConfirmPaymentImportModalYesButton = 'importDetails_confirmPaymentImport_modal_yes_button',
}

export enum importDetailsCancelImportModal {
  importDetailsCancelImportModal = 'importDetails_cancelImport_modal',
  importDetailsCancelImportModalCloseIcon = '[data-testid="importDetails_cancelImport_modal_closeIcon_button"]',
  importDetailsCancelImportModalHeader = '[data-testid="importDetails_cancelImport_modal_header"]',
  importDetailsCancelImportModalImportId = '[data-testid="importDetails_cancelImport_modal_importId"]',
  importDetailsCancelImportModalNoButton = '[data-testid="importDetails_cancelImport_modal_no_button"]',
  importDetailsCancelImportModalText = '[data-testid="importDetails_cancelImport_modal_text"]',
  importDetailsCancelImportModalYesButton = '[data-testid="importDetails_cancelImport_modal_yes_button"]',
}

/** 🔆 Manage Imports Page 🔆 */

export enum manageImports {
  manageImportsActiveImportsCreateBatchLink = 'manageImports_activeImports_createBatch_link',
  manageImportsActiveImportsGrid = 'manageImports_activeImports_grid',
  manageImportsActiveImportsGridCountColumn = 'manageImports_activeImportsGrid_count_column',
  manageImportsActiveImportsGridCountRow = 'manageImports_activeImportsGrid_count_row',
  manageImportsActiveImportsGridDateColumn = 'manageImports_activeImportsGrid_date_column',
  manageImportsActiveImportsGridDateRow = 'manageImports_activeImportsGrid_date_row',
  manageImportsActiveImportsGridExceptionsColumn = 'manageImports_activeImportsGrid_exceptions_column',
  manageImportsActiveImportsGridExceptionsRow = 'manageImports_activeImportsGrid_exceptions_row',
  manageImportsActiveImportsGridFileNameColumn = 'manageImports_activeImportsGrid_fileName_column',
  manageImportsActiveImportsGridFileNameRow = 'manageImports_activeImportsGrid_fileName_row',
  manageImportsActiveImportsGridImportIdColumn = 'manageImports_activeImportsGrid_importId_column',
  manageImportsActiveImportsGridImportIdRow = 'manageImports_activeImportsGrid_importId_row',
  manageImportsActiveImportsGridNoResultsMessage = 'manageImports_activeImports_grid_noResultsMessage',
  manageImportsActiveImportsGridStatusColumn = 'manageImports_activeImportsGrid_status_column',
  manageImportsActiveImportsGridStatusRow = 'manageImports_activeImportsGrid_status_row',
  manageImportsActiveImportsGridTotalColumn = 'manageImports_activeImportsGrid_total_column',
  manageImportsActiveImportsGridTotalRow = 'manageImports_activeImportsGrid_total_row',
  manageImportsActiveImportsGridUserColumn = 'manageImports_activeImportsGrid_user_column',
  manageImportsActiveImportsGridUserRow = 'manageImports_activeImportsGrid_user_row',
  // active imports grid
  manageImportsActiveImportsHeader = 'manageImports_activeImports_header',
  manageImportsActiveImportsImportPaymentsLink = 'manageImports_activeImports_importPayments_link',
  manageImportsActiveImportsPaginationCountPerPageDd = 'manageImports_activeImports_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  manageImportsActiveImportsPaginationLabel = 'manageImports_activeImports_pagination_label',
  manageImportsActiveImportsPaginationNextLink = 'manageImports_activeImports_pagination_next_link',
  manageImportsActiveImportsPaginationPageCountLabel = 'manageImports_activeImports_pagination_pageCount_label',
  manageImportsActiveImportsPaginationPreviousLink = 'manageImports_activeImports_pagination_previous_link',
  manageImportsCompletedImportsGrid = 'manageImports_completedImports_grid',
  manageImportsCompletedImportsGridCountColumn = 'manageImports_completedImportsGrid_count_column',
  manageImportsCompletedImportsGridCountRow = 'manageImports_completedImportsGrid_count_row',
  manageImportsCompletedImportsGridDateColumn = 'manageImports_completedImportsGrid_date_column',
  manageImportsCompletedImportsGridDateRow = 'manageImports_completedImportsGrid_date_row',
  manageImportsCompletedImportsGridFileNameColumn = 'manageImports_completedImportsGrid_fileName_column',
  manageImportsCompletedImportsGridFileNameRow = 'manageImports_completedImportsGrid_fileName_row',
  manageImportsCompletedImportsGridImportIdColumn = 'manageImports_completedImportsGrid_importId_column',
  manageImportsCompletedImportsGridImportIdRow = 'manageImports_completedImportsGrid_importId_row',
  manageImportsCompletedImportsGridNoResultsMessage = 'manageImports_completedImports_grid_noResultsMessage',
  manageImportsCompletedImportsGridStatusColumn = 'manageImports_completedImportsGrid_status_column',
  manageImportsCompletedImportsGridStatusRow = 'manageImports_completedImportsGrid_status_row',
  manageImportsCompletedImportsGridTotalColumn = 'manageImports_completedImportsGrid_total_column',
  manageImportsCompletedImportsGridTotalRow = 'manageImports_completedImportsGrid_total_row',
  manageImportsCompletedImportsGridUserColumn = 'manageImports_completedImportsGrid_user_column',
  manageImportsCompletedImportsGridUserRow = 'manageImports_completedImportsGrid_user_row',
  // Completed imports grid
  manageImportsCompletedImportsHeader = 'manageImports_completedImports_header',
  manageImportsCompletedImportsPaginationCountPerPageDd = 'manageImports_completedImports_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  manageImportsCompletedImportsPaginationLabel = 'manageImports_completedImports_pagination_label',
  manageImportsCompletedImportsPaginationNextLink = 'manageImports_completedImports_pagination_next_link',
  manageImportsCompletedImportsPaginationPageCountLabel = 'manageImports_completedImports_pagination_pageCount_label',
  manageImportsCompletedImportsPaginationPreviousLink = 'manageImports_completedImports_pagination_previous_link',
  manageImportsHeader = 'manageImports_header',
  manageImportsReviewedImportsGrid = 'manageImports_reviewedImports_grid',
  manageImportsReviewedImportsGridCountColumn = 'manageImports_reviewedImportsGrid_count_column',
  manageImportsReviewedImportsGridCountRow = 'manageImports_reviewedImportsGrid_count_row',
  manageImportsReviewedImportsGridDateCreatedColumn = 'manageImports_reviewedImportsGrid_dateCreated_column',
  manageImportsReviewedImportsGridDateCreatedRow = 'manageImports_reviewedImportsGrid_dateCreated_row',
  manageImportsReviewedImportsGridExceptionsColumn = 'manageImports_reviewedImportsGrid_exceptions_column',
  manageImportsReviewedImportsGridExceptionsRow = 'manageImports_reviewedImportsGrid_exceptions_row',
  manageImportsReviewedImportsGridFileNameColumn = 'manageImports_reviewedImportsGrid_fileName_column',
  manageImportsReviewedImportsGridFileNameRow = 'manageImports_reviewedImportsGrid_fileName_row',
  manageImportsReviewedImportsGridImportIdColumn = 'manageImports_reviewedImportsGrid_importId_column',
  manageImportsReviewedImportsGridImportIdRow = 'manageImports_reviewedImportsGrid_importId_row',
  manageImportsReviewedImportsGridNoResultsMessage = 'manageImports_reviewedImports_grid_noResultsMessage',
  manageImportsReviewedImportsGridStatusColumn = 'manageImports_reviewedImportsGrid_status_column',
  manageImportsReviewedImportsGridStatusRow = 'manageImports_reviewedImportsGrid_status_row',
  manageImportsReviewedImportsGridTotalColumn = 'manageImports_reviewedImportsGrid_total_column',
  manageImportsReviewedImportsGridTotalRow = 'manageImports_reviewedImportsGrid_total_row',
  manageImportsReviewedImportsGridUserColumn = 'manageImports_reviewedImportsGrid_user_column',
  manageImportsReviewedImportsGridUserRow = 'manageImports_reviewedImportsGrid_user_row',
  // review imports grid
  manageImportsReviewedImportsHeader = 'manageImports_reviewedImports_header',
  manageImportsReviewedImportsPaginationCountPerPageDd = 'manageImports_reviewedImports_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  manageImportsReviewedImportsPaginationLabel = 'manageImports_reviewedImports_pagination_label',
  manageImportsReviewedImportsPaginationNextLink = 'manageImports_reviewedImports_pagination_next_link',
  manageImportsReviewedImportsPaginationPageCountLabel = 'manageImports_reviewedImports_pagination_pageCount_label',
  manageImportsReviewedImportsPaginationPreviousLink = 'manageImports_reviewedImports_pagination_previous_link',
}

/** 🔆 Import Uploads Page 🔆 */

export enum importPaymentsConfirmedAllImportsModal {
  importPaymentsConfirmedAllImportsModal = 'importPayments_confirmedAllImports_modal',
  importPaymentsConfirmedAllImportsModalCloseButton = 'importPayments_confirmedAllImports_modal_close_button',
  importPaymentsConfirmedAllImportsModalCloseIcon = 'importPayments_confirmedAllImports_modal_close_icon',
  importPaymentsConfirmedAllImportsModalGrid = 'importPayments_confirmedAllImports_modal_grid',
  importPaymentsConfirmedAllImportsModalGridFileIdColumn = 'importPayments_confirmedAllImports_modal_grid_fileId_column',
  importPaymentsConfirmedAllImportsModalGridFileIdRow = 'importPayments_confirmedAllImports_modal_grid_fileId_row',
  importPaymentsConfirmedAllImportsModalGridFileNameColumn = 'importPayments_confirmedAllImports_modal_grid_fileName_column',
  importPaymentsConfirmedAllImportsModalGridFileNameRow = 'importPayments_confirmedAllImports_modal_grid_fileName_row',
  importPaymentsConfirmedAllImportsModalHeader = 'importPayments_confirmedAllImports_modal_header',
  importPaymentsConfirmedAllImportsModalSuccessCheckIcon = 'importPayments_confirmedAllImports_modal_successCheck_icon',
  importPaymentsConfirmedAllImportsModalText = 'importPayments_confirmedAllImports_modal_text',
}

/** 🔆 Vendors Page 🔆 */

export enum vendorsAddNewVendorSmartyModal {
  vendorsAddNewVendorSmartyModal = 'vendors_addNewVendor_smarty_modal',
  vendorsAddNewVendorSmartyModalCloseIcon = 'vendors_addNewVendor_smarty_modal_close_icon',
  vendorsAddNewVendorSmartyModalEntityName = 'vendors_addNewVendor_smarty_modal_entityName',
  vendorsAddNewVendorSmartyModalExistingAddress = 'vendors_addNewVendor_smarty_modal_existingAddress_text',
  vendorsAddNewVendorSmartyModalExistingAddressButton = '[data-testid="vendors_addNewVendor_smarty_modal_existingAddress_button"]',
  vendorsAddNewVendorSmartyModalHeader = 'vendors_addNewVendor_smarty_modal_header',
  vendorsAddNewVendorSmartyModalMessage = '[data-testid="vendors_addNewVendor_smarty_modal_message"]',
  vendorsAddNewVendorSmartyModalSuggestedAddress = 'vendors_addNewVendor_smarty_modal_suggestedAddress_text',
  vendorsAddNewVendorSmartyModalSuggestedAddressButton = 'vendors_addNewVendor_smarty_modal_suggestedAddress_button',
  vendorsAddNewVendorSmartyModalUnverifiedAddress = 'vendors_addNewVendor_smarty_modal_unverifiedAddress_text',
  vendorsAddNewVendorSmartyModalUnverifiedAddressButton = '[data-testid="vendors_addNewVendor_smarty_modal_unverifiedAddress_button"]',
  vendorsAddNewVendorSmartyModalUnverifiedIcon = 'vendors_addNewVendor_smarty_modal_unverified_icon',
  vendorsAddNewVendor_grid_vendorName_link = '[data-field="vendor_name"]',
  vendorsAddNewVendor_duplicatemessage = '[data-testid="vendorDetails_add_existingInternalVendorId_modal_text"]',
}

/** 🔆 Vendor Details Page 🔆 */

export enum vendorDetailsEditVendorSmartyModal {
  vendorDetailsEditVendorSmartyModal = 'vendorDetails_editVendor_smarty_modal',
  vendorDetailsEditVendorSmartyModalCloseIcon = 'vendorDetails_editVendor_smarty_modal_close_icon',
  vendorDetailsEditVendorSmartyModalEntityName = 'vendorDetails_editVendor_smarty_modal_entityName',
  vendorDetailsEditVendorSmartyModalExistingAddress = 'vendorDetails_editVendor_smarty_modal_existingAddress_text',
  vendorDetailsEditVendorSmartyModalExistingAddressButton = '[data-testid="vendorDetails_editVendor_smarty_modal_existingAddress_button"]',
  vendorDetailsEditVendorSmartyModalHeader = 'vendorDetails_editVendor_smarty_modal_header',
  vendorDetailsEditVendorSmartyModalMessage = '[data-testid="vendorDetails_editVendor_smarty_modal_message"]',
  vendorDetailsEditVendorSmartyModalSuggestedAddress = 'vendorDetails_editVendor_smarty_modal_suggestedAddress_text',
  vendorDetailsEditVendorSmartyModalSuggestedAddressButton = 'vendorDetails_editVendor_smarty_modal_suggestedAddress_button',
  vendorDetailsEditVendorSmartyModalUnverifiedAddress = 'vendorDetails_editVendor_smarty_modal_unverifiedAddress_text',
  vendorDetailsEditVendorSmartyModalUnverifiedAddressButton = '[data-testid="vendorDetails_editVendor_smarty_modal_unverifiedAddress_button"]',
  vendorDetailsEditVendorSmartyModalUnverifiedIcon = 'vendorDetails_editVendor_smarty_modal_unverified_icon',
  vendorDetailsEditVendorStatusActive = '#demo-simple-select-standard',
  vendorDetailsEditVendorStatusActive_no = '[data-testid="vendorDetails_paymentSpecs_editable_active_ddOption_no"]',
  vendorDetailsEditVendorStatusActive_yes = '[data-testid="vendorDetails_paymentSpecs_editable_active_ddOption_yes"]',
}

/** 🔆 Key-In Payments Page 🔆 */

// nestedColumnDefs
export enum keyInPaymentsPendingKeyedInPaymentsInvoicesGrid {
  keyInPaymentsPendingPaymentsInvoicesGrid = 'keyInPayments_pendingKeyedInPayments_invoices_grid',
  keyInPaymentsPendingPaymentsInvoicesGridAccountNumberColumn = 'keyInPayments_pendingKeyedInPayments_invoices_grid_accountNumber_column',
  keyInPaymentsPendingPaymentsInvoicesGridAccountNumberRow = 'keyInPayments_pendingKeyedInPayments_invoices_grid_accountNumber_row',
  keyInPaymentsPendingPaymentsInvoicesGridAdditionalAmountColumn = 'keyInPayments_pendingKeyedInPayments_invoices_grid_additionalAmount_column',
  keyInPaymentsPendingPaymentsInvoicesGridAdditionalAmountRow = 'keyInPayments_pendingKeyedInPayments_invoices_grid_additionalAmount_row',
  keyInPaymentsPendingPaymentsInvoicesGridCurrencyColumn = 'keyInPayments_pendingKeyedInPayments_invoices_grid_currency_column',
  keyInPaymentsPendingPaymentsInvoicesGridCurrencyRow = 'keyInPayments_pendingKeyedInPayments_invoices_grid_currency_row',
  keyInPaymentsPendingPaymentsInvoicesGridDescriptionColumn = 'keyInPayments_pendingKeyedInPayments_invoices_grid_description_column',
  keyInPaymentsPendingPaymentsInvoicesGridDescriptionRow = 'keyInPayments_pendingKeyedInPayments_invoices_grid_description_row',
  keyInPaymentsPendingPaymentsInvoicesGridDiscountColumn = 'keyInPayments_pendingKeyedInPayments_invoices_grid_discount_column',
  keyInPaymentsPendingPaymentsInvoicesGridDiscountRow = 'keyInPayments_pendingKeyedInPayments_invoices_grid_discount_row',
  keyInPaymentsPendingPaymentsInvoicesGridInvoiceDateColumn = 'keyInPayments_pendingKeyedInPayments_invoices_grid_invoiceDate_column',
  keyInPaymentsPendingPaymentsInvoicesGridInvoiceDateRow = 'keyInPayments_pendingKeyedInPayments_invoices_grid_invoiceDate_row',
  keyInPaymentsPendingPaymentsInvoicesGridInvoiceNumberColumn = 'keyInPayments_pendingKeyedInPayments_invoices_grid_invoiceNumber_column',
  keyInPaymentsPendingPaymentsInvoicesGridInvoiceNumberRow = 'keyInPayments_pendingKeyedInPayments_invoices_grid_invoiceNumber_row',
  keyInPaymentsPendingPaymentsInvoicesGridNetAmountColumn = 'keyInPayments_pendingKeyedInPayments_invoices_grid_netAmount_column',
  keyInPaymentsPendingPaymentsInvoicesGridNetAmountRow = 'keyInPayments_pendingKeyedInPayments_invoices_grid_netAmount_row',
  keyInPaymentsPendingPaymentsInvoicesGridNoResultsMessage = 'keyInPayments_pendingKeyedInPayments_invoices_grid_noResultsMessage',
  keyInPaymentsPendingPaymentsInvoicesGridOriginalAmountColumn = 'keyInPayments_pendingKeyedInPayments_invoices_grid_originalAmount_column',
  keyInPaymentsPendingPaymentsInvoicesGridOriginalAmountRow = 'keyInPayments_pendingKeyedInPayments_invoices_grid_originalAmount_row',
  keyInPaymentsPendingPaymentsInvoicesGridPaymentDateColumn = 'keyInPayments_pendingKeyedInPayments_invoices_grid_paymentDate_column',
  keyInPaymentsPendingPaymentsInvoicesGridPaymentDateRow = 'keyInPayments_pendingKeyedInPayments_invoices_grid_paymentDate_row',
}

/** 🔆 Payment Approvals 🔆 */

export enum paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModal {
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModal = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalAddRemitDocsButton = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_addRemitDocs_button',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalAddRemitDocsInput = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_addRemitDocs_input',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalCloseButton = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_close_button',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalCloseIcon = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_close_icon',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalFailedUploadFilename = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_failedUpload_filename',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalFailedUploadMessage = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_failedUpload_message',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalGrid = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalGridNoResultsMessage = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_noResultsMessage',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationCountPerPageDd = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationLabel = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_pagination_label',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationNextLink = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_pagination_next_link',

  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationPageCountLabel = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_pagination_pageCount_label',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationPreviousLink = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_pagination_previous_link',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalHeader = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_header',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalLoadingSpinner = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_loading_spinner',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalNestedModalPrefix = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_nestedModal_tooManyFilesUploaded_modal',
}

export enum paymentApprovalsPaymentsInvoicesGridPaymentAttachmentModalGrid {
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentGridActionsColumn = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_actions_column',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentGridActionsRowButton = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_actions_row_button',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentGridFilenameColumn = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_filename_column',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentGridFilenameRow = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_filename_row',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentGridTotalRowsCount = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_totalRows_count',
  // Not in use, pending investigation into possibilities for customizing these elements
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentGridTotalRowsLabel = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_totalRows_label',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentGridUploadDateColumn = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_uploadDate_column',
  paymentApprovalsPaymentsInvoicesGridPaymentAttachmentGridUploadDateRow = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_modal_grid_uploadDate_row',
}

// nestedColumnDefs
export enum paymentApprovalsPaymentsInvoicesGrid {
  paymentApprovalsPaymentsInvoicesGrid = 'paymentApprovals_payments_invoices_grid',
  paymentApprovalsPaymentsInvoicesGridAccountNumberColumn = 'paymentApprovals_payments_invoices_grid_accountNumber_column',
  paymentApprovalsPaymentsInvoicesGridAccountNumberRow = 'paymentApprovals_payments_invoices_grid_accountNumber_row',
  paymentApprovalsPaymentsInvoicesGridAdditionalAmountColumn = 'paymentApprovals_payments_invoices_grid_additionalAmount_column',
  paymentApprovalsPaymentsInvoicesGridAdditionalAmountRow = 'paymentApprovals_payments_invoices_grid_additionalAmount_row',
  paymentApprovalsPaymentsInvoicesGridCurrencyColumn = 'paymentApprovals_payments_invoices_grid_currency_column',
  paymentApprovalsPaymentsInvoicesGridCurrencyRow = 'paymentApprovals_payments_invoices_grid_currency_row',
  paymentApprovalsPaymentsInvoicesGridDescriptionColumn = 'paymentApprovals_payments_invoices_grid_description_column',
  paymentApprovalsPaymentsInvoicesGridDescriptionRow = 'paymentApprovals_payments_invoices_grid_description_row',

  paymentApprovalsPaymentsInvoicesGridDiscountColumn = 'paymentApprovals_payments_invoices_grid_discount_column',
  paymentApprovalsPaymentsInvoicesGridDiscountRow = 'paymentApprovals_payments_invoices_grid_discount_row',
  paymentApprovalsPaymentsInvoicesGridInvoiceDateColumn = 'paymentApprovals_payments_invoices_grid_invoiceDate_column',
  paymentApprovalsPaymentsInvoicesGridInvoiceDateRow = 'paymentApprovals_payments_invoices_grid_invoiceDate_row',
  paymentApprovalsPaymentsInvoicesGridInvoiceNumberColumn = 'paymentApprovals_payments_invoices_grid_invoiceNumber_column',
  paymentApprovalsPaymentsInvoicesGridInvoiceNumberRow = 'paymentApprovals_payments_invoices_grid_invoiceNumber_row',
  paymentApprovalsPaymentsInvoicesGridManageRemitDocsButton = 'paymentApprovals_payments_invoices_grid_manageRemitDocs_button',
  paymentApprovalsPaymentsInvoicesGridNetAmountColumn = 'paymentApprovals_payments_invoices_grid_netAmount_column',
  paymentApprovalsPaymentsInvoicesGridNetAmountRow = 'paymentApprovals_payments_invoices_grid_netAmount_row',
  paymentApprovalsPaymentsInvoicesGridNoResultsMessage = 'paymentApprovals_payments_invoices_grid_noResultsMessage',
  paymentApprovalsPaymentsInvoicesGridOriginalAmountColumn = 'paymentApprovals_payments_invoices_grid_originalAmount_column',
  paymentApprovalsPaymentsInvoicesGridOriginalAmountRow = 'paymentApprovals_payments_invoices_grid_originalAmount_row',
  paymentApprovalsPaymentsInvoicesGridPaymentDateColumn = 'paymentApprovals_payments_invoices_grid_paymentDate_column',
  paymentApprovalsPaymentsInvoicesGridPaymentDateRow = 'paymentApprovals_payments_invoices_grid_paymentDate_row',
  paymentApprovalsPaymentsInvoicesGridUploadErrorModal = 'paymentApprovals_payments_invoices_grid_uploadError_modal',
  paymentApprovalsPaymentsInvoicesGridUploadErrorModalCloseButton = 'paymentApprovals_payments_invoices_grid_uploadError_modal_close_button',
  paymentApprovalsPaymentsInvoicesGridUploadErrorModalCloseIcon = 'paymentApprovals_payments_invoices_grid_uploadError_modal_close_icon',
  paymentApprovalsPaymentsInvoicesGridUploadErrorModalHeader = 'paymentApprovals_payments_invoices_grid_uploadError_modal_header',
  paymentApprovalsPaymentsInvoicesGridUploadErrorModalSuccessCheckIcon = 'paymentApprovals_payments_invoices_grid_uploadError_modal_successCheck_icon',
  paymentApprovalsPaymentsInvoicesGridUploadErrorModalText = 'paymentApprovals_payments_invoices_grid_uploadError_modal_text',
}

/** 🔆 Batch Create 🔆 */

export enum batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModal {
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModal = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalAddRemitDocsButton = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_addRemitDocs_button',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalAddRemitDocsInput = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_addRemitDocs_input',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalCloseButton = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_close_button',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalCloseIcon = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_close_icon',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalFailedUploadFilename = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_failedUpload_filename',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalFailedUploadMessage = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_failedUpload_message',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalGrid = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalGridNoResultsMessage = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_noResultsMessage',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationCountPerPageDd = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationLabel = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_pagination_label',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationNextLink = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_pagination_next_link',

  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationPageCountLabel = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_pagination_pageCount_label',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalGridPaginationPreviousLink = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_pagination_previous_link',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalHeader = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_header',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalLoadingSpinner = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_loading_spinner',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentModalNestedModalPrefix = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_nestedModal_tooManyFilesUploaded_modal',
}

export enum batchCreateProposedBatchImportsPaymentsInvoicesPaymentAttachmentModalGrid {
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentGridActionsColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_actions_column',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentGridActionsRowButton = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_actions_row_button',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentGridFilenameColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_filename_column',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentGridFilenameRow = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_filename_row',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentGridTotalRowsCount = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_totalRows_count',
  // Not in use, pending investigation into possibilities for customizing these elements
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentGridTotalRowsLabel = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_totalRows_label',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentGridUploadDateColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_uploadDate_column',
  batchCreateProposedBatchImportsPaymentsInvoicesGridPaymentAttachmentGridUploadDateRow = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_modal_grid_uploadDate_row',
}

export enum batchCreateCreateVendorSmartyModal {
  batchCreateCreateVendorSmartyModal = 'createBatch_createVendor_smarty_modal',
  batchCreateCreateVendorSmartyModalCloseIcon = 'createBatch_createVendor_smarty_modal_close_icon',
  batchCreateCreateVendorSmartyModalEntityName = 'createBatch_createVendor_smarty_modal_entityName',
  batchCreateCreateVendorSmartyModalExistingAddress = 'createBatch_createVendor_smarty_modal_existingAddress_text',
  batchCreateCreateVendorSmartyModalExistingAddressButton = 'createBatch_createVendor_smarty_modal_existingAddress_button',
  batchCreateCreateVendorSmartyModalHeader = 'createBatch_createVendor_smarty_modal_header',
  batchCreateCreateVendorSmartyModalMessage = 'createBatch_createVendor_smarty_modal_message',
  batchCreateCreateVendorSmartyModalSuggestedAddress = 'createBatch_createVendor_smarty_modal_suggestedAddress_text',
  batchCreateCreateVendorSmartyModalSuggestedAddressButton = 'createBatch_createVendor_smarty_modal_suggestedAddress_button',
  batchCreateCreateVendorSmartyModalUnverifiedAddress = 'createBatch_createVendor_smarty_modal_unverifiedAddress_text',
  batchCreateCreateVendorSmartyModalUnverifiedAddressButton = 'createBatch_createVendor_smarty_modal_unverifiedAddress_button',
  batchCreateCreateVendorSmartyModalUnverifiedIcon = 'createBatch_createVendor_smarty_modal_unverified_icon',
}

// nestedColumnDefs
export enum batchCreateProposedBatchImportsPaymentsInvoicesGrid {
  batchCreatePaymentInvoicesGrid = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid',
  batchCreatePaymentInvoicesGridAccountNumberColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_accountNumber_column',
  batchCreatePaymentInvoicesGridAccountNumberRow = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_accountNumber_row',
  batchCreatePaymentInvoicesGridAdditionalAmountColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_additionalAmount_column',
  batchCreatePaymentInvoicesGridAdditionalAmountRow = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_additionalAmount_row',
  batchCreatePaymentInvoicesGridCurrencyColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_currency_column',
  batchCreatePaymentInvoicesGridCurrencyRow = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_currency_row',
  batchCreatePaymentInvoicesGridDescriptionColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_description_column',
  batchCreatePaymentInvoicesGridDescriptionRow = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_description_row',
  batchCreatePaymentInvoicesGridDiscountColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_discount_column',
  batchCreatePaymentInvoicesGridDiscountRow = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_discount_row',
  batchCreatePaymentInvoicesGridInvoiceDateColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_invoiceDate_column',
  batchCreatePaymentInvoicesGridInvoiceDateRow = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_invoiceDate_row',
  batchCreatePaymentInvoicesGridInvoiceNumberColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_invoiceNumber_column',
  batchCreatePaymentInvoicesGridInvoiceNumberRow = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_invoiceNumber_row',
  batchCreatePaymentInvoicesGridManageRemitDocsButton = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_manageRemitDocs_button',
  batchCreatePaymentInvoicesGridNetAmountColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_netAmount_column',
  batchCreatePaymentInvoicesGridNetAmountRow = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_netAmount_row',
  batchCreatePaymentInvoicesGridNoResultsMessage = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_noResultsMessage',
  batchCreatePaymentInvoicesGridOriginalAmountColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_originalAmount_column',
  batchCreatePaymentInvoicesGridOriginalAmountRow = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_originalAmount_row',
  batchCreatePaymentInvoicesGridPaymentAttachmentNestedModalPrefix = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid TODO-FIX DUPLICATE',
  batchCreatePaymentInvoicesGridPaymentDateColumn = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_paymentDate_column',
  batchCreatePaymentInvoicesGridPaymentDateRow = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_paymentDate_row',
  batchCreatePaymentInvoicesGridUploadErrorModal = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_uploadError_modal',
  batchCreatePaymentInvoicesGridUploadErrorModalCloseButton = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_uploadError_modal_close_button',
  batchCreatePaymentInvoicesGridUploadErrorModalCloseIcon = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_uploadError_modal_close_icon',
  batchCreatePaymentInvoicesGridUploadErrorModalHeader = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_uploadError_modal_header',
  batchCreatePaymentInvoicesGridUploadErrorModalSuccessCheckIcon = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_uploadError_modal_successCheck_icon',
  batchCreatePaymentInvoicesGridUploadErrorModalText = 'batchCreate_proposedBatch_importPayments_paymentInvoices_grid_uploadError_modal_text',
}

// nestedColumnDefs
export enum batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGrid {
  batchCreatePossibleDuplicatesModalOriginalPaymentGrid = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridAccountNumberColumn = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_accountNumber_column',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridAccountNumberRow = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_accountNumber_row',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridAdditionalAmountColumn = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_additionalAmount_column',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridAdditionalAmountRow = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_additionalAmount_row',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridCurrencyColumn = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_currency_column',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridCurrencyRow = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_currency_row',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridDescriptionColumn = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_description_column',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridDescriptionRow = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_description_row',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridDiscountColumn = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_discount_column',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridDiscountRow = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_discount_row',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridInvoiceDateColumn = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_invoiceDate_column',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridInvoiceDateRow = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_invoiceDate_row',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridInvoiceNumberColumn = 'batchCreate_possibleDuplicate_modal_originalPayment_grid_invoices_grid_invoiceNumber_column',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridInvoiceNumberRow = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_invoiceNumber_row',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridNetAmountColumn = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_netAmount_column',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridNetAmountRow = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_netAmount_row',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridNoResultsMessage = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_noResultsMessage',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridOriginalAmountColumn = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_originalAmount_column',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridOriginalAmountRow = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_originalAmount_row',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridPaymentDateColumn = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_paymentDate_column',
  batchCreatePossibleDuplicatesModalOriginalPaymentInvoicesGridPaymentDateRow = 'batchCreate_possibleDuplicate_modal_originalPayment_invoices_grid_paymentDate_row',
}

// nestedColumnDefs
export enum batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGrid {
  batchCreatePossibleDuplicatesModalPaymentHistoryGrid = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridAccountNumberColumn = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_accountNumber_column',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridAccountNumberRow = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_accountNumber_row',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridAdditionalAmountColumn = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_additionalAmount_column',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridAdditionalAmountRow = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_additionalAmount_row',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridCurrencyColumn = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_currency_column',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridCurrencyRow = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_currency_row',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridDescriptionColumn = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_description_column',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridDescriptionRow = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_description_row',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridDiscountColumn = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_discount_column',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridDiscountRow = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_discount_row',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridInvoiceDateColumn = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_invoiceDate_column',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridInvoiceDateRow = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_invoiceDate_row',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridInvoiceNumberColumn = 'batchCreate_possibleDuplicate_modal_paymentHistory_grid_invoices_grid_invoiceNumber_column',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridInvoiceNumberRow = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_invoiceNumber_row',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridNetAmountColumn = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_netAmount_column',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridNetAmountRow = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_netAmount_row',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridNoResultsMessage = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_noResultsMessage',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridOriginalAmountColumn = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_originalAmount_column',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridOriginalAmountRow = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_originalAmount_row',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridPaymentDateColumn = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_paymentDate_column',
  batchCreatePossibleDuplicatesModalPaymentHistoryInvoicesGridPaymentDateRow = 'batchCreate_possibleDuplicate_modal_paymentHistory_invoices_grid_paymentDate_row',
}

export enum batchCreateModals {
  batchCreateCancelPaymentResultModal = 'batchCreate_cancelPaymentResult_modal',
  batchCreateCancelPaymentResultModalCloseButton = 'batchCreate_cancelPaymentResult_modal_close_button',
  batchCreateCancelPaymentResultModalCloseIcon = 'batchCreate_cancelPaymentResult_modal_close_icon',
  batchCreateCancelPaymentResultModalHeader = 'batchCreate_cancelPaymentResult_modal_header',
  batchCreateCancelPaymentResultModalSuccessCheckIcon = 'batchCreate_cancelPaymentResult_modal_successCheck_icon',
  batchCreateCancelPaymentResultModalText = 'batchCreate_cancelPaymentResult_modal_text',

  batchCreateFailedToResolveExceptionModal = 'batchCreate_failedToResolveException_modal',
  batchCreateFailedToResolveExceptionModalCloseButton = 'batchCreate_failedToResolveException_modal_close_button',
  batchCreateFailedToResolveExceptionModalCloseIcon = 'batchCreate_failedToResolveException_modal_close_icon',
  batchCreateFailedToResolveExceptionModalHeader = 'batchCreate_failedToResolveException_modal_header',
  batchCreateFailedToResolveExceptionModalSuccessCheckIcon = 'batchCreate_failedToResolveException_modal_successCheck_icon',
  batchCreateFailedToResolveExceptionModalText = 'batchCreate_failedToResolveException_modal_text',

  batchCreateVendorUpdateResultModal = 'batchCreate_vendorUpdateResult_modal',
  batchCreateVendorUpdateResultModalCloseButton = 'batchCreate_vendorUpdateResult_modal_close_button',
  batchCreateVendorUpdateResultModalCloseIcon = 'batchCreate_vendorUpdateResult_modal_close_icon',
  batchCreateVendorUpdateResultModalHeader = 'batchCreate_vendorUpdateResult_modal_header',
  batchCreateVendorUpdateResultModalSuccessCheckIcon = 'batchCreate_vendorUpdateResult_modal_successCheck_icon',
  batchCreateVendorUpdateResultModalText = 'batchCreate_vendorUpdateResult_modal_text',
}

/** 🔆 PXR Payment Details Page 🔆 */

export enum pxrPaymentDetailsDetailGridStackDetails {
  pxrPaymentDetailsDetailGrid = 'pxr_paymentDetails_detailGrid',
  pxrPaymentDetailsDetailGridCheckNumberLabel = 'pxr_paymentDetails_detailGrid_checkNumber_label',
  pxrPaymentDetailsDetailGridCheckNumberValue = 'pxr_paymentDetails_detailGrid_checkNumber_value',
  pxrPaymentDetailsDetailGridClientNameLabel = 'pxr_paymentDetails_detailGrid_clientName_label',
  pxrPaymentDetailsDetailGridClientNameValue = 'pxr_paymentDetails_detailGrid_clientName_value',
  pxrPaymentDetailsDetailGridDateCreatedLabel = 'pxr_paymentDetails_detailGrid_dateCreated_label',
  pxrPaymentDetailsDetailGridDateCreatedValue = 'pxr_paymentDetails_detailGrid_dateCreated_value',
  pxrPaymentDetailsDetailGridPatientAddressLabel = 'pxr_paymentDetails_detailGrid_patientAddress_label',
  pxrPaymentDetailsDetailGridPatientAddressValue = 'pxr_paymentDetails_detailGrid_patientAddress_value',
  pxrPaymentDetailsDetailGridPatientIdLabel = 'pxr_paymentDetails_detailGrid_patientId_label',
  pxrPaymentDetailsDetailGridPatientIdValue = 'pxr_paymentDetails_detailGrid_patientId_value',
  pxrPaymentDetailsDetailGridPatientNameLabel = 'pxr_paymentDetails_detailGrid_patientName_label',
  pxrPaymentDetailsDetailGridPatientNameValue = 'pxr_paymentDetails_detailGrid_patientName_value',
  pxrPaymentDetailsDetailGridPaymentMethodLabel = 'pxr_paymentDetails_detailGrid_paymentMethod_label',
  pxrPaymentDetailsDetailGridPaymentMethodValue = 'pxr_paymentDetails_detailGrid_paymentMethod_value',
  pxrPaymentDetailsDetailGridPmgVendorIdLabel = 'pxr_paymentDetails_detailGrid_pmgVendorId_label',
  pxrPaymentDetailsDetailGridPmgVendorIdValue = 'pxr_paymentDetails_detailGrid_pmgVendorId_value',
  pxrPaymentDetailsDetailGridStatusLabel = 'pxr_paymentDetails_detailGrid_status_label',
  pxrPaymentDetailsDetailGridStatusValue = 'pxr_paymentDetails_detailGrid_status_value',
}

/** 🔆 PXR Batch Details Page 🔆 */

export enum pxrBatchDetailsDetailGridStackDetails {
  pxrBatchDetailsDetailGridBatchStatusLabel = 'pxr_batchDetails_detailGrid_batchStatus_label',
  pxrBatchDetailsDetailGridBatchStatusValue = 'pxr_batchDetails_detailGrid_batchStatus_value',
  pxrBatchDetailsDetailGridClientNameLabel = 'pxr_batchDetails_detailGrid_clientName_label',
  pxrBatchDetailsDetailGridClientNameValue = 'pxr_batchDetails_detailGrid_clientName_value',
  pxrBatchDetailsDetailGridDateStartedLabel = 'pxr_batchDetails_detailGrid_dateStarted_label',
  pxrBatchDetailsDetailGridDateStartedValue = 'pxr_batchDetails_detailGrid_dateStarted_value',
  pxrBatchDetailsDetailGridPaymentCountLabel = 'pxr_batchDetails_detailGrid_paymentCount_label',
  pxrBatchDetailsDetailGridPaymentCountValue = 'pxr_batchDetails_detailGrid_paymentCount_value',
  pxrBatchDetailsDetailGridUserInitiatedLabel = 'pxr_batchDetails_detailGrid_userInitiated_label',
  pxrBatchDetailsDetailGridUserInitiatedValue = 'pxr_batchDetails_detailGrid_userInitiated_value',
}

/** 🔆 PXR Import Details Page 🔆 */

export enum pxrImportDetailsCancelImportResultModal {
  pxrImportDetailsCancelImportResultModal = 'pxr_importDetails_cancelImportResult_modal',
  pxrImportDetailsCancelImportResultModalCloseButton = 'pxr_importDetails_cancelImportResult_modal_close_button',
  pxrImportDetailsCancelImportResultModalCloseIcon = 'pxr_importDetails_cancelImportResult_modal_close_icon',
  pxrImportDetailsCancelImportResultModalHeader = 'pxr_importDetails_cancelImportResult_modal_header',
  pxrImportDetailsCancelImportResultModalSuccessCheckIcon = 'pxr_importDetails_cancelImportResult_modal_successCheck_icon',
  pxrImportDetailsCancelImportResultModalText = 'pxr_importDetails_cancelImportResult_modal_text',
}

export enum pxrImportDetailsConfirmPaymentImportModal {
  pxrImportDetailsConfirmPaymentImportModal = 'pxr_importDetails_confirmPaymentImport_modal',
  pxrImportDetailsConfirmPaymentImportModalCloseIcon = 'pxr_importDetails_confirmPaymentImport_modal_closeIcon_button',
  pxrImportDetailsConfirmPaymentImportModalFilename = 'pxr_importDetails_confirmPaymentImport_modal_filename',
  pxrImportDetailsConfirmPaymentImportModalHeader = 'pxr_importDetails_confirmPaymentImport_modal_header',
  pxrImportDetailsConfirmPaymentImportModalNoButton = 'pxr_importDetails_confirmPaymentImport_modal_no_button',
  pxrImportDetailsConfirmPaymentImportModalText = 'pxr_importDetails_confirmPaymentImport_modal_text',
  pxrImportDetailsConfirmPaymentImportModalYesButton = 'pxr_importDetails_confirmPaymentImport_modal_yes_button',
}

export enum pxrImportDetailsCancelImportModal {
  pxrImportDetailsCancelImportModal = 'pxr_importDetails_cancelImport_modal',
  pxrImportDetailsCancelImportModalCloseIcon = 'pxr_importDetails_cancelImport_modal_closeIcon_button',
  pxrImportDetailsCancelImportModalHeader = 'pxr_importDetails_cancelImport_modal_header',
  pxrImportDetailsCancelImportModalImportId = 'pxr_importDetails_cancelImport_modal_importId',
  pxrImportDetailsCancelImportModalNoButton = 'pxr_importDetails_cancelImport_modal_no_button',
  pxrImportDetailsCancelImportModalText = 'pxr_importDetails_cancelImport_modal_text',
  pxrImportDetailsCancelImportModalYesButton = 'pxr_importDetails_cancelImport_modal_yes_button',
}

/** 🟠 Below this point, ids are pending refactor 🟠 */

/** Shared Components */

/**
 * Dynamically creates ids for elements in
 * ui/app/route-components/batch/details/cancelBatchModal.tsx.
 * Will prepend `pxr_` as specified by the boolean.
 * @example
 * 'batchDetails_cancelBatch_modal' // isPxr = false
 * 'pxr_batchDetails_cancelBatch_modal' // isPxr = true
 */
export const batchDetailsCancelBatchModal = (isPxr: boolean) => {
  const prefix = isPxr ? 'pxr_' : ''
  return {
    closeIcon: `${prefix}batchDetails_cancelBatch_modal_closeIcon_button`,
    header: `${prefix}batchDetails_cancelBatch_modal_header`,
    modal: `${prefix}batchDetails_cancelBatch_modal`,
    noButton: `${prefix}batchDetails_cancelBatch_modal_no_button`,
    text: `${prefix}batchDetails_cancelBatch_modal_text`,
    yesButton: `${prefix}batchDetails_cancelBatch_modal_yes_button`,
  }
}

/**
 * Dynamically creates ids for elements shared in common in PA and PXR import payments.
 * - \<InProgressImport />
 * - \<CompletedImport />
 * - \<CancelPaymentImportModal />
 * - \<ApprovePaymentImportModal />
 * - \<ApproveAllPaymentsImportModal />
 *
 * Will prepend `pxr_` as specified by the boolean.
 */
export const importPaymentsSharedComponents = (isPxr: boolean) => {
  const prefix = isPxr ? 'pxr_' : ''
  return {
    // <ApproveAllPaymentsImportModal />
    approveAllPaymentImportsModal: `${prefix}importPayments_approveAllPaymentImports_modal`,

    approveAllPaymentImportsModalCloseIcon: `${prefix}importPayments_approveAllPaymentImports_modal_closeIcon_button`,

    approveAllPaymentImportsModalConfirmButton: `${prefix}importPayments_approveAllPaymentImports_modal_confirm_button`,

    approveAllPaymentImportsModalConfirmCreateButton: `${prefix}importPayments_approveAllPaymentImports_modal_confirmCreate_button`,

    approveAllPaymentImportsModalHeader: `${prefix}importPayments_approveAllPaymentImports_modal_header`,

    approveAllPaymentImportsModalText: `${prefix}importPayments_approveAllPaymentImports_modal_text`,

    // <CancelPaymentImportModal />
    cancelPaymentImportModal: `${prefix}importPayments_cancelPaymentImport_modal`,

    cancelPaymentImportModalCloseIcon: `${prefix}importPayments_cancelPaymentImport_modal_closeIcon_button`,

    cancelPaymentImportModalHeader: `${prefix}importPayments_cancelPaymentImport_modal_header`,

    cancelPaymentImportModalNoButton: `${prefix}importPayments_cancelPaymentImport_modal_no_button`,

    cancelPaymentImportModalText: `${prefix}importPayments_cancelPaymentImport_modal_text`,

    cancelPaymentImportModalYesButton: `${prefix}importPayments_cancelPaymentImport_modal_yes_button`,

    completeFailImportCardIcon: `${prefix}importPayments_complete_fail_importCard_icon`,

    completeFailImportCardRetryButton: `${prefix}importPayments_complete_fail_importCard_retry_button`,

    // <CompletedImport />
    completeImportCard: `${prefix}importPayments_complete_importCard`,

    completeImportCardFilename: `${prefix}importPayments_complete_importCard_filename`,

    completeSuccessImportCardIcon: `${prefix}importPayments_complete_success_importCard_icon`,

    completeSuccessImportCardSuccessMessage: `${prefix}importPayments_complete_success_importCard_success_message`,

    // <ApprovePaymentImportModal />
    confirmPaymentImportModal: `${prefix}importPayments_confirmPaymentImport_modal`,

    confirmPaymentImportModalCloseIcon: `${prefix}importPayments_confirmPaymentImport_modal_closeIcon_button`,

    confirmPaymentImportModalConfirmButton: `${prefix}importPayments_confirmPaymentImport_modal_confirm_button`,

    confirmPaymentImportModalConfirmCreateButton: `${prefix}importPayments_confirmPaymentImport_modal_confirmCreate_button`,

    confirmPaymentImportModalHeader: `${prefix}importPayments_confirmPaymentImport_modal_header`,

    confirmPaymentImportModalText: `${prefix}importPayments_confirmPaymentImport_modal_text`,
    // <InProgressImport />
    inProgressImportCardFilename: `${prefix}importPayments_inProgress_importCard_filename`,
    inProgressImportCardProgressBar: `${prefix}importPayments_inProgress_importCard_progressBar`,
    inProgressImportCardStatus: `${prefix}importPayments_inProgress_importCard_status`,
  }
}

/**
 * Vendors page
 */
export enum vendors {
  addNewVendorButton = '[data-testid="vendors_addNewVendor_button"]',
  countLabel = '[data-testid="vendors_count_label"]',
  countValue = '[data-testid="vendors_count_value"]',
  filterActiveFilterTag = 'vendors_filter_activeFilterTag',
  filterActiveFilterTagClearIcon = 'vendors_filter_activeFilterTag_clear_icon',
  filterActiveFilterTagText = 'vendors_filter_activeFilterTag_text',
  filterButton = '[data-testid="vendors_filter_button"]',
  filterSelectedFiltersCount = '[data-testid="vendors_filter_selectedFiltersCount"]',
  header = '[data-testid="vendors_header"]',
  searchField = 'vendors_search_field',
  searchFieldClearIcon = 'vendors_search_field_clear_icon',
  searchFieldError = 'vendors_search_field_error',
  searchFieldInput = '[data-testid="vendors_search_field_input"]',
  searchFieldSearchIcon = 'vendors_search_field_search_icon',
  vendorsCreateVendorResultModal = 'vendors_createVendor_result_modal',
  vendorsCreateVendorResultModalCloseButton = '[data-testid="vendors_createVendor_result_modal_close_button"]',
  vendorsCreateVendorResultModalCloseIcon = 'vendors_createVendor_result_modal_close_icon',
  vendorsCreateVendorResultModalHeader = 'vendors_createVendor_result_modal_header',
  vendorsCreateVendorResultModalSuccessCheckIcon = 'vendors_createVendor_result_modal_successCheck_icon',
  vendorsCreateVendorResultModalText = 'vendors_createVendor_result_modal_text',
  vendorsOfacWarningModalCloseBtn = 'vendors_Ofac_Warning_Modal_Close_Btn',
  vendorsOfacWarningModalCloseIcon = 'vendors_Ofac_Warning_Modal_Close_Icon',
  vendorsOfacWarningModalHeader = 'vendors_Ofac_Warning_Modal_Header',
  vendorsOfacWarningModalModal = 'vendors_Ofac_Warning_Modal_Modal',
  vendorsOfacWarningModalText = 'vendors_Ofac_Warning_Modal_Text',
  vendorsUpdateVendorResultModal = 'vendors_updateVendor_result_modal',
  vendorsUpdateVendorResultModalCloseButton = 'vendors_updateVendor_result_modal_close_button',
  vendorsUpdateVendorResultModalCloseIcon = 'vendors_updateVendor_result_modal_close_icon',
  vendorsUpdateVendorResultModalHeader = 'vendors_updateVendor_result_modal_header',
  vendorsUpdateVendorResultModalSuccessCheckIcon = 'vendors_updateVendor_result_modal_successCheck_icon',
  vendorsUpdateVendorResultModalText = 'vendors_updateVendor_result_modal_text',
  vendorsActiveFilterTagLabelAfterApply = '[data-testid="vendors_filter_activeFilterTag_Active"]',
  vendorsInActiveFilterTagLabelAfterApply = '[data-testid="vendors_filter_activeFilterTag_Inactive"]',
  vendorsStatusOfacHoldTagLabelAfterApply = '[data-testid="vendors_filter_activeFilterTag_OFAC Hold"]',
  vendorStatusInGrid = '[title="Inactive"]',
  vendorNameInGrid = '.text-datagrid-link',
  vendorStatusInGridActive = '[data-field="statusname"] > .MuiDataGrid-cellContent',
  vendorPaginationArrow = '.MuiTablePagination-actions > [tabindex="0"]',
}

export enum vendorsAddNewVendorModal {
  addNewVendorModal = 'vendors_addNewVendorModal',
  cancelButton = 'vendors_addNewVendorModal_cancel_button',
  closeIconButton = 'vendors_addNewVendorModal_close_icon_button',
  header = '[data-testid="vendors_addNewVendorModal_header"]',
  saveButton = '[data-testid="vendors_addNewVendorModal_save_button"]',
}

export enum vendorsAddNewVendorModalNewVendor {
  internalVendorIdField = 'vendors_addNewVendorModal_newVendor_internalVendorId_field',
  internalVendorIdFieldInput = '[data-testid="vendors_addNewVendorModal_newVendor_internalVendorId_field_input"]',
  internalVendorIdFieldLabel = 'vendors_addNewVendorModal_newVendor_internalVendorId_field_label',
  newVendorHeader = '[data-testid="vendors_addNewVendorModal_newVendor_header"]',
  vendorNameField = 'vendors_addNewVendorModal_newVendor_vendorName_field',
  vendorNameField_Input = '[data-testid="vendors_addNewVendorModal_newVendor_vendorName_field_input"]',
  vendorNameFieldLabel = 'vendors_addNewVendorModal_newVendor_vendorName_field_label',
  vendorTypeDdField = 'vendors_addNewVendorModal_newVendor_vendorType_dd',
  vendorTypeDdFieldLabel = 'vendors_addNewVendorModal_newVendor_vendorType_dd_label',
  vendorTypeDdFieldMenuItem = 'vendors_addNewVendorModal_newVendor_vendorType_ddOption',
}

export enum vendorsAddNewVendorModalMailingAddress {
  addressField = 'vendors_addNewVendorModal_mailingAddress_address_field',
  addressInput = '[data-testid="vendors_addNewVendorModal_mailingAddress_address_input"]',
  addressLabel = 'vendors_addNewVendorModal_mailingAddress_address_label',
  addressTwoField = 'vendors_addNewVendorModal_mailingAddress_addressTwo_field',
  addressTwoInput = 'vendors_addNewVendorModal_mailingAddress_addressTwo_input',
  addressTwoLabel = 'vendors_addNewVendorModal_mailingAddress_addressTwo_label',
  attentionLineField = 'vendors_addNewVendorModal_mailingAddress_attentionLine_field',
  attentionLineInput = 'vendors_addNewVendorModal_mailingAddress_attentionLine_input',
  attentionLineLabel = 'vendors_addNewVendorModal_mailingAddress_attentionLine_label',
  cityField = 'vendors_addNewVendorModal_mailingAddress_city_field',
  cityInput = '[data-testid="vendors_addNewVendorModal_mailingAddress_city_input"]',
  cityLabel = 'vendors_addNewVendorModal_mailingAddress_city_label',
  countryField = 'vendors_addNewVendorModal_mailingAddress_country_field',
  countryInput = 'vendors_addNewVendorModal_mailingAddress_country_input',
  countryLabel = 'vendors_addNewVendorModal_mailingAddress_country_label',
  mailingAddressDomesticText = 'vendors_addNewVendorModal_mailingAddress_domesticText',
  mailingAddressHeader = 'vendors_addNewVendorModal_mailingAddress_header',
  stateAutocompleteField = 'vendors_addNewVendorModal_mailingAddress_state_autocomplete_field',
  stateAutocompleteFieldIcon = 'vendors_addNewVendorModal_mailingAddress_state_autocomplete_icon',
  stateAutocompleteFieldInput = '[data-testid="vendors_addNewVendorModal_mailingAddress_state_autocomplete_input"]',
  stateAutocompleteFieldLabel = 'vendors_addNewVendorModal_mailingAddress_state_autocomplete_label',
  stateAutocompleteFieldMenuItem = 'vendors_addNewVendorModal_mailingAddress_state_autocomplete_menu_item',
  zipField = 'vendors_addNewVendorModal_mailingAddress_zip_field',
  zipInput = '[data-testid="vendors_addNewVendorModal_mailingAddress_zip_input"]',
  zipLabel = 'vendors_addNewVendorModal_mailingAddress_zip_label',
}

export enum vendorsAddNewVendorModalPaymentSpecs {
  accountNumberField = 'vendors_addNewVendorModal_paymentSpecs_accountNumber_field',
  accountNumberInput = 'vendors_addNewVendorModal_paymentSpecs_accountNumber_input',
  accountNumberLabel = 'vendors_addNewVendorModal_paymentSpecs_accountNumber_label',
  payeeEmailField = 'vendors_addNewVendorModal_paymentSpecs_payeeEmail_field',
  payeeEmailInput = '[data-testid="vendors_addNewVendorModal_paymentSpecs_payeeEmail_input"]',
  payeeEmailLabel = 'vendors_addNewVendorModal_paymentSpecs_payeeEmail_label',
  payeeNameField = 'vendors_addNewVendorModal_paymentSpecs_payeeName_field',
  payeeNameInput = 'vendors_addNewVendorModal_paymentSpecs_payeeName_input',
  payeeNameLabel = 'vendors_addNewVendorModal_paymentSpecs_payeeName_label',
  payeeTelephoneExtField = 'vendors_addNewVendorModal_paymentSpecs_payeeTelephoneExt_field',
  payeeTelephoneExtInput = 'vendors_addNewVendorModal_paymentSpecs_payeeTelephoneExt_input',
  payeeTelephoneExtLabel = 'vendors_addNewVendorModal_paymentSpecs_payeeTelephoneExt_label',
  payeeTelephoneField = 'vendors_addNewVendorModal_paymentSpecs_payeeTelephone_field',
  payeeTelephoneInput = '[data-testid="vendors_addNewVendorModal_paymentSpecs_payeeTelephone_input"]',
  payeeTelephoneLabel = 'vendors_addNewVendorModal_paymentSpecs_payeeTelephone_label',
  payeeTelephonePrefix = 'vendors_addNewVendorModal_paymentSpecs_payeeTelephone_prefix',
  paymentSpecsHeader = 'vendors_addNewVendorModal_paymentSpecs_header',
}

export enum vendorsFilterDrawer {
  applyFilterButton = '[data-testid="vendors_filterDrawer_applyFilter_button"]',
  clearAllButton = '[data-testid="vendors_filterDrawer_clearAll_button"]',
  closeIcon = '[data-testid="vendors_filterDrawer_close_icon"]',
  filterDrawer = '[data-testid="vendors_filterDrawer"]',
  header = '[data-testid="vendors_filterDrawer_header"]',
  vendorFilterStatusActiveCheckbox = '[data-testid="vendors_filterDrawer_vendorFilter_status_active_checkbox"]>input',
  vendorFilterStatusActiveCheckboxLabel = '[data-testid="vendors_filterDrawer_vendorFilter_status_active_checkbox_label"]',
  vendorFilterStatusInactiveCheckbox = '[data-testid="vendors_filterDrawer_vendorFilter_status_inactive_checkbox"]>input',
  vendorFilterStatusInactiveCheckboxLabel = '[data-testid="vendors_filterDrawer_vendorFilter_status_inactive_checkbox_label"]',
  vendorFilterStatusLabel = '[data-testid="vendors_filterDrawer_vendorFilter_status_label"]',
  vendorFilterStatusOfacHoldCheckbox = '[data-testid="vendors_filterDrawer_vendorFilter_status_ofacHold_checkbox"]>input',
  vendorFilterStatusOfacHoldCheckboxLabel = '[data-testid="vendors_filterDrawer_vendorFilter_status_ofacHold_checkbox_label"]',
}

export enum vendorsGrid {
  accountNumberColumn = 'vendors_grid_accountNumber_column',
  accountNumberRow = 'vendors_grid_accountNumber_row',
  emailAddressColumn = 'vendors_grid_emailAddress_column',
  emailAddressRow = 'vendors_grid_emailAddress_row',
  grid = 'vendors_grid',
  gridNoResultsMessage = 'vendors_grid_noResultsMessage',
  internalIdColumn = 'vendors_grid_internalId_column',
  internalIdRow = 'vendors_grid_internalId_row',
  // Not in use, pending investigation into possibilities for customizing these elements
  paginationLabel = 'vendors_grid_pagination_label',
  paginationNextLink = 'vendors_grid_pagination_next_link',
  paginationPreviousLink = 'vendors_grid_pagination_previous_link',
  paymerangIdColumn = 'vendors_grid_paymerangId_column',
  paymerangIdRow = 'vendors_grid_paymerangId_row',
  statusColumn = 'vendors_grid_status_column',
  statusRow = 'vendors_grid_status_row',
  // Nested column/row TBD
  toggleColumn = 'vendors_grid_toggle_column',
  toggleRow = 'vendors_grid_toggle_row',
  vendorNameColumn = 'vendors_grid_vendorName_column',
  vendorNameRow = 'vendors_grid_vendorName_row',
  vendorGridColumnsHeading = '.MuiDataGrid-columnHeaderTitle',
  vendorGridRightArrowButton = '[data-testid="KeyboardArrowRightIcon"]',
  vendorGridInternalId = '[data-field="internalid"] > .MuiDataGrid-cellContent',
  vendorGridContactEmailId = '[data-field="contactemail"] > .MuiDataGrid-cellContent',
  vendorGridStatus = '[data-field="statusname"] > .MuiDataGrid-cellContent',
  vendorGridAddess1 = '[data-field="address"] > .MuiDataGrid-cellContent',
  VendorGridCity = '[data-field="city"] > .MuiDataGrid-cellContent',
  VendorGridState = '[data-field="state"] > .MuiDataGrid-cellContent',
  VendorGridZip = '[data-field="zip"] > .MuiDataGrid-cellContent',
  vendorsGridPhone = '[data-field="telephone"] > .MuiDataGrid-cellContent',
  vendorsGridPageCountValue = '.MuiTablePagination-displayedRows',
}

export enum vendorsGridNestedGrid {
  addressColumn = 'vendors_grid_nestedGrid_address_column',
  addressRow = 'vendors_grid_nestedGrid_address_row',
  cityColumn = 'vendors_grid_nestedGrid_city_column',
  cityRow = 'vendors_grid_nestedGrid_city_row',
  nestedGrid = 'vendors_grid_nestedGrid',
  nestedGridNoResultsMessage = 'vendors_grid_nestedGrid_noResultsMessage',
  payeeColumn = 'vendors_grid_nestedGrid_payee_column',
  payeeRow = 'vendors_grid_nestedGrid_payee_row',
  stateColumn = 'vendors_grid_nestedGrid_state_column',
  stateRow = 'vendors_grid_nestedGrid_state_row',
  telephoneColumn = 'vendors_grid_nestedGrid_telephone_column',
  telephoneRow = 'vendors_grid_nestedGrid_telephone_row',
  zipColumn = 'vendors_grid_nestedGrid_zip_column',
  zipRow = 'vendors_grid_nestedGrid_zip_row',
}

/**
 * Import Payments page
 */
export enum importPayments {
  dropBox = 'importPayments_dropBox',
  dropBoxDropHereText = 'importPayments_dropBox_dropHere_text',
  dropBoxInput = 'importPayments_dropBox_input',
  dropBoxInvalidImportError = 'importPayments_dropBox_invalidImport_error',
  dropBoxInvalidImportErrorFilename = 'importPayments_dropBox_invalidImport_error_filename',
  dropBoxInvalidImportErrorReason = 'importPayments_dropBox_invalidImport_error_reason',
  dropBoxUploadButton = 'importPayments_dropBox_upload_button',
  header = 'importPayments_header',
  importPaymentsCancelledPaymentImportModal = 'importPayments_cancelledPaymentImport_modal',
  importPaymentsCancelledPaymentImportModalCloseButton = 'importPayments_cancelledPaymentImport_modal_close_button',
  importPaymentsCancelledPaymentImportModalCloseIcon = 'importPayments_cancelledPaymentImport_modal_close_icon',
  importPaymentsCancelledPaymentImportModalHeader = 'importPayments_cancelledPaymentImport_modal_header',
  importPaymentsCancelledPaymentImportModalSuccessCheckIcon = 'importPayments_cancelledPaymentImport_modal_successCheck_icon',

  importPaymentsCancelledPaymentImportModalText = 'importPayments_cancelledPaymentImport_modal_text',
  importPaymentsConfirmedImportModal = 'importPayments_confirmedImport_modal',
  importPaymentsConfirmedImportModalCloseButton = 'importPayments_confirmedImport_modal_close_button',
  importPaymentsConfirmedImportModalCloseIcon = 'importPayments_confirmedImport_modal_close_icon',
  importPaymentsConfirmedImportModalHeader = 'importPayments_confirmedImport_modal_header',
  importPaymentsConfirmedImportModalSuccessCheckIcon = 'importPayments_confirmedImport_modal_successCheck_icon',

  importPaymentsConfirmedImportModalText = 'importPayments_confirmedImport_modal_text',
  // Modals
  importPaymentsFailedImportModal = 'importPayments_failedImport_modal',
  importPaymentsFailedImportModalCloseButton = 'importPayments_failedImport_modal_close_button',
  importPaymentsFailedImportModalCloseIcon = 'importPayments_failedImport_modal_close_icon',
  importPaymentsFailedImportModalHeader = 'importPayments_failedImport_modal_header',
  importPaymentsFailedImportModalSuccessCheckIcon = 'importPayments_failedImport_modal_successCheck_icon',

  importPaymentsFailedImportModalText = 'importPayments_failedImport_modal_text',
  importedFilesConfirmAllImportsButton = 'importPayments_importedFiles_confirmAllImports_button',
  importedFilesHeader = 'importPayments_importedFiles_header',
  importedFilesNoImportsText = 'importPayments_importedFiles_noImports_text',
  importedFilesSubheader = 'importPayments_importedFiles_subheader',
  importedFilesSubheaderNumberOfImports = 'importPayments_importedFiles_subheader_numberOfImports',
  importPaymentsImportPayment = 'input[type=file]',
  importPaymentsSuccessMessage = '[data-testid*="importPayments_complete_success_importCard_success_message"]',
}

export enum importPaymentsImportedFilesCard {
  card = 'importPayments_importedFiles_card',
  cardCancelImportButton = 'importPayments_importedFiles_card_cancelImport_button',
  cardConfirmImportButton = 'importPayments_importedFiles_card_confirmImport_button',
  cardFilename = 'importPayments_importedFiles_card_filename',
  cardImportTotal = 'importPayments_importedFiles_card_import_total',
  cardLoadingSpinner = 'importPayments_importedFiles_card_loading_spinner',
  cardPaymentsCount = 'importPayments_importedFiles_card_payments_count',
  cardStatus = 'importPayments_importedFiles_card_status',
  cardUserEmail = 'importPayments_importedFiles_card_userEmail',
  cardViewImportDetailsLink = 'importPayments_importedFiles_card_viewImportDetails_link',
}

/**
 * Key-In Payments Page
 */
export enum keyInPayments {
  addNewPaymentButton = 'p[data-testid="keyInPayments_addNewPayment_button"]',
  cancelKIPButton = 'keyInPayments_cancelKeyedInPayments_button',
  confirmKIPButton = 'button[data-testid="keyInPayments_confirmKeyedInPayments_button"]',
  keyInPaymentsHeader = 'h1[data-testid="keyInPayments_header"]',
  keyInPaymentsPaymentConfirmationFailedModal = 'keyInPayments_paymentConfirmationFailed_modal',
  keyInPaymentsPaymentConfirmationFailedModalCloseButton = 'keyInPayments_paymentConfirmationFailed_modal_close_button',
  keyInPaymentsPaymentConfirmationFailedModalCloseIcon = 'keyInPayments_paymentConfirmationFailed_modal_close_icon',
  keyInPaymentsPaymentConfirmationFailedModalHeader = 'keyInPayments_paymentConfirmationFailed_modal_header',
  keyInPaymentsPaymentConfirmationFailedModalSuccessCheckIcon = 'keyInPayments_paymentConfirmationFailed_modal_successCheck_icon',
  keyInPaymentsPaymentConfirmationFailedModalText = 'keyInPayments_paymentConfirmationFailed_modal_text',
  pendingKeyedInPaymentsHeader = '[data-testid = "keyInPayments_pendingKeyedInPayments_header"]',
}

export enum keyInPaymentsPendingKeyedInPaymentsGrid {
  actionButton = 'keyInPayments_pendingKeyedInPayments_grid_action_button',
  actionColumn = '[data-testid = "keyInPayments_pendingKeyedInPayments_grid_action_column"]',
  actionDeleteMenuItem = 'keyInPayments_pendingKeyedInPayments_grid_action_delete_menuItem',
  actionEditMenuItem = 'keyInPayments_pendingKeyedInPayments_grid_action_edit_menuItem',
  actionMenu = 'keyInPayments_pendingKeyedInPayments_grid_action_menu',
  actionRow = '[data-field="action"] > span',
  divisionIdColumn = '[data-testid = "keyInPayments_pendingKeyedInPayments_grid_divisionId_column"]',
  divisionIdRow = '[data-field="divisionId"] > span',
  grid = 'keyInPayments_pendingKeyedInPayments_grid',
  noResultsMessage = 'keyInPayments_pendingKeyedInPayments_grid_noResultsMessage',
  paymentAmountColumn = '[data-testid = "keyInPayments_pendingKeyedInPayments_grid_paymentAmount_column"]',
  paymentAmountRow = '[data-field="paymentamount"] > span',
  paymentIdColumn = '[data-testid ="keyInPayments_pendingKeyedInPayments_grid_paymentId_column"]',
  paymentIdRow = '[data-field="paymentid"] > span',
  payorNameColumn = '[data-testid="keyInPayments_pendingKeyedInPayments_grid_payorName_column"]',
  payorNameRow = 'keyInPayments_pendingKeyedInPayments_grid_payorName_row',
  // Nested column header ids TBD
  toggleColumn = '[data-testid ="keyInPayments_pendingKeyedInPayments_grid_toggle_column"]',
  toggleRow = 'keyInPayments_pendingKeyedInPayments_grid_toggle_row',
  vendorColumn = '[data-testid="keyInPayments_pendingKeyedInPayments_grid_vendor_column"]',
  vendorRow = '[data-field="vendor"] > span',
}

export enum keyInPaymentsAddNewPaymentModal {
  addPaymentAndInvoiceButton = 'button[data-testid="keyInPayments_addNewPayment_modal_addPaymentAndInvoice_button"]',
  cancelButton = 'keyInPayments_addNewPayment_modal_cancel_button',
  closeIconButton = 'keyInPayments_addNewPayment_modal_close_icon_button',
  header = 'keyInPayments_addNewPayment_modal_header',
  modal = 'keyInPayments_addNewPayment_modal',
  vendorDropDown = 'div[aria-label="Search and select a vendor"] input',
  paymentAmountText = 'input[placeholder="Payment Amount"]',
  internalPaymentIdText = 'input[placeholder="Internal Payment ID"]',
  internalDivisionIdText = 'input[placeholder="Internal Division ID"]',
}

/**
 * Dynamically creates ids for the input elements in the Payment Details
 * section of the add or edit modals in Key-In Payments.  Specify the type
 * to generate the correct id.
 */
export const keyInPaymentsAddOrEditNewPaymentModalPaymentDetails = (type: 'add' | 'edit') => {
  return {
    header: `keyInPayments_${type}NewPayment_modal_paymentDetails_header`,
    internalDivisionIdField: `keyInPayments_${type}NewPayment_modal_paymentDetails_internalDivisionId_field`,
    internalDivisionIdFieldInput: `keyInPayments_${type}NewPayment_modal_paymentDetails_internalDivisionId_field_input`,
    internalDivisionIdFieldLabel: `keyInPayments_${type}NewPayment_modal_paymentDetails_internalDivisionId_field_label`,
    internalPaymentIdField: `keyInPayments_${type}NewPayment_modal_paymentDetails_internalPaymentId_field`,
    internalPaymentIdFieldInput: `keyInPayments_${type}NewPayment_modal_paymentDetails_internalPaymentId_field_input`,
    internalPaymentIdFieldLabel: `keyInPayments_${type}NewPayment_modal_paymentDetails_internalPaymentId_field_label`,
    paymentAmountField: `keyInPayments_${type}NewPayment_modal_paymentDetails_paymentAmount_field`,
    paymentAmountFieldInput: `keyInPayments_${type}NewPayment_modal_paymentDetails_paymentAmount_field_input`,
    paymentAmountFieldLabel: `keyInPayments_${type}NewPayment_modal_paymentDetails_paymentAmount_field_label`,
    payorInformationField: `keyInPayments_${type}NewPayment_modal_paymentDetails_payorInformation_field`,
    payorInformationFieldInput: `keyInPayments_${type}NewPayment_modal_paymentDetails_payorInformation_field_input`,
    payorInformationFieldLabel: `keyInPayments_${type}NewPayment_modal_paymentDetails_payorInformation_field_label`,
    payorNameField: `keyInPayments_${type}NewPayment_modal_paymentDetails_payorName_field`,
    payorNameFieldInput: `keyInPayments_${type}NewPayment_modal_paymentDetails_payorName_field_input`,
    payorNameFieldLabel: `keyInPayments_${type}NewPayment_modal_paymentDetails_payorName_field_label`,
    vendorAutocompleteField: `keyInPayments_${type}NewPayment_modal_paymentDetails_vendor_autocomplete_field`,
    vendorAutocompleteFieldIcon: `keyInPayments_${type}NewPayment_modal_paymentDetails_vendor_autocomplete_field_icon`,
    vendorAutocompleteFieldInput: `keyInPayments_${type}NewPayment_modal_paymentDetails_vendor_autocomplete_field_input`,
    vendorAutocompleteFieldLabel: `keyInPayments_${type}NewPayment_modal_paymentDetails_vendor_autocomplete_field_label`,
    vendorAutocompleteFieldMenuItem: `keyInPayments_${type}NewPayment_modal_paymentDetails_vendor_autocomplete_field_menu_item`,
  }
}

/**
 * Dynamically creates ids for the input elements in the New Invoice
 * section of the add or edit modals in Key-In Payments.  Specify the type
 * to generate the correct id.
 */
export const keyInPaymentsAddOrEditNewPaymentModalNewInvoice = (type: 'add' | 'edit') => {
  return {
    accountField: `keyInPayments_${type}NewPayment_modal_newInvoice_account_field`,
    accountFieldInput: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_account_field_input"]`,
    accountFieldLabel: `keyInPayments_${type}NewPayment_modal_newInvoice_account_field_label`,
    addNewInvoiceButton: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_addNewInvoice_button"]`,
    additionalChargesField: `keyInPayments_${type}NewPayment_modal_newInvoice_additionalCharges_field`,
    additionalChargesFieldInput: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_additionalCharges_field_input"]`,
    additionalChargesFieldLabel: `keyInPayments_${type}NewPayment_modal_newInvoice_additionalCharges_field_label`,
    currencyField: `keyInPayments_${type}NewPayment_modal_newInvoice_currency_field`,
    currencyFieldInput: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_currency_field_input"]`,
    currencyFieldLabel: `keyInPayments_${type}NewPayment_modal_newInvoice_currency_field_label`,
    descriptionField: `keyInPayments_${type}NewPayment_modal_newInvoice_description_field`,
    descriptionFieldInput: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_description_field_input"]`,
    descriptionFieldLabel: `keyInPayments_${type}NewPayment_modal_newInvoice_description_field_label`,
    discountField: `keyInPayments_${type}NewPayment_modal_newInvoice_discount_field`,
    discountFieldInput: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_discount_field_input"]`,
    discountFieldLabel: `keyInPayments_${type}NewPayment_modal_newInvoice_discount_field_label`,
    header: `keyInPayments_${type}NewPayment_modal_newInvoice_header`,
    invoiceCard: `keyInPayments_${type}NewPayment_modal_newInvoice_invoice_card`,
    invoiceCardDeleteButton: `keyInPayments_${type}NewPayment_modal_newInvoice_invoice_card _delete_button`,
    invoiceDatePicker: `keyInPayments_${type}NewPayment_modal_newInvoice_invoiceDate_picker`,
    invoiceDatePickerIcon: `keyInPayments_${type}NewPayment_modal_newInvoice_invoiceDate_picker_icon`,
    invoiceDatePickerInput: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_invoiceDate_picker_input"]`,
    invoiceDatePickerLabel: `keyInPayments_${type}NewPayment_modal_newInvoice_invoiceDate_picker_label`,
    invoiceDatePickerPopup: `keyInPayments_${type}NewPayment_modal_newInvoice_invoiceDate_picker_popup`,
    invoiceNumberField: `keyInPayments_${type}NewPayment_modal_newInvoice_invoiceNumber_field`,
    invoiceNumberFieldInput: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_invoiceNumber_field_input"]`,
    invoiceNumberFieldLabel: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_invoiceNumber_field_label"]`,
    netAmountField: `keyInPayments_${type}NewPayment_modal_newInvoice_netAmount_field`,
    netAmountFieldInput: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_netAmount_field_input"]`,
    netAmountFieldLabel: `keyInPayments_${type}NewPayment_modal_newInvoice_netAmount_field_label`,
    originalAmountField: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_originalAmount_field"]`,
    originalAmountFieldInput: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_originalAmount_field_input"]`,
    originalAmountFieldLabel: `keyInPayments_${type}NewPayment_modal_newInvoice_originalAmount_field_label`,
    paymentDatePicker: `keyInPayments_${type}NewPayment_modal_newInvoice_paymentDate_picker`,
    paymentDatePickerIcon: `keyInPayments_${type}NewPayment_modal_newInvoice_paymentDate_picker_icon`,
    paymentDatePickerInput: `[data-testid*="keyInPayments_${type}NewPayment_modal_newInvoice_paymentDate_picker_input"]`,
    paymentDatePickerLabel: `keyInPayments_${type}NewPayment_modal_newInvoice_paymentDate_picker_label`,
    paymentDatePickerPopup: `keyInPayments_${type}NewPayment_modal_newInvoice_paymentDate_picker_popup`,
  }
}

export enum keyInPaymentsCancelKeyedInPaymentsModal {
  closeIconButton = 'keyInPayments_cancelKeyedInPayments_modal_closeIcon_button',
  header = 'keyInPayments_cancelKeyedInPayments_modal_header',
  modal = 'keyInPayments_cancelKeyedInPayments_modal',
  noButton = 'keyInPayments_cancelKeyedInPayments_modal_no_button',
  text = 'keyInPayments_cancelKeyedInPayments_modal_text',
  yesButton = 'keyInPayments_cancelKeyedInPayments_modal_yes_button',
}

export enum keyInPaymentsConfirmKeyedInPaymentsModal {
  closeIconButton = 'keyInPayments_confirmKeyedInPayments_modal_closeIcon_button',
  header = 'keyInPayments_confirmKeyedInPayments_modal_header',
  modal = 'keyInPayments_confirmKeyedInPayments_modal',
  noButton = 'keyInPayments_confirmKeyedInPayments_modal_no_button',
  textMessage = 'h2:nth-child(2) ~ div > p',
  yesButton = 'h2:nth-child(2) ~ div > button:nth-child(2)',
}

export enum keyInPaymentsEditKeyedInPaymentModal {
  addPaymentAndInvoiceButton = 'keyInPayments_editKeyedInPayment_modal_addPaymentAndInvoice_button',
  cancelButton = 'keyInPayments_editKeyedInPayment_modal_cancel_button',
  closeIconButton = 'keyInPayments_editKeyedInPayment_modal_closeIcon_button',
  header = 'keyInPayments_editKeyedInPayment_modal_header',
  modal = 'keyInPayments_editKeyedInPayment_modal',
}

/**
 * Payment: Check Images
 * http://localhost:3000/payment/check-image/33748350
 * */
export enum paymentCheckImages {
  backHeader = 'payment_checkImages_back_header',
  backImage = 'payment_checkImages_back_image',
  downloadPdfButton = 'payment_checkImages_downloadPdf_button',
  frontHeader = 'payment_checkImages_front_header',
  frontImage = 'payment_checkImages_front_image',
  header = 'payment_checkImages_header',
  noDataMessage = 'payment_checkImages_noData_message',
}

/**
 * Payment details page
 */
export enum paymentDetailsPage {
  addAttachmentsButton = 'paymentDetails_addAttachments_button',
  addAttachmentsInput = 'paymentDetails_addAttachments_input',
  attachmentImportCompleteContainer = 'paymentDetails_attachmentImportComplete_container',
  attachmentImportCompleteFailIcon = 'paymentDetails_attachmentImportComplete_failIcon',
  attachmentImportCompleteFilename = 'paymentDetails_attachmentImportComplete_filename',
  attachmentImportCompleteMessage = 'paymentDetails_attachmentImportComplete_message',
  attachmentImportCompleteSuccessIcon = 'paymentDetails_attachmentImportComplete_successIcon',
  attachmentImportFailedMessage = 'paymentDetails_attachmentImportFailed_message',
  attachmentImportFailedMessageFilename = 'paymentDetails_attachmentImportFailed_message_filename',
  attachmentImportInProgressContainer = 'paymentDetails_attachmentImportInProgress_container',
  attachmentImportInProgressFilename = 'paymentDetails_attachmentImportInProgress_filename',
  attachmentImportInProgressProgressBar = 'paymentDetails_attachmentImportInProgress_progressBar',
  attachmentImportInProgressStatus = 'paymentDetails_attachmentImportInProgress_status',
  cancelPaymentButton = 'paymentDetails_cancelPayment_button',
  downloadExcelButton = 'paymentDetails_downloadExcel_button',
  downloadPdfButton = '[data-testid="paymentDetails_downloadPdf_button"]',
  goToBatchButton = 'paymentDetails_goToBatch_button',
  header = 'paymentDetails_header',
  paymentId = 'paymentDetails_paymentId',
  paymentIdLabel = 'paymentDetails_paymentId_label',
  totalAmount = 'paymentDetails_totalAmount',
  totalAmountLabel = 'paymentDetails_totalAmount_label',
}

export enum paymentDetailsInvoices {
  grid = 'paymentDetails_invoices_grid',
  gridAccountNumberColumn = 'paymentDetails_invoices_grid_accountNumber_column',
  gridAccountNumberRow = 'paymentDetails_invoices_grid_accountNumber_row',
  gridAdditionalAmountColumn = 'paymentDetails_invoices_grid_additionalAmount_column',
  gridAdditionalAmountRow = '[data-field="additionalcharges"] > .MuiDataGrid-cellContent',
  gridCurrencyColumn = 'paymentDetails_invoices_grid_currency_column',
  gridCurrencyRow = '[data-field="currency"] > .MuiDataGrid-cellContent',
  gridDescriptionColumn = 'paymentDetails_invoices_grid_description_column',
  gridDescriptionRow = '[data-field="description"] > .MuiDataGrid-cellContent',
  gridDiscountColumn = 'paymentDetails_invoices_grid_discount_column',
  gridDiscountAmountRow = '[data-field="discount"] > .MuiDataGrid-cellContent',
  gridInvoiceDateColumn = 'paymentDetails_invoices_grid_invoiceDate_column',
  gridInvoiceDateRow = '[data-field="invoicedate"] > .MuiDataGrid-cellContent',
  gridInvoiceNumberColumn = 'paymentDetails_invoices_grid_invoiceNumber_column',
  gridInvoiceNumberRow = '[data-field="invoicenumber"] > span',
  gridNetAmountColumn = 'paymentDetails_invoices_grid_netAmount_column',
  gridNetAmountRow = '[data-field="netinvoiceamount"] > .MuiDataGrid-cellContent',
  gridNoResultsMessage = 'paymentDetails_invoices_grid_noResultsMessage',
  gridOriginalAmountColumn = 'paymentDetails_invoices_grid_originalAmount_column',
  gridOriginalAmountRow = '[data-field="originalinvoiceamount"] > .MuiDataGrid-cellContent',
  gridPaginationCountPerPageDd = 'paymentDetails_invoices_grid_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  gridPaginationLabel = 'paymentDetails_invoices_grid_pagination_label',
  gridPaginationNextLink = 'paymentDetails_invoices_grid_pagination_next_link',
  gridPaginationPageCountLabel = 'paymentDetails_invoices_grid_pagination_pageCount_label',
  gridPaginationPreviousLink = 'paymentDetails_invoices_grid_pagination_previous_link',
  gridPayDateColumn = 'paymentDetails_invoices_grid_payDate_column',
  gridPayDateRow = '[data-field="paymentdate"] > .MuiDataGrid-cellContent',
  header = 'paymentDetails_invoices_header',
}

export enum paymentDetailsPaymentAttachments {
  grid = 'paymentDetails_paymentAttachments_grid',
  header = 'paymentDetails_paymentAttachments_header',
}

export enum paymentDetailsSettlementHistory {
  grid = 'paymentDetails_settlementHistory_grid',
  gridNoResultsMessage = 'paymentDetails_settlementHistory_grid_noResultsMessage',
  gridTotalRowsCount = 'paymentDetails_settlementHistory_grid_totalRows_count',
  // Not in use, pending investigation into possibilities for customizing these elements
  gridTotalRowsLabel = 'paymentDetails_settlementHistory_grid_totalRows_label',
  gridTransactionAmountColumn = 'paymentDetails_settlementHistory_grid_transactionAmount_column',
  gridTransactionAmountRow = 'paymentDetails_settlementHistory_grid_transactionAmount_row',
  gridTransactionDateColumn = 'paymentDetails_settlementHistory_grid_transactionDate_column',
  gridTransactionDateRow = 'paymentDetails_settlementHistory_grid_transactionDate_row',
  gridTransactionTypeColumn = 'paymentDetails_settlementHistory_grid_transactionType_column',
  gridTransactionTypeRow = 'paymentDetails_settlementHistory_grid_transactionType_row',
  header = 'paymentDetails_settlementHistory_header',
  viewCheckImageButton = 'paymentDetails_settlementHistory_viewCheckImage_button',
}

export enum paymentDetailsActivityHistory {
  grid = 'paymentDetails_activityHistory_grid',
  gridApprovalDateColumn = 'paymentDetails_activityHistory_grid_approvalDate_column',
  gridApprovalDateRow = 'paymentDetails_activityHistory_grid_approvalDate_row',
  gridApprovalLevelColumn = 'paymentDetails_activityHistory_grid_approvalLevel_column',
  gridApprovalLevelRow = 'paymentDetails_activityHistory_grid_approvalLevel_row',
  gridNoResultsMessage = 'paymentDetails_activityHistory_grid_noResultsMessage',
  gridUserEmailColumn = 'paymentDetails_activityHistory_grid_userEmail_column',
  gridUserEmailRow = 'paymentDetails_activityHistory_grid_userEmail_row',
  header = 'paymentDetails_activityHistory_header',
}

export enum paymentDetailsPaymentNotes {
  cardPaymentNotesContent = 'paymentDetails_paymentNotes_cardPaymentNotes_content',
  cardPaymentNotesHeader = 'paymentDetails_paymentNotes_cardPaymentNotes_header',
  generalNotesContent = 'paymentDetails_paymentNotes_generalNotes_content',
  generalNotesHeader = 'paymentDetails_paymentNotes_generalNotes_header',
}

export enum paymentDetailsModals {
  cancelPaymentModal = 'paymentDetails_cancelPayment_modal',
  cancelPaymentModalCloseIcon = 'paymentDetails_cancelPayment_modal_closeIcon_button',
  cancelPaymentModalHeader = 'paymentDetails_cancelPayment_modal_header',
  cancelPaymentModalNoButton = 'paymentDetails_cancelPayment_modal_no_button',
  cancelPaymentModalText = 'paymentDetails_cancelPayment_modal_text',
  cancelPaymentModalYesButton = 'paymentDetails_cancelPayment_modal_yes_button',

  paymentDetailsCancelPaymentSuccessFailModal = 'paymentDetails_cancelPaymentSuccessFail_modal',
  paymentDetailsCancelPaymentSuccessFailModalCloseButton = 'paymentDetails_cancelPaymentSuccessFail_modal_close_button',
  paymentDetailsCancelPaymentSuccessFailModalCloseIcon = 'paymentDetails_cancelPaymentSuccessFail_modal_close_icon',
  paymentDetailsCancelPaymentSuccessFailModalHeader = 'paymentDetails_cancelPaymentSuccessFail_modal_header',
  paymentDetailsCancelPaymentSuccessFailModalSuccessCheckIcon = 'paymentDetails_cancelPaymentSuccessFail_modal_successCheck_icon',
  paymentDetailsCancelPaymentSuccessFailModalText = 'paymentDetails_cancelPaymentSuccessFail_modal_text',

  paymentDetailsStopPaymentCancelRequestCancel = 'paymentDetails_StopPaymentCancelRequest_Cancel',
  paymentDetailsStopPaymentCancelRequestClose = 'paymentDetails_StopPaymentCancelRequest_Close',
  paymentDetailsStopPaymentCancelRequestConfirm = 'paymentDetails_StopPaymentCancelRequest_Confirm',
  paymentDetailsStopPaymentRequestCancel = 'paymentDetails_StopPaymentRequest_Cancel',
  paymentDetailsStopPaymentRequestClose = 'paymentDetails_StopPaymentRequest_Close',
  paymentDetailsStopPaymentRequestConfirm = 'paymentDetails_StopPaymentRequest_Confirm',

  paymentDetailsStopPaymentRequestDropDown = 'paymentDetails_StopPaymentRequest_DropDown',
  paymentDetailsTooManyFilesUploadedModal = 'paymentDetails_tooManyFilesUploaded_modal',
  paymentDetailsTooManyFilesUploadedModalCloseButton = 'paymentDetails_tooManyFilesUploaded_modal_close_button',
  paymentDetailsTooManyFilesUploadedModalCloseIcon = 'paymentDetails_tooManyFilesUploaded_modal_close_icon',

  paymentDetailsTooManyFilesUploadedModalHeader = 'paymentDetails_tooManyFilesUploaded_modal_header',
  paymentDetailsTooManyFilesUploadedModalSuccessCheckIcon = 'paymentDetails_tooManyFilesUploaded_modal_successCheck_icon',
  paymentDetailsTooManyFilesUploadedModalText = 'paymentDetails_tooManyFilesUploaded_modal_text',
}

export enum paymentDetailsStopPaymentCTA {
  paymentDetailsStopPaymentCancelRequest = 'paymentDetails_StopPaymentCancelRequest',
  paymentDetailsStopPaymentRequest = 'paymentDetails_StopPaymentRequest',
}

/**
 * Vendor Details
 * 3211-- Payment history: http://localhost:3000/vendors/details/729912
 */
export enum vendorDetailsPage {
  dateAddedField = 'vendorDetails_dateAdded_field',
  dateAddedFieldInput = 'vendorDetails_dateAdded_field_input',
  dateAddedFieldLabel = 'vendorDetails_dateAdded_field_label',
  editVendorButton = '[data-testid="vendorDetails_editVendor_button"]',
  header = 'vendorDetails_header',
  internalVendorIdField = 'vendorDetails_internalVendorId_field',
  internalVendorIdFieldInput = '[data-testid="vendorDetails_internalVendorId_field_input"]',
  internalVendorIdFieldLabel = 'vendorDetails_internalVendorId_field_label',
  makeInactiveButton = 'vendorDetails_makeInactive_button',
  pmgIdField = 'vendorDetails_pmgId_field',
  pmgIdFieldInput = 'vendorDetails_pmgId_field_input',
  pmgIdFieldLabel = 'vendorDetails_pmgId_field_label',
  removeVendorButton = '[data-testid="vendorDetails_removeVendor_button"]',
  statusField = 'vendorDetails_status_field',
  statusFieldInput = 'vendorDetails_status_field_input',
  statusFieldLabel = 'vendorDetails_status_field_label',
  vendorNameField = 'vendorDetails_vendorName_field',
  vendorNameFieldInput = '[data-testid="vendorDetails_vendorName_field_input"]',
  vendorNameFieldLabel = 'vendorDetails_vendorName_field_label',
  vendorTypeField = 'vendorDetails_vendorType_field',
  vendorTypeFieldInput = 'vendorDetails_vendorType_field_input',
  vendorTypeFieldLabel = 'vendorDetails_vendorType_field_label',
  vendorNameLink = "[data-field='vendor_name'] > .text-datagrid-link",
}

/**
 * See `vendorDetailsPaymentSpecsEditMode` for state and active fields in edit mode.
 */
export enum vendorDetailsPaymentSpecs {
  accountNumberField = 'vendorDetails_paymentSpecs_accountNumber_field',
  accountNumberFieldInput = 'vendorDetails_paymentSpecs_accountNumber_field_input',
  accountNumberFieldLabel = 'vendorDetails_paymentSpecs_accountNumber_field_label',
  achInvitedField = 'vendorDetails_paymentSpecs_achInvited_field',
  achInvitedFieldInput = 'vendorDetails_paymentSpecs_achInvited_field_input',
  achInvitedFieldLabel = 'vendorDetails_paymentSpecs_achInvited_field_label',
  activeField = 'vendorDetails_paymentSpecs_active_field',
  activeFieldInput = 'vendorDetails_paymentSpecs_active_field_input',
  activeFieldLabel = 'vendorDetails_paymentSpecs_active_field_label',
  addressField = '[data-testid="vendorDetails_paymentSpecs_address_field"]',
  addressFieldInput = '[data-testid="vendorDetails_paymentSpecs_address_field_input"]',
  addressFieldLabel = 'vendorDetails_paymentSpecs_address_field_label',
  addressTwoField = 'vendorDetails_paymentSpecs_addressTwo_field',
  addressTwoFieldInput = 'vendorDetails_paymentSpecs_addressTwo_field_input',
  addressTwoFieldLabel = 'vendorDetails_paymentSpecs_addressTwo_field_label',
  attentionLineField = 'vendorDetails_paymentSpecs_attentionLine_field',
  attentionLineFieldInput = 'vendorDetails_paymentSpecs_attentionLine_field_input',
  attentionLineFieldLabel = 'vendorDetails_paymentSpecs_attentionLine_field_label',
  cityField = 'vendorDetails_paymentSpecs_city_field',
  cityFieldInput = '[data-testid="vendorDetails_paymentSpecs_city_field_input"]',
  cityFieldLabel = 'vendorDetails_paymentSpecs_city_field_label',
  countryField = 'vendorDetails_paymentSpecs_country_field',
  countryFieldInput = '[data-testid="vendorDetails_paymentSpecs_country_field_input"]',
  countryFieldLabel = 'vendorDetails_paymentSpecs_country_field_label',
  header = 'vendorDetails_paymentSpecs_header',
  payeeEmailField = 'vendorDetails_paymentSpecs_payeeEmail_field',
  payeeEmailFieldInput = '[data-testid="vendorDetails_paymentSpecs_payeeEmail_field_input"]',
  payeeEmailFieldLabel = 'vendorDetails_paymentSpecs_payeeEmail_field_label',
  payeeNameField = 'vendorDetails_paymentSpecs_payeeName_field',
  payeeNameFieldInput = 'vendorDetails_paymentSpecs_payeeName_field_input',
  payeeNameFieldLabel = 'vendorDetails_paymentSpecs_payeeName_field_label',
  payeePhoneField = 'vendorDetails_paymentSpecs_payeePhone_field',
  payeePhoneFieldInput = '[data-testid="vendorDetails_paymentSpecs_payeePhone_field_input"]',
  payeePhoneFieldLabel = 'vendorDetails_paymentSpecs_payeePhone_field_label',
  stateField = 'vendorDetails_paymentSpecs_state_field',
  stateFieldInput = '[data-testid="vendorDetails_paymentSpecs_state_field_input"]',
  stateFieldLabel = '[data-testid="vendorDetails_paymentSpecs_state_field_label"]',
  zipField = 'vendorDetails_paymentSpecs_zip_field',
  zipFieldInput = '[data-testid="vendorDetails_paymentSpecs_zip_field_input"]',
  zipFieldLabel = 'vendorDetails_paymentSpecs_zip_field_label',
}

/**
 * Most fields will have the same id, and can be detected with .toHaveClass:
 *
 * But those fields which, when active, are not TextFields, need more specific ids.
 *   - state (autocomplete)
 *   - active (dropdown)
 * @example await expect(this.intVenIdField).toHaveClass(/pointer-events-none/).
 */
export enum vendorDetailsPaymentSpecsEditMode {
  activeDdField = 'vendorDetails_paymentSpecs_editable_active_dd_field',
  activeDdFieldLabel = 'vendorDetails_paymentSpecs_editable_active_dd_label',
  activeDdFieldMenuItem = 'vendorDetails_paymentSpecs_editable_active_ddOption',
  cancelButton = 'vendorDetails_paymentSpecs_editable_cancel_button',
  confirmButton = '[data-testid="vendorDetails_paymentSpecs_editable_confirm_button"]',
  stateAutocompleteField = 'vendorDetails_paymentSpecs_editable_state_autocomplete_field',
  stateAutocompleteFieldIcon = 'vendorDetails_paymentSpecs_editable_state_autocomplete_icon',
  stateAutocompleteFieldInput = '[data-testid="vendorDetails_paymentSpecs_editable_state_autocomplete_input"]',
  stateAutocompleteFieldLabel = 'vendorDetails_paymentSpecs_editable_state_autocomplete_label',
  stateAutocompleteFieldMenuItem = 'vendorDetails_paymentSpecs_editable_state_autocomplete_menu_item',
}

export enum vendorDetailsPaymentHistory {
  exportButton = '[data-testid="vendorDetails_paymentHistory_exportButton"]',
  grid = 'vendorDetails_paymentHistory_grid',
  gridAmountColumn = 'vendorDetails_paymentHistory_grid_amount_column',
  gridAmountRow = 'vendorDetails_paymentHistory_grid_amount_row',
  gridDateCreatedColumn = 'vendorDetails_paymentHistory_grid_dateCreated_column',
  gridDateCreatedRow = 'vendorDetails_paymentHistory_grid_dateCreated_row',
  gridNoResultsMessage = 'vendorDetails_paymentHistory_grid_noResultsMessage',
  gridPaymentIdColumn = 'vendorDetails_paymentHistory_grid_paymentId_column',
  gridPaymentIdRow = 'vendorDetails_paymentHistory_grid_paymentId_row',
  gridPaymentMethodColumn = 'vendorDetails_paymentHistory_grid_paymentMethod_column',
  gridPaymentMethodRow = 'vendorDetails_paymentHistory_grid_paymentMethod_row',
  gridPayorColumn = 'vendorDetails_paymentHistory_grid_payor_column',
  gridPayorRow = 'vendorDetails_paymentHistory_grid_payor_row',
  gridStatusColumn = 'vendorDetails_paymentHistory_grid_status_column',
  gridStatusRow = 'vendorDetails_paymentHistory_grid_status_row',
  header = '[data-testid="vendorDetails_paymentHistory_header"]',
  paginationCountPerPageDd = 'vendorDetails_paymentHistory_grid_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  paginationLabel = 'vendorDetails_paymentHistory_grid_pagination_label',
  paginationNextLink = 'vendorDetails_paymentHistory_grid_pagination_next_link',
  paginationPageCountLabel = 'vendorDetails_paymentHistory_grid_pagination_pageCount_label',
  paginationPreviousLink = 'vendorDetails_paymentHistory_grid_pagination_previous_link',
  vendorDetailsPage_ph_paymentId = '[data-field="paymentid"]>div>div>div>div',
  vendorDetailsPage_ph_datecreated = '[data-field="datecreated2"]>div>div>div>div',
  vendorDetailsPage_ph_paymentmethod = '[data-field="paymentmethod"]>div>div>div>div',
  vendorDetailsPage_ph_paymentstatus = '[data-field="paymentstatus"]>div>div>div>div',
  vendorDetailsPage_ph_amount = '[data-field="amount"]>div>div>div>div',
  vendorDetailsPage_ph_rowsperPage = '.MuiTablePagination-selectLabel',
  vendorDetailsPage_ph_rowsperPageOptions = '.MuiSelect-nativeInput',
  vendorDetailsPage_ph_rowsperPage_downarrow = '[data-testid="ArrowDropDownIcon"]',
}

export enum vendorDetailsModals {
  makeVendorInactiveModalPrefix = 'vendorDetails_makeVendorInactive_modal',
  removeVendorModalPrefix = 'vendorDetails_removeVendor_modal',

  vendorDetailsEditSuccessOrFailureModal = 'vendorDetails_editable_successOrFailure_modal',
  vendorDetailsEditSuccessOrFailureModalCloseButton = '[data-testid="vendorDetails_editable_successOrFailure_modal_close_button"]',
  vendorDetailsEditSuccessOrFailureModalCloseIcon = 'vendorDetails_editable_successOrFailure_modal_close_icon',
  vendorDetailsEditSuccessOrFailureModalHeader = 'vendorDetails_editable_successOrFailure_modal_header',
  vendorDetailsEditSuccessOrFailureModalSuccessCheckIcon = 'vendorDetails_editable_successOrFailure_modal_successCheck_icon',
  vendorDetailsEditSuccessOrFailureModalText = 'vendorDetails_editable_successOrFailure_modal_text',

  vendorDetailsSuccessOrFailureModal = 'vendorDetails_successOrFailure_modal',
  vendorDetailsSuccessOrFailureModalCloseButton = 'vendorDetails_successOrFailure_modal_close_button',
  vendorDetailsSuccessOrFailureModalCloseIcon = 'vendorDetails_successOrFailure_modal_close_icon',
  vendorDetailsSuccessOrFailureModalHeader = 'vendorDetails_successOrFailure_modal_header',
  vendorDetailsSuccessOrFailureModalSuccessCheckIcon = 'vendorDetails_successOrFailure_modal_successCheck_icon',
  vendorDetailsSuccessOrFailureModalText = 'vendorDetails_successOrFailure_modal_text',
}

/**
 * Dynamically creates ids used in
 * ui/app/route-components/vendors/details/existingInternalVendorIdModal.tsx.
 * It is consumed in both addVendorModal and editVendorDetails; specify type
 * to get correct id.
 */
export const vendorDetailsAddOrEditExistingInternalVendorIdModal = (type: 'add' | 'edit') => {
  return {
    closeButton: `vendorDetails_${type}_existingInternalVendorId_modal_closeButton`,
    closeIcon: `vendorDetails_${type}_existingInternalVendorId_modal_closeIcon`,
    header: `vendorDetails_${type}_existingInternalVendorId_modal_header`,
    internalVendorId: `vendorDetails_${type}_existingInternalVendorId_modal_internalVendorId`,
    modal: `vendorDetails_${type}_existingInternalVendorId_modal`,
    text: `vendorDetails_${type}_existingInternalVendorId_modal_text`,
  }
}

/**
 * Global Search page
 */
export enum globalSearchPage {
  filterButton = 'globalSearch_filter_button',
  header = 'globalSearch_header',
  noResultsMessage = 'globalSearch_noResults_message',
  noResultsSubheader = 'globalSearch_noResults_subheader',
  paginationNextLink = 'globalSearch_pagination_next_link',
  // Not in use, pending investigation into possibilities for customizing these elements
  paginationPageCountLabel = 'globalSearch_pagination_pageCount_label',
  paginationPreviousLink = 'globalSearch_pagination_previous_link',
  resultsContainer = 'globalSearch_results_container',
  subheader = 'globalSearch_subheader',
  subheaderResultCount = 'globalSearch_subheader_resultCount',
  subheaderSearchedValue = 'globalSearch_subheader_searchedValue',
}

/**
 * Dynamically creates id for Chip elements in global search filtering.
 *
 * @returns `globalSearch_${filterName}_${suffix}`
 *
 * @example
 * 'globalSearch_vendors_chip'
 * 'globalSearch_batches_chip_text'
 * 'globalSearch_payments_chip_chipIcon'
 */
export const getGlobalSearchFilterChipId = (filterName: string, elementType: 'chip' | 'text' | 'closeIcon') => {
  const suffix = elementType === 'chip' ? 'chip' : `chip_${elementType}`

  return `globalSearch_${filterName}_${suffix}`
}

/**
 * Dynamically creates lowercased id for Checkbox elements in global search filtering.
 *
 * @returns `globalSearch_${filterName}_${suffix}`
 *
 * @example
 * 'globalSearch_filterDrawer_batches_checkbox'
 * 'globalSearch_filterDrawer_vendors_label'
 * 'globalSearch_filterDrawer_payments_count'
 */
// export const getGlobalSearchFilterPrimaryCheckboxId = (
//   filterName: keyof GetGlobalSearchResultsMutation,
//   elementType: "checkbox" | "label" | "count"
// ) => {
//   return `globalSearch_filterDrawer_${filterName.toLowerCase()}_${elementType}`;
// };

/**
 * Dynamically creates id for secondary filter headers elements in global search filtering.
 * Will lowercase the filter name and replace ' ' with '-' if any.
 *
 * @returns `globalSearch_${filterName}_${suffix}`
 *
 * @example
 * 'globalSearch_filterDrawer_paymentsFilter_payment-method_header'
 * 'globalSearch_filterDrawer_batchesFilter_batch-status_header'
 * 'globalSearch_filterDrawer_vendorsFilter_vendor-status_header'
 */
export const getGlobalSearchFilterSecondaryFilterHeaderId = (primaryFilterName: string, header: string) => {
  const space = /\s/g
  header = header.replace(space, '-')
  header = header.replace(':', '')
  return `globalSearch_filterDrawer_${primaryFilterName}Filter_${header.toLowerCase()}_header`
}

/**
 * Dynamically creates id for secondary filter checkbox elements in global search filtering.
 * Will lowercase the checkbox name and replace ' ' with '-' if any.
 *
 * The header is included in case additional sections are added in the future.
 * @example
 * 'globalSearch_filterDrawer_batchesFilter_batch-status_waiting-for-approval_label'
 */
// export const getGlobalSearchFilterSecondaryCheckboxId = (
//   primaryFilterName: keyof GetGlobalSearchResultsMutation,
//   header: string,
//   secondaryFilterName: string,
//   elementType: "checkbox" | "label"
// ) => {
//   const space = /\s/g;
//   header = header.replace(space, "-");
//   header = header.replace(":", "");
//   secondaryFilterName = secondaryFilterName.replace(space, "-");
//   return `globalSearch_filterDrawer_${primaryFilterName}Filter_${header.toLowerCase()}_${secondaryFilterName.toLowerCase()}_${elementType}`;
// };

export enum globalSearchPageFilterDrawer {
  applyFilterButton = 'globalSearch_filterDrawer_applyFilter_button',
  clearAllButton = 'globalSearch_filterDrawer_clearAll_button',
  closeIconButton = 'globalSearch_filterDrawer_closeIcon_button',
  dateRangeHeader = 'globalSearch_filterDrawer_dateRange_header',
  endDatePicker = 'globalSearch_filterDrawer_dateRange_endDate_picker',
  endDatePickerIcon = 'globalSearch_filterDrawer_dateRange_endDate_picker_icon',
  endDatePickerInput = 'globalSearch_filterDrawer_dateRange_endDate_picker_input',
  endDatePickerLabel = 'globalSearch_filterDrawer_dateRange_endDate_picker_label',
  endDatePickerPopup = 'globalSearch_filterDrawer_dateRange_endDate_picker_popup',
  filterByHeader = 'globalSearch_filterDrawer_filterBy_header',
  filterDrawer = 'globalSearch_filterDrawer',
  resultTypeHeader = 'globalSearch_filterDrawer_resultType_header',
  startDatePicker = 'globalSearch_filterDrawer_dateRange_startDate_picker',
  startDatePickerIcon = 'globalSearch_filterDrawer_dateRange_startDate_picker_icon',
  startDatePickerInput = 'globalSearch_filterDrawer_dateRange_startDate_picker_input',
  startDatePickerLabel = 'globalSearch_filterDrawer_dateRange_startDate_picker_label',
  startDatePickerPopup = 'globalSearch_filterDrawer_dateRange_startDate_picker_popup',
}

export enum globalSearchPageVendorResultCard {
  accountNumber = 'accountNumber',
  cardPrefix = 'globalSearch_vendor_result_card',
  dateAdded = 'dateAdded',
  internalVendorId = 'internalVendorId',
  pmgVendorId = 'pmgVendorId',
  status = 'status',
  tag = 'tag',
  vendorName = 'vendorName',
}

export enum globalSearchPageBatchResultCard {
  achPayments = 'achPayments_value',
  achPaymentsLabel = 'achPayments_label',
  batchDate = 'batchDate_value',
  batchDateLabel = 'batchDate_label',
  batchId = 'batchId',
  cardPayments = 'cardPayments_value',
  cardPaymentsLabel = 'cardPayments_label',
  cardPrefix = 'globalSearch_batch_result_card',
  checkPayments = 'checkPayments_value',
  checkPaymentsLabel = 'checkPayments_label',
  status = 'status',
  tag = 'tag',
  total = 'total',
  totalPaymentsCount = 'totalPaymentCount_value',
  totalPaymentsCountLabel = 'totalPaymentCount_label',
}

export enum globalSearchPagePaymentResultCard {
  cardPrefix = 'globalSearch_payment_result_card',
  checkNumber = 'checkNumber',
  internalPaymentId = 'internalPaymentId',
  internalVendorId = 'internalVendorId',
  paymentAccountNumber = 'paymentAccountNumber',
  paymentAmount = 'paymentAmount',
  paymentId = 'paymentId',
  paymentMethod = 'paymentMethod',
  payorAccountNumber = 'payorAccountNumber',
  payorName = 'payorName',
  status = 'status',
  statusDate = 'statusDate',
  tag = 'tag',
  vendorName = 'div[aria-label="Search and select a vendor"] input',
}

export enum batchCreate {
  header = 'batchCreate_header',
  proposedBatchCard = 'batchCreate_proposedBatch_card',
  proposedBatchCardCreateBatchButton = '[data-testid="batchCreate_proposedBatch_card_createBatch_button"]',
  proposedBatchCardExceptions = 'batchCreate_proposedBatch_card_exceptionsToManage',
  proposedBatchCardExceptionsLabel = 'batchCreate_proposedBatch_card_exceptionsToManage_label',
  proposedBatchCardHeader = 'batchCreate_proposedBatch_card_header',
  proposedBatchCardImportsSelected = 'batchCreate_proposedBatch_card_importsSelected',
  proposedBatchCardImportsSelectedLabel = 'batchCreate_proposedBatch_card_importsSelected_label',
  proposedBatchCardNumberOfPayments = 'batchCreate_proposedBatch_card_numberOfPayments',
  proposedBatchCardNumberOfPaymentsLabel = 'batchCreate_proposedBatch_card_numberOfPayments_label',
  proposedBatchCardTotalAmount = 'batchCreate_proposedBatch_card_totalAmount',
  proposedBatchCardTotalAmountLabel = 'batchCreate_proposedBatch_card_totalAmount_label',
  proposedBatchSectionCreateBatchButton = 'batchCreate_proposedBatch_section_createBatch_button',
  proposedBatchSectionDateStarted = 'batchCreate_proposedBatch_section_dateStarted',
  proposedBatchSectionDateStartedLabel = 'batchCreate_proposedBatch_section_dateStarted_label',
  proposedBatchSectionExceptionsToManageCount = 'batchCreate_proposedBatch_section_exceptionsToManage_count',
  proposedBatchSectionExceptionsToManageMessage = 'batchCreate_proposedBatch_section_exceptionsToManage_message',
  proposedBatchSectionHeader = 'batchCreate_proposedBatch_section_header',
  proposedBatchSectionNumberOfPayments = 'batchCreate_proposedBatch_section_numberOfPayments',
  proposedBatchSectionNumberOfPaymentsLabel = 'batchCreate_proposedBatch_section_numberOfPayments_label',
  proposedBatchSectionResolveAllDuplicatesButton = 'batchCreate_proposedBatch_section_resolveAllDuplicates_button',
  proposedBatchSectionTotalAmount = 'batchCreate_proposedBatch_section_totalAmount',
  proposedBatchSectionTotalAmountLabel = 'batchCreate_proposedBatch_section_totalAmount_label',
  subheader = 'batchCreate_subheader',
}

export enum batchCreateSelectImportGrid {
  // TODO: Checkbox ids not applied, research GRID_CHECKBOX_SELECTION_COL_DEF
  checkboxColumn = 'batchCreate_selectImport_grid_checkbox_column',
  checkboxRow = 'batchCreate_selectImport_grid_checkbox_row',
  grid = 'batchCreate_selectImport_grid',
  loadingSpinner = 'batchCreate_selectImport_grid_loadingSpinner',
  noResultsMessage = 'batchCreate_selectImport_grid_noResultsMessage',
}

export enum batchCreateProposedBatchGrid {
  loadingSpinner = 'batchCreate_proposedBatch_grid_loadingSpinner',
}

/**
 * Dynamically creates the ids for grids using column defs from
 * ui/app/route-components/batch/create/importsGridColumnDefs.tsx.
 * See batchCreateSelectImportGrid and batchCreateProposedBatchGrid
 * for selectors unique to those grids and column defs.
 *
 * @example const testIds = getBatchProposedImportGridIds('selectImport_grid')
 *
 * testIds.importIdColumn // 'batchCreate_selectImport_grid_importId_column'
 */
export const getBatchProposedImportGridIds = (gridType: 'selectImport' | 'proposedBatch') => {
  const prefix = `batchCreate_${gridType}_grid`

  return {
    actionColumn: `${prefix}_action_column`,
    actionRowRemoveButton: `${prefix}_action_row_remove_button`,
    dateCreatedColumn: `${prefix}_dateCreated_column`,
    dateCreatedRow: `${prefix}_dateCreated_row`,
    exceptionsColumn: `${prefix}_exceptions_column`,
    exceptionsRow: `${prefix}_exceptions_row`,
    importIdColumn: `${prefix}_importId_column`,
    importIdRow: `${prefix}_importId_row`,
    paginationCountPerPageDd: `${prefix}_pagination_countPerPage_dd`,
    paginationLabel: `${prefix}_pagination_label`,
    paginationNextLink: `${prefix}_pagination_next_link`,
    paginationPageCountLabel: `${prefix}_pagination_pageCount_label`,
    paginationPreviousLink: `${prefix}_pagination_previous_link`,
    paymentsRemainingColumn: `${prefix}_paymentsRemaining_column`,

    paymentsRemainingRow: `${prefix}_paymentsRemaining_row`,

    // Not in use, pending investigation into possibilities for customizing these elements
    rowsSelected: `${prefix}_rowsSelected`,

    totalColumn: `${prefix}_total_column`,

    totalRow: `${prefix}_total_row`,

    userColumn: `${prefix}_user_column`,

    userRow: `${prefix}_user_row`,
  }
}

export enum batchCreateProposedBatchGridNestedBatchGrid {
  actionColumn = 'batchCreate_proposedBatch_nestedBatch_grid_action_column',
  amountColumn = 'batchCreate_proposedBatch_nestedBatch_grid_amount_column',
  amountRow = 'batchCreate_proposedBatch_nestedBatch_grid_amount_row',
  bankIdColumn = 'batchCreate_proposedBatch_nestedBatch_grid_bankId_column',
  bankIdRow = 'batchCreate_proposedBatch_nestedBatch_grid_bankId_row',
  grid = 'batchCreate_proposedBatch_nestedBatch_grid',
  internalVendorIdColumn = 'batchCreate_proposedBatch_nestedBatch_grid_internalVendorId_column',
  internalVendorIdRow = 'batchCreate_proposedBatch_nestedBatch_grid_internalVendorId_row',
  loadingSpinner = 'batchCreate_proposedBatch_nestedBatch_grid_loadingSpinner',
  paymentIdColumn = 'batchCreate_proposedBatch_nestedBatch_grid_paymentId_column',
  paymentIdRow = 'batchCreate_proposedBatch_nestedBatch_grid_paymentId_row',
  payorNameColumn = 'batchCreate_proposedBatch_nestedBatch_grid_payorName_column',
  payorNameRow = 'batchCreate_proposedBatch_nestedBatch_grid_payorName_row',
  statusColumn = 'batchCreate_proposedBatch_nestedBatch_grid_status_column',
  statusRow = 'batchCreate_proposedBatch_nestedBatch_grid_status_row',
  toggleColumn = 'batchCreate_proposedBatch_nestedBatch_grid_toggle_column',
  toggleRow = 'batchCreate_proposedBatch_nestedBatch_grid_toggle_row',
  vendorColumn = 'batchCreate_proposedBatch_nestedBatch_grid_vendor_column',
  vendorRow = 'batchCreate_proposedBatch_nestedBatch_grid_vendor_row',
}

export enum batchCreateProposedBatchGridNestedBatchGridActionMenu {
  actionRowButton = 'batchCreate_proposedBatch_nestedBatch_grid_action_row_button',
  actionRowCancelMenuItem = 'batchCreate_proposedBatch_nestedBatch_grid_action_row_cancelPayment_menuItem',
  actionRowMenu = 'batchCreate_proposedBatch_nestedBatch_grid_action_row_menu',
  actionRowResolveMenuItem = 'batchCreate_proposedBatch_nestedBatch_grid_action_row_resolve_menuItem',
  actionRowSaveMenuItem = 'batchCreate_proposedBatch_nestedBatch_grid_action_row_saveForLater_menuItem',
  amountExceededModal = 'batchCreate_proposedBatch_nestedBatch_grid_amountExceeded_modal',
  amountExceededModalCloseButton = 'batchCreate_proposedBatch_nestedBatch_grid_amountExceeded_modal_close_button',
  amountExceededModalCloseIcon = 'batchCreate_proposedBatch_nestedBatch_grid_amountExceeded_modal_closeIcon_button',
  amountExceededModalHeader = 'batchCreate_proposedBatch_nestedBatch_grid_amountExceeded_modal_header',
  amountExceededModalText = 'batchCreate_proposedBatch_nestedBatch_grid_amountExceeded_modal_text',
  cancelPaymentModal = 'batchCreate_proposedBatch_nestedBatch_grid_cancelPayment_modal',
  cancelPaymentModalCloseIcon = 'batchCreate_proposedBatch_nestedBatch_grid_cancelPayment_modal_closeIcon_button',
  cancelPaymentModalHeader = 'batchCreate_proposedBatch_nestedBatch_grid_cancelPayment_modal_header',
  cancelPaymentModalNoButton = 'batchCreate_proposedBatch_nestedBatch_grid_cancelPayment_modal_no_button',
  cancelPaymentModalText = 'batchCreate_proposedBatch_nestedBatch_grid_cancelPayment_modal_text',
  cancelPaymentModalTextPaymentId = 'batchCreate_proposedBatch_nestedBatch_grid_cancelPayment_modal_text_paymentId',
  cancelPaymentModalYesButton = 'batchCreate_proposedBatch_nestedBatch_grid_cancelPayment_modal_yes_button',
}

export enum batchCreatePossibleDuplicateModal {
  cancelPaymentButton = 'batchCreate_possibleDuplicate_modal_cancelPayment_button',
  closeIcon = 'batchCreate_possibleDuplicate_modal_closeIcon_button',
  header = 'batchCreate_possibleDuplicate_modal_header',
  modal = 'batchCreate_possibleDuplicate_modal',
  notADuplicateButton = 'batchCreate_possibleDuplicate_modal_notADuplicate_button',
  paymentHistoryHeader = 'batchCreate_possibleDuplicate_modal_paymentHistory_header',
  vendorNameSubheader = 'batchCreate_possibleDuplicate_modal_vendorName_subheader',
}

/**
 * Dynamically creates the ids for grids using column defs from
 * ui/app/route-components/batch/create/possibleDupeGridColumnDefs.tsx.
 * The same defs are used for both grids in the possible duplicate modal.
 * @example
 *
 * const testIds = getBatchCreatePossibleDuplicateModalGridIds('originalPayment')
 * testIds.dateRow // 'batchCreate_possibleDuplicate_modal_originalPayment_grid_date_row'
 */
export const getBatchCreatePossibleDuplicateModalGridIds = (gridType: 'originalPayment' | 'paymentHistory') => {
  return {
    amountColumn: `batchCreate_possibleDuplicate_modal_${gridType}_grid_amount_column`,
    amountRow: `batchCreate_possibleDuplicate_modal_${gridType}_grid_amount_row`,
    dateColumn: `batchCreate_possibleDuplicate_modal_${gridType}_grid_date_column`,
    dateRow: `batchCreate_possibleDuplicate_modal_${gridType}_grid_date_row`,
    grid: `batchCreate_possibleDuplicate_modal_${gridType}_grid`,
    internalVendorIdColumn: `batchCreate_possibleDuplicate_modal_${gridType}_grid_internalVendorId_column`,
    internalVendorIdRow: `batchCreate_possibleDuplicate_modal_${gridType}_grid_internalVendorId_row`,
    nestedGridPrefix: `batchCreate_possibleDuplicate_modal_${gridType}_grid_row`,
    noResultsMessage: `batchCreate_possibleDuplicate_modal_${gridType}_grid_noResultsMessage`,
    paymentIdColumn: `batchCreate_possibleDuplicate_modal_${gridType}_grid_paymentId_column`,
    paymentIdRow: `batchCreate_possibleDuplicate_modal_${gridType}_grid_paymentId_row_link`,
    statusColumn: `batchCreate_possibleDuplicate_modal_${gridType}_grid_status_column`,
    statusRow: `batchCreate_possibleDuplicate_modal_${gridType}_grid_status_row`,
    toggleColumn: `batchCreate_possibleDuplicate_modal_${gridType}_grid_toggle_column`,
    toggleRow: `batchCreate_possibleDuplicate_modal_${gridType}_grid_toggle_row`,
    vendorColumn: `batchCreate_possibleDuplicate_modal_${gridType}_grid_vendor_column`,
    vendorRow: `batchCreate_possibleDuplicate_modal_${gridType}_grid_vendor_row`,
  }
}

export enum batchCreateExistingVendorModal {
  assignToPaymentButton = 'batchCreate_existingVendor_modal_assignToPayment_button',
  cancelPaymentButton = 'batchCreate_existingVendor_modal_cancelPayment_button',
  closeIcon = 'batchCreate_existingVendor_modal_closeIcon_button',
  grid = 'batchCreate_existingVendor_modal_grid',
  gridNoResultsMessage = 'batchCreate_existingVendor_modal_grid_noResultsMessage',
  header = 'batchCreate_existingVendor_modal_header',
  modal = 'batchCreate_existingVendor_modal',

  paymentAmountColumn = 'batchCreate_existingVendor_modal_grid_paymentAmount_column',
  paymentAmountRow = 'batchCreate_existingVendor_modal_grid_paymentAmount_row',
  paymentIdColumn = 'batchCreate_existingVendor_modal_grid_paymentId_column',
  paymentIdRow = 'batchCreate_existingVendor_modal_grid_paymentId_row',
  vendorFoundId = 'batchCreate_existingVendor_modal_vendorFoundId',
  vendorFoundMessage = 'batchCreate_existingVendor_modal_vendorFoundMessage',
  vendorNameColumn = 'batchCreate_existingVendor_modal_grid_vendorName_column',
  vendorNameRow = 'batchCreate_existingVendor_modal_grid_vendorName_row',
}

export enum batchCreateResolveAllPossibleDuplicatesModal {
  cancelButton = 'batchCreate_resolveAllPossibleDuplicates_modal_cancel_button',
  closeIcon = 'batchCreate_resolveAllPossibleDuplicates_modal_closeIcon_button',
  header = 'batchCreate_resolveAllPossibleDuplicates_modal_header',
  modal = 'batchCreate_resolveAllPossibleDuplicates_modal',
  text = 'batchCreate_resolveAllPossibleDuplicates_modal_text',
  totalDupeCount = 'batchCreate_resolveAllPossibleDuplicates_modal_totalDupeCount',
  yesResolveAllButton = 'batchCreate_resolveAllPossibleDuplicates_modal_yesResolveAll_button',
}

export enum batchCreateCreateBatchResultModal {
  batchCreateResultModalBatchIdLabel = 'batchCreate_createBatchResult_modal_batchId_label',
  batchCreateResultModalBatchIdValue = '[data-testid="batchCreate_createBatchResult_modal_batchId_value"]',
  batchCreateResultModalBatchesCreatedLabel = 'batchCreate_createBatchResult_modal_batchesCreated_label',

  batchCreateResultModalBatchesCreatedValue = 'batchCreate_createBatchResult_modal_batchesCreated_value',
  batchCreateResultModalPaymentCountLabel = 'batchCreate_createBatchResult_modal_paymentCount_label',
  batchCreateResultModalPaymentCountValue = 'batchCreate_createBatchResult_modal_paymentCount_value',
  batchCreateResultModalStatusLabel = 'batchCreate_createBatchResult_modal_status_label',
  batchCreateResultModalStatusValue = '[data-testid="batchCreate_createBatchResult_modal_status_value"]',

  batchCreateResultModalTotalAmountLabel = 'batchCreate_createBatchResult_modal_totalAmount_label',
  batchCreateResultModalTotalAmountValue = '[data-testid="batchCreate_createBatchResult_modal_totalAmount_value"]',
  closeIcon = 'batchCreate_createBatchResult_modal_closeIcon_button',
  contactSupportButton = 'batchCreate_createBatchResult_modal_contactSupport_button',
  contactSupportLink = 'batchCreate_createBatchResult_modal_contactSupport_link',
  header = '[data-testid="batchCreate_createBatchResult_modal_header"]',
  homeButton = 'batchCreate_createBatchResult_modal_home_button',
  homeLink = 'batchCreate_createBatchResult_modal_home_link',
  modal = 'batchCreate_createBatchResult_modal',
  text = 'batchCreate_createBatchResult_modal_text',
  viewBatchDetailsButton = '[data-testid="batchCreate_createBatchResult_modal_viewBatchDetails_button"]',
  viewBatchDetailsLink = 'batchCreate_createBatchResult_modal_viewBatchDetails_link',
}

export enum batchCreateAddNewVendorModal {
  cancelPaymentButton = 'batchCreate_addNewVendorModal_cancelPayment_button',
  closeIconButton = 'batchCreate_addNewVendorModal_close_icon_button',
  header = 'batchCreate_addNewVendorModal_header',
  loadingSpinner = 'batchCreate_addNewVendorModal_loadingSpinner',
  modal = 'batchCreate_addNewVendorModal',
  saveAndAssignButton = 'batchCreate_addNewVendorModal_saveAndAssign_button',
}

export enum batchCreateAddNewVendorModalNewVendor {
  internalVendorIdField = 'batchCreate_addNewVendorModal_newVendor_internalVendorId_field',
  internalVendorIdFieldInput = 'batchCreate_addNewVendorModal_newVendor_internalVendorId_field_input',
  internalVendorIdFieldLabel = 'batchCreate_addNewVendorModal_newVendor_internalVendorId_field_label',
  newVendorHeader = 'batchCreate_addNewVendorModal_newVendor_header',
  vendorNameField = 'batchCreate_addNewVendorModal_newVendor_vendorName_field',
  vendorNameFieldInput = 'batchCreate_addNewVendorModal_newVendor_vendorName_field_input',
  vendorNameFieldLabel = 'batchCreate_addNewVendorModal_newVendor_vendorName_field_label',
  vendorTypeDdField = 'batchCreate_addNewVendorModal_newVendor_vendorType_dd',
  vendorTypeDdFieldLabel = 'batchCreate_addNewVendorModal_newVendor_vendorType_dd_label',
  vendorTypeDdFieldMenuItem = 'batchCreate_addNewVendorModal_newVendor_vendorType_ddOption',
}

export enum batchCreateAddNewVendorModalMailingAddress {
  addressField = 'batchCreate_addNewVendorModal_mailingAddress_address_field',
  addressInput = 'batchCreate_addNewVendorModal_mailingAddress_address_input',
  addressLabel = 'batchCreate_addNewVendorModal_mailingAddress_address_label',
  addressTwoField = 'batchCreate_addNewVendorModal_mailingAddress_addressTwo_field',
  addressTwoInput = 'batchCreate_addNewVendorModal_mailingAddress_addressTwo_input',
  addressTwoLabel = 'batchCreate_addNewVendorModal_mailingAddress_addressTwo_label',
  attentionLineField = 'batchCreate_addNewVendorModal_mailingAddress_attentionLine_field',
  attentionLineInput = 'batchCreate_addNewVendorModal_mailingAddress_attentionLine_input',
  attentionLineLabel = 'batchCreate_addNewVendorModal_mailingAddress_attentionLine_label',
  cityField = 'batchCreate_addNewVendorModal_mailingAddress_city_field',
  cityInput = 'batchCreate_addNewVendorModal_mailingAddress_city_input',
  cityLabel = 'batchCreate_addNewVendorModal_mailingAddress_city_label',
  countryField = 'batchCreate_addNewVendorModal_mailingAddress_country_field',
  countryInput = 'batchCreate_addNewVendorModal_mailingAddress_country_input',
  countryLabel = 'batchCreate_addNewVendorModal_mailingAddress_country_label',
  mailingAddressDomesticText = 'batchCreate_addNewVendorModal_mailingAddress_domesticText',
  mailingAddressHeader = 'batchCreate_addNewVendorModal_mailingAddress_header',
  stateAutocompleteField = 'batchCreate_addNewVendorModal_mailingAddress_state_autocomplete_field',
  stateAutocompleteFieldIcon = 'batchCreate_addNewVendorModal_mailingAddress_state_autocomplete_icon',
  stateAutocompleteFieldInput = 'batchCreate_addNewVendorModal_mailingAddress_state_autocomplete_input',
  stateAutocompleteFieldLabel = 'batchCreate_addNewVendorModal_mailingAddress_state_autocomplete_label',
  stateAutocompleteFieldMenuItem = 'batchCreate_addNewVendorModal_mailingAddress_state_autocomplete_menu_item',
  zipField = 'batchCreate_addNewVendorModal_mailingAddress_zip_field',
  zipInput = 'batchCreate_addNewVendorModal_mailingAddress_zip_input',
  zipLabel = 'batchCreate_addNewVendorModal_mailingAddress_zip_label',
}

export enum batchCreateAddNewVendorModalPaymentSpecs {
  accountNumberField = 'batchCreate_addNewVendorModal_paymentSpecs_accountNumber_field',
  accountNumberInput = 'batchCreate_addNewVendorModal_paymentSpecs_accountNumber_input',
  accountNumberLabel = 'batchCreate_addNewVendorModal_paymentSpecs_accountNumber_label',
  payeeEmailField = 'batchCreate_addNewVendorModal_paymentSpecs_payeeEmail_field',
  payeeEmailInput = 'batchCreate_addNewVendorModal_paymentSpecs_payeeEmail_input',
  payeeEmailLabel = 'batchCreate_addNewVendorModal_paymentSpecs_payeeEmail_label',
  payeeNameField = 'batchCreate_addNewVendorModal_paymentSpecs_payeeName_field',
  payeeNameInput = 'batchCreate_addNewVendorModal_paymentSpecs_payeeName_input',
  payeeNameLabel = 'batchCreate_addNewVendorModal_paymentSpecs_payeeName_label',
  payeeTelephoneExtField = 'batchCreate_addNewVendorModal_paymentSpecs_payeeTelephoneExt_field',
  payeeTelephoneExtInput = 'batchCreate_addNewVendorModal_paymentSpecs_payeeTelephoneExt_input',
  payeeTelephoneExtLabel = 'batchCreate_addNewVendorModal_paymentSpecs_payeeTelephoneExt_label',
  payeeTelephoneField = 'batchCreate_addNewVendorModal_paymentSpecs_payeeTelephone_field',
  payeeTelephoneInput = 'batchCreate_addNewVendorModal_paymentSpecs_payeeTelephone_input',
  payeeTelephoneLabel = 'batchCreate_addNewVendorModal_paymentSpecs_payeeTelephone_label',
  payeeTelephonePrefix = 'batchCreate_addNewVendorModal_paymentSpecs_payeeTelephone_prefix',
  paymentSpecsHeader = 'batchCreate_addNewVendorModal_paymentSpecs_header',
}

/** PXR */

/** PXR Batches page */
export enum pxrBatches {
  activeBatchesGrid = 'pxr_batches_activeBatches_grid',
  activeBatchesGridBatchNumberColumn = 'pxr_batches_activeBatches_grid_batchNumber_column',
  activeBatchesGridBatchNumberRow = 'pxr_batches_activeBatches_grid_batchNumber_row',
  activeBatchesGridDateCreatedColumn = 'pxr_batches_activeBatches_grid_dateCreated_column',
  activeBatchesGridDateCreatedRow = 'pxr_batches_activeBatches_grid_dateCreated_row',
  activeBatchesGridLoadingSpinner = 'pxr_batches_activeBatches_grid_loadingSpinner',
  activeBatchesGridNoResultsMessage = 'pxr_batches_activeBatches_grid_noResultsMessage',
  activeBatchesGridPaymentCountColumn = 'pxr_batches_activeBatches_grid_paymentCount_column',
  activeBatchesGridPaymentCountRow = 'pxr_batches_activeBatches_grid_paymentCount_row',
  activeBatchesGridPayorNameColumn = 'pxr_batches_activeBatches_grid_payorName_column',
  activeBatchesGridPayorNameRow = 'pxr_batches_activeBatches_grid_payorName_row',
  activeBatchesGridStatusColumn = 'pxr_batches_activeBatches_grid_status_column',
  activeBatchesGridStatusRow = 'pxr_batches_activeBatches_grid_status_row',
  activeBatchesGridTotalColumn = 'pxr_batches_activeBatches_grid_total_column',
  activeBatchesGridTotalRow = 'pxr_batches_activeBatches_grid_total_row',
  // Active batches grid
  activeBatchesHeader = 'pxr_batches_activeBatches_header',
  activeBatchesPaginationCountPerPageDd = 'pxr_batches_activeBatches_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  activeBatchesPaginationLabel = 'pxr_batches_activeBatches_pagination_label',
  activeBatchesPaginationNextLink = 'pxr_batches_activeBatches_pagination_next_link',
  activeBatchesPaginationPageCountLabel = 'pxr_batches_activeBatches_pagination_pageCount_label',
  activeBatchesPaginationPreviousLink = 'pxr_batches_activeBatches_pagination_previous_link',
  activeImportsCreateBatchLink = 'pxr_batches_activeImports_createBatch_link',
  activeImportsGrid = 'pxr_batches_activeImports_grid',
  activeImportsGridDateCreatedColumn = 'pxr_batches_activeImports_grid_dateCreated_column',
  activeImportsGridDateCreatedRow = 'pxr_batches_activeImports_grid_dateCreated_row',
  activeImportsGridImportIdColumn = 'pxr_batches_activeImports_grid_importId_column',
  activeImportsGridImportIdRow = 'pxr_batches_activeImports_grid_importId_row',
  activeImportsGridLoadingSpinner = 'pxr_batches_activeImports_grid__loadingSpinner',
  activeImportsGridNoResultsMessage = 'pxr_batches_activeImports_grid_noResultsMessage',
  activeImportsGridPaymentsRemainingColumn = 'pxr_batches_activeImports_grid_paymentsRemaining_column',
  activeImportsGridPaymentsRemainingRow = 'pxr_batches_activeImports_grid_paymentsRemaining_row',
  activeImportsGridStatusColumn = 'pxr_batches_activeImports_grid_status_column',
  activeImportsGridStatusRow = 'pxr_batches_activeImports_grid_status_row',
  activeImportsGridTotalColumn = 'pxr_batches_activeImports_grid_total_column',
  activeImportsGridTotalRow = 'pxr_batches_activeImports_grid_total_row',
  activeImportsGridUserColumn = 'pxr_batches_activeImports_grid_user_column',
  activeImportsGridUserRow = 'pxr_batches_activeImports_grid_user_row',
  // Active imports grid
  activeImportsHeader = 'pxr_batches_activeImports_header',
  activeImportsImportPaymentsLink = 'pxr_batches_activeImports_importPayments_link',
  activeImportsPaginationCountPerPageDd = 'pxr_batches_activeImports_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  activeImportsPaginationLabel = 'pxr_batches_activeImports_pagination_label',
  activeImportsPaginationNextLink = 'pxr_batches_activeImports_pagination_next_link',
  activeImportsPaginationPageCountLabel = 'pxr_batches_activeImports_pagination_pageCount_label',
  activeImportsPaginationPreviousLink = 'pxr_batches_activeImports_pagination_previous_link',
  comCanBatchesGrid = 'pxr_batches_comCanBatches_grid',
  comCanBatchesGridBatchNumberColumn = 'pxr_batches_comCanBatches_grid_batchNumber_column',
  comCanBatchesGridBatchNumberRow = 'pxr_batches_comCanBatches_grid_batchNumber_row',
  comCanBatchesGridDateCreatedColumn = 'pxr_batches_comCanBatches_grid_dateCreated_column',
  comCanBatchesGridDateCreatedRow = 'pxr_batches_comCanBatches_grid_dateCreated_row',
  comCanBatchesGridLoadingSpinner = 'pxr_batches_comCanBatches_grid_loadingSpinner',
  comCanBatchesGridNoResultsMessage = 'pxr_batches_comCanBatches_grid_noResultsMessage',
  comCanBatchesGridPaymentCountColumn = 'pxr_batches_comCanBatches_grid_paymentCount_column',
  comCanBatchesGridPaymentCountRow = 'pxr_batches_comCanBatches_grid_paymentCount_row',
  comCanBatchesGridPayorNameColumn = 'pxr_batches_comCanBatches_grid_payorName_column',
  comCanBatchesGridPayorNameRow = 'pxr_batches_comCanBatches_grid_payorName_row',
  comCanBatchesGridStatusColumn = 'pxr_batches_comCanBatches_grid_status_column',
  comCanBatchesGridStatusRow = 'pxr_batches_comCanBatches_grid_status_row',
  comCanBatchesGridTotalColumn = 'pxr_batches_comCanBatches_grid_total_column',
  comCanBatchesGridTotalRow = 'pxr_batches_comCanBatches_grid_total_row',
  // Completed & cancelled batches grid
  comCanBatchesHeader = 'pxr_batches_comCanBatches_header',
  comCanBatchesPaginationCountPerPageDd = 'pxr_batches_comCanBatches_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  comCanBatchesPaginationLabel = 'pxr_batches_comCanBatches_pagination_label',
  comCanBatchesPaginationNextLink = 'pxr_batches_comCanBatches_pagination_next_link',
  comCanBatchesPaginationPageCountLabel = 'pxr_batches_comCanBatches_pagination_pageCount_label',
  comCanBatchesPaginationPreviousLink = 'pxr_batches_comCanBatches_pagination_previous_link',
  header = 'pxr_batches_header',
}

/** PXR Batch Details page */
export enum pxrBatchDetails {
  approveBatchButton = 'pxr_batchDetails_approveBatch_button',
  batchId = 'pxr_batchDetails_batchId',
  batchIdLabel = 'pxr_batchDetails_batchId_label',
  cancelBatchButton = 'pxr_batchDetails_cancelBatch_button',
  downloadExcelButton = 'pxr_batchDetails_downloadExcel_button',
  downloadPdfButton = 'pxr_batchDetails_downloadPdf_button',
  header = 'pxr_batchDetails_header',
  loadingSpinner = 'pxr_batchDetails_loading_spinner',
  noBatchFoundMessage = 'pxr_batchDetails_noBatchFound_message',
  pxrBatchDetailsCancelBatchResultModal = 'pxr_batchDetails_cancelBatchResult_modal',
  pxrBatchDetailsCancelBatchResultModalCloseButton = 'pxr_batchDetails_cancelBatchResult_modal_close_button',
  pxrBatchDetailsCancelBatchResultModalCloseIcon = 'pxr_batchDetails_cancelBatchResult_modal_close_icon',
  pxrBatchDetailsCancelBatchResultModalHeader = 'pxr_batchDetails_cancelBatchResult_modal_header',
  pxrBatchDetailsCancelBatchResultModalSuccessCheckIcon = 'pxr_batchDetails_cancelBatchResult_modal_successCheck_icon',
  pxrBatchDetailsCancelBatchResultModalText = 'pxr_batchDetails_cancelBatchResult_modal_text',
  totalDollars = 'pxr_batchDetails_totalDollars',
  totalDollarsLabel = 'pxr_batchDetails_totalDollars_label',
  totalPayments = 'pxr_batchDetails_totalPayments',
}

export enum pxrBatchDetailsPayments {
  exportButton = 'pxr_batchDetails_payments_export_button',
  grid = 'pxr_batchDetails_payments_grid',
  gridLoadingSpinner = 'pxr_batchDetails_payments_grid_loading_spinner',
  gridNoResultsMessage = 'pxr_batchDetails_payments_grid_noResultsMessage',
  gridPaginationCountPerPageDd = 'pxr_batchDetails_payments_grid_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  gridPaginationLabel = 'pxr_batchDetails_payments_grid_pagination_label',
  gridPaginationNextLink = 'pxr_batchDetails_payments_grid_pagination_next_link',
  gridPaginationPageCountLabel = 'pxr_batchDetails_payments_grid_pagination_pageCount_label',
  gridPaginationPreviousLink = 'pxr_batchDetails_payments_grid_pagination_previous_link',
  gridPatientIdColumn = 'pxr_batchDetails_payments_grid_patientId_column',
  gridPatientIdRow = 'pxr_batchDetails_payments_grid_patientId_row',
  gridPatientNameColumn = 'pxr_batchDetails_payments_grid_patientName_column',
  gridPatientNameRow = 'pxr_batchDetails_payments_grid_patientName_row',
  gridPaymentIdColumn = 'pxr_batchDetails_payments_grid_paymentId_column',
  gridPaymentIdRow = 'pxr_batchDetails_payments_grid_paymentId_row',
  gridStatusColumn = 'pxr_batchDetails_payments_grid_status_column',
  gridStatusRow = 'pxr_batchDetails_payments_grid_status_row',
  gridTotalColumn = 'pxr_batchDetails_payments_grid_total_column',
  gridTotalRow = 'pxr_batchDetails_payments_grid_total_row',
  header = 'pxr_batchDetails_payments_header',
}

/** PXR Import Details page */
export enum pxrImportDetailsPage {
  cancelImportButton = 'pxr_importDetails_cancelImport_button',
  confirmAndCreateBatchButton = 'pxr_importDetails_confirmAndCreateBatch_button',
  createBatchButton = 'pxr_importDetails_createBatch_button',
  filename = 'pxr_importDetails_filename',
  filenameLabel = 'pxr_importDetails_filename_label',
  header = 'pxr_importDetails_header',
  importId = 'pxr_importDetails_importId',
  importIdLabel = 'pxr_importDetails_importId_label',
  loadingSpinner = 'pxr_importDetails_loadingSpinner',
  paymentCount = 'pxr_importDetails_paymentCount',
  paymentCountLabel = 'pxr_importDetails_paymentCount_label',
  pxrImportDetailsCancelImportResultModal = 'pxr_importDetails_cancelImportResult_modal',
  pxrImportDetailsCancelImportResultModalCloseButton = 'pxr_importDetails_cancelImportResult_modal_close_button',
  pxrImportDetailsCancelImportResultModalCloseIcon = 'pxr_importDetails_cancelImportResult_modal_close_icon',
  pxrImportDetailsCancelImportResultModalHeader = 'pxr_importDetails_cancelImportResult_modal_header',
  pxrImportDetailsCancelImportResultModalSuccessCheckIcon = 'pxr_importDetails_cancelImportResult_modal_successCheck_icon',
  pxrImportDetailsCancelImportResultModalText = 'pxr_importDetails_cancelImportResult_modal_text',
  pxrImportDetailsDateInitiatedLabel = 'pxr_importDetails_detailGrid_dateInitiated_label',
  pxrImportDetailsDateInitiatedValue = 'pxr_importDetails_detailGrid_dateInitiated_value',
  pxrImportDetailsFileStatusLabel = 'pxr_importDetails_detailGrid_fileStatus_label',
  pxrImportDetailsFileStatusValue = 'pxr_importDetails_detailGrid_fileStatus_value',
  pxrImportDetailsUserInitiatedLabel = 'pxr_importDetails_detailGrid_userInitiated_label',
  pxrImportDetailsUserInitiatedValue = 'pxr_importDetails_detailGrid_userInitiated_value',
  totalAmount = 'pxr_importDetails_totalAmount',
  totalAmountLabel = 'pxr_importDetails_totalAmount_label',
}

export enum pxrImportDetailsPayments {
  batchesActiveImportsPaginationCountPerPageDd = 'pxr_importDetails_payments_pagination_countPerPage_dd',
  // Not in use, pending investigation into possibilities for customizing these elements
  batchesActiveImportsPaginationLabel = 'pxr_importDetails_payments_pagination_label',
  batchesActiveImportsPaginationNextLink = 'pxr_importDetails_payments_pagination_next_link',
  batchesActiveImportsPaginationPageCountLabel = 'pxr_importDetails_payments_pagination_pageCount_label',
  batchesActiveImportsPaginationPreviousLink = 'pxr_importDetails_payments_pagination_previous_link',
  grid = 'pxr_importDetails_payments_grid',
  gridLoadingSpinner = 'pxr_importDetails_payments_grid_loadingSpinner',
  gridNoResultsMessage = 'pxr_importDetails_payments_grid_noResultsMessage',
  header = 'pxr_importDetails_payments_header',
  payeeColumn = 'pxr_importDetails_payments_grid_payee_column',
  payeeRow = 'pxr_importDetails_payments_grid_payee_row',
  paymentAmountColumn = 'pxr_importDetails_payments_grid_paymentAmount_column',
  paymentAmountRow = 'pxr_importDetails_payments_grid_paymentAmount_row',
  paymentIdColumn = 'pxr_importDetails_payments_grid_paymentId_column',
  paymentIdRow = 'pxr_importDetails_payments_grid_paymentId_row_link',
  statusColumn = 'pxr_importDetails_payments_grid_status_column',
  statusRow = 'pxr_importDetails_payments_grid_status_row',
}

/**
 * Import Payments page
 */
export enum pxrImportPayments {
  dropBox = 'pxr_importPayments_dropBox',
  dropBoxDropHereText = 'pxr_importPayments_dropBox_dropHere_text',
  dropBoxInput = 'pxr_importPayments_dropBox_input',
  dropBoxInvalidImportError = 'pxr_importPayments_dropBox_invalidImport_error',
  dropBoxInvalidImportErrorFilename = 'pxr_importPayments_dropBox_invalidImport_error_filename',
  dropBoxInvalidImportErrorReason = 'pxr_importPayments_dropBox_invalidImport_error_reason',
  dropBoxUploadButton = 'pxr_importPayments_dropBox_upload_button',
  header = 'pxr_importPayments_header',
  importedFilesConfirmAllImportsButton = 'pxr_importPayments_importedFiles_confirmAllImports_button',
  importedFilesHeader = 'pxr_importPayments_importedFiles_header',
  importedFilesNoImportsText = 'pxr_importPayments_importedFiles_noImports_text',
  importedFilesSubheader = 'pxr_importPayments_importedFiles_subheader',
  importedFilesSubheaderNumberOfImports = 'pxr_importPayments_importedFiles_subheader_numberOfImports',
  loadingSpinner = 'pxr_importPayments_loading_spinner',

  // modals
  pxrImportPaymentsCancelledPaymentImportModal = 'pxr_importPayments_cancelledPaymentImport_modal',
  pxrImportPaymentsCancelledPaymentImportModalCloseButton = 'pxr_importPayments_cancelledPaymentImport_modal_close_button',
  pxrImportPaymentsCancelledPaymentImportModalCloseIcon = 'pxr_importPayments_cancelledPaymentImport_modal_close_icon',
  pxrImportPaymentsCancelledPaymentImportModalHeader = 'pxr_importPayments_cancelledPaymentImport_modal_header',
  pxrImportPaymentsCancelledPaymentImportModalSuccessCheckIcon = 'pxr_importPayments_cancelledPaymentImport_modal_successCheck_icon',
  pxrImportPaymentsCancelledPaymentImportModalText = 'pxr_importPayments_cancelledPaymentImport_modal_text',

  pxrImportPaymentsConfirmedImportModal = 'pxr_importPayments_confirmedImport_modal',
  pxrImportPaymentsConfirmedImportModalCloseButton = 'pxr_importPayments_confirmedImport_modal_close_button',
  pxrImportPaymentsConfirmedImportModalCloseIcon = 'pxr_importPayments_confirmedImport_modal_close_icon',
  pxrImportPaymentsConfirmedImportModalHeader = 'pxr_importPayments_confirmedImport_modal_header',
  pxrImportPaymentsConfirmedImportModalSuccessCheckIcon = 'pxr_importPayments_confirmedImport_modal_successCheck_icon',
  pxrImportPaymentsConfirmedImportModalText = 'pxr_importPayments_confirmedImport_modal_text',
}

export enum pxrImportPaymentsImportedFilesCard {
  card = 'pxr_importPayments_importedFiles_card',
  cardCancelImportButton = 'pxr_importPayments_importedFiles_card_cancelImport_button',
  cardConfirmImportButton = 'pxr_importPayments_importedFiles_card_confirmImport_button',
  cardFilename = 'pxr_importPayments_importedFiles_card_filename',
  cardImportTotal = 'pxr_importPayments_importedFiles_card_import_total',
  cardLoadingSpinner = 'pxr_importPayments_importedFiles_card_loading_spinner',
  cardPaymentsCount = 'pxr_importPayments_importedFiles_card_payments_count',
  cardStatus = 'pxr_importPayments_importedFiles_card_status',
  cardUserEmail = 'pxr_importPayments_importedFiles_card_userEmail',
  cardViewImportDetailsLink = 'pxr_importPayments_importedFiles_card_viewImportDetails_link',
}

export enum pxrImportPaymentsConfirmedAllImportsModal {
  pxrImportPaymentsConfirmedAllImportsModal = 'pxr_importPayments_confirmedAllImports_modal',
  pxrImportPaymentsConfirmedAllImportsModalCloseButton = 'pxr_importPayments_confirmedAllImports_modal_close_button',
  pxrImportPaymentsConfirmedAllImportsModalCloseIcon = 'pxr_importPayments_confirmedAllImports_modal_close_icon',
  pxrImportPaymentsConfirmedAllImportsModalGrid = 'pxr_importPayments_confirmedAllImports_modal_grid',
  pxrImportPaymentsConfirmedAllImportsModalGridFileIdColumn = 'pxr_importPayments_confirmedAllImports_modal_grid_fileId_column',
  pxrImportPaymentsConfirmedAllImportsModalGridFileIdRow = 'pxr_importPayments_confirmedAllImports_modal_grid_fileId_row',
  pxrImportPaymentsConfirmedAllImportsModalGridFileNameColumn = 'pxr_importPayments_confirmedAllImports_modal_grid_fileName_column',

  pxrImportPaymentsConfirmedAllImportsModalGridFileNameRow = 'pxr_importPayments_confirmedAllImports_modal_grid_fileName_row',
  // TODO: improve column defs for this grid and add these ids
  pxrImportPaymentsConfirmedAllImportsModalGridNoResultsMessage = 'pxr_importPayments_confirmedAllImports_modal_grid_noResultsMessage',
  pxrImportPaymentsConfirmedAllImportsModalHeader = 'pxr_importPayments_confirmedAllImports_modal_header',
  pxrImportPaymentsConfirmedAllImportsModalSuccessCheckIcon = 'pxr_importPayments_confirmedAllImports_modal_successCheck_icon',
  pxrImportPaymentsConfirmedAllImportsModalText = 'pxr_importPayments_confirmedAllImports_modal_text',
}

/** Payment Details page */
export enum pxrPaymentDetailsPage {
  downloadPdfButton = 'pxr_paymentDetails_downloadPdf_button',
  header = 'pxr_paymentDetails_header',
  paymentId = 'pxr_paymentDetails_paymentId',
  paymentIdLabel = 'pxr_paymentDetails_paymentId_label',
  totalAmount = 'pxr_paymentDetails_totalAmount',
  totalAmountLabel = 'pxr_paymentDetails_totalAmount_label',
}

export enum pxrPaymentDetailsInvoices {
  grid = 'pxr_paymentDetails_invoices_grid',
  gridDescriptionColumn = 'pxr_paymentDetails_invoices_grid_description_column',
  gridDescriptionRow = 'pxr_paymentDetails_invoices_grid_description_row',
  gridInvoiceDateColumn = 'pxr_paymentDetails_invoices_grid_invoiceDate_column',
  gridInvoiceDateRow = 'pxr_paymentDetails_invoices_grid_invoiceDate_row',
  gridInvoiceNumberColumn = 'pxr_paymentDetails_invoices_grid_invoiceNumber_column',
  gridInvoiceNumberRow = 'pxr_paymentDetails_invoices_grid_invoiceNumber_row',
  gridLoadingSpinner = 'pxr_paymentDetails_invoices_grid_loading_spinner',
  gridNetAmountColumn = 'pxr_paymentDetails_invoices_grid_netAmount_column',
  gridNetAmountRow = 'pxr_paymentDetails_invoices_grid_netAmount_row',
  gridNoResultsMessage = 'pxr_paymentDetails_invoices_grid_noResultsMessage',
  // Not in use, pending investigation into possibilities for customizing these elements
  gridTotalRowsLabel = 'pxr_paymentDetails_invoices_grid_totalRows_label',
  gridTotalRowsPageCountLabel = 'pxr_paymentDetails_invoices_grid_totalRows_pageCount_label',
  header = 'pxr_paymentDetails_invoices_header',
}

export enum pxrPaymentDetailsSettlementHistory {
  grid = 'pxr_paymentDetails_settlementHistory_grid',
  gridLoadingSpinner = 'pxr_paymentDetails_settlementHistory_grid_loading_spinner',
  gridNoResultsMessage = 'pxr_paymentDetails_settlementHistory_grid_noResultsMessage',
  gridTotalRowsCount = 'pxr_paymentDetails_settlementHistory_grid_totalRows_count',
  // Not in use, pending investigation into possibilities for customizing these elements
  gridTotalRowsLabel = 'pxr_paymentDetails_settlementHistory_grid_totalRows_label',
  gridTransactionAmountColumn = 'pxr_paymentDetails_settlementHistory_grid_transactionAmount_column',
  gridTransactionAmountRow = 'pxr_paymentDetails_settlementHistory_grid_transactionAmount_row',
  gridTransactionDateColumn = 'pxr_paymentDetails_settlementHistory_grid_transactionDate_column',
  gridTransactionDateRow = 'pxr_paymentDetails_settlementHistory_grid_transactionDate_row',
  gridTransactionTypeColumn = 'pxr_paymentDetails_settlementHistory_grid_transactionType_column',
  gridTransactionTypeRow = 'pxr_paymentDetails_settlementHistory_grid_transactionType_row',
  header = 'pxr_paymentDetails_settlementHistory_header',
  viewCheckImageButton = 'pxr_paymentDetails_settlementHistory_viewCheckImage_button',
}

/**
 * PXR Payment: Check Images
 * http://localhost:3000/refunds/payment/check-image/7eb511a4-7680-4f87-ab3a-9c84e0751dc7
 * */
export enum pxrPaymentCheckImages {
  backHeader = 'pxr_payment_checkImages_back_header',
  backImage = 'pxr_payment_checkImages_back_image',
  downloadPdfButton = 'pxr_payment_checkImages_downloadPdf_button',
  frontHeader = 'pxr_payment_checkImages_front_header',
  frontImage = 'pxr_payment_checkImages_front_image',
  header = 'pxr_payment_checkImages_header',
  noDataMessage = 'pxr_payment_checkImages_noData_message',
}

/**
 * PXR Batch Create page
 */
export enum pxrBatchCreate {
  header = 'pxr_batchCreate_header',
  proposedBatchCard = 'pxr_batchCreate_proposedBatch_card',
  proposedBatchCardCreateBatchButton = 'pxr_batchCreate_proposedBatch_card_createBatch_button',
  proposedBatchCardHeader = 'pxr_batchCreate_proposedBatch_card_header',
  proposedBatchCardImportsSelected = 'pxr_batchCreate_proposedBatch_card_importsSelected',
  proposedBatchCardImportsSelectedLabel = 'pxr_batchCreate_proposedBatch_card_importsSelected_label',
  proposedBatchCardNumberOfPayments = 'pxr_batchCreate_proposedBatch_card_numberOfPayments',
  proposedBatchCardNumberOfPaymentsLabel = 'pxr_batchCreate_proposedBatch_card_numberOfPayments_label',
  proposedBatchCardTotalAmount = 'pxr_batchCreate_proposedBatch_card_totalAmount',
  proposedBatchCardTotalAmountLabel = 'pxr_batchCreate_proposedBatch_card_totalAmount_label',
  proposedBatchSectionCreateBatchButton = 'pxr_batchCreate_proposedBatch_section_createBatch_button',
  proposedBatchSectionDateStarted = 'pxr_batchCreate_proposedBatch_section_dateStarted',
  proposedBatchSectionDateStartedLabel = 'pxr_batchCreate_proposedBatch_section_dateStarted_label',
  proposedBatchSectionHeader = 'pxr_batchCreate_proposedBatch_section_header',
  proposedBatchSectionTotalAmount = 'pxr_batchCreate_proposedBatch_section_totalAmount',
  proposedBatchSectionTotalAmountLabel = 'pxr_batchCreate_proposedBatch_section_totalAmount_label',
  subheader = 'pxr_batchCreate_subheader',
  getAllRowsFromGrid = 'div[class*="MuiDataGrid-row"]',
}

/**
 * Use `getPxrImportGridIds('selectImport') for row/column ids.
 */
export enum pxrBatchCreateSelectImportGrid {
  // TODO: Checkbox ids not applied, research GRID_CHECKBOX_SELECTION_COL_DEF
  checkboxColumn = 'pxr_batchCreate_selectImport_grid_checkbox_column',
  checkboxRow = 'pxr_batchCreate_selectImport_grid_checkbox_row',
  grid = 'pxr_batchCreate_selectImport_grid',
  loadingSpinner = 'pxr_batchCreate_selectImport_grid_loadingSpinner',
  noResultsMessage = 'pxr_batchCreate_selectImport_grid_noResultsMessage',
}

/**
 * Use `getPxrImportGridIds('proposedBatch') for row/column ids.
 */
export enum pxrBatchCreateProposedBatchGrid {
  grid = 'pxr_batchCreate_proposedBatch_grid',
  loadingSpinner = 'pxr_batchCreate_proposedBatch_grid_loadingSpinner',
}

/**
 * Dynamically creates the ids for grids using column defs from
 * ui/app/route-components/refunds/batch/create/pxrImportGridColumnDef.tsx
 * See batchCreateSelectImportGrid and batchCreateProposedBatchGrid
 * for selectors unique to those grids and column defs.
 *
 * @example const testIds = getPxrImportGridIds('selectImport_grid')
 *
 * testIds.importIdColumn // 'pxr_batchCreate_selectImport_grid_importId_column'
 */
export const getPxrImportGridIds = (gridType: 'selectImport' | 'proposedBatch') => {
  const prefix = `pxr_batchCreate_${gridType}_grid`

  return {
    actionColumn: `${prefix}_action_column`,
    actionRowRemoveButton: `${prefix}_action_row_remove_button`,
    dateStartedColumn: `${prefix}_dateStarted_column`,
    dateStartedRow: `${prefix}_dateStarted_row`,
    importIdColumn: `${prefix}_importId_column`,
    importIdRow: `${prefix}_importId_row`,
    paginationCountPerPageDd: `${prefix}_pagination_countPerPage_dd`,
    paginationLabel: `${prefix}_pagination_label`,
    paginationNextLink: `${prefix}_pagination_next_link`,
    paginationPageCountLabel: `${prefix}_pagination_pageCount_label`,
    paginationPreviousLink: `${prefix}_pagination_previous_link`,
    paymentsRemainingColumn: `${prefix}_paymentsRemaining_column`,
    paymentsRemainingRow: `${prefix}_paymentsRemaining_row`,

    // Not in use, pending investigation into possibilities for customizing these elements
    rowsSelected: `${prefix}_rowsSelected`,

    toggleRow: `${prefix}_toggle_row`,

    totalColumn: `${prefix}_total_column`,

    totalRow: `${prefix}_total_row`,

    userColumn: `${prefix}_user_column`,

    userRow: `${prefix}_user_row`,
  }
}

/**
 * Dynamically creates the ids for grid using column defs from
 * ui/app/route-components/refunds/batch/create/pxrProposedPaymentsGridColumnDef.tsx.
 *
 * Will prepend the importId to all, and prepend the paymentId to row ids.  Row values are not accessible without the paymentId prop.
 *
 * @example
 * getPxrBatchCreateProposedBatchNestedImportGridIds('1000000822').patientNameColumn
 * // importId:1000000822_pxr_batchCreate_proposedBatch_nestedImport_grid_patientName_column
 *
 * getPxrBatchCreateProposedBatchNestedImportGridIds('1000000801', '1000006237').statusRow
 * // importId:1000000801_paymentId:1000006237_pxr_batchCreate_proposedBatch_nestedImport_grid_status_row
 */
export const getPxrBatchCreateProposedBatchNestedImportGridIds = (
  displayedImportId: string,
  displayedPaymentId?: string,
) => {
  let gridIds: {
    actionColumn: string
    patientIdColumn: string
    patientIdRow?: string
    patientNameColumn: string
    patientNameRow?: string
    paymentIdColumn: string
    paymentIdRow?: string
    statusColumn: string
    statusRow?: string
    toggleRow?: string
    totalColumn: string
    totalRow?: string
  } = {
    actionColumn: `importId:${displayedImportId}_pxr_batchCreate_proposedBatch_nestedImport_grid_action_column`,
    patientIdColumn: `importId:${displayedImportId}_pxr_batchCreate_proposedBatch_nestedImport_grid_patientId_column`,
    patientNameColumn: `importId:${displayedImportId}_pxr_batchCreate_proposedBatch_nestedImport_grid_patientName_column`,
    paymentIdColumn: `importId:${displayedImportId}_pxr_batchCreate_proposedBatch_nestedImport_grid_paymentId_column`,
    statusColumn: `importId:${displayedImportId}_pxr_batchCreate_proposedBatch_nestedImport_grid_status_column`,
    totalColumn: `importId:${displayedImportId}_pxr_batchCreate_proposedBatch_nestedImport_grid_total_column`,
  }

  if (displayedPaymentId) {
    const gridRows = {
      patientIdRow: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_patientId_row`,
      patientNameRow: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_patientName_row`,
      paymentIdRow: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_paymentId_row`,
      statusRow: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_status_row`,
      toggleRow: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_toggle_row`,
      totalRow: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_total_row`,
    }
    gridIds = Object.assign(gridIds, gridRows)
  }
  return gridIds
}

/**
 * Dynamically creates the ids for the modal
 * ui/app/route-components/refunds/batch/create/modals/pxrCancelPaymentModal.tsx.
 *
 * Prepends the importId and paymentId.
 */
export const getPxrBatchCreateProposedBatchGridNestedImportGridActionMenuIds = (
  displayedImportId: string,
  displayedPaymentId: string,
) => {
  return {
    actionRowButton: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_action_row_button`,
    actionRowCancelMenuItem: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_action_row_cancelPayment_menuItem`,
    actionRowMenu: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_action_row_menu`,
    actionRowSaveMenuItem: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_action_row_saveForLater_menuItem`,
    cancelPaymentModal: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_cancelPayment_modal`,
    cancelPaymentModalCloseIcon: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_cancelPayment_modal_closeIcon_button`,
    cancelPaymentModalHeader: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_cancelPayment_modal_header`,
    cancelPaymentModalNoButton: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_cancelPayment_modal_no_button`,
    cancelPaymentModalText: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_cancelPayment_modal_text`,
    cancelPaymentModalYesButton: `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedImport_grid_cancelPayment_modal_yes_button`,
  }
}

/**
 * Dynamically creates the ids for the twin modals
 * ui/app/route-components/refunds/batch/create/modals/pxrSuccessCancelPaymentModal.tsx and
 * ui/app/route-components/refunds/batch/create/modals/pxrFailureCancelPaymentModal.tsx
 */
export const pxrBatchCreateProposedBatchGridNestedImportGridActionMenuResultModal = (result: 'success' | 'fail') => {
  return {
    modal: `pxr_batchCreate_proposedBatch_nestedImport_grid_action_${result}_modal`,
    modalCloseIcon: `pxr_batchCreate_proposedBatch_nestedImport_grid_action_${result}_modal_close_icon`,
    modalHeader: `pxr_batchCreate_proposedBatch_nestedImport_grid_action_${result}_modal_header`,
    modalText: `pxr_batchCreate_proposedBatch_nestedImport_grid_action_${result}_modal_text`,
  }
}

/**
 * Dynamically creates the ids for the innermost nested grids.
 * @example
 * getPxrBatchCreateProposedBatchNestedPaymentGridIds('1000000822', '1000006455').invoiceDateColumn
 * // will return => 'importId:1000000822_paymentId:1000006455_pxr_batchCreate_proposedBatch_nestedPayment_grid_invoiceDate_column'
 */
export const getPxrBatchCreateProposedBatchNestedPaymentGridIds = (
  displayedImportId: string,
  displayedPaymentId: string,
) => {
  const testIdPrefix = `importId:${displayedImportId}_paymentId:${displayedPaymentId}_pxr_batchCreate_proposedBatch_nestedPayment_grid`

  return {
    descriptionColumn: `${testIdPrefix}_description_column`,
    descriptionRow: `${testIdPrefix}_description_row`,
    invoiceDateColumn: `${testIdPrefix}_invoiceDate_column`,
    invoiceDateRow: `${testIdPrefix}_invoiceDate_row`,
    invoiceNumberColumn: `${testIdPrefix}_invoiceNumber_column`,
    invoiceNumberRow: `${testIdPrefix}_invoiceNumber_row`,
    netAmountColumn: `${testIdPrefix}_netAmount_column`,
    netAmountRow: `${testIdPrefix}_netAmount_row`,
  }
}

export enum pxrBatchCreateCreateBatchSuccessModal {
  closeIcon = 'pxr_batchCreate_createBatchSuccessModal_modal_closeIcon_button',
  header = 'pxr_batchCreate_createBatchSuccessModal_modal_header',
  homeButton = 'pxr_batchCreate_createBatchSuccessModal_modal_home_button',
  homeLink = 'pxr_batchCreate_createBatchSuccessModal_modal_home_link',
  modal = 'pxr_batchCreate_createBatchSuccessModal_modal',
  pxrBatchCreateCreateBatchSuccessModalBatchIdLabel = 'pxr_batchCreate_createBatchSuccessModal_modal_batchId_label',
  pxrBatchCreateCreateBatchSuccessModalBatchIdValue = 'pxr_batchCreate_createBatchSuccessModal_modal_batchId_value',
  pxrBatchCreateCreateBatchSuccessModalPaymentCountLabel = 'pxr_batchCreate_createBatchSuccessModal_modal_paymentCount_label',
  pxrBatchCreateCreateBatchSuccessModalPaymentCountValue = 'pxr_batchCreate_createBatchSuccessModal_modal_paymentCount_value',
  pxrBatchCreateCreateBatchSuccessModalStatusLabel = 'pxr_batchCreate_createBatchSuccessModal_modal_status_label',
  pxrBatchCreateCreateBatchSuccessModalStatusValue = 'pxr_batchCreate_createBatchSuccessModal_modal_status_value',
  pxrBatchCreateCreateBatchSuccessModalTotalAmountLabel = 'pxr_batchCreate_createBatchSuccessModal_modal_totalAmount_label',
  pxrBatchCreateCreateBatchSuccessModalTotalAmountValue = 'pxr_batchCreate_createBatchSuccessModal_modal_totalAmount_value',
  viewBatchDetailsButton = 'pxr_batchCreate_createBatchSuccessModal_modal_viewBatchDetails_button',
  viewBatchDetailsLink = 'pxr_batchCreate_createBatchSuccessModal_modal_viewBatchDetails_link',
}

export enum pxrBatchCreateCreateBatchFailureModal {
  closeIcon = 'pxr_batchCreate_createBatchFailureModal_modal_closeIcon_button',
  header = 'pxr_batchCreate_createBatchFailureModal_modal_header',
  modal = 'pxr_batchCreate_createBatchFailureModal_modal',
  text = 'pxr_batchCreate_createBatchFailureModal_modal_text',
}

/** Payment Approvals */
export enum paymentApprovals {
  approveButton = 'paymentApprovals_approve_button',
  declineButton = 'paymentApprovals_decline_button',
  header = 'paymentApprovals_header',
  paymentApprovalsApprovalResultModal = 'paymentApprovals_approvalResult_modal',
  paymentApprovalsApprovalResultModalCloseButton = 'paymentApprovals_approvalResult_modal_close_button',
  paymentApprovalsApprovalResultModalCloseIcon = 'paymentApprovals_approvalResult_modal_close_icon',
  paymentApprovalsApprovalResultModalHeader = 'paymentApprovals_approvalResult_modal_header',
  paymentApprovalsApprovalResultModalSuccessCheckIcon = 'paymentApprovals_approvalResult_modal_successCheck_icon',
  paymentApprovalsApprovalResultModalText = 'paymentApprovals_approvalResult_modal_text',
  paymentApprovalsPaymentCountLabel = 'paymentApprovals_paymentCount_label',
  paymentApprovalsPaymentCountValue = 'paymentApprovals_paymentCount_value',
  paymentApprovalsTotalAmountLabel = 'paymentApprovals_totalAmount_label',
  paymentApprovalsTotalAmountValue = 'paymentApprovals_totalAmount_value',
}

export enum paymentApprovalsMobile {
  approvePaymentButton = 'paymentApprovals_mobile_approvePayment_icon_button',

  cancelPaymentButton = 'paymentApprovals_mobile_cancelPayment_icon_button',
  collapseIconButton = 'paymentApprovals_mobile_collapse_icon_button',
  expandIconButton = 'paymentApprovals_mobile_expand_icon_button',
  header = 'paymentApprovals_mobile_header',
  paymentApprovalsMobileClientLabel = 'paymentApprovals_mobile_client_label',
  paymentApprovalsMobileClientValue = 'paymentApprovals_mobile_client_value',

  paymentApprovalsMobileDateCreatedLabel = 'paymentApprovals_mobile_dateCreated_label',
  paymentApprovalsMobileDateCreatedValue = 'paymentApprovals_mobile_dateCreated_value',
  paymentApprovalsMobileInvoiceDateLabel = 'paymentApprovals_mobile_invoiceDate_label',
  paymentApprovalsMobileInvoiceDateValue = 'paymentApprovals_mobile_invoiceDate_value',
  paymentApprovalsMobileInvoiceDescriptionLabel = 'paymentApprovals_mobile_invoiceDescription_label',
  paymentApprovalsMobileInvoiceDescriptionValue = 'paymentApprovals_mobile_invoiceDescription_value',
  paymentApprovalsMobileInvoiceNumberLabel = 'paymentApprovals_mobile_invoiceNumber_label',
  paymentApprovalsMobileInvoiceNumberValue = 'paymentApprovals_mobile_invoiceNumber_value',
  paymentApprovalsMobileOriginalAmountLabel = 'paymentApprovals_mobile_originalAmount_label',
  paymentApprovalsMobileOriginalAmountValue = 'paymentApprovals_mobile_originalAmount_value',
  paymentApprovalsMobilePaymentAmountLabel = 'paymentApprovals_mobile_paymentAmount_label',
  paymentApprovalsMobilePaymentAmountValue = 'paymentApprovals_mobile_paymentAmount_value',
  paymentApprovalsMobilePaymentIdLabel = 'paymentApprovals_mobile_paymentId_label',
  paymentApprovalsMobilePaymentIdValue = 'paymentApprovals_mobile_paymentId_value',

  paymentApprovalsMobileStatusLabel = 'paymentApprovals_mobile_status_label',
  paymentApprovalsMobileStatusValue = 'paymentApprovals_mobile_status_value',
  paymentApprovalsMobileVendorLabel = 'paymentApprovals_mobile_vendor_label',
  paymentApprovalsMobileVendorValue = 'paymentApprovals_mobile_vendor_value',
}

export enum paymentApprovalsGrid {
  // TODO: Checkbox ids not applied, research GRID_CHECKBOX_SELECTION_COL_DEF
  checkboxColumn = 'paymentApprovals_grid_checkbox_column',
  checkboxRow = 'paymentApprovals_grid_checkbox_row',
  clientNameColumn = 'paymentApprovals_grid_clientName_column',
  dateCreatedColumn = 'paymentApprovals_grid_dateCreated_column',
  dateCreatedRow = 'paymentApprovals_grid_dateCreated_row',
  grid = 'paymentApprovals_grid',
  loadingSpinner = 'paymentApprovals_grid_loadingSpinner',
  noResultsMessage = 'paymentApprovals_grid_noResultsMessage',
  paymentAmountColumn = 'paymentApprovals_grid_paymentAmount_column',
  paymentAmountRow = 'paymentApprovals_grid_paymentAmount_row',
  paymentAttachmentsColumn = 'paymentApprovals_grid_paymentAttachments_column',
  paymentAttachmentsRow = 'paymentApprovals_grid_paymentAttachments_row',
  paymentAttachmentsRowCount = 'paymentApprovals_grid_paymentAttachments_row_count',
  paymentAttachmentsRowIcon = 'paymentApprovals_grid_paymentAttachments_row_icon',
  paymentIdColumn = 'paymentApprovals_grid_paymentId_column',
  paymentIdRow = 'paymentApprovals_grid_paymentId_row',
  payorNameColumn = 'paymentApprovals_grid_payorName_column',
  payorNameRow = 'paymentApprovals_grid_payorName_row',
  statusColumn = 'paymentApprovals_grid_status_column',
  statusRow = 'paymentApprovals_grid_status_row',
  // TODO: toggle ids not applied, style change when using GRID_DETAIL_PANEL_TOGGLE_COL_DEF
  // together with checkboxes, see product for advice.
  toggleColumn = 'paymentApprovals_grid_toggle_column',
  toggleRow = 'paymentApprovals_grid_toggle_row',
  vendorColumn = 'paymentApprovals_grid_vendor_column',
  vendorRow = 'paymentApprovals_grid_vendor_row',
}

/** 🔆 Edit Client Details 🔆 */
export enum clientDetailsPage {
  annualRevenue = 'clientDetails_annualRevenue',
  cancelButton = 'clientDetails_cancelButton',
  companyWebsite = 'clientDetails_companyWebsite',
  creditUnionNumberFDIC = 'clientDetails_creditUnionNumberFDIC',
  dbaName = 'clientDetails_dbaName',
  ein = 'clientDetails_businessTaxIdEIN',
  exchange = 'clientDetails_exchange',
  isFinancialInstitution = 'clientDetails_isFinancialInstitution',
  isHeadquartersDifferent = 'clientDetails_isHeadquartersDifferent',
  isPubliclyTraded = 'clientDetails_isPubliclyTraded',
  isTaxExempt = 'clientDetails_isTaxExempt',
  legalBusinessName = 'clientDetails_legalBusinessName',
  locationsServed = 'clientDetails_locationsServed',
  naicsCode = 'clientDetails_naicsCode',
  physicalAddress1 = 'clientDetails_physicalAddress1',
  physicalAddress2 = 'clientDetails_physicalAddress2',
  physicalAddressCity = 'clientDetails_physicalAddressCity',
  physicalAddressCountry = 'clientDetails_physicalAddressCountry',
  physicalAddressState = 'clientDetails_physicalAddressState',
  physicalAddressZip = 'clientDetails_physicalAddressZip',
  principalAddress1 = 'clientDetails_principalAddress1',
  principalAddress2 = 'clientDetails_principalAddress2',
  principalAddressCity = 'clientDetails_principalAddressCity',
  principalAddressCountry = 'clientDetails_principalAddressCountry',
  principalAddressState = 'clientDetails_principalAddressState',
  principalAddressZip = 'clientDetails_principalAddressZip',
  productsOffered = 'clientDetails_productsOffered',
  stateOfIncorporation = 'clientDetails_stateOfIncorporation',
  stockTicker = 'clientDetails_stockTicker',
  submitButton = 'clientDetails_confirmButton',
  typeOfIncorporation = 'clientDetails_typeOfIncorporation',
}
//sonar lint
//github needed or license -? copilot

/** 🔆 Edit Client Details Smarty Modal 🔆 */

export enum clientDetailsEditClientSmartyModal {
  clientDetailsEditClientSmartyModal = 'clientDetails_editClient_smarty_modal',
  clientDetailsEditClientSmartyModalCloseIcon = 'clientDetails_editClient_smarty_modal_close_icon',
  clientDetailsEditClientSmartyModalEntityName = 'clientDetails_editClient_smarty_modal_entityName',
  clientDetailsEditClientSmartyModalExistingAddress = 'clientDetails_editClient_smarty_modal_existingAddress_text',
  clientDetailsEditClientSmartyModalExistingAddressButton = 'clientDetails_editClient_smarty_modal_existingAddress_button',
  clientDetailsEditClientSmartyModalHeader = 'clientDetails_editClient_smarty_modal_header',
  clientDetailsEditClientSmartyModalMessage = 'clientDetails_editClient_smarty_modal_message',
  clientDetailsEditClientSmartyModalSuggestedAddress = 'clientDetails_editClient_smarty_modal_suggestedAddress_text',
  clientDetailsEditClientSmartyModalSuggestedAddressButton = 'clientDetails_editClient_smarty_modal_suggestedAddress_button',
  clientDetailsEditClientSmartyModalUnverifiedAddress = 'clientDetails_editClient_smarty_modal_unverifiedAddress_text',
  clientDetailsEditClientSmartyModalUnverifiedAddressButton = 'clientDetails_editClient_smarty_modal_unverifiedAddress_button',
  clientDetailsEditClientSmartyModalUnverifiedIcon = 'clientDetails_editClient_smarty_modal_unverified_icon',
}

export enum clientDetailsEditModals {
  clientDetailsEditAddressFailureModal = 'clientDetails_editable_address_failure_modal',
  clientDetailsEditAddressFailureModalCloseButton = 'clientDetails_editable_address_failure_modal_close_button',
  clientDetailsEditAddressFailureModalCloseIcon = 'clientDetails_editable_address_failure_modal_close_icon',
  clientDetailsEditAddressFailureModalHeader = 'clientDetails_editable_address_failure_modal_header',
  clientDetailsEditAddressFailureModalSuccessCheckIcon = 'clientDetails_editable_address_failure_modal_successCheck_icon',
  clientDetailsEditAddressFailureModalText = 'clientDetails_editable_address_failure_modal_text',

  clientDetailsEditSuccessFailureModal = 'clientDetails_editable_success_failure_modal',
  clientDetailsEditSuccessFailureModalCloseButton = 'clientDetails_editable_success_failure_modal_close_button',
  clientDetailsEditSuccessFailureModalCloseIcon = 'clientDetails_editable_success_failure_modal_close_icon',
  clientDetailsEditSuccessFailureModalHeader = 'clientDetails_editable_success_failure_modal_header',
  clientDetailsEditSuccessFailureModalSuccessCheckIcon = 'clientDetails_editable_success_failure_modal_successCheck_icon',
  clientDetailsEditSuccessFailureModalText = 'clientDetails_editable_success_failure_modal_text',
}
