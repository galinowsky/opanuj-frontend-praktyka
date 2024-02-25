const  sum = (numberA :number, numberB :number) => {
    return numberA + numberB;
  }
  const  substract = (numberA :number, numberB :number) => {
    return numberA - numberB;
  }
  const  multiply = (numberA :number, numberB :number)=> {
    return numberA * numberB;
  }
  
  const divide  = (numberA :number, numberB :number) => {
    if (numberB === 0) {
      return "Error: Division by zero";
    }
    return numberA / numberB;
  }


  export { sum, substract, multiply, divide}

  