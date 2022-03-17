function algoritmo()
{
    let comision, venta;
    venta = parseFloat (document.formulario1.venta.value);
    if(venta>=200000)
        comision=venta*0.07;
    else
        comision=venta*0.02;
    document.formulario1.comision.value = comision;
}
 