
function liens(nom){
    var izy=document.querySelector('.'+nom)
    izy.addEventListener('mouseover',function(){
        izy.style.background='linear-gradient(100deg,rgb(247, 95, 121) 0%,rgb(248, 36, 71) 100%)'
        izy.style.textDecoration='none'
        izy.style.color='white'
        })
        izy.addEventListener('mouseout',function(){
            izy.style.color='rgb(150, 148, 148)'
            izy.style.textDecoration='none'
            izy.style.background='none'
    })   
 }
 function one(nop){
    var izy=document.querySelector('.'+nop)
    izy.addEventListener('mouseover',function(){
        })
        izy.addEventListener('mouseout',function(){
            izy.style.color='white'
            izy.style.textDecoration='none'
    })   
 }

 liens('lien')
 liens('tigre')
 liens('dino')
 liens('rat')
 liens('chat')
 liens('oiseau')
 liens('chien')
 one('uptade')
 one('uptade')