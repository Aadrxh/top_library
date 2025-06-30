const lib=[]

function book(title,author,pages,read,cover){
    this.bookId=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.cover=cover;

}

function addtolibrary(title,author,pages,read,cover){
    const newBook=new book(title,author,pages,read,cover);
    lib.push(newBook);
}

function displayLibrary(){
    const container=document.getElementById("library-container");
    container.innerHTML='';

    lib.forEach((book)=>{
        const card=document.createElement('div');
        card.classList.add("book-card");

        const img=document.createElement('img');
        img.src=book.cover;
        img.alt=book.title;
        card.append(img);

        const overlay=document.createElement('div');
        overlay.classList.add("overlay");

        const overlayText = document.createElement('div');
        overlayText.classList.add("overlay-text");
        overlayText.textContent = book.title;

        overlay.append(overlayText);
        card.append(overlay);
        container.append(card);

        card.addEventListener('click',()=>{
            document.getElementById("modal-title").textContent=book.title;
            document.getElementById("modal-author").textContent=`Author: ${book.author}`;
            document.getElementById("modal-pages").textContent=`Pages: ${book.pages}`;
            document.getElementById("modal-read").textContent=`Read: ${book.read? "Yes":"No"}`;
            document.getElementById("modal-cover").src=book.cover;
            document.getElementById("book-modal").classList.remove("hidden");
        })

    })
}
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("book-modal").classList.add("hidden");
});

addtolibrary("The Hobbit", "J.R.R. Tolkien", 310, true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaBsI5gCyidgf8UY1iRE86QQbY2aAR11uTw&s");
addtolibrary("The Hobby in the lobby of the crabby patties", "J.R Tolkien", 30, false, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaBsI5gCyidgf8UY1iRE86QQbY2aAR11uTw&s");
addtolibrary("The Hobbit", "J.R.R. Tolkien", 310, true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaBsI5gCyidgf8UY1iRE86QQbY2aAR11uTw&s");
addtolibrary("The Hobbit", "J.R.R. Tolkien", 310, true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaBsI5gCyidgf8UY1iRE86QQbY2aAR11uTw&s");
addtolibrary("The Hobbit", "J.R.R. Tolkien", 310, true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaBsI5gCyidgf8UY1iRE86QQbY2aAR11uTw&s");
addtolibrary("The Hobbit", "J.R.R. Tolkien", 310, true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaBsI5gCyidgf8UY1iRE86QQbY2aAR11uTw&s");
addtolibrary("The Hobbit", "J.R.R. Tolkien", 310, true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaBsI5gCyidgf8UY1iRE86QQbY2aAR11uTw&s");
addtolibrary("The Hobbit", "J.R.R. Tolkien", 310, true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaBsI5gCyidgf8UY1iRE86QQbY2aAR11uTw&s");
addtolibrary("The Hobbit", "J.R.R. Tolkien", 310, true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaBsI5gCyidgf8UY1iRE86QQbY2aAR11uTw&s");
addtolibrary("The Hobbit", "J.R.R. Tolkien", 310, true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaBsI5gCyidgf8UY1iRE86QQbY2aAR11uTw&s");
addtolibrary("The Hobbit", "J.R.R. Tolkien", 310, true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaBsI5gCyidgf8UY1iRE86QQbY2aAR11uTw&s");
displayLibrary();
