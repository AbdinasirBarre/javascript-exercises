const removeFromArray = function(array, ...num) {

    let removed = array.filter(remove);
    

    function remove(value){
        return !num.includes(value)
    }

    return removed;
};

// Do not edit below this line
module.exports = removeFromArray;



//     let removed = array.filter(remove);
    

//     function remove(value){
//         return value !== num && value !== num2 && value !== num3 && value !== num4;
//     }

//     return removed;
// };