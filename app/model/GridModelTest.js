Ext.define('KRF.model.GridModelTest', {
    extend : 'Ext.data.Model',
    fields : [
        {
            name : 'name',
            type : 'string'
        },
        {
            name : 'email',
            type : 'string'
        },
        {
            name : 'phone',
            type : 'string'
        },
        {
            name : 'id',
            type : 'string'
        },
        {name: 'progress', type: 'float'},
        'sequence1',
    ]
});