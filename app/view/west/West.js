Ext.define('Sgis.view.west.West', {
	
	extend: 'Ext.tab.Panel',
	
	requires: [
		'Sgis.view.west.WestController',
		'Sgis.view.west.WestTab1',
		'Sgis.view.west.WestTab2'
	],

	xtype: 'app-default-west',
	
	controller: 'default-west',
	
	title: 'Measures',
	
	width: 275,

	collapsible: true,
	
	items: [{
		xtype: 'app-default-west-tab1'
	}, {
		xtype: 'app-default-west-tab2'
	}],
	
	bbar: [{
		id: 'btnWestLayer',
		xtype: 'button',
		text: '레이어출처',
		flex: 1,
		handler: 'onClickWestLayer'
	}, {
		id: 'btnWestScale',
		xtype: 'button',
		text: '축척정보',
		flex: 1,
		handler: 'onClickWestScale'
	}]
});