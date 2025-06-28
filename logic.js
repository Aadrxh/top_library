const lib=[]

function book(title,author,pages,read){
    this.bookId=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;

}

function addtolibrary(title,author,pages,read){
    const newBook=new book(title,author,pages,read);
    lib.push(newBook);
}

function displayLibrary(){
    const container=document.getElementById("library-container");
    container.innerHTML='';

    lib.forEach((book)=>{
        const card=document.createElement('div');
        card.classList.add("book-card");

        card.innerHTML=`
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
    `;
    container.append(card);

    })
}