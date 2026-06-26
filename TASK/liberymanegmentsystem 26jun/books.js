let books = [];
let id = 1;

function addBook() {
    let name = prompt("Enter Book Name");
    let author = prompt("Enter Author Name");
    let category = prompt("Enter Category");
    let quantity = Number(prompt("Enter Quantity"));

    let book = {
        id: id,
        bookName: name,
        author: author,
        category: category,
        quantity: quantity
    };
    id++;
    books.push(book);

    displayBooks();
}

function displayBooks() {
    let result = "";
    books.forEach(function (book) {
        result += `
        <tr>
            <td>${book.id}</td>
            <td>${book.bookName}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.quantity}</td>
        </tr>
        `;
    });

    document.getElementById("bookList").innerHTML = result;
    document.getElementById("total").innerHTML ="Total Books : " + books.length;
}

function issueBook() {
    let bookId = Number(prompt("Enter Book ID"));

    let book = books.find(function (b) {
        return b.id === bookId;
    });

    if (book && book.quantity > 0) {
        book.quantity--;
        alert("Book Issued Successfully");
    } else {
        alert("Book Not Available");
    }

    displayBooks();
}

function returnBook() {
    let bookId = Number(prompt("Enter Book ID"));

    let book = books.find(function (b) {
        return b.id === bookId;
    });

    if (book) {
        book.quantity++;
        alert("Book Returen Successfully");
    }
    displayBooks();
}

function deleteBook() {
    let bookId = Number(prompt("Enter Book ID"));

    books = books.filter(function (book) {
        return book.id !== bookId;
    });

    displayBooks();
}
