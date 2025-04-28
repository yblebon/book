import { get, writable, readonly } from 'svelte/store';

import config from '$lib/data/config.json';
import books from '$lib/data/books.json';

var dataStore = null;

export function getBooks() {
  return get(dataStore);
}

export function initStore() {
  dataStore = readonly(writable(books));
}



