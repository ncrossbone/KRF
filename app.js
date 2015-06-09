Ext.Loader.setConfig({
	enabled : true,
	paths : {
		//'Cmm' : 'app/common'
	}
});

Ext.require([
             'KRF.view.common.DataWindow',
             'KRF.view.common.DataGrid'
         	//'KRF.CommonModule'
         ]);

Ext.application({
	
    name: 'KRF',
    
    stores: ['GridStoreTest'],
    
	launch: function () {
		
		var main = Ext.create('KRF.view.main.Main');
		
	}

});
