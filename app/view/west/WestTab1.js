Ext.define('Sgis.view.west.WestTab1', {
	
	extend: 'Ext.container.Container',
	
	requires: [ 'Sgis.view.west.WestTab1Tree' ],

	xtype: 'app-default-west-tab1',

	title: '레이어',

	bodyPadding: 10,
	
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	
	items: [{
		xtype: 'app-default-west-tab1-tree'
	}]
});