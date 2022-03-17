function algoritmo(){
    let descuento, monto_de_venta, monto_total;
    monto_de_venta = parseFloat (document.formulario1.monto_de_venta.value);
    descuento=0;
    if(monto_de_venta>=500&&monto_de_venta<1500)
        descuento=descuento*0.15;
    if(monto_de_venta>=1500&&monto_de_venta<5000)
        descuento=descuento*0.15;
    if(monto_de_venta>=5000)
        descuento=descuento*0.15;
    monto_total=monto_de_venta-descuento;
    document.formulario1.descuento.value = descuento;
    document.formulario1.monto_total.value = monto_total;
}