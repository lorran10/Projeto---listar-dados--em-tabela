class Produto{
    constructor(){
        this.id = 1;
       this.arrayProdutos = [];
    }

    salvar(){
      let produto = this.lerDados();

       if(this.validaCampos(produto)) {
       this.adicionar(produto); 
       }

       this.listarTabela();
    }
   
    adicionar(produto){
    this.arrayProdutos.push(produto);
    this.id++;

    }

    lerDados(){
    let produto = {}

    produto.id = this.id;
    produto.nomeProduto = document.getElementById('produto').value;
    produto.valor = document.getElementById('valor').value;

    return produto;
  
    }

    listarTabela() {
        
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for( let i = 0; i < this.arrayProdutos.length; i++) {
         let tr = tbody.insertRow();

         let td_id = tr.insertCell();
         let td_produto = tr.insertCell();
         let td_valor = tr.insertCell();
         let td_acoes = tr.insertCell();

         td_id.innerText = this.arrayProdutos[i].id
         td_produto.innerText = this.arrayProdutos[i].nomeProduto
         td_valor.innerText = this.arrayProdutos[i].valor

         let  imgEdit = document.createElement('img');
         imgEdit.src = 'img/edit.svg';
         td_acoes.appendChild(imgEdit);

         let imgDelet = document.createElement('img')
         imgDelet.src = 'img/delet.svg'
         td_acoes.appendChild(imgDelet);


         
        }
    }
    validaCampos(produto){

     let msg = '';

      if(produto.nomeProduto == ''){
        msg += '- Informe o nome do produto!!\n';
     }

     if (produto.valor == ''){
        msg += ' - Informe o preço do produto!!\n';
     }

     if(msg !=''){
      alert(msg);
      return false

     }
    return true; 
}

    cancelar(){
        
    }
    deletar(){

    }
}

var produto = new Produto ()


