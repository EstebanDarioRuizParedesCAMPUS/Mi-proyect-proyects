const url = 'http://localhost:5000/api/categorias'
const tbody = document.getElementById('llenar-categorias')

const cargarTabla = async () =>{
    try {
        const fetish = await fetch(url)
        const respuesta = await fetish.json()
        console.log(respuesta);
        respuesta.forEach(element => {
            const filaNuewva = document.createElement('tr')
            const {CategoriaID,CategoriaNombre,Descripcion,Imagen} = element
            filaNuewva.innerHTML = `
                <td scope="col">${CategoriaID}</td>
                <td scope="col">${CategoriaNombre}</td>
                <td scope="col">${Descripcion}</td>
                <td scope="col">${Imagen}</td>
                <td scope="col">
                    <button id="${CategoriaID}" class="dell btn btn-danger">Eliminar</button>
                </td>
                <td scope="col">
                    <button id="${CategoriaID}" class="updt btn btn-warning">Actaulizar</button>
                </td>
                <td scope="col">
                    <button id="${CategoriaID}" class="dett btn btn-primary">Detalles</button>
                </td>
            `
            tbody.appendChild(filaNuewva)
        });
    } catch (error) {
        console.log(error);
    }
    
}

document.addEventListener("DOMContentLoaded",cargarTabla)