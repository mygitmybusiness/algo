/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var maxSum = 0;
    accounts.map((customer) => {
        var sum = 0;
        
        customer.map((wealth) => {
            sum += wealth;
        })

        if (maxSum < sum) maxSum = sum;
    })

    return maxSum;
};