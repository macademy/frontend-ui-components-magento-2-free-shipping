define([
    'uiComponent'
], function(
    Component
) {
    'use strict';

    return Component.extend({
        defaults: {
            message: 'Free Shipping Message' + '!'
        },
        initialize: function() {
            this._super();

            console.log(this.message);
        }
    });
});
