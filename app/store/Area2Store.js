Ext.define('Sgis.store.Area2Store', {
	
	extend: 'Ext.data.Store',

	fields: ['id', 'name'],

	autoLoad: true,

	remoteSort: true,

	proxy: {
		type: 'rest',
		url: '/resources/data/west/area2.json',
		reader: {
			type: 'json'
		}
	}
});
