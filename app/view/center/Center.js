Ext.define('KRF.view.center.Center', {
	
	extend: 'Ext.container.Container',
	//extend: 'Ext.window.Window',
	
	requires: [
	   	'KRF.view.center.CenterController',
	   	'KRF.map.CoreMap'
	],
	id: 'center_area',
	xtype: 'app-default-center',
	
	layout: {
		type: 'fit'
	},
	
	frame: false,
	border: false,
	bodyStyle: 'background:transparent;',
	
	items: [{
		xtype: 'app-map-coreMap',
		//region: 'bottom'
		width: '100%',
		height: '100%'
	}]
	
});