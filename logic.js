document.addEventListener("DOMContentLoaded", function() {
    const lib=[];

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

        const addCard = document.createElement("div");
        addCard.classList.add("book-card", "add-book-card");
        addCard.innerHTML = `
            <div class="overlay">
                <div class="overlay-text">+ Add Book</div>
            </div>
        `;
        addCard.addEventListener("click", () => {
            document.getElementById("add-book-modal").classList.remove("hidden");
        });
        container.appendChild(addCard);

        lib.forEach((book, idx)=>{
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

            // Button container absolutely positioned over the image
            const btnContainer = document.createElement('div');
            btnContainer.style.position = 'absolute';
            btnContainer.style.bottom = '10px';
            btnContainer.style.left = '50%';
            btnContainer.style.transform = 'translateX(-50%)';
            btnContainer.style.display = 'flex';
            btnContainer.style.justifyContent = 'center';
            btnContainer.style.gap = '8px';
            btnContainer.style.zIndex = '3';

            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>';
            deleteBtn.className = 'delete-btn';
            deleteBtn.title = 'Delete';
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                lib.splice(idx, 1);
                displayLibrary();
            });
            btnContainer.appendChild(deleteBtn);

            // Toggle read button
            const toggleReadBtn = document.createElement('button');
            toggleReadBtn.textContent = book.read ? 'Unread' : 'Read';
            toggleReadBtn.className = 'toggle-read-btn';
            toggleReadBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                book.read = !book.read;
                displayLibrary();
            });
            btnContainer.appendChild(toggleReadBtn);

            card.append(overlay);
            card.appendChild(btnContainer);
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

    addtolibrary("Shrek", "William Steig", 310, true, "https://i.pinimg.com/236x/ee/4f/b1/ee4fb15c83d22e0a428fc37127191346.jpg");
    addtolibrary("JoJo's Bizarre Adventures", "Hirohiko Araki", 3000, true, "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/JoJo_Part_1_Phantom_Blood.jpg/250px-JoJo_Part_1_Phantom_Blood.jpg");
    addtolibrary("Monsters Inc", "Disney or smthing", 310, false, "https://static.tvtropes.org/pmwiki/pub/images/1000001460.png");
    displayLibrary();

    document.getElementById("submit-new-book").addEventListener('click',()=>{
        const title=document.getElementById("new-title").value;
        const author=document.getElementById("new-author").value;
        const pages=parseInt(document.getElementById("new-page").value,10);
        const read=document.getElementById("new-read").checked;
        const cover=document.getElementById("new-cover").value;

        if (!title || !author || isNaN(pages) || !cover) {
            alert("Please fill in all fields correctly.");
            return;
        }

        addtolibrary(title,author,pages,read,cover);
        displayLibrary()

        document.getElementById("add-book-modal").classList.add("hidden");
        document.getElementById("new-title").value = "";
        document.getElementById("new-author").value = "";
        document.getElementById("new-page").value = "";
        document.getElementById("new-cover").value = "";
        document.getElementById("new-read").checked = false;
    })
    document.getElementById("close-add-modal").addEventListener("click", () => {
        document.getElementById("add-book-modal").classList.add("hidden");
    });
});