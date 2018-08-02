var getImport = document.querySelector('#extheader');
var getContent = getImport.import.querySelector('#header');
document.body.appendChild(document.importNode(getContent, true));