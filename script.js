const addBook = document.querySelector(".add-book");

const formContainer = document.querySelector(".form-container");

const bookContainer = document.querySelector(".book-container");

addBook.addEventListener('click', () => {
    //This event listener fills the form container div and adds a form at the bottom of the page that when filled and submitted, will create a new entry for the submitted book
    if(formContainer.innerHTML == "") {
        const form = document.createElement("form");

        const fieldset = document.createElement("fieldset");

        const legend = document.createElement("legend");

        legend.textContent = "Book Info";

        const inputContainer = document.createElement("div");

        const author = document.createElement("input");

        author.setAttribute("placeholder", "Author");

        author.setAttribute("type", "text");

        const title = document.createElement("input");

        title.setAttribute("placeholder", "Title");

        title.setAttribute("type", "text");

        const pages = document.createElement("input");

        pages.setAttribute("placeholder", "Pages");

        pages.setAttribute("type", "number");

        const yearOfCreation = document.createElement("input");

        yearOfCreation.setAttribute("placeholder", "Year Of Creation");

        yearOfCreation.setAttribute("type", "number");

        const readStatus = document.createElement("input");

        readStatus.setAttribute("type", "checkbox");

        readStatus.setAttribute("id", "read-status");

        const readStatusLabel = document.createElement("label");

        readStatusLabel.setAttribute("for", "read-status");

        readStatusLabel.textContent = "Have you finished it?"

        const submitBtn = document.createElement("button");

        submitBtn.textContent = "SUBMIT";

        submitBtn.setAttribute("type", "submit");

        formContainer.appendChild(form);

        form.appendChild(fieldset);

        fieldset.appendChild(legend);

        fieldset.appendChild(inputContainer);

        inputContainer.appendChild(author);

        inputContainer.appendChild(title);

        inputContainer.appendChild(pages);

        inputContainer.appendChild(yearOfCreation);

        inputContainer.appendChild(readStatusLabel);

        inputContainer.appendChild(readStatus);

        inputContainer.appendChild(submitBtn);
    }
})