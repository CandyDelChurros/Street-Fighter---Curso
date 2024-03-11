function aki(){
    const menu = ["aki-status", "aki-status-mid", "aki-status-bot"]
    menu.forEach((aparece) => {
    document.getElementById(aparece).style.visibility = 'visible';
    })

    document.getElementById("aki").onmouseenter = function(){
        this.style.background = 'url(../img/bg_aki.jpg)';
    }
    document.getElementById("aki").onmouseleave = function(){
        this.style.background = 'url(../img/bg_aki.jpg)';
    }
}

function desaparecer() {
    var aki = document.getElementById('aki');
    var akiStatus = document.getElementById('aki-status');
    var akiStatusMid = document.getElementById('aki-status-mid');
    var akiStatusBot = document.getElementById('aki-status-bot');

    aki.style.background = 'url(../img/aki_houver.png) center/68rem';
    akiStatus.style.visibility = 'hidden';
    akiStatusMid.style.visibility = 'hidden';
    akiStatusBot.style.visibility = 'hidden';

    aki.onmouseenter = function() {
        this.style.background = 'url(../img/aki.png) center/68rem';
    };

    aki.onmouseleave = function() {
        this.style.background = 'url(../img/aki_houver.png) center/68rem';
    };
}



