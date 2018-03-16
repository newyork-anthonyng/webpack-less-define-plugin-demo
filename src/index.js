require("./styles.less");

var textNode = document.createTextNode(process.env.COLOR);
var headerNode = document.createElement("h1");
headerNode.appendChild(textNode);

document.body.appendChild(headerNode);
