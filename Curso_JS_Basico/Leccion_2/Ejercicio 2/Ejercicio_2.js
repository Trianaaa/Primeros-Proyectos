/*
Crea un  nuevo archivo JS que contenga una lista con los siguientes elementos:
1-Nombre (string)
2-Edad (number)
3-¿Eres desarrollador? (Boolean)
4-Fecha de nacimiento (Date)
5-Libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/ 
const fecha_nacimiento = new Date(2003, 02, 08)
const fecha_Libro = new Date(1997, 05, 26)

const libroFav = {
    titulo: "Harry Potter",
    Autor: "J.K Rowling",
    fecha: fecha_Libro,
    url:"https://fecolsa.com.co/upload/Actividades%20Equilibrio%20Total/Rowling%2C%20J.%20K.%20-%20%20Harry%20Potter%20y%20la%20piedra%20filosofal.pdf"
}

const lista = ["Pablo Triana", 19, true, fecha_nacimiento, libroFav];
console.log(lista)