/*global location history */
sap.ui.define([
		"gtab/ZGridTable/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"gtab/ZGridTable/model/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	], function (BaseController, JSONModel, formatter, Filter, FilterOperator) {
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
			onInit : function () {
			}
		

		});
	}
);