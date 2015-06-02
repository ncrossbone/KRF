/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('KRF.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'KRF Portal',
		app_title: 'KRF',
		nier_logo: './resources/images/nier_logo.png'
    }
});