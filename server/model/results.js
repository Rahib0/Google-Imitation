const resultsList = require("../data")

class Result {
    constructor(data) {
        this.url = data.url;
        this.title = data.title;
        this.body = data.body;
        this.index = resultsList.findIndex(x => x.url === data.url);
        this.rank = 0
    }

    static get all() {
        const results = resultsList.map((result) => new Result(result))
        return results
    }

    static searchIn(body, searchArray) {
        // console.log(body, searchArray)
        body = body.toLowerCase()
        let regex;
        let count = 0
        searchArray.forEach(term => {
            regex = new RegExp(`${term.toLowerCase()}`, "g")
            // console.log(regex)
            if (body.match(regex)) {
                count = count + body.match(regex).length
                // console.log(body.match(regex).length, count, "Hello")
            }
        })
        return (count/body.split(" ").length)
    }
    
    static search(searchString) {
        const results = Result.all
        let searchTermsArray = searchString.split(" ")
        let returnedResults = []
        results.forEach(result => {
            result.rank = (3.5*Result.searchIn(result.url, searchTermsArray)) + (2*Result.searchIn(result.title, searchTermsArray)) + (1*Result.searchIn(result.body, searchTermsArray))
            result.rank = Math.ceil(result.rank)
            // console.log(result.rank)
            if (result.rank >= 1) {
                returnedResults.push(result)
            }
        })
        // console.log(returnedResults)
        if (returnedResults.length === 0) {
            return { error: "No results found :(" };
        } else {
            return returnedResults;
        }
    }
}

module.exports = Result