Ext.define('Sgis.view.west.WestTab1Tree', {
	
	extend: 'Ext.tree.Panel',

	requires: [ 
		'Sgis.view.west.WestTab1TreeController', 
		'Ext.data.TreeStore' 
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
	
	initComponent: function() {

		Ext.apply(this, {
			store: new Ext.data.TreeStore({
				proxy: {
					type: 'ajax',
					url: 'resources/data/west/layer-tree-data.json'
				}
			})
		});
		
		this.callParent();
	}
});