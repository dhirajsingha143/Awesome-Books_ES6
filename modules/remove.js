export default class RemoveBook{
    static remove(book){
        const removeBtn = document.querySelectorAll('.rem-btn');
        removeBtn.addevetListener('click', () => {
            allbook = allbook.filter((book) => {
                if(book.id == book.id){
                    book.remove();
                }else{
                    return false;
                }
            });
        });
    }
}


// some errrors are there but i am not able to find them