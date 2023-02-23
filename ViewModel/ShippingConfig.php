<?php declare(strict_types=1);

namespace Macademy\FreeShippingPromo\ViewModel;

use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Framework\View\Element\Block\ArgumentInterface;

class ShippingConfig implements ArgumentInterface
{
    public function __construct(
        private readonly ScopeConfigInterface $scopeConfig,
    ) {}

    public function getFreeShippingThreshold(): int
    {
        return (int) $this->scopeConfig->getValue('carriers/freeshipping/free_shipping_subtotal');
    }
}
