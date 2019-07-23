function sendMessage() {
	var data = document.getElementById("data").value
	var host = document.getElementById("host").value
	var port = document.getElementById("port").value
	var name = document.getElementById("name").value
	eel.send_data(data, host, port)(setImage)
}

function setImage(base64) {
	var data = document.getElementById("name").value + "- " + document.getElementById("data").value
	var node = document.createElement("LI");   
	              // Create a <li> node
	var textnode = document.createTextNode(data);         
	node.appendChild(textnode);                             
	document.getElementById("msgList").appendChild(node);
}