var workspacePlayground = Blockly.inject(
    'blocklyDiv',
    {
    	toolbox: document.getElementById('toolbox'),
    	grid: {
      	    spacing: 18,
      	    length: 3,
      	    colour: '#ccc',
      	    snap: true,
    	},
    	trashcan: true,
    	zoom: {
      	    controls: true,
      	    wheel: true,
      	    startScale: 1.0,
      	    maxScale: 3,
      	    minScale: 0.3,
      	    scaleSpeed: 1.2,
    	},
    },);

function showCode() {
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    const pre = document.getElementById('code');

    var code = trans();
    
    pre.value = code;

    //xml
    var xmlDom = Blockly.Xml.workspaceToDom(workspacePlayground);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    document.getElementById('XmlText').value = xmlText ;
}

function saveCode(){
    var code = trans();
    //code = code.replace( /<br>/g , '\n' ) ;
    download(new Blob([code]), 'Blockly_code.txt');
}

function copyCode(){
    var code = trans();
    //code = code.replace( /<br>/g , '\n' ) ;
    if(execCopy(code)){
    	alert('コピーできました');
    }else {
    	alert('このブラウザでは対応していません');
    }
}

function insertStr(str, index, insert) {
    return str.slice(0, index) + insert + str.slice(index, str.length);
}

function download(blob, filename) {
    const objectURL = window.URL.createObjectURL(blob),
      	  a = document.createElement('a'),
      	  e = document.createEvent('MouseEvent');

    //a要素のdownload属性にファイル名を設定
    a.download = filename;
    a.href = objectURL;

    //clickイベントを着火
    e.initEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
}

function execCopy(string){
    var temp = document.createElement('div');

    temp.appendChild(document.createElement('pre')).textContent = string;

    var s = temp.style;
    s.position = 'fixed';
    s.left = '-100%';

    document.body.appendChild(temp);
    document.getSelection().selectAllChildren(temp);

    var result = document.execCommand('copy');

    document.body.removeChild(temp);
    // true なら実行できている falseなら失敗か対応していないか
    return result;
}

function trans(){
    var code = Blockly.JavaScript.workspaceToCode(workspacePlayground);
    
    code = code.replace( /var/g , "int" ) ;
    code = code.replace( /true/g , "1" ) ;
    code = code.replace( /false/g , "0" ) ;
    code = code.replace( /<br>/g , '\n' ) ;
    
    var index;
    while( index = code.indexOf('typeof'),index != -1) {
	var R = code.indexOf( ")", index );
	code = code.substr(0, index-3) + code.substr(R+1);
	var P = code.indexOf( "+", index-3 );
	code = insertStr(code, P+1, '=');
    }
    return code;
}

function saveXml() {
    var xmlDom = Blockly.Xml.workspaceToDom(workspacePlayground);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    //console.log(xmlText);
    download(new Blob([xmlText]), 'Blockly_xml.txt');
}

function loadXml() {
    xmlText = document.getElementById('XmlText').value;
     xmlText  =  xmlText .replace( /'\n'/g , "" ) ;
    
    try {
        xmlDom = Blockly.Xml.textToDom(xmlText);
    } catch (e) {
	// (エラー処理)
	alert("XMLエラー");
    }
    if (xmlDom) {
        workspacePlayground.clear();
        Blockly.Xml.domToWorkspace(xmlDom, workspacePlayground);
	showCode();
    }
}

function startXml() {
    document.getElementById('XmlText').value = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="start" id="o!$D}]eFeZYgqZQpd]1^" x="63" y="45"/></xml>';
    loadXml();
}

var oldXml = "";

function autoXml() {
    var xmlDom = Blockly.Xml.workspaceToDom(workspacePlayground);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);

    if(oldXml != xmlText){
	showCode();
    }
    oldXml = xmlText;
}

startXml() ;

setInterval(autoXml, 500);

if(document.getElementById("showCode") != null){
    document.getElementById('showCode').addEventListener('click', showCode, false);
}
if(document.getElementById("saveCode") != null){
    document.getElementById('saveCode').addEventListener('click', saveCode, false);
}
if(document.getElementById("copyCod") != null){
    document.getElementById('copyCode').addEventListener('click', copyCode, false);
}
if(document.getElementById("saveXml") != null){
    document.getElementById('saveXml').addEventListener('click', saveXml, false);
}
if(document.getElementById("loadXml") != null){
    document.getElementById('loadXml').addEventListener('click', loadXml, false);
}
