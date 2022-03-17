import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {BookListSuccess} from './BookList';

const openItem = jest.fn();
const changeActiveBook = jest.fn();

const bookarr =
[
  {
      "id": 16,
      "title": "Harry Potter and the Philosopher's Stone",
      "author": "J. K. Rowling",
      "description": "Great book"
  },
  {
      "id": 17,
      "title": "Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "description": "Epic book"
  }
]

const books = {BookList: bookarr}

describe("Book List", () => {
  
  test("BookListSuccess displays second book's title", () => {
    render(<BookListSuccess 
      openItem={openItem} 
      changeActiveBook={changeActiveBook}
      booksdata={books}/>);

    expect(screen.getByTestId("booktitle-1")).toHaveTextContent("Lord of the Rings");
  });

  test("BookListSuccess displays first book's Author", () => {
    render(<BookListSuccess 
      openItem={openItem} 
      changeActiveBook={changeActiveBook}
      booksdata={books}/>);

    expect(screen.getByTestId('bookauthor-0')).toHaveTextContent("By: J. K. Rowling");
  });

  test("Clicking BookListSuccess's second button calls changeActiveBook with the right Id", () => {
    render(<BookListSuccess 
      openItem={openItem} 
      changeActiveBook={changeActiveBook}
      booksdata={books}/>);

      fireEvent.click(screen.getByText("Lord of the Rings"));

      expect(changeActiveBook).toHaveBeenCalledWith(17);
  })

})
