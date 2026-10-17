// All featured books live here. To add a book, add an object to this array –
// the grid, the category filter and the cart all pick it up automatically.
  const img = (file) => `${import.meta.env.BASE_URL}images/${file}`
export const books = [
  {
    id: 'gatsby',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 400,
    category: 'Classics',
    image: '/images/gatsby.webp',
    alt: 'The Great Gatsby resting on a table',
  },
  {
    id: 'english-grammar',
    title: 'English Grammar',
    author: 'T.Y Drozdova, V.G Berezina & A.I Kurotchkina',
    price: 500,
    category: 'Reference',
    image: '/images/english-grammar.webp',
    alt: 'English Grammar textbook on a wooden table',
  },
  {
    id: 'nineteen-eighty-four',
    title: '1984',
    author: 'George Orwell',
    price: 450,
    category: 'Dystopian',
    image: '/images/nineteen-eighty-four.webp',
    alt: '1984 on a cosy bookshelf',
  },
  {
    id: 'pride-and-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 380,
    category: 'Classics',
    image: '/images/book-reading.webp',
    alt: 'A person reading a book',
  },
  {
    id: 'brave-new-world',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    price: 420,
    category: 'Dystopian',
    image: '/images/books-on-shelf.webp',
    alt: 'Rows of books on a shelf',
  },
  {
    id: 'elements-of-style',
    title: 'The Elements of Style',
    author: 'William Strunk Jr. & E.B. White',
    price: 350,
    category: 'Reference',
    image: '/images/tabletop-display.webp',
    alt: 'A tabletop display of books in a cosy bookstore',
  },
]

export const categories = ['All', ...new Set(books.map((b) => b.category))]
