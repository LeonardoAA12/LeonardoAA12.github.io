function aleatorio(n){
    numero = Math.floor(Math.random() * n)+1
    document.getElementById('aleatorio').innerHTML = '+'+numero
}
aleatorio(15000)