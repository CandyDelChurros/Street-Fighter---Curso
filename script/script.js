function aki() {
    const menu = ["aki-status-top", "aki-status-mid", "aki-status-bot"];
    menu.forEach((aparece) => {
        document.getElementById(aparece).style.visibility = 'visible';
    });

    const bg = ["aki_img_person", "aki_p_hover"];
    bg.forEach((some) => {
    Array.from(document.getElementsByClassName(some)).forEach((element) => { element.style.filter = 'blur(8px)'; });
    });
}
function cammy() {
    const menu = ["cammy-status-top", "cammy-status-mid", "cammy-status-bot"];
    menu.forEach((aparece) => {
        document.getElementById(aparece).style.visibility = 'visible';
    });

    const bg = ["cammy_img_person", "cammy_p_hover"];
    bg.forEach((some) => {
    Array.from(document.getElementsByClassName(some)).forEach((element) => { element.style.filter = 'blur(8px)'; });
    });
}

function marisa() {
    const menu = ["marisa-status-top", "marisa-status-mid", "marisa-status-bot"];
    menu.forEach((aparece) => {
        document.getElementById(aparece).style.visibility = 'visible';
    });

    const bg = ["marisa_img_person", "marisa_p_hover"];
    bg.forEach((some) => {
    Array.from(document.getElementsByClassName(some)).forEach((element) => { element.style.filter = 'blur(8px)'; });
    });
}

function juri() {
    const menu = ["juri-status-top", "juri-status-mid", "juri-status-bot"];
    menu.forEach((aparece) => {
        document.getElementById(aparece).style.visibility = 'visible';
    });

    const bg = ["juri_img_person", "juri_p_hover"];
    bg.forEach((some) => {
    Array.from(document.getElementsByClassName(some)).forEach((element) => { element.style.filter = 'blur(8px)'; });
    });
}








function aki_desper() {
    var akiStatus = document.getElementById('aki-status-top');
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



