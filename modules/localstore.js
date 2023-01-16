export default class storage {

    static setbook(book){
        const allbook = new Array();
        allbook.push(book);
        allbook.forEach((book) => {
            const books = JSON.parse(localStorage.getItem('allbook'));
            if(books === null){
                allbook.push(book);
            }else{
                books.push(book);
            }
        });
    }
}