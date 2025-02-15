const p = document.getElementById("p1");


fetch('https://fakestoreapi.com/carts/1')
            .then(x => x.json())
            .then(y => p.innerHTML = `date: ${y.date} <br> 
                                        ID: ${y.id} <br> 
                                        User ID: ${y.userId} <br>
                                        __v: ${y.__v}`)


const p2 = document.getElementById("p2")





fetch('https://fakestoreapi.com/carts?limit=5')
                .then(x => x.json())
                .then(x => {p2.innerHTML = `USER 1: <br>_________________ <br>  ID: ${x[0].id} <br>  
                                                        user ID: ${x[0].userId} <br>
                                                        Date: ${x[0].date} <br> <br>
                                            USER 2: <br> _________________ <br> ID: ${x[1].id} <br>
                                                        user ID: ${x[1].userId} <br>
                                                        Date: ${x[1].date}
                                            <br> <br>
                                            USER 3: <br> _________________ <br> ID: ${x[2].id} <br>
                                                        user ID: ${x[2].userId} <br>
                                                        Date: ${x[2].date}
                                            <br> <br>
                                            USER 4: <br>_________________  <br> ID: ${x[3].id} <br>
                                                        user ID: ${x[3].userId} <br>
                                                        Date: ${x[3].date}
                                            <br> <br>
                                            USER 5: <br> _________________ <br> ID: ${x[4].id} <br>
                                                        user ID: ${x[4].userId} <br>
                                                        Date: ${x[4].date}`; console.log(x)})

const p3 = document.getElementById("p3")


fetch('https://fakestoreapi.com/products/category/jewelery')
                    .then(x => x.json())
                    .then(p => p3.innerHTML = `ONE:  <br> ID: ${p[0].id} <br> Title: "${p[0].title}" <br> <br>
                                                TWO:  <br> ID: ${p[1].id} <br> Title: "${p[1].title}" <br> <br>
                                                THREE: <br> ID: ${p[2].id} <br> Title: "${p[2].title}" <br> <br>
                                                FOUR: <br> ID: ${p[3].id} <br> Title: "${p[3].title}"`)
