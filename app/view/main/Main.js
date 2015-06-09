/**
* This class is the main view for the application. It is specified in app.js as the
* "autoCreateViewport" property. That setting automatically applies the "viewport"
* plugin to promote that instance of this class to the body element.
*/
Ext.define('KRF.view.main.Main', {
	
	extend: 'Ext.container.Container',
	
	id: 'view-main',
	name: 'view-main',
	xtype: 'view-main',
	
	plugins: 'viewport',
	renderTo: Ext.getBody(),

	layout: {
		type: 'border'
	},
	
	initComponent: function(){

		this.items = [{
			xtype: 'app-default-north',
			region: 'north',
			header: false,
			id: 'north-panel',
			title: 'north panel',
			collapsible: true
		}, {
			xtype: 'panel',
			id: 'center-panel',
			region: 'center',
			layout: 'absolute',
			width: '100%',
			height: '100%',
			items: [{
				xtype: 'app-default-center',
				region: 'center',
				width: '100%',
				height: '100%'
			}]
		}, {	
			xtype: 'west-main-tab',
			region: 'west',
			//draggable: true,
			//id: 'west-panel',
			//title: 'west panel'
		}];
		
		// 툴바 생성
		Ext.create('KRF.view.common.MapToolbar');
		
		this.callParent();
	
	}
	
});
