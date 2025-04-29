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

<div class="container text-center mt-4 text-primary-emphasis">
<h1> The book from the books</h1>
<h4> Random pages picked from random books </h4>
</div>

<BooksComponent books={data.books}/>

