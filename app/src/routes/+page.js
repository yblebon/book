import {getBooks} from '$lib/dataloader.js';

/** @type {import('./$types').PageLoad} */
export function load() {

  let books = getBooks();

  return {
    books: books
  };
}
