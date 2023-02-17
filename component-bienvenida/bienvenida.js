function recibirDatosDeContenful(){
    return fetch("https://cdn.contentful.com/spaces/k01rzjc5rdh9/environments/master/entries?access_token=88dcmv3icIiydCX8eG7cjCnlBeXl2Tv-n589B3EGU8I%&&content_type=contenidoDeLaHome"
    )
    .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const fieldscollections = data.items.map((item) => {
            return {
              titulo: item.fields.tittle,
              img: data.fields.file.url
            };
          });
    
          return fieldscollections;
        });  
}
recibirDatosDeContenful();


/*function createCompWelcome(el){
    const welcomeEl = document.createElement("div")

    welcomeEl.innerHTML = `
    <div class="presentacion-title__content">
    <h2 class="presentacion-title"></h2>
    <img src="image 1.png"  class="img__presentacion-title"  alt="">
    </div>;
    `

   el.appendChild(welcomeEl);

}*/