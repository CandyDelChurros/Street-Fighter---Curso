function aki() {
    const menu = ["aki-status", "aki-status-mid", "aki-status-bot"];
    menu.forEach((aparece) => {
        document.getElementById(aparece).style.visibility = 'visible';
    });

    const bg = ["aki_img_person", "aki_p_hover"];
    bg.forEach((some) => {
    Array.from(document.getElementsByClassName(some)).forEach((element) => { element.style.filter = 'blur(8px)'; });
    });
}
function desaparecer() {
    var akiStatus = document.getElementById('aki-status');
    var akiStatusMid = document.getElementById('aki-status-mid');
    var akiStatusBot = document.getElementById('aki-status-bot');

    akiStatus.style.visibility = 'hidden';
    akiStatusMid.style.visibility = 'hidden';
    akiStatusBot.style.visibility = 'hidden';

    const bg = ["aki_img_person", "aki_p_hover"];
    bg.forEach((some) => {
    Array.from(document.getElementsByClassName(some)).forEach((element) => { element.style.filter = 'none'; });
    });
}



