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

        author.setAttribute("required", "true")

        const title = document.createElement("input");

        title.setAttribute("placeholder", "Title");

        title.setAttribute("type", "text");

        title.setAttribute("required", "true")

        const pages = document.createElement("input");

        pages.setAttribute("placeholder", "Pages");

        pages.setAttribute("type", "number");

        pages.setAttribute("required", "true")

        const yearOfCreation = document.createElement("input");

        yearOfCreation.setAttribute("placeholder", "Year Of Creation");

        yearOfCreation.setAttribute("type", "number");

        yearOfCreation.setAttribute("required", "true")

        const readStatus = document.createElement("input");

        readStatus.setAttribute("type", "checkbox");

        readStatus.setAttribute("id", "read-status");

        readStatus.setAttribute("required", "true");

        const readStatusLabel = document.createElement("label");

        readStatusLabel.setAttribute("for", "read-status");

        readStatusLabel.textContent = "Have you finished it?"

        const submitBtn = document.createElement("button");

        submitBtn.textContent = "SUBMIT";

        submitBtn.setAttribute("type", "submit");

        submitBtn.addEventListener('click', (event) => {
            if(author.value != "" && title.value != "" && pages.value != "" && yearOfCreation.value != "") {
                event.preventDefault();
                createBookEntry(book(author.value, title.value, pages.value, yearOfCreation.value, readStatus.checked))
            }
        })

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

function book(author, title, pages, yearOfCreation, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.yearOfCreation = yearOfCreation;
    this.readStatus = readStatus;

    return this;
}

function createBookEntry(book) {
    /*book.author
    book.title
    book.pages
    book.yearOfCreation
    book.readStatus*/

    const tableContainer = document.createElement("div");

    const table = document.createElement("table");

    const tableRow = document.createElement("tr");

    const authorCell = document.createElement("td");

    authorCell.textContent = `Author: ${book.author}`;

    const titleCell = document.createElement("td");

    titleCell.textContent = `Title: ${book.title}`;

    const pagesCell = document.createElement("td");

    pagesCell.textContent = `Pages: ${book.pages}`;

    const yearCell = document.createElement("td");

    yearCell.textContent = `Year: ${book.yearOfCreation}`;

    const statusCell = document.createElement("td");

    const statusBtn = document.createElement("button");

    statusBtn.setAttribute("type", "button");

    if (book.readStatus == true) {
        statusBtn.textContent = "Finished";
        statusBtn.setAttribute("class", "finished")
    }
    else {
        statusBtn.textContent = "In progress";
        statusBtn.setAttribute("class", "in-progress")
    }

    statusBtn.addEventListener('click', () => {
        if (statusBtn.textContent == "Finished") {
            statusBtn.textContent = "In progress";
            statusBtn.setAttribute("class", "in-progress")
        }
        else {
            statusBtn.textContent = "Finished";
            statusBtn.setAttribute("class", "finished")
        }
    })

    bookContainer.appendChild(tableContainer)

    tableContainer.appendChild(table);

    table.appendChild(tableRow);

    tableRow.appendChild(authorCell);

    tableRow.appendChild(titleCell);

    tableRow.appendChild(pagesCell);

    tableRow.appendChild(yearCell);

    tableRow.appendChild(statusCell);

    statusCell.appendChild(statusBtn);

    formContainer.innerHTML = "";
}