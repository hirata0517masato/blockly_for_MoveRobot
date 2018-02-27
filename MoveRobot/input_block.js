Blockly.Blocks.bumper = {
  init() {
    this.jsonInit({
    	message0: 'バンパーが当たっていたら',
      output: 'Boolean',
      inputsInline: true,
      colour: 000,
      
    });
  },
};

Blockly.JavaScript.bumper = function(block) {
  return ["bumper()",Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks.compass = {
  init() {
    this.jsonInit({
    	message0: 'コンパス',
      output: 'Number',
      inputsInline: true,
      colour: 000,
      
    });
  },
};

Blockly.JavaScript.compass = function(block) {
  return ["compass()",Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks.distance_f = {
  init() {
    this.jsonInit({
    	message0: '前の距離',
      output: 'Number',
      inputsInline: true,
      colour: 000,
      
    });
  },
};

Blockly.JavaScript.distance_f = function(block) {
  return ["distance(0)",Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks.distance_b = {
  init() {
    this.jsonInit({
    	message0: '後ろの距離',
      output: 'Number',
      inputsInline: true,
      colour: 000,
      
    });
  },
};

Blockly.JavaScript.distance_b = function(block) {
  return ["distance(1)",Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks.distance_l = {
  init() {
    this.jsonInit({
    	message0: '左の距離',
      output: 'Number',
      inputsInline: true,
      colour: 000,
      
    });
  },
};

Blockly.JavaScript.distance_l = function(block) {
  return ["distance(2)",Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks.distance_r = {
  init() {
    this.jsonInit({
    	message0: '右の距離',
      output: 'Number',
      inputsInline: true,
      colour: 000,
      
    });
  },
};

Blockly.JavaScript.distance_r = function(block) {
  return ["distance(3)",Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
