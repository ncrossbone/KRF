Ext.define('Sgis.view.south.SearchData1Grid', {

	extend : 'Ext.grid.Panel',
	
	requires: [
		'Sgis.store.SearchData1Store'
	],
	
	xtype: 'search_data1_grid',

	title: '지하수오염원감지',
	
	store : Ext.create('Sgis.store.SearchData1Store'),

	flex : 1,
		
	autoScroll : true,
		
	rowLines : true,
		
	columnLines : true,
	
	columns : [ { 
		dataIndex : 'id',
		flex : 1,
		text : '일련번호'
	}, { 
		dataIndex : 'branch_no',
		flex : 1,
		text : '지점번호'
	}, { 
		dataIndex : 'branch_name',
		flex : 1,
		text : '지점명'
	}, { 
		dataIndex : 'area1',
		flex : 1,
		text : '시도'
	}, { 
		dataIndex : 'area2',
		flex : 1,
		text : '시군구'
	}, { 
		dataIndex : 'address',
		flex : 1,
		text : '주소'
	}, { 
		dataIndex : 'geo_feature',
		flex : 1,
		text : '지질'
	}, { 
		dataIndex : 'depth',
		flex : 1,
		text : '심도'
	}, { 
		dataIndex : 'depth_depth',
		flex : 1,
		text : '심도깊이'
	} ],
	
	bbar : {
		xtype : 'pagingtoolbar',
		cls : 'pagingToolbar',
		store : this.store,
        displayInfo: true,
        displayMsg: '{0} - {1} of {2}',
        emptyMsg: '데이터가 없습니다.'
	},
	
	initComponent : function() {
		this.callParent();
		var pagingtoolbar = this.down(' pagingtoolbar');
		pagingtoolbar.bindStore(this.store);
	}
});
