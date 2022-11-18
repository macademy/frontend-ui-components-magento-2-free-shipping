define([
    'uiComponent'
], function(
    Component
) {
    'use strict';

    return Component.extend({
        defaults: {
            subtotal: 33.00,
            template: 'Macademy_FreeShippingPromo/free-shipping-banner',
            tracks: {
                subtotal: true
            }
        },
        initialize: function() {
            this._super();

            console.log(this.message);
        },
        formatCurrency: function(value) {
            return '$' + value.toFixed(2);
        }
    });
});
