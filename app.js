const buttons = [
  { buttonTitle: 'AC' },
  { buttonTitle: '+/-' },
  { buttonTitle: '%' },
  { buttonTitle: '÷', classStyle: 'operators' },
  { buttonTitle: '7' },
  { buttonTitle: '8' },
  { buttonTitle: '9' },
  { buttonTitle: '*', classStyle: 'operators' },
  { buttonTitle: '4' },
  { buttonTitle: '5' },
  { buttonTitle: '6' },
  { buttonTitle: '-', classStyle: 'operators' },
  { buttonTitle: '1' },
  { buttonTitle: '2' },
  { buttonTitle: '3' },
  { buttonTitle: '+', classStyle: 'operators' },
  { buttonTitle: '0', classStyle: 'zero' },
  { buttonTitle: '.' },
  { buttonTitle: '=', classStyle: 'operators' },
];

class UIGenerator {
  static generateBottom(classStyle, title) {
    let buttom = document.createElement('button');
    buttom.textContent = title;
    buttom.addEventListener('click', function (e) {
      let newValue = e.target.innerHTML;
      let screen = document.getElementById('screen');
      var aux = screen.value;
      UIGenerator.updateDisplay(compute(newValue, aux));
    });

    if (classStyle) buttom.classList.toggle(classStyle);
    UIGenerator.printElement(
      document.querySelector(title == '0' ? '.div1' : '.parent'),
      buttom
    );
  }

  static updateDisplay(newValue) {
    document.getElementById('screen').value = newValue;
  }

  static printElement(parent, child) {
    parent.appendChild(child);
  }
}

function compute(operator, val) {
  return operator == 'AC'
    ? ''
    : operator == '='
    ? eval(val)
    : operator == '+/-'
    ? val.charAt(0) != '-'
      ? `-${val}`
      : aux.substring(1, val.length)
    : (val += operator);
}

document.addEventListener('DOMContentLoaded', () => {
  buttons.forEach((el) =>
    UIGenerator.generateBottom(el.classStyle, el.buttonTitle)
  );
});
