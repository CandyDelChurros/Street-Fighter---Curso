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
    const menu = ["marissa-status-top", "marissa-status-mid", "marissa-status-bot"];
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
function cammy_desper() {
    var cammyStatus = document.getElementById('cammy-status-top');
    var cammyStatusMid = document.getElementById('cammy-status-mid');
    var cammyStatusBot = document.getElementById('cammy-status-bot');

    cammyStatus.style.visibility = 'hidden';
    cammyStatusMid.style.visibility = 'hidden';
    cammyStatusBot.style.visibility = 'hidden';

    const bg = ["cammy_img_person", "cammy_p_hover"];
    bg.forEach((some) => {
    Array.from(document.getElementsByClassName(some)).forEach((element) => { element.style.filter = 'none'; });
    });
}

function marissa_desper() {
    var marissaStatus = document.getElementById('marissa-status-top');
    var marissaStatusMid = document.getElementById('marissa-status-mid');
    var marissaStatusBot = document.getElementById('marissa-status-bot');

    marissaStatus.style.visibility = 'hidden';
    marissaStatusMid.style.visibility = 'hidden';
    marissaStatusBot.style.visibility = 'hidden';

    const bg = ["marisa_img_person", "marisa_p_hover"];
    bg.forEach((some) => {
    Array.from(document.getElementsByClassName(some)).forEach((element) => { element.style.filter = 'none'; });
    });
}
function juri_desper() {
    var juriStatus = document.getElementById('juri-status-top');
    var juriStatusMid = document.getElementById('juri-status-mid');
    var juriStatusBot = document.getElementById('juri-status-bot');

    juriStatus.style.visibility = 'hidden';
    juriStatusMid.style.visibility = 'hidden';
    juriStatusBot.style.visibility = 'hidden';

    const bg = ["juri_img_person", "juri_p_hover"];
    bg.forEach((some) => {
    Array.from(document.getElementsByClassName(some)).forEach((element) => { element.style.filter = 'none'; });
    });
}



