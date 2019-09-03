$(document).ready(() => {
  getBooksByTopic();
  overRideFormBehaviour();
  handleNavItems();
});

function displayAllBooksToList(books) {
  let bookList = $("#star-wars-list");
  bookList.html("");
  bookList.hide();
  $("#loadingSpinner").show();
  books.forEach(book => {
    try {
      let listItem = $("<div>");
      listItem.addClass("col-sm-3");
      let image = $("<img>");
      image.attr("src", book.volumeInfo.imageLinks.thumbnail);
      image.attr({ height: "170px", width: "130px" });
      listItem.append(image);
      let name = $("<p>");
      name.addClass("person-name");
      name.text(`Title: ${book.volumeInfo.title}`);
      listItem.append(name);
      let details = $("<ul>");
      let gender = $("<li>");
      let height = $("<li>");
      gender.text(`Publisher: ${book.volumeInfo.publisher}`);
      height.text(`${book.volumeInfo.pageCount} pages`);
      details.append(gender);
      details.append(height);
      details.hide();
      name.on("click", () => {
        details.toggle(500);
      });
      listItem.append(details);
      bookList.append(listItem);
    } catch (error) {
      console.log("Error on loading a book: ");
      console.log(error);
      console.log(book);
    }
  });
  $("#loadingSpinner").hide();
  bookList.show();
}

function getBooksByTopic(topic = "javascript") {
  try {
    $.ajax(
      settings(`https://www.googleapis.com/books/v1/volumes?q=${topic}`)
    ).done(data => {
      displayAllBooksToList(data.items);
    });
  } catch (error) {
    console.log(error);
  }
}

function changeBooks(topic) {
  //make a call
  getBooksByTopic(topic);
  //change title
  $("#title").text(`This is a list of books for ${topic}`);
}

function overRideFormBehaviour() {
  let form = $("#search-form");
  form.submit(e => {
    e.preventDefault();
    let searchInput = $("input:first").val();
    $("input:first").val("");
    if (searchInput === undefined || searchInput === "") {
      console.log("Empty text in search input");
    } else {
      changeBooks(searchInput);
    }
  });
}

function handleNavItems() {
  let navItems = $(".nav-item");
  navItems.each((index, element) => {
    let item = $(element);
    let children = item.children();
    let text;
    children.each((index, element) => (text = $(element).text()));
    item.on("click", e => {
      e.preventDefault();
      changeBooks(text);
      let activeItems = $(".active");
      activeItems.each((index, activeItem) => {
        $(activeItem).removeClass("active");
      });
      item.addClass("active");
    });
  });
}
