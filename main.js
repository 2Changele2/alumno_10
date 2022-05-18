window.onload = function () {
    var contador = 0;
    var btn = document.getElementById("add-task");
    var areaTexto = document.getElementById("nueva-tarea");
    var listaDesordenadaPar = document.getElementById("lista-rellenar");
    var listaDesordenadaImpar = document.getElementById("lista-rellenar");

    btn.onclick = function () {
        contador++;

        var contadorClasifica = contador % 2;
        var nuevoTexto = areaTexto.value;

        var nuevoItemListaPar = document.createElement("li");
        var nuevoItemListaImpar = document.createElement("li");



        var contenidoNuevoPar = document.createTextNode(nuevoTexto);
        var contenidoNuevoImpar = document.createTextNode(nuevoTexto);



        nuevoItemListaPar.className = "el-lista-par";
        nuevoItemListaImpar.className = "el-lista-impar";


        if (contadorClasifica == 0) 
        {
            nuevoItemListaPar.appendChild(contenidoNuevoPar);
            listaDesordenadaPar.append(nuevoItemListaPar);

        }
        else
        {
            nuevoItemListaImpar.appendChild(contenidoNuevoImpar);
            listaDesordenadaImpar.append(nuevoItemListaImpar);

        }
         


        {
            nuevoItemLista.appendChild(contenidoNuevo);
            listaDesordenada.append(nuevoItemLista);

        }





    }
}