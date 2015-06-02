Ext.define('KRF.CommonModule', {
	
	alternateClassName : ['KRF'],
	
	requires: [
		'Cmm.view.Popup'
	],
	
	singleton : true,

	mixins : {
		msg : 'Cmm.mixin.Msg',
		menu : 'Cmm.mixin.Menu'
	}
});
