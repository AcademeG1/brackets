module.exports = function check(str, bracketsConfig) {
  const strArr = str.split('');
    const spliceBrecets = () => {
        strArr.forEach((bracket, index) => {
            bracketsConfig.forEach(item => {
                if (item[0] == bracket && item[1] == strArr[index+1]) {
                    strArr.splice(index, 2);
                    if (strArr.length > 0) {
                        spliceBrecets();
                    }
                }
            })
        })
    }
    spliceBrecets();
    if (strArr.length > 0) {
        return false
    } else {
        return true
    }
}
