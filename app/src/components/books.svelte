<script>
  import { base } from "$app/paths";
  export let books;
  console.log(books);
</script>

<div class="accordion mx-auto mt-4" style="max-width: 540px;" id="accordionPanelsStayOpenExample">
  
  {#each books as book, index}

    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-{index}" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          {book.title}
        </button>
      </h2>
      <div id="panelsStayOpen-{index}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
        <div class="accordion-body">
          <div class="row g-0">
    <div class="col-md-4">
      <img src="{book.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body ms-2">
        <p class="card-text">{@html book.extrait}</p>
        <p class="card-text"><small class="text-muted">   <a
        href=""
        class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >link</a
      ></small></p>
      </div>
    </div>
  </div>
        </div>
      </div>
    </div>

  {/each}
  
</div>
