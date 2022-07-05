/////////////////////////////////CONSTRUCTABLE TEXT AREA////////
function TextareaCss() {
    let maxSize = document.querySelector('input[name="checkCss"]:checked').value
    document.getElementById("txtCss").innerHTML = '<textarea onkeyup="resteCss(this.value); editCss();" class="form-control" id="floatingTextareaCss"style="height: 300px"  maxlength=' + maxSize + '></textarea>'
}
function TextareaHtml() {
    let maxSize = document.querySelector('input[name="checkHtml"]:checked').value
    document.getElementById("txtHtml").innerHTML = '<textarea onkeyup="editHtml(); resteHtml(this.value); test()" class="form-control" id="floatingTextareaHtml"style="height: 300px"maxlength=' + maxSize + '></textarea>'
}
function TextareaJs() {
    let maxSize = 200
    document.getElementById("txtJs").innerHTML = '<textarea onkeyup="editHtml(); resteJs(this.value); test()" class="form-control" id="floatingTextareaHtml"style="height: 300px"maxlength=' + maxSize + '></textarea>'
}


////////////////////////////////REMAINING CHARACTERS////////////
function resteCss(texte) {
    let maxSize = document.querySelector('input[name="checkCss"]:checked').value
    let restantCss = maxSize - texte.length;
    let styleProgressCss = document.getElementById("progressCss")
    let widthProgress = (texte.length * 100) / maxSize
    let backgColor = ""
    document.getElementById('caracteresCss').innerHTML = " " + restantCss;

    if (widthProgress >= 50 && widthProgress < 80) {
        backgColor = "orange"
    } else if (widthProgress > 80) {
        backgColor = "red"
    } else {
        backgColor = "green"
    }

    styleProgressCss.style.backgroundColor = backgColor;
    styleProgressCss.style.width = widthProgress + "%";
}

function resteHtml(texte) {
    let maxSize = document.querySelector('input[name="checkHtml"]:checked').value
    let restantHtml = maxSize - texte.length;
    let styleProgressCss = document.getElementById("progressHtml")
    let widthProgress = (texte.length * 100) / maxSize
    let backgColor = ""
    document.getElementById('caracteresHtml').innerHTML = " " + restantHtml;

    if (widthProgress >= 50 && widthProgress < 80) {
        backgColor = "orange"
    } else if (widthProgress > 80) {
        backgColor = "red"
    } else {
        backgColor = "green"
    }

    styleProgressCss.style.backgroundColor = backgColor;
    styleProgressCss.style.width = widthProgress + "%";
}

function resteJs(texte) {
    let maxSize = document.querySelector('input[name="checkJs"]:checked').value
    let restantHtml = maxSize - texte.length;
    let styleProgressCss = document.getElementById("progressJs")
    let widthProgress = (texte.length * 100) / maxSize
    let backgColor = ""
    document.getElementById('caracteresJs').innerHTML = " " + restantHtml;

    if (widthProgress >= 50 && widthProgress < 80) {
        backgColor = "orange"
    } else if (widthProgress > 80) {
        backgColor = "red"
    } else {
        backgColor = "green"
    }

    styleProgressCss.style.backgroundColor = backgColor;
    styleProgressCss.style.width = widthProgress + "%";
}


//////////////////////////////////////////////HTML EDIT ///////////
function editHtml() {
    let textToInsert = document.getElementById('floatingTextareaHtml').value
    document.getElementById('showResultSection').innerHTML = textToInsert;
}


//////////////////////////////////////////// CSS EDIT ////////////
function editCss() {
    let textToInsert = document.getElementById('floatingTextareaCss').value
    document.getElementById('cssStyleUsers').innerHTML = textToInsert;
}


///////////////////////////////////////////COUNT CONSTRUCTABLE/////////////
function compteur() {
    let maxSizeCss = document.querySelector('input[name="checkCss"]:checked').value
    let maxSizeHtml = document.querySelector('input[name="checkHtml"]:checked').value
    let maxSizeJs = document.querySelector('input[name="checkJs"]:checked').value
    document.getElementById("compteur").innerHTML = '<div>Characters remaining :<span id="caracteresHtml">' + " " + maxSizeHtml + ' </span></div><div>Characters remaining :<span id="caracteresCss">' + " " + maxSizeCss + ' </span></div><div>Characters remaining :<span id="caracteresJs">' + " " + maxSizeJs + ' </span></div>'
}