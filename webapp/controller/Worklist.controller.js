/*global location history */
sap.ui.define([
	"gtab/ZGridTable/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"gtab/ZGridTable/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(BaseController, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("gtab.ZGridTable.controller.Worklist", {

		formatter: formatter,

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		onInit: function() {},
		onDeletePress: function(oEvnt) {
			var oTable = this.getView().byId("table"),
				oSelRows = oTable.getSelectedIndices(),
				oModel = this.getOwnerComponent().getModel();
			if (oSelRows.length === 0) {
				sap.m.MessageBox.show(
					"Please Select atleast one item to delete", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Delete",
						actions: [sap.m.MessageBox.Action.OK]
					}
				);
				return;
			} else {
               $.each(oSelRows, function(i, o) {
				var oSelContext = oTable.getContextByIndex(o);
				var sPath = oSelContext.getPath();
					oModel.remove(sPath, {
										success: function(oData, oResponse) {
											sap.m.MessageBox.show("Selected Line Item Deleted Successfully");
										},
										error: function(oError) {
											sap.m.MessageBox.show("Error While Deleting Selected Line Items");
										}
									});
				
			});
			
			}
			oTable.clearSelection();
		}

	});
});