document.querySelector(".hamburguer").addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");
});

/*

document.querySelector("#qtde").addEventListener("change", atualizarPreco) change = captura mudança de valor dentro do input
document.querySelector("#js").addEventListener("change", atualizarPreco) 
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("value", function() {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value
    const temJs = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    prazo = document.querySelector("#prazo").value

        let preco = qtde *100;
    if (temJs) {
        preco = preco + (preco * 0.10)
    }
    if (incluiLayout) {
        preco = preco + 500
    }
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2).toString().replace(".", ",")}`  
}

*/
