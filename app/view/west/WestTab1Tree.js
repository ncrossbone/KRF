/**
 * Deprecated - To be removed
 */
Ext.define('Sgis.view.west.WestTab1Tree', {
	
	extend: 'Ext.tree.Panel',

	requires: [ 
		'Sgis.view.west.WestTab1TreeController'
	],
	
	xtype: 'app-default-west-tab1-tree',
	
	controller: 'default-west-tab1-tree',

	rootVisible: false,
	
	useArrows: true,
	
	frame: true,
	
	width: 340,
	
	flex: 1,
	
	rowLines: true,
	
	bufferedRenderer: false,
	
	store : Ext.create('Sgis.store.LayerTreeStore')

});