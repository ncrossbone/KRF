Ext.define('Sgis.view.south.SearchDataGrid', {

	extend : 'Ext.grid.Panel',
	
	requires : [
		'Sgis.view.south.SearchDataGridController'
	],
	
	xtype: 'search_data_grid',

	title: '',
	
	controller: 'search-data-grid',
	
	store : Ext.create('Sgis.store.LayerInfoStore'),

	flex : 1,
		
	autoScroll : true,
		
	rowLines : true,
		
	columnLines : true,
	
	columns : [ { 
		dataIndex : 'id',
		text : 'ID',
		hidden : true
	} ]
});
