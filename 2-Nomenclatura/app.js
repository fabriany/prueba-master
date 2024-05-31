// Original funcion
function f(x, y, z) {
    let a = x + y;
    let b = a * z;
    let c = Math.sin(b);
    return c;
}

//Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor su función.

function senoDelProducto(sumandoX, sumandoY, factorZ) {
    let sumaXY = sumandoX + sumandoY;
    let productoXYZ = sumaXY * factorZ;
    let senoDelProducto = Math.sin(productoXYZ);
    return senoDelProducto;
}