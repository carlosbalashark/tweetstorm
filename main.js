const texto = process.argv[2] && (process.argv[2].trim()).length > 0 ? process.argv[2] : 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.'
const palavras = texto.split(' ') // irá criar um novo array separando cada palavra por um index
const tweets = [''] // irá armazenar os tweet
let contador = 0 // contador de index do tweets

palavras.forEach(element => {
  if ((`00/00 ${tweets[contador]} ${element}`).length >= 140) {
    
    contador++
    tweets[contador] = ''
  }
  tweets[contador] += `${element} `
});


// map para pegar o array do tweet e adicionar nele o indice atual e o total de indices
const tweetStorm = tweets.map(function (tweet, index) {
  return `${index + 1}/${tweets.length} ${tweet}` // indiceAtual/contagemTotal + tweets
})

console.log(tweetStorm)