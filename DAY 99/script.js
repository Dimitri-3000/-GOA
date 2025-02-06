let a;

const pe = document.getElementById("kk");

    fetch('https://fakestoreapi.com/products/1')

         .then(x => {return x.json()}).then(x => {console.log(x);return x})

         .then(aa => pe.innerHTML = `category: ${aa.category} <br> 
                                        description: ${aa.description} <br> 
                                        id: ${aa.id} <br> image: ${aa.imige} <br>  
                                        Price: ${aa.price} <br> rating: ${aa.rating} <br> 
                                        Title: ${aa.title} <br>`); 





