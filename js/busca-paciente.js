var botaoAdicionar = document.querySelector("#busca-paciente")

botaoAdicionar.addEventListener("click",function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");


    xhr.addEventListener("load",function () {
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
        console.log(xhr.responseText);
       
    })
    xhr.send()
})
