function carregar() {
    const container = document.querySelector(".container");

    fetch("http://127.0.0.1:3000/api/alunos")
        .then((res) => res.json())
        .then((dados) => {
            let saida = "";
            dados.map((rs) => {
                saida += `
            <div class="card col-3" style="width: 18rem;">
  <img src="img/user.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${rs.nomealunos}</h5>
    <p class="card-text">${rs.telefone}</p>
    <p class="card-text">${rs.cpf}</p>
    <p class="card-text">${rs.idade}</p>
    <a href="#" class="btn btn-primary"id ="atualizar">Atualizar</a>
     <a href="#" class="btn btn-danger"id ="deletar">Deletar</a>
  </div>
</div>
            `;
            });
            container.innerHTML = saida;

        })
}

document.body.onload = () => { carregar() }

// Fazer a referência ao botão cadastrar que está na página index.html
const btnCadastrar = document.querySelector("#btnCadastrar");
btnCadastrar.onclick = () =>{
   if(confirm("Você deseja cadastrar esse cliente?")==1){
    //fetch é uma busca no servidor
        fetch("http://127.0.0.1:3000/api/create",{
            method:"POST",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                nomealunos:document.querySelector("#txtNome").value,
                telefone:document.querySelector("#txtTele").value,
                cpf:document.querySelector("#txtCPF").value,
                idade:document.querySelector("#txtIdade").value

            })
        })
        .then((res=>res.json))
        .then((dados)=>{
            alert(dados);

            document.location.reload(); //reload é como se fosse o f5
                })
                .catch((erro) =>{
                    console.error(erro) //é console.error porque se for console.log ele abre o terminal de qualquer forma
                })
   }
} 