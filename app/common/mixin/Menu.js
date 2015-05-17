Ext.define('Cmm.mixin.Menu', function() {

	function show(view, params, config) {
		var content = Ext.getCmp('content');

		var current = null;

		if (Ext.isString(view)) {
			var itemId = view.replace(/\./g, '_');

			var current = content.getComponent(itemId);
			if(!current) {
				Ext.syncRequire(view);
				current = content.add(Ext.create(view, Ext.merge({
					itemId: itemId
				}), config));
			}
			content.getLayout().setActiveItem(current);
		} else {
			current = view;
		}

		if (current.setParams) {
			current.setParams(params || current.getParams());
		} /*else {
			SGIS.history.add(view, params);
		}*/

		content.fireEvent('showcontent', content, screen);
	}
	
	function popup(view, params, config) {
		var screen = null;

		if (Ext.isString(view)) {

			try {
				if (!Ext.ClassManager.get(view)) {
					var controller = view.replace('.view.', '.controller.');
					Ext.syncRequire(controller);
					App.getApplication()
						.getController(controller);
				}

				screen = Ext.create(view, Ext.merge({
					modal: true
				}, config));

				if (config && config.by) {
					screen.showBy(config.by)
				} else {
					screen.show();
				}
			} catch (e) {
				/*HF.error(T('error.LOAD-FAILURE', {
					view: view
				}), e);*/
				console.log(e);
				return;
			}
		}

		if (screen.setParams) {
			screen.setParams(params);
		}
	}

	return {
		show: show,
		popup: popup
	};

}());
