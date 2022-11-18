define([
    'uiComponent',
    'Magento_Customer/js/customer-data',
    'underscore'
], function(
    Component,
    customerData,
    _
) {
    'use strict';

    return Component.extend({
        defaults: {
            message: '${ $.messageDefault }',
            subtotal: 0.00,
            template: 'Macademy_FreeShippingPromo/free-shipping-banner',
            tracks: {
                message: true,
                subtotal: true
            }
        },
        initialize: function() {
            this._super();

            var self = this;
            var cart = customerData.get('cart');

            customerData.getInitCustomerData().done(function() {
                if (!_.isEmpty(cart()) && !_.isUndefined(cart().subtotalAmount)) {
                    self.subtotal = parseFloat(cart().subtotalAmount);
                }
            });

            cart.subscribe(function(cart) {
                if (!_.isEmpty(cart) && !_.isUndefined(cart.subtotalAmount)) {
                    self.subtotal = parseFloat(cart.subtotalAmount);
                }
            });
        },
        formatCurrency: function(value) {
            return '$' + value.toFixed(2);
        }
    });
});
