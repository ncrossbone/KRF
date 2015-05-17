Ext.define('Sgis.map.DynamicLayerAdmin', {
	map:null, 
	layer:null,
	constructor: function(map) {
        var me = this;
        me.map = map;
        me.layer = new esri.layers.ArcGISDynamicMapServiceLayer("http://cetech.iptime.org:6080/arcgis/rest/services/Layer1_new/MapServer");
		me.layer.id = "DynamicLayer";
		me.map.addLayer(me.layer);
		me.layer.visible = true;
		dojo.connect(me.layer, "onUpdate", function(event){	
			
		});
		dojo.connect(me.layer, "onUpdateStart", function(event){	
			
		});
		dojo.connect(me.layer, "onUpdateEnd", function(event){	
			
		});
		
		Sgis.getApplication().addListener('dynamicLayerOnOff', me.dynamicLayerOnOffHandler, me);
    },
    
    dynamicLayerOnOffHandler: function(selectInfo){
    	var me = this;
    	if(selectInfo.length==0){
    		me.layer.setVisibleLayers([]);
    		return;
    	}
    	var layers = [];
    	Ext.each(selectInfo, function(selectObj, index) {
    		if(!isNaN(selectObj.data.id)){
    			layers.push(selectObj.data.id);
    		}
			if(index==selectInfo.length-1){
				me.layer.setVisibleLayers(layers);
			}
		});
    }
});