
exports.min = function min (array) {
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        array.sort(function(a,b){ 
        return a - b;
        });
    return array[0];
    }
}

exports.max = function max (array) {
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        array.sort(function(a,b){ 
        return a - b;
        });
    return array[array.length - 1];
    }
}

exports.avg = function avg (array) {
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        const sum = array.reduce((arr, item) => arr + item, 0);
    return sum / array.length ;
    }

}
