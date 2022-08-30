import data from "../data/users.json";

const useFilter = (searchfield = "") => {
  var output = document.createElement("ul");
  var outputArray = [];
  data.forEach((element) => {
    if (element.name.search(searchfield) !== -1) {
      const node = document.createElement("li");
      const textnode = document.createTextNode(element.name);
      outputArray.push(textnode);
      node.appendChild(textnode);
      output.appendChild(node);
    }
  });
  return [output, outputArray];
};

export default useFilter;
