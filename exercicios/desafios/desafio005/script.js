function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 11
    msg.innerHTML = `agora sao ${hora} horas`
    if (hora >= 6 && hora < 12){
        img.src = 'img/fotomanha2.png'
        document.body.style.background = '#eee1a6a2'
    } else if(hora >= 12 && hora < 19){
        img.src = 'img/fototarde2.png'
        document.body.style.background = '#d4a5238f'
    }else{
        img.src = 'img/fotonoite2.png'
        document.body.style.background = ('#23295fff')
    }
}
