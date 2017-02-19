/**
 * Created by Administrator on 2017/2/19.
 */
function addTax(subtotal, taxRate) {
    return subtotal * (1 + (taxRate/100));
}