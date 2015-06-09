/**
* West Controller
*/
Ext.define('KRF.view.west.WestController', {
	
	extend: 'Ext.app.ViewController',
	
	requires: [ 
		'Sgis.view.west.LayerInfoPopupGrid',
		'Sgis.view.west.ScaleInfoPopupGrid'
	],

	alias: 'controller.default-west',

	onClickWestLayer: function(b, e, arg1) {
		//alert(b.params[0]);
		Ext.create('KRF.view.common.DataWindow', {
			//stores: 'GridStoreTest',
			params: b.params
		});
	},
	
	onClickWestScale: function() {
		KRF.popup('Sgis.view.west.ScaleInfoPopupGrid');
	}
});
