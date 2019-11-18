Blockly.Blocks.text_shuffle = {
  /**
   * Block for shuffle characters.
   * @this Blockly.Block
   */
  init() {
    this.jsonInit({
        message0: '%1をシャッフルする',
      args0: [
        {
          type: 'input_value',
          name: 'TEXT',
          check: 'String',
        },
      ],
      output: 'String',
      inputsInline: true,
      colour: 160,
      tooltip: '文字の順番をランダムでいれかえる',
    });
  },
};



Blockly.JavaScript.text_shuffle = function(block) {
  const args0 = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  const OPERATOR = ".split('').sort(function(){return 0.5-Math.random()}).join('')";
  return [args0 + OPERATOR, Blockly.JavaScript.ORDER_MEMBER];
};


Blockly.Blocks.start = {
	init() {
    this.jsonInit({
    
    message0: "スタート",
    message1: "%1",
    
    args1: [{
      type: "input_statement",
      name: "DO"
    }],
    
    colour: "%{BKY_LOOPS_HUE}",  
  });
  },
};

Blockly.JavaScript.start = function(block) {
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  
  return "void loop(){ <br>" + branch + "}<br>";
};

Blockly.Blocks.delay_ms = {
  init() {
    this.jsonInit({
        message0: '%1ミリびょうまつ',
      args0: [
        {
          type: "field_number",
            name: 'TIME',
	    "value": 1,
	    "min": 0,
        }
      ],
	"previousStatement": null,
      "nextStatement": null,
      inputsInline: true,
      colour: "%{BKY_LOOPS_HUE}",
      
    });
  },
};

Blockly.JavaScript.delay_ms = function(block) {
  const args0 = block.getFieldValue('TIME');
 
    return "delay(" + args0 + "); <br>";
};


Blockly.Blocks.delay_s = {
  init() {
    this.jsonInit({
        message0: '%1びょうまつ',
      args0: [
        {
            type: "field_number",
            name: 'TIME',
	    "value": 1,
	    "min": 0,
        }
      ],
	"previousStatement": null,
      "nextStatement": null,
      inputsInline: true,
      colour: "%{BKY_LOOPS_HUE}",
      
    });
  },
};

Blockly.JavaScript.delay_s = function(block) {
    const args0 = block.getFieldValue('TIME');
    if(args0 == "0") return "delay(" + args0 + "); <br>";
    
    return "delay(" + args0 + "000); <br>";
};
