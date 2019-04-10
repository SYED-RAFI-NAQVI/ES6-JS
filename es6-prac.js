////functions in objects


var book1 = {
    name : "neural nets",
    pages : 50,
    incrementOfPages () {
        this.pages++;
    }
}

book1.incrementOfPages()
console.log(book1);

