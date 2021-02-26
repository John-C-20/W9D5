
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const node = document.createElement('P')
    const textNode = document.createTextNode(string)
    node.appendChild(textNode)
    
    while (htmlElement.firstChild) {  
        htmlElement.removeChild(htmlElement.lastChild)
    }
    
    htmlElement.appendChild(node);


};

console.log(htmlGenerator('Party Time.', partyHeader)); 

