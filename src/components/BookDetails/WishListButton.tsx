"use client";
import { BooksContext } from "../context/BookContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleAddToWishlist = () => {
    console.log("add to wishlist btn triggered", book);

    // setWishlist((prevWishlist) => [...prevWishlist, book]);
    setWishlist([...wishlist, book]);
    toast.success(`You have added "${book.bookName}" to your wishlist`);
  };
  return (
    <button
      className="btn btn-primary flex-1"
      onClick={() => handleAddToWishlist()}
    >
      Add to Wishlist
    </button>
  );
};

export default WishListButton;