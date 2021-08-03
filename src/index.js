module.exports = function check(str, bracketsConfig) {
    let checkArray = str.split('');
    let i = 0;
    let k = 1;
    let recursionCheck = function (array = checkArray) {
        if (array.length % 2 !== 0) return false;
        let subArray = [array[i], array[k]];
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (subArray[0] === bracketsConfig[j][0] && subArray[1] === bracketsConfig[j][1]) {
                array.splice(i, 2);
                i = 0;
                k = 1;
                if (array.length === 0) return true;
                return recursionCheck(array);
            }
        }
        if (array.length === 2 || k >= array.length) return false;
        k++;
        i++;
        return recursionCheck(array);
    };
    return recursionCheck();
};
