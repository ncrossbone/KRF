Ext.define('KRF.view.north.North', {
	
	extend: 'Ext.panel.Panel',
	
	requires: ['KRF.view.north.NorthController'],
	
	xtype: 'app-default-north', // xtype 선언
	
	controller: 'default-north',
	
	padding: 10,
	
	height: 50,
	
	padding: 0,
	
	layout: {
		type: 'hbox',
		align: 'stretch'
	},
	
	items: [{
		xtype: 'image',
		width: 180,
		padding: '5 10 5 10',
		bind: {
			src: '{nier_logo}' // 좌측 상단 logo bind
		}
	}, {
		xtype: 'container',
		width: 350,
		html: "<h2 align='center'>KRF 물환경정보시스템</h2>"
	}, {
		xtype: 'container',
		//layout: 'fit',
		//layout: 'card',
		layout: {
			type: 'hbox',
			align: 'middle', // hbox일때 vertical "begin", "middle", "end", "stretch", "stretchmax"
			pack: 'end' // hbox일때 horizontal "start", "center", "end"
		},
		flex: 1,
		defaults: {
			//border: 0,
			//style: 'background-color:white;background-image:none;'
		},		
		items: [{
			xtype: 'button',
			text: '지리정보',
			handler: 'onClickAll'
		}, {
			xtype: 'label',
			width: 10
		}, {
			xtype: 'button',
			text: 'DATA',
			handler: 'onClickAll'
		}, {
			xtype: 'label',
			width: 10
		}, {
			xtype: 'button',
			text: 'Logout',
			handler: 'onClickAll'
		}, {
			xtype: 'label',
			width: 10
		}]
	}]
  
});