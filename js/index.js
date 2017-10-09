function addQuality() {
  // Ask the user to add two qualities
  var newEl = document.createElement('li');
  var newEl2 = document.createElement('li');
  var textDisplay = prompt("Add a quality:");
  var textDisplay2 = prompt("Add a quality:");
  var msg = document.createTextNode("Two items added to your list!");
    if (textDisplay != "" && textDisplay2 != "") {
      var newText = document.createTextNode(textDisplay);
      newEl.appendChild(newText);
      var newText2 = document.createTextNode(textDisplay2);
      console.log("New child is " + textDisplay);
      newEl2.appendChild(newText2);
      console.log("New child is " + textDisplay2);
      var position = document.getElementsByTagName('ul')[0];
      position.appendChild(newEl);
      position.appendChild(newEl2);
      var successMsg = document.getElementById("successMsg");
      successMsg.appendChild(msg);
      

    // var position2 = document.getElementsByTagName('ul')[0];
    //position2.appendChild(newEl2);  
  }

  else {
    alert("Two qualities not added! Try again with a valid entry");
  }
};

function removeQuality() {
  // Remove the last quality on the list
  // Access first element in my list
  var msg = document.createTextNode("Item removed from your list!")
  var list = document.getElementById('qualities');
  var listItems = list.getElementsByTagName('li');
  var lastListItem = listItems[listItems.length - 1];
  list.removeChild(lastListItem);
  confirmDelete.appendChild(msg);
};

function highlightQualities() {
  // Highlight top 3 qualities
  var msg = document.createTextNode("Top 3 items highlighted!")
  var myList = document.getElementById("qualities");
  for (var i = 0; i < 3; i++) {
    myList.getElementsByClassName("quality")[i].style.backgroundColor = "yellow";
  }
  confirmHighlight.appendChild(msg);
};