const texto = process.argv[2] && (process.argv[2].trim()).length > 0 ? process.argv[2] : 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.'
const palavras = texto.split(' ')
const LIMITE_CARACTERES = 140
let contador = 0

const tweetLength = (texto, palavra) => (`0/0 ${texto} ${palavra}`).length

const tweets = palavras.reduce((anterior, atual) => {
  if(tweetLength(anterior[contador], atual) >= LIMITE_CARACTERES) {
    contador++
    anterior[contador] = ''
  }
  anterior[contador] += `${atual} `
  return anterior
}, [''])

const tweetsContador = tweets.map((tweet, index) => {
  return `${index + 1}/${tweets.length} ${tweet}`
})

console.log(tweetsContador)
