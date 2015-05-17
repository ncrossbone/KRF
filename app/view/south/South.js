Ext.define('Sgis.view.south.South', {
	
	extend: 'Ext.tab.Panel',
	
	requires: [
		'Sgis.view.south.SearchData1Grid'
	],
	
	xtype: 'app-default-south',
	
	layout: 'card',
	
	id: 'south',
	
	height: 250,
	
	plain: true,
	
	split: true,
	
	collapsible: true,
	
	collapsed: true,
	
	resizable: true,
	
	frame: true,
	
	title: '검색결과'
});