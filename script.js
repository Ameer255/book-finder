const searchBtn = document.getElementById("search-btn");



searchBtn.addEventListener(("click"), ()=>{
    const searchText = document.getElementById("search-box").value;
    const container = document.querySelector(".main");

    container.innerHTML = "Loading Books..."


    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}`;

    fetch(url)
  .then(response => response.json())
  .then(result => { 

    console.log(result)


    container.innerHTML = 
      result.items.map(book => {
          let link = `https://books.google.com.pk/books?id=${book.id}`;
          return( `            
<div class="book-info">
    <div class="title">

    <strong> <a href="${link}" target="_blank" > ${book.volumeInfo.title}  </a> </strong>
    
    </div>
    <div class="additional-info">
        <div class="book-img"><img src="${book.volumeInfo.imageLinks.thumbnail}" alt="img"></div>
        <div class="more-info"> 
            <strong>Author : </strong> ${book.volumeInfo.authors[0]}<br>
            <Strong>Publisher : </Strong> ${book.volumeInfo.publisher ? book.volumeInfo.publisher : " " }<br>
            <strong>Published :</strong> ${book.volumeInfo.publishedDate}<br>
            ${book.volumeInfo.subtitle ? book.volumeInfo.subtitle : " "  }
        
        </div>
    </div>
</div>
`)
          
      })

  }).catch((error) =>{
      container.innerHTML = "Error..! Please check your internet connection";
  })



})




