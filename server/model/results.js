const resultsList = require("../data")

class Result {
    constructor(data) {
        this.index = resultsList.findIndex(data);
        this.url = data.url;
        this.title = data.title;
        this.body = data.body;
    }
    
}