var listItens = []
var listShop = []

firstMenu()
function firstMenu(){
    var option = Number(prompt("Mercado Coisa Boa \n1- Adicionar novo item \n2- Editar item \n3- Deletar item \n4- Iniciar compra \n5- Fechar"))

    switch(option){
        case 1:
            addItem()
        break;

        case 2:
            editItem()
        break;

        case 3:
            deleteItem()
        break;

        case 4:
            shop()
        break;

        case 5:
            console.log(listItens)
        break;

        default:
            alert("Opção não encontrada!")
            firstMenu()
        break;
    }
}

var newID = 0
function addItem(){
    var item = {
        code: newID,
        name: prompt("Digite o nome do item:"),
        value: parseFloat(prompt("Digite o valor do produto em reais(R$):"))        
    }
    newID = newID +1
    var flag = false
    for(var i = 0; i < listItens.length && flag == false; i++){
        if(item.name == listItens[i].nome){
            flag = true
            alert("Esse nome já foi cadastrado!")
            addItem()
        }
    }
    if(flag == false){
        listItens.push(item)
        alert("Item cadastrado!")
        firstMenu()
    }
}

function editItem(){
    var findItem = prompt("Digite o nome do item:")
    
    flag = false
    for(var i = 0; i < listItens.length && flag == false; i++){
        if(findItem == listItens[i].name){
            flag = true
            var choose = Number(prompt("Item encontrado! \nO que você deseja editar? \n1- Nome \n2- Valor \n3- Voltar para o menu"))
            switch(choose){
                case 1:
                    listItens[i].name = prompt("Digite o novo nome:")
                    alert("Atualização efetuada!")
                    firstMenu()
                break;

                case 2:
                    listItens[i].value = parseFloat(prompt("Digite o novo valor:"))
                    alert("Atualização efetuada!")
                    firstMenu()
                break;

                case 3:
                    firstMenu()
                break;

                default:
                    alert("Opção não encontrada!")
                    editItem()
                break;
            }
        }
    }
    if(flag == false){
        alert("Item não encontrado!")
        firstMenu()
    }
}

function deleteItem(){
    var findItem = prompt("Digite o nome do item:")

    var flag = false
    for(var i = 0; i < listItens.length && flag == false; i++){
        if(findItem == listItens[i].name){
            flag = true
            var choose = Number(prompt("Item encontrado! \nDeseja continuar? \n1- Sim \n2- Não"))
            switch(choose){
                case 1:
                    listItens.splice(i,1)
                    alert("Item apagado!")
                    firstMenu()
                break;

                case 2:
                    firstMenu()
                break;

                default:
                    alert("Item não encontrado!")
                    firstMenu()
                break;
            }
        }
    }
    if(flag == false){
        alert("Item não encontrado!")
        firstMenu()
    }
}

var totalValue = 0
function shop(){
    var toShop = Number(prompt("Digite o código do item"))
    var flag = false
    for(var i = 0; i < listItens.length && flag == false; i++){
        if(toShop == listItens[i].code){
            flag = true
            console.log("Item encontrado!")
            listShop.push(listItens[i])
            totalValue = totalValue + listItens[i].value
            
            var choose = Number(prompt("Deseja continuar, concluir ou cancelar a compra? \n1- Continuar \n2- Concluir \n3- Cancelar"))
            switch(choose){
                case 1:
                    shop()
                break;

                case 2:
                    alert("O preço final é de R$" + totalValue)
                    var shopValue = parseFloat(prompt("Digite o valor pago pelo cliente"))
                    alert("Troco R$" + (shopValue - totalValue))

                    var choose = Number(prompt("Deseja imprimir a notinha? \n1- Sim \n2- Não"))
                    switch(choose){
                        case 1:
                            for(var i = 0; i < listShop.length; i++){
                                console.log("-------Comprovante-------")
                                while(listShop.length > 0){
                                    console.log("Nome do item: " + listShop[i].name)
                                    console.log("Valor do item: R$" + listShop[i].value)
                                    listShop.splice(i,1)
                                }
                                console.log("Valor Total: R$" + totalValue)
                                console.log("Valor Pago: R$" + shopValue)
                                console.log("Troco: R$" + (shopValue - totalValue))
                            }
                            if(listShop.length == 0){
                                alert("Compra finalizada!")
                                firstMenu()
                            }
                        break;

                        case 2:
                            alert("Compra finalizada!")
                            firstMenu()
                        break;
                    }
                break;

                case 3:
                    alert("Compra cancelada!")
                    firstMenu()
                break;

                default:
                    alert("Opção não encontrada!")
                    firstMenu()
                break;
            }
            }
    }
    if(flag == false){
        console.log("Item não encontrado!")
        
    }
}