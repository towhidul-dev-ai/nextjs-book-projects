"use client";
import { BooksContext } from "../context/BookContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleReadBook = () => {
    console.log("read book btn triggered", book);

    // setReadBooks((prevReadBooks) => [...prevReadBooks, book]);
    setReadBooks([...readBooks, book]);
    toast.success(`You have read "${book.bookName}"`);
  };
  return (
    <button className="btn btn-primary flex-1" onClick={() => handleReadBook()}>
      Read
    </button>
  );
};

export default ReadButton;