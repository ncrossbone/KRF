Ext.define('Sgis.view.west.WestTab1', {
	
	extend: 'Ext.container.Container',
	
	requires: [
		'Sgis.view.west.WestTab1Controller'
	],
	
	xtype: 'app-default-west-tab1',

	title: '레이어',

	bodyPadding: 10,
	
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	
	items: [{
		xtype: 'treepanel',
		controller: 'default-west-tab1',
		rootVisible: false,
		useArrows: true,
		frame: true,
		width: 340,
		rowLines: true,
		bufferedRenderer: false,
		store : Ext.create('Sgis.store.LayerTreeStore')
	}]
});