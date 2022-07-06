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
    let maxSize = document.querySelector('input[name="checkJs"]:checked').value
    document.getElementById("txtJs").innerHTML = '<textarea onkeyup="editJs(); resteJs(this.value); test()" class="form-control" id="floatingTextareaJs"style="height: 300px"maxlength=' + maxSize + '></textarea>'
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

//////////////////////////////////////////// JS EDIT ///////////////
function editJs() {
    let textToInsert = document.getElementById('floatingTextareaJs').value
    document.getElementById('userScript').innerHTML = textToInsert;
}


///////////////////////////////////////////COUNT CONSTRUCTABLE/////////////
function compteur() {
    let maxSizeCss = document.querySelector('input[name="checkCss"]:checked').value
    let maxSizeHtml = document.querySelector('input[name="checkHtml"]:checked').value
    let maxSizeJs = document.querySelector('input[name="checkJs"]:checked').value
    document.getElementById("compteur").innerHTML = '<div>Characters remaining :<span id="caracteresHtml">' + " " + maxSizeHtml + ' </span></div><div>Characters remaining :<span id="caracteresCss">' + " " + maxSizeCss + ' </span></div><div>Characters remaining :<span id="caracteresJs">' + " " + maxSizeJs + ' </span></div>'
}

//////////////////////////////////////////// CONSTRUCTABLE CHECKBOX ///////////////

function constructableHtmlCheck() {
    let disabledOrNot = ""
    document.getElementById("checkForHtml").innerHTML = ' Text max lenght •<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="checkHtml" onclick="compteur();TextareaHtml()"id="checkHtml" value="200" checked ' + disabledOrNot + '><label class="form-check-label" for="inlineRadio1">200</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="checkHtml" onclick="compteur();TextareaHtml()"id="checkHtml" value="300"' + disabledOrNot + '><label class="form-check-label" for="inlineRadio1">300</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="checkHtml" onclick="compteur();TextareaHtml()"id="checkHtml" value="500"' + disabledOrNot + '><label class="form-check-label" for="inlineRadio1">500</label></div> '
}

function constructableCssCheck() {
    document.getElementById("checkForCss").innerHTML = ' Text max lenght •<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="checkCss" onclick="compteur(); TextareaCss()"id="checkCss" value="200" checked><label class="form-check-label" for="inlineRadio1">200</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="checkCss" onclick="compteur(); TextareaCss()"id="checkCss" value="300"><label class="form-check-label" for="inlineRadio1">300</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="checkCss" onclick="compteur(); TextareaCss()"id="checkCss" value="500"><label class="form-check-label" for="inlineRadio1">500</label></div> '
}

function constructableJsCheck() {
    document.getElementById("checkForJS").innerHTML = ' Text max lenght •<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="checkJs" onclick="compteur();TextareaJs()" id="checkJs"value="200" checked><label class="form-check-label" for="inlineRadio1">200</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" onclick="compteur();TextareaJs()" name="checkJs" id="checkJs"value="300"><label class="form-check-label" for="inlineRadio1">300</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="checkJs" onclick="compteur();TextareaJs()" id="checkJs"value="500"><label class="form-check-label" for="inlineRadio1">500</label></div> '
}

////////////////////////////////////////IMPORT COLOR CSS //////////////////////////////////////
function importRed() {
    document.getElementById('floatingTextareaCss').value += "#FF0000"
}
function importGreen() {
    document.getElementById('floatingTextareaCss').value += "#00FF00"
}
function importBlue() {
    document.getElementById('floatingTextareaCss').value += "#0000FF"
}
function importYellow() {
    document.getElementById('floatingTextareaCss').value += "#FFFF00"
}
function importPurple() {
    document.getElementById('floatingTextareaCss').value += "#660099"
}

///////////////////////////////////IMPORT TAG HTML ///////////////////////////////////
function importDiv() {
    document.getElementById('floatingTextareaHtml').value += "<div></div>"
}
function importH1() {
    document.getElementById('floatingTextareaHtml').value += "<h1></h1>"
}
function importP() {
    document.getElementById('floatingTextareaHtml').value += "<p></p>"
}
function importSpan() {
    document.getElementById('floatingTextareaHtml').value += "<span></span>"
}