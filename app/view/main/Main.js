/**
* This class is the main view for the application. It is specified in app.js as the
* "autoCreateViewport" property. That setting automatically applies the "viewport"
* plugin to promote that instance of this class to the body element.
*/
Ext.define('KRF.view.main.Main', {
	
	extend: 'Ext.container.Container',
	
	plugins: 'viewport',
	renderTo: Ext.getBody(),
	
	requires: [
		'KRF.view.main.MainController',
		'KRF.view.main.MainModel'
	],

	xtype: 'app-main',

	controller: 'main',
	
	viewModel: {
		type: 'main'
	},

	layout: {
		type: 'border'
	},

	items: [{
		xtype: 'container',
		id: 'content',
		//region: 'center',
		layout: 'card'
	}]
	
});
