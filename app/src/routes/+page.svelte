<script>
  import BooksComponent from '../components/books.svelte';
  export let data;
</script>

<svelte:head>
  <!-- HTML Meta Tags -->
  <title>The Book of Books</title>
  <meta
    name="description"
    content="The book of books: a book made from random page from books"
  />
</svelte:head>


<BooksComponent books={data.books}/>

