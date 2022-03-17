function algoritmo()
{
    let n;
    let capital_a_depositar_en_euros, capital_total_acumulado, duracion_del_deposito_en_semanas, tasa_de_interes;
    capital_a_depositar = parseFloat (document.formulario1.capital_a_depositar.value);
    duracion_del_deposito_en_semanas = parseFloat (document.formulario1.duracion_del_deposito_en_semanas.value);
    tasa_de_interes = parseFloat (document.formulario1.tasa_de_interes.value);
    capital_total_acumulado=capital_a_depositar*Math.pow(1.0+tasa_de_interes/100/365,duracion_del_deposito_en_semanas*7);
    document.formulario1.capital_total_acumulado.value = capital_total_acumulado;
}