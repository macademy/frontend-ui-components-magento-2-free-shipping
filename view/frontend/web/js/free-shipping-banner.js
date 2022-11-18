define([
    'uiComponent'
], function(
    Component
) {
    'use strict';

    return Component.extend({
        initialize: function() {
            this._super();

            console.log('Free Shipping Banner UI Component has been loaded');
        }
    });
});
