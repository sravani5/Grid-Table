/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"gtab/ZGridTable/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"gtab/ZGridTable/test/integration/pages/Worklist",
	"gtab/ZGridTable/test/integration/pages/Object",
	"gtab/ZGridTable/test/integration/pages/NotFound",
	"gtab/ZGridTable/test/integration/pages/Browser",
	"gtab/ZGridTable/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "gtab.ZGridTable.view."
	});

	sap.ui.require([
		"gtab/ZGridTable/test/integration/WorklistJourney",
		"gtab/ZGridTable/test/integration/ObjectJourney",
		"gtab/ZGridTable/test/integration/NavigationJourney",
		"gtab/ZGridTable/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});