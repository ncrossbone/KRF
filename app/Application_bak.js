Ext.Loader.setConfig({
	enabled : true,
	paths : {
		'Cmm' : 'app/common'
	}
});

Ext.require([
	'KRF.CommonModule'
]);

/**
* The main application class. An instance of this class is created by app.js when it calls
* Ext.application(). This is the ideal place to handle application launch and initialization
* details.
*/
Ext.define('KRF.Application', {
	extend: 'Ext.app.Application',

	name: 'KRF',
	varTest: 'test', // 전역 변수 테스트

	stores: [
		'Sgis.store.LayerTreeStore',
		'Sgis.store.Layer2TreeStore',
		'Sgis.store.Area1Store',
		'Sgis.store.Area2Store',
		'Sgis.store.Area3Store',
		'Sgis.store.LayerInfoStore'
	],
	
	views : [
		'KRF.view.main.Main',
		'KRF.view.north.North',
		//'Sgis.view.west.West',
		'KRF.view.west.WestMainTab',
		'Sgis.view.east.East',
		'Sgis.view.south.South',
		'KRF.view.center.Center'
	],
	
	//manifest때문에 적어놈.
	eventType:[
	    'dynamicLayerOnOff'
	],

	launch: function () {
		//var main = Ext.widget('app-main'); // KRF.view.main.Main의 xtype적용
		var main = Ext.create('KRF.view.main.Main');
		
		main.add({
			region: 'north',
			xtype : 'app-default-north' // KRF.view.north.North의 xtype적용
		});
		
		main.add({
			region: 'west',
			xtype : 'app-default-west'
		});
		
		/*
		main.add({
			region: 'east',
			xtype : 'app-default-east'
		});
		*/
		
		main.add({
			region: 'south',
			xtype : 'app-default-south'
		});
		
		//Ext.create('Cmm.view.MapToolbar'); // 맵 서비스 기본 툴바 표시
		main.add({
			region: 'center',
			xtype: 'cmm-maptoolbar'
		});
		
		KRF.show('KRF.view.center.Center');
		/*
		main.add({
			region: 'center',
			xtype: 'app-default-center'
		});
		*/
		
		//Ext.create('KRF.view.center.PanelMoveTest');
		
		//alert(Ext.getBody().getViewSize().width)
		//KRF.show('KRF.view.common.mapToolbar');
		
	}
});