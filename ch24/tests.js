/**
 * Created by Administrator on 2017/2/19.
 */

QUnit.test( "addTax test", function( assert ) {
    assert.equal(addTax(100,10), 110);
    assert.equal(addTax(5,12), 5.6);
    assert.equal(addTax(1000, 17.5), 1175);
});