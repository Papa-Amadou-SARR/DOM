const like = document.querySelector('.like');

let countLike = 0;
like.addEventListener('click', () => {

    if(countLike === 0) {
        like.classList.toggle('anim-like');
        countLike = 1;
        like.style.backgroundPosition = 'right';
    } else {
        countLike = 0;
        like.style.backgroundPosition = 'left';
    }
 
});

like.addEventListener('animationend', () => {
    like.classList.toggle('anim-like');
})

const likee = document.querySelector('.likee');

let countLikee = 0;
likee.addEventListener('click', () => {

    if(countLikee === 0) {
        likee.classList.toggle('anim-like');
        countLikee = 1;
        likee.style.backgroundPosition = 'right';
    } else {
        countLikee = 0;
        likee.style.backgroundPosition = 'left';
    }

});

likee.addEventListener('animationend', () => {
    likee.classList.toggle('anim-like');
})

const likeee = document.querySelector('.likeee');

let countLikeee = 0;
likeee.addEventListener('click', () => {

    if(countLikeee === 0) {
        likeee.classList.toggle('anim-like');
        countLikeee = 1;
        likeee.style.backgroundPosition = 'right';
    } else {
        countLikeee = 0;
        likeee.style.backgroundPosition = 'left';
    }

});

likeee.addEventListener('animationend', () => {
    likeee.classList.toggle('anim-like');
}) 


var b = document.querySelector('.btn-info');
var cpt = 0;
var qt = document.getElementById('qte');
var cptQT = 0;
var cptT =0;
var t1 = document.querySelector('.total1'); 
b.addEventListener('click', ()=> {
    cpt=cpt+7000;
    var gucciDiv = document.getElementById('gucci');
    gucciDiv.innerHTML = cpt;

     cptQT++;
     var qteDiv = document.getElementById('qte');
     qteDiv.innerHTML = cptQT;

     t1.innerHTML = 'Total: ' +cpt+ ' ' +'FCFA' ;

     var pt = document.querySelector('.pt');
     var cptT = cpt+cpt2+cpt3;
     pt.innerHTML = 'Prix total: ' +cptT+ ' ' +'FCFA' ;
});

var bMoins = document.querySelector('.btn-warning');
bMoins.addEventListener('click', ()=> {
    if (cptQT > 0) {   
     cptQT--;
     var qteDivM = document.getElementById('qte');
     qteDivM.innerHTML = cptQT;

     cpt = cpt - 7000;
     var gucciDivM = document.getElementById('gucci');
     gucciDivM.innerHTML = cpt;

     var t1M = document.querySelector('.total1'); 
     t1M.innerHTML = 'Total: ' +cpt+ ' ' +'FCFA' ;

     var ptM = document.querySelector('.pt');
     var cptT = cpt+cpt2+cpt3;
     ptM.innerHTML = 'Prix total: ' +cptT+ ' ' +'FCFA' ;
    }
});

var b2 = document.querySelector('.btn-info2');
var cpt2 = 0;
var qt2 = document.getElementById('qte2');
var cptQT2 = 0;
var t2 = document.querySelector('.total2'); 
b2.addEventListener('click', ()=> {
    cpt2=cpt2+8000;
     var lvDiv = document.getElementById('lv');
     lvDiv.innerHTML = cpt2;

     cptQT2++;
     var qteDiv2 = document.getElementById('qte2');
     qteDiv2.innerHTML = cptQT2;

     t2.innerHTML = 'Total: ' +cpt2+ ' ' +'FCFA' ;

     var pt = document.querySelector('.pt');
     var cptT = cpt+cpt2+cpt3;
     pt.innerHTML = 'Prix total: ' +cptT+ ' ' +'FCFA' ;
});

var b2Moins = document.querySelector('.btn-warning2');
b2Moins.addEventListener('click', ()=> {
    if (cptQT2 > 0) {   
     cptQT2--;
     var qteDivM2 = document.getElementById('qte2');
     qteDivM2.innerHTML = cptQT2;

     cpt2 = cpt2 - 8000;
     var gucciDivM2 = document.getElementById('lv');
     gucciDivM2.innerHTML = cpt2;

     var t1M2 = document.querySelector('.total2'); 
     t1M2.innerHTML = 'Total: ' +cpt2+ ' ' +'FCFA' ;

     var ptM2 = document.querySelector('.pt');
     var cptT = cpt+cpt2+cpt3;
     ptM2.innerHTML = 'Prix total: ' +cptT+ ' ' +'FCFA' ;
    }
});

var b3 = document.querySelector('.btn-info3');
var cpt3 = 0;
var qt3 = document.getElementById('qte3');
var cptQT3 = 0;
var t3 = document.querySelector('.total3'); 
b3.addEventListener('click', ()=> {
    cpt3=cpt3+6000;
    var addidasDiv = document.getElementById('addidas');
    addidasDiv.innerHTML = cpt3;

    cptQT3++;
    var qteDiv3 = document.getElementById('qte3');
    qteDiv3.innerHTML = cptQT3;

    t3.innerHTML = 'Total: ' +cpt3+ ' ' +'FCFA' ;

    var pt = document.querySelector('.pt');
    var cptT = cpt+cpt2+cpt3;
    pt.innerHTML = 'Prix total: ' +cptT+ ' ' +'FCFA' ;
});

var b3Moins = document.querySelector('.btn-warning3');
b3Moins.addEventListener('click', ()=> {
    if (cptQT3 > 0) {   
     cptQT3--;
     var qteDivM3 = document.getElementById('qte3');
     qteDivM3.innerHTML = cptQT3;

     cpt3 = cpt3 - 6000;
     var gucciDivM3 = document.getElementById('addidas');
     gucciDivM3.innerHTML = cpt3;

     var t1M3 = document.querySelector('.total3'); 
     t1M3.innerHTML = 'Total: ' +cpt3+ ' ' +'FCFA' ;

     var ptM3 = document.querySelector('.pt');
     var cptT = cpt+cpt2+cpt3;
     ptM3.innerHTML = 'Prix total: ' +cptT+ ' ' +'FCFA' ;
    }
});

var danger = document.querySelector('.btn-danger');
var cptT1 =0;
danger.addEventListener('click', ()=>{
var dlt = document.getElementById('img');
document.body.removeChild(dlt);
    cpt =0;
    var ptD = document.querySelector('.pt');
    cptT1 =cpt2+cpt3;
    ptD.innerHTML = 'Prix total: ' +cptT1+ ' ' +'FCFA';
    var jpg = document.getElementById('jpg');
    jpg.style.marginTop = '0%';
    var png = document.getElementById('png');
    png.style.marginBottom = '-32%';
});

var danger2 = document.querySelector('.btn-danger2');
var cptT2 =0;
danger2.addEventListener('click', ()=>{
var dlt2 = document.getElementById('jpg');
document.body.removeChild(dlt2);
    cpt2 =0;
    var ptD2 = document.querySelector('.pt');
    cptT2 =cpt+cpt3;
    ptD2.innerHTML = 'Prix total: ' +cptT2+ ' ' +'FCFA';
    var png = document.getElementById('png');
    png.style.marginTop = '-32%';    
});

var danger3 = document.querySelector('.btn-danger3');
var cptT3 =0;
danger3.addEventListener('click', ()=>{
var dlt3 = document.getElementById('png');
document.body.removeChild(dlt3);
     cpt3 =0;
     var ptD3 = document.querySelector('.pt');
     cptT3 =cpt+cpt2;
     ptD3.innerHTML = 'Prix total: ' +cptT3+ ' ' +'FCFA';
});
