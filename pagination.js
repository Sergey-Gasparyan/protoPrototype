const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const pagination = {
    currentPage: 0,
    result: [],
     
    init: function(alphabet, separator) {
        
        alphabet.forEach((curr, ind) => {
            if (ind % separator === 0) {
                pagination.result.push([curr])
            } else {
                pagination.result.at(-1).push(curr)
            }
        });
        
        return pagination.result
    } ,

    getPageItems : function () {
        return pagination.result[pagination.currentPage]
    } , 

    nextPage : function () {
        if(pagination.currentPage + 1 <= Math.floor(pagination.result.length) - 1) {
            pagination.currentPage += 1
            return pagination
        }
        return pagination
        // else return "the book has no pages"
    } , 

    prevPage : function () {
        if(pagination.currentPage > 0) {
            pagination.currentPage -= 1
            return pagination
        }
        else return pagination 
    } , 

    firstPage : function () {
        return pagination.result[0]
    },
     
    lastPage : function () {
        return pagination.result.at(-1)
    }
}




