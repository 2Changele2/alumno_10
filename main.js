window.onload = function () {

    var agregarTarea = function (tarea)
    {
        var nuevoItem = document.createElement("li");

        nuevoItem.className = "el-lista"
        switch (contador++ % 3)
        {
            case 0:
                nuevoItem.classList.add("child-one");
                break;
            case 1:
                nuevoItem.classList.add("child-two");
                break;
            case 2:
                nuevoItem.classList.add("child-three");
                break;
            default:
                break;
        }


        // Crea un nodo de texto
        var nuevoContenido = document.createTextNode(tarea);
        // Añade texto al elemento creado.
        nuevoItem.appendChild(nuevoContenido);
        // Añade el elemento creado y su contenido al DOM
        currentUl.append(nuevoItem);
    }
    
    var contador = 0;
    var add = document.getElementById("add-task");
    var del = document.getElementById("delete-task");
    var del_individual = document.getElementById("delete-individual-task");
    var areaTexto = document.getElementById("nueva-tarea");
    var currentUl = document.getElementById("current-ul");
    var listaTareas = JSON.parse(localStorage.getItem('lista')) || [];

    listaTareas.forEach(tarea => 
    {
        agregarTarea(tarea);   
    });

    add.onclick = function () 
    {
        agregarTarea(areaTexto.value);
        listaTareas.push(areaTexto.value);
        areaTexto.value = "";
        localStorage.setItem('lista', JSON.stringify(listaTareas));
    }

    del.onclick = function ()
    {
        localStorage.clear(listaTareas);
        currentUl.innerHTML = "";
        // for (let child in currentUl) {
        //     currentUl.remove(child)
        // }
    }

    del_individual.onclick = function()
    {
        localStorage.clear('li');
        currentUl.innerHTML = "";

    }
}
