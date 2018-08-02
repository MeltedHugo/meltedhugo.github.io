var getImport = document.querySelector('#extfooter');
var getContent = getImport.import.querySelector('#footer');
document.body.appendChild(document.importNode(getContent, true));