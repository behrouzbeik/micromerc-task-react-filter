import React from "react";
import { on } from "stream";
import useFilter from "../../hooks/useFilter";
import handleKeyUp from "./App";

//var output = "";//useFilter();
function onlineSearch() {
  var searchword = document.getElementById("Inputtext").value;
  var showData = document.getElementById("showData");
  var output = useFilter(searchword);
  if (showData.hasChildNodes()) {
    showData.removeChild(showData.children[0]);
  }
  //showData.removeChild(showData.firstElementChild);
  showData.appendChild(output[0]);
  //console.log(output);
}

const Filter = () => {
  var parse = useFilter()[1];
  var load = React.createElement("ul", { id: "init" });
  parse.forEach((element) => {
    const node = React.createElement("li");
    //const textnode = React.createTextNode(element.name);
    //node.appendChild(textnode);
    //load.appendChild(node);
  });

  //load..appendChild(useFilter());
  return (
    <div className="filter-container">
      <input
        id="Inputtext"
        role="textbox"
        type="text"
        onKeyUp={(event) => onlineSearch()}
      />
      <ul role="list">
        <li role="listitem"></li>
      </ul>
      <div id="showData">
        <div>
          <ul>{}</ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
