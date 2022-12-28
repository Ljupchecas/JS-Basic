function book (){
    let nameOfBook = {
       name: document.getElementById('title').value,
       author: document.getElementById('author').value,
       status: document.getElementById('status').value,

       readingStatus: function(){
        if(this.status == 'yes'){
            return `Already read ${this.name} by ${this.author}`
        } else {
            return `You need to read ${this.name} by ${this.author}`
        }
       }
    }
    document.getElementById('readingStatus').innerHTML = nameOfBook.readingStatus();
}
