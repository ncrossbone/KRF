/**
* West Controller
*/
Ext.define('Sgis.view.west.WestController', {
	
	extend: 'Ext.app.ViewController',

	alias: 'controller.default-west',

	onClickWestLayer: function() {
		SGIS.msg.alert('레이어출처 Clicked!');
	},
	
	onClickWestScale: function() {
		SGIS.msg.alert('축척정보 Clicked!');
	}
});
