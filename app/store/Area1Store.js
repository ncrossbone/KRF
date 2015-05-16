Ext.define('Sgis.store.Area1Store', {
	
	extend: 'Ext.data.Store',

	fields: ['id', 'name'],

	autoLoad: true,

	remoteSort: true,

	proxy: {
		type: 'rest',
		url: '/resources/data/west/area1.json',
		reader: {
			type: 'json'
		}
	}
});
