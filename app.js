Ext.Loader.setConfig({
	enabled : true,
	paths : {
		'Cmm' : 'app/common'
	}
});

Ext.require([
         	'KRF.CommonModule'
         ]);

Ext.application({
	
    name: 'KRF_Test',
    
	launch: function () {
		
		var main = Ext.create('KRF.view.main.Main_Test');
		
	}

});
