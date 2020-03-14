module.exports = function check(str, bracketsConfig, res = false) {
  let cutStr = '';
  if(str.length == 0) return res;
  for(let i = 0; i < bracketsConfig.length; i++){
    let bracket = bracketsConfig[i].reduce((a,b) => a+b);
    let j = str.indexOf(bracket);
    res = str.includes(bracket);
    cutStr = res ? str.slice(0, j) + str.slice(j+2) : '';
    if(res) break;
  }
  return check(cutStr, bracketsConfig, res);
}

// const config1 = [['(', ')']];
// console.log(check('()', config1)); // true
// console.log(check('((()))()', config1)); // true
// console.log(check('())(', config1)); // false

// const config2 = [['(', ')'], ['[', ']']];
// console.log(check('[(])', config2)) // false
// console.log(check('[]()', config2)); // true
// console.log(check('[]()(', config2)); // false
// console.log(check('[]][[]', config2)); // false

// console.log(check('([()])', config2)); // true

// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// console.log(check('([{}])', config3)); // true
// console.log(check('[]][[]', config3)); // false

// const config4 = [['|', '|']];
// console.log(check('||', config4)); // true

// const config5 = [['(', ')'], ['|', '|']];
// console.log(check('|()|', config5)); // true
// console.log(check('|(|)', config5)); // false
// console.log(check('|()|(||)||', config5)); // true


// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// console.log(check('111115611111111222288888822225577877778775555666677777777776622222', config6)); // true
// console.log(check('5555512575557777777555566667888888667661133833448441111222233333444442266666', config6)); // false
// console.log(check('8888877878887777777888888887777777887887788788887887777777788888888887788888', config6)); // false
// console.log(check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', config6)); // true

// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
// console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', config7)); // false
// console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())', config7)); // true
// console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))', config7)); // true