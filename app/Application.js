/**
* The main application class. An instance of this class is created by app.js when it calls
* Ext.application(). This is the ideal place to handle application launch and initialization
* details.
*/
Ext.define('KRF.Application.Test', {
	extend: 'Ext.app.Application',

	name: 'KRF_Test',

	launch: function () {
		
		Ext.create('KRF.view.main.Main_Test');
		
	}
});