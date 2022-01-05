function carousel() {
    
	var images1 = document.querySelectorAll('.image__carousel');
    let d = 2000;
    let delta = 1000;

    images1.forEach(function(img,indice) {
        img.style.zIndex = images1.length - indice;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images1,
        translateX: [{value: '266', duration: d},
                     {value: '-266', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (3*delta)+(2*d);
                         if (ind == 1) return (2*delta)+d;
                         if (ind == 2) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 3) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            return (4*delta)+(3*d);
        }
    });
}


function monterLegende(c) {
    document.querySelector('.'+c).style.display ='block';
    return anime({
        targets: '.'+c,
        translateY: '-3em',
        autoplay:false,
        easing:'linear',
        duration: 200
    }).play;

}

function descendreLegende() {
    document.querySelector('.legende__texte').style.display ='block';
    return anime({
        targets: '.legende__texte',
        translateY: '0em',
        autoplay:true,
        easing:'linear',
        duration: 200
    }).play;
	
}