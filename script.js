function conversor(){
    let valorWons = document.getElementById("valorWons").value;
    let valorWonsNumerico = parseFloat(valorWons);
    if (isNaN(valorWonsNumerico)|| valorWonsNumerico <= 0){
        alert("Por favor informe um valor Numérico Válido")
        return;
        }
    let taxaConversao = 0.0044;
    let valorReal = valorWonsNumerico * taxaConversao;
    document.getElementById('resultado').innerHTML = "O valor convertido em reais é R$" + valorReal.toFixed(2);
}




