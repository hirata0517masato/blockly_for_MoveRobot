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
		
  			pre.innerHTML = code;
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
	document.getElementById('showCode').addEventListener('click', showCode, false);
	document.getElementById('saveCode').addEventListener('click', saveCode, false);
	document.getElementById('copyCode').addEventListener('click', copyCode, false);