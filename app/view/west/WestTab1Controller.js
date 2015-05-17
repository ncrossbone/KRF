/**
* West Tab1 Tree Controller
*/
Ext.define('Sgis.view.west.WestTab1Controller', {
	
	extend: 'Ext.app.ViewController',

	alias: 'controller.default-west-tab1',

	control: {
		'treepanel': {
			checkchange: 'onCheckChanged'
		}
	},
	
	onCheckChanged: function(node, checked, eOpts) {
//		SGIS.msg.alert('Selected id : ' + node.get('id') + ', text : ' + node.get('text') + ', Checked : ' + checked);
		if(!node.get('leaf')) {
			this.checkAllChildren(node, checked);
		}else{
			Sgis.getApplication().fireEvent('dynamicLayerOnOff', this.getView().getChecked());
		}
	},
	
	checkAllChildren: function(node, checked) {
		var children = node.childNodes;
		Ext.each(children, function(child, index) {
			child.set('checked', checked);
			if(index==children.length-1){
				Sgis.getApplication().fireEvent('dynamicLayerOnOff', this.getView().getChecked());
			}
		});
	}
});
