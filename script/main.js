function resteCss(texte) {
    var restantCss = 200 - texte.length;
    document.getElementById('caracteresCss').innerHTML = restantCss;
}
function resteHtml(texte) {
    var restantHtml = 200 - texte.length;
    document.getElementById('caracteresHtml').innerHTML = restantHtml;
}

function editHtml() {
    let textToInsert = document.getElementById('floatingTextareaHtml').value
    document.getElementById('showResultSection').innerHTML = textToInsert;
}
