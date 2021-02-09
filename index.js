// Your code here
function saturdayFun(string = "roller-skate"){

  return `This Saturday, I want to ${string}!`}

  function mondayWork(activity= "go to the office"){
    return `This Monday, I will ${activity}.`
  }

  function wrapAdjective(string = "*") {
    return function(type = "special"){
      return `You are ${string}${type}${string}!`
    }
  }
  let Calculator = {
    add: function(num1, num2){
      return num1 + num2
    },
    subtract: function(num1, num2){
      return num1 - num2
    },
    multiply: function(num1, num2){
      return num1 * num2
    },
    divide: function(num1, num2){
      return num1 / num2
    } 
  }
  function actionApplyer(integer, array){
    let int = integer
    for (let i = 0; i < array.length; i++) {
      int = array[i](int)
    }
    return int
    }

  