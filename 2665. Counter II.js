/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    return {
        value: init,
        increment: function () {
            return this.value = this.value + 1;
        },
        reset: function () {
            return this.value = init;
        },
        decrement: function () {
            return this.value = this.value - 1;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
