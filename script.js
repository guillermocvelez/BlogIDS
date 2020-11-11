const toggler = document.getElementById('toggle-btn');
const nav = document.getElementById('header-nav');
const menu = document.getElementById('lateralMenu');





toggler.addEventListener('click',function(event){
    event.preventDefault();
    menu.classList.toggle('active');
    setTimeout(function(){
        menu.classList.remove('active')
    },4000)
          
});


//filter buttons
(function(){

    //seleccionar todos los botones
    const filterBtn = document.querySelectorAll('.filter-button');
    console.log(filterBtn);

    filterBtn.forEach(function(btn){
        btn.addEventListener('click',function(event){
            event.preventDefault();//previene el efecto default del evento
            const value = event.target.dataset.filter;//seleccionamos el atributo data-target del elemento q general el evento.
            //console.log(value);

            const items = document.querySelectorAll('.store-item');//selecciono todos los items que tienen la clase .store-items

            //console.log(items);
            //recorremos todos los items
            items.forEach(function(item){
                if(value ==='todos'){
                    item.style.display = 'block';
                    //este bloque sirve para desplegar todos los artículos
                }
                else{
                    if(item.classList.contains(value)){
                        //si el item contiene la clase la cual se está capturando con el evento, lo mostramos
                        item.style.display = 'block';
                    }
                    else{

                        //si el item no tiene la clase capturada por el event la escondemos
                        item.style.display = 'none';
                    }
                }

            })
            
        })
    })
})();

//search input
(function(){
//agregamos el atributo dta-item que debe tener el mismo valor que la clase y el data filter

//target el id buscar
const buscar = document.getElementById('buscar');
console.log(buscar);

buscar.addEventListener('keyup',function(){
    let valor = buscar.value.toLowerCase().trim();
    //console.log(valor);
    const items = document.querySelectorAll('.store-item');
    //console.log(items);
    items.forEach(function(item){
        let type = item.dataset.item;
        //console.log(type);

        if(type.includes(valor)){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
})
})();

(function(){
   const registro = document.getElementById('registry');
   const modal = document.getElementById('modal');
   const cerrar = document.getElementsByClassName('closeBtn');

   registro.addEventListener('click',function(event){
    event.preventDefault();
    
    modal.classList.remove('hide');
   });

   cerrar.addEventListener('click',function(event){
       event.preventDefault();
    modal.classList.add('hide');

   });
    
})();




