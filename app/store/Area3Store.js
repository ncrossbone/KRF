Ext.define('Sgis.store.Area3Store', {
	
	extend: 'Ext.data.Store',

	fields: ['id', 'name'],

	autoLoad: true,

	remoteSort: true,

	proxy: {
		type: 'rest',
		url: '/resources/data/west/area3.json',
		reader: {
			type: 'json'
		}
	}
});
