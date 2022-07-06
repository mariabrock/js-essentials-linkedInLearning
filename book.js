class Book {
  constructor(
    //props
    title,
    author,
    illustrator,
    description,
    publisher,
    language,
    copyrightDate,
    isbn,
    pageNumber,
    isNew,
    dateAcquired
  ) {
    this.title = title;
    this.author = author;
    this.illustrator= illustrator;
    this.description = description;
    this.publisher = publisher;
    this.language = language;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.pageNumber = pageNumber;
    this.isNew = isNew;
    this.dateAcquired = dateAcquired;
  }
//methods
  bookAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  };
  updateLanguage(input) {
    let input = this.language;
    if(language === "") {
      return input;
    }
  };
}
export default Book;