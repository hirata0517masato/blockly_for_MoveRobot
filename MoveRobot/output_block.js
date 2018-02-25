Blockly.Blocks.motor = {
  init() {
    this.jsonInit({
        message0: 'モータ 左%1 右%2',
      args0: [
        {
          type: 'input_value',
          name: 'LEFT',
        },
        {
          type: 'input_value',
          name: 'RIGHT',
        },
      ],
      "previousStatement": null,
      "nextStatement": null,
      inputsInline: true,
      colour: 60,
      
    });
  },
};

Blockly.JavaScript.motor = function(block) {
  const args0 = Blockly.JavaScript.valueToCode(block, 'LEFT', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '0';
  const args1 = Blockly.JavaScript.valueToCode(block, 'RIGHT', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '0';

  return "motor(" + args0 + "," + args1 + "); <br>";
};

Blockly.Blocks.motor_f = {
  init() {
    this.jsonInit({
        message0: 'モータ 前',
      "previousStatement": null,
      "nextStatement": null,
      inputsInline: true,
      colour: 60,
      
    });
  },
};

Blockly.JavaScript.motor_f = function(block) {
  return "motor( 50 , 50 ); <br>";
};

Blockly.Blocks.motor_b = {
  init() {
    this.jsonInit({
        message0: 'モータ 後ろ',
      "previousStatement": null,
      "nextStatement": null,
      inputsInline: true,
      colour: 60,
      
    });
  },
};

Blockly.JavaScript.motor_b = function(block) {
  return "motor( -50 , -50 ); <br>";
};

Blockly.Blocks.motor_l = {
  init() {
    this.jsonInit({
        message0: 'モータ 左カーブ',
      "previousStatement": null,
      "nextStatement": null,
      inputsInline: true,
      colour: 60,
      
    });
  },
};

Blockly.JavaScript.motor_l = function(block) {
  return "motor( 40 , 60 ); <br>";
};

Blockly.Blocks.motor_r = {
  init() {
    this.jsonInit({
        message0: 'モータ 右カーブ',
      "previousStatement": null,
      "nextStatement": null,
      inputsInline: true,
      colour: 60,
      
    });
  },
};

Blockly.JavaScript.motor_r = function(block) {
  return "motor( 60 , 40 ); <br>";
};