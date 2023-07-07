const cuadro = document.querySelector ('.cuadro')
const tablacontenido = document.querySelector ('.tablacontenido')
const botoncompra = document.querySelector ('.comprarlibros')

try {
    fetch('productos.json')

    .then(function(response) {
        return response.json();
      })
    .then (datos => {
        let contador = 0;
        while (datos.length > contador){


            let producto = document.createElement ('div')

            let imgref = document.createElement ('div')
            let img = document.createElement ('img')
            let contenido = document.createElement ('div')
            let titulo = document.createElement ('h2')
            let precio = document.createElement ('p')
            let botonagregar = document.createElement ('button')

            producto.setAttribute ('class','producto')
            imgref.setAttribute ('class','imgref')
            img.setAttribute ('src', datos[contador].img)
            contenido.setAttribute ('class','contenido')
            titulo.setAttribute ('class','titulo')
            precio.setAttribute ('class','precio')

            titulo.innerHTML = datos [contador].nombre
            precio.innerHTML = datos [contador] .precio + '$ COL'

            
            botonagregar.setAttribute ('class','botonagregar')
            botonagregar.setAttribute ('value', contador)
            botonagregar.innerHTML = "Agregar a mi carrito"


            producto.appendChild(imgref)
            imgref.appendChild(img)
            producto.appendChild(contenido)
            contenido.appendChild(titulo)
            contenido.appendChild(precio)
            contenido.appendChild(botonagregar)
            

            cuadro.appendChild(producto)

            botonagregar.addEventListener ('click',(e)=> {
                e.preventDefault ()
                let tdGen = document.querySelectorAll('.booksjst')
                           
                const tr = document.createElement('tr')
                const td1 = document.createElement('td')
                const td2 = document.createElement('td')

                td1.setAttribute('class', 'booksjst')
                tr.setAttribute ('class', 'tablajs')
                
                td1.innerHTML = datos [botonagregar.value].nombre
                td2.innerHTML = datos [botonagregar.value].precio

                if (tdGen.length == 0) {
                    
                    tr.appendChild (td1)
                    tr.appendChild (td2)
                    tablacontenido.appendChild (tr)

                } else {

                    tdGen = document.querySelectorAll('.booksjst')

                    tdGen.forEach((elemento, i) => {
                        console.log (elemento);
                         if (elemento.innerHTML == datos [botonagregar.value].nombre ) { 
                         alert ('Este libro ya se agregó a tu carrito')
                             tr.removeChild (td1)
                             tr.removeChild (td2)
                             tablacontenido.removeChild (tr)
                         
                            } else {
                                tr.appendChild (td1)
                                tr.appendChild (td2)
                                tablacontenido.appendChild (tr)
                            }
                    })
                }


                    
            });
            
            contador ++;



        }



        
    })
    } catch (e) {
        console.log (e)
    }

 
botoncompra.addEventListener ('click', (e) => {

const tablajs = document.querySelectorAll ('.tablajs')

    if (tablajs.length == 0) {
        alert ('No has seleccionado ningún libro para llevar. Mira nuestro inventario y presiona el botón de "Agregar a mi carrito"')
    } else {
        tablajs.forEach(elemento => {
            elemento.outerHTML = ''
        })
        alert ('¡Leer es vivir! Gracias por tu cumpra. Disfruta tus libros.')
    }
})
    