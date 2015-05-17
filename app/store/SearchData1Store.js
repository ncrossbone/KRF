Ext.define('Sgis.store.SearchData1Store', {
	
	extend: 'Ext.data.Store',
		
	fields: ['id', 'branch_no', 'branch_name', 'area1', 'area2', 'address', 'geo_feature', 'depth', 'depth_depth'],

	autoLoad: true,

	remoteSort: true,

	proxy: {
		type: 'rest',
		url: '/resources/data/south/search-data1.json',
		reader: {
			type : 'json',
			rootProperty : 'items',
			successProperty : 'success',
			totalProperty : 'total'
		}
	}
});
