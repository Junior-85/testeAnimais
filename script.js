//COMEÇAR A IMPLEMENTAR NO SITE O QUE SE APRENDEU

//Adicionar classes para manipulação
//A ideia de navegação por tab é ter uma lista de itens que controla a visualizacao de uma lista de conteudo. Cadaitem da lista possui um conteudo ralacionado ao mesmo.

//Navegação por tabs normalmente é uma neavegacao relacionada a uma lista de itens e outra lista de itens, sendo que geralmente a primeira lista é uma lista de navegaçao, é algo que
//se vai clicar e a outra outra lista ativa o item, é uma relacao 1 x 1 
//No caso, a lista de imagens de animais com a lista de descrição dos animais.
//As tabs é a lista de animais (imagens) que será relacionada ao seu conteudo. Quando clicar em um animal aparece seu conteudo e esconde o conteudo dos outros. 

//Poderiam ser usadas as classes existente para manipulação de CSS , mas para não causar confusao futura e por preocupacao de alguma sofrer mudanca, serao criadas classes 
//especificas para p manipulacao no JavaScript
//Poderia ser usado o atributo data='' mas sera mostrado mais a frente

//Classe criadas 
// <ul class='animais-lista js-tabmenu'> No HTML na ul da section de naimais 'js-tabmenu'
// <div class="animais-descricao js-content"> Na div animais-decricao 'js-tabcontent'

// No JS primeeiro selecionar os itens ou elementos

const tabMenu = document.querySelectorAll('.js-tabmenu li') // Li porque quero selecionar cada item li para ter colocar eventos em cada uma 
const tabContent = document.querySelectorAll('.js-tabcontent section') // section porque quero selecinar cada item e eles estao cada um em uma section

/*Solucao 3 - verificacao se tabMenu e tabContent temconteudo*/

if(tabMenu.length && tabContent.length){ //Se as expressoes forem verdadeira ou seja tiverem conteudo, vai para o codigo abaixo
tabContent[0].classList.add('ativo') // Solucao para o conteudo da lista de animais ser sempre iniciada com o primeiro conteudo (Solucao 2)

//Criar funcao que crirará uma classe de acordo com o nuemro que for passado, e cada numero representa uma das imagens da lista de animais
//Quando houver uma acao ou evento na imagem 0 adiciona classe correspondete no conteudo 0
//Adicionar a classe ativo a um elemento, os outros não podem ter

function activeTab(index) { // Uso da palavra index apenas para relacionar ao numero do item, poderia ser qlq palavra
    tabContent.forEach((section) => {
        section.classList.remove('ativo') // repeticao para remover a classe ativo das section, se houver em alguma
    })
    tabContent[index].classList.add('ativo')
}

//Adicionar evento de clique as imagens
//Quando clicar na imagem, passar o numero dela para a funcao activeTab() para adicionar a classe ativo
//Sera usado o index do item dentro da section para representar suar posicao em relacao a lista de conteudo
//Poderia ser usado nomes de classes e comparar os nomes para fazer a relacao, mas nesse exemplo sera usado o index

//usar forEach porque se deve acrescentar o evento a cada item da lista
//No exemplo abaixo, dentro do forEach a funcao callback do evento não podera ser usada fora do forEach, ela terá que ser um dos argumentos do evento, isso porque usaremos 
// o index do do forEach, que é o segundo argumento, por isso a funcao callback do evento tem que estar dentro do forEach. se a funcao estivesse fora do forEach, o evento nao 
//conseguirira usar o index porque não teria como acessar um argumento de dentro do forEach.
//A funcao callback nesse caso é activeTab(). Não é possivel ativar ela como argumento do evento, entao deve ser criada uma funcao anonima no paramentro do evento e 
// dentro da funcao anonima ser ativada a funcao activeTab. 

tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
        activeTab(index)
    })
})
}


/*Navegaçao concluída*/
/*NO CSS sera adicionado o conteudo para a classe ativo, que ira esconder e exibir os conteudos para as imagens*/
/*No CSS foi feita animacao*/
/*No CSS as imagens foram tordas clicaveis, modificação do pointer*/

//Problema 1 -
//COmo os conteudos de animais foram escondidos no forEach, quando a pagina é iniciada ou atualizada, ele esta sem esse conteudo
//Solucao 1 - Para resolver pode simplesmemte ser incluida uma classa manualmente no html.
//Solucao 2 - Via JavaScript, para exercitar, caso não seja possivel acessar o DOM (não é o nosso caso)
// A solucao 2 sera colocada acima, logo apos os itens ou elementos no inicio do codigo serem selecinados

//Problemas 2 -
// Se estiver em outra pagina, teoricamente a classe '.js-tabcontent section' pode não existir por causa da solucao 2 e isso gerará um problema de console
// Por isso sera feita a verificação se a classe existe, será a solucao 3 que sera colocada acima no codigo, logo após a selecao de itens ou elementos

//Problema 3 - 
//Se o Javascrip não estiver habilitado (por varios motivos, como browser antigo que não suporta o js ou desabilitado)
//A solucao é colocar uma classe js a tag html do html e adicionar ao css, so que se ela não houver o CSS dara problema. Por isso solucao abaixo para fazer a inclusao da classe js
//via script inline no html, sera na tag head
//Solucao - Colocar um script no <head> 

