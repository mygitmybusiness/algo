/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    var timer = 0;
    var wait = 0;

    for (var i = 0; i < customers.length; i++) {
        timer = Math.max(timer, customers[i][0]) + customers[i][1];

        wait += timer - customers[i][0];
    }

    return wait / customers.length;
};
