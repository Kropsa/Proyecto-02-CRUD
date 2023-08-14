function validarFormulario(){
    let nombre = document.getElementById('inputName').value;
    let email = document.getElementById('inputEmail').value;
    let fecha = document.getElementById('inputDay').value;
    let hora = document.getElementById('inputHour').value;
    if (nombre == "") {
        alert('el Nombre es requerido');
        return false;
    }
    if (email == "") {
        alert('el Email es requerido');
        return false;
    }
    if (fecha == "") {
        alert('la Fecha es requerida');
        return false;
    }
    if (hora == "") {
        alert('la Hora es requerida');
        return false;
    }
    return true;
}
function showData() {
    let listPeople;
    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];

    } else {
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }
    let html = "";
    listPeople.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.nombre + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.fecha + "</td>";
        html += "<td>" + element.hora + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Eliminar dato</button> <button onclick="updateData(' + index + ')" class="btn btn-warning">Editar Datos</button></td>';
        html += "</tr>";
    });
    document.querySelector('#tableData tbody').innerHTML = html;

}
document.onload = showData();

function addData() {
    if (validarFormulario() == true) {
        let nombre = document.getElementById('inputName').value;
        let email = document.getElementById('inputEmail').value;
        let fecha = document.getElementById('inputDay').value;
        let hora = document.getElementById('inputHour').value;
        let listPeople;

        if (localStorage.getItem('listPeople') == null) {
            listPeople = [];

        } else {
            listPeople = JSON.parse(localStorage.getItem("listPeople"));
        }
        listPeople.push({
            email: email,
            nombre: nombre,
            fecha: fecha,
            hora: hora,
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));
        showData();

        document.getElementById('inputName').value = "";
        document.getElementById('inputEmail').value = "";
        document.getElementById('inputDay').value = "";
        document.getElementById('inputHour').value = "";

    }
}
function deleteData(index) {
    let listPeople;
    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];

    } else {
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }
    listPeople.splice(index, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));
    showData();
}
function updateData(index){
    document.getElementById("btnAdd").style.display = 'none';
    document.getElementById("btnUpdate",btnAdd).style.display = 'block';

    let listPeople;
    if (localStorage.getItem('listPeople') == null){
        listPeople=[];

    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }
    document.getElementById('inputName').value = listPeople[index].nombre;
    document.getElementById('inputEmail').value = listPeople[index].email;
    document.getElementById('inputDay').value = listPeople[index].fecha;
    document.getElementById('inputHour').value = listPeople[index].hora;

    document.querySelector("#btnUpdate").onclick=function(){
        if(validarFormulario()==true){
            listPeople[index].nombre =document.getElementById('inputName').value
            listPeople[index].email =document.getElementById('inputEmail').value
            listPeople[index].fecha =document.getElementById('inputDay').value
            listPeople[index].hora =document.getElementById('inputHour').value

            localStorage.setItem('listPeople', JSON.stringify(listPeople));

            showData();
            document.getElementById('inputName').value="";
            document.getElementById('inputEmail').value= "";
            document.getElementById('inputDay').value="";
            document.getElementById('inputHour').value="";

            document.getElementById("btnAdd").style.display='block';
            document.getElementById("btnUpdate",btnAdd).style.display='none';
        }
    };
}