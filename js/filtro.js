var filtro = document.querySelector("#filtro");

filtro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente")

    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length;i++){
            var paciente = pacientes[i];

            var tdNome = paciente.querySelector(".info-nome");
            nome = tdNome.textContent;
            console.log(nome);
            
            //RegExp = expressões regulares, para fazer a busca não somente com o nome inteiro
            var expressao = new RegExp(this.value,"i"); //o parametro "i" é para ser case-Insensitive
            
            if(expressao.test(nome)){
                paciente.classList.remove("invisivel");
            }else{
                paciente.classList.add("invisivel");
            }
        }
    }else{ 
        for(var i = 0; i < pacientes.length;i++){
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
            console.log(2);
            
        }
    }
}) ; 