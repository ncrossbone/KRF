/**
* West Tab1 Tree Controller
*/
Ext.define('Sgis.view.west.WestTab1TreeController', {
	
	extend: 'Ext.app.ViewController',

	alias: 'controller.default-west-tab1-tree',

	control: {
		'app-default-west-tab1-tree': {
			checkchange: 'onCheckChanged'
		}
	},
	
	onCheckChanged: function(node, checked, eOpts) {
		SGIS.msg.alert('Selected id : ' + node.get('id') + ', text : ' + node.get('text') + ', Checked : ' + checked);
		
		if(!node.get('leaf')) {
			this.checkAllChildren(node, checked);
		}
	},
	
	checkAllChildren: function(node, checked) {
		var children = node.childNodes;
		Ext.each(children, function(child) {
			child.set('checked', checked);
		});
	}
});
