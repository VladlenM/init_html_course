console.log('this is script')


document.addEventListener('DOMContentLoaded', function () {
    let counterValue = 0;

    const buttonIncElement = document.querySelector('#increase_button');
    const buttonDecElement = document.querySelector('#decrease_button');
    const counterElement = document.getElementById('counter_value');

    counterElement.innerHTML = counterValue.toString();

    buttonIncElement?.addEventListener('click', () => {
        counterValue++
        counterElement.innerHTML = counterValue.toString()
    })

    buttonDecElement?.addEventListener('click', () => {
        if (counterValue > 0) {
            counterValue = counterValue - 1;
        }
        counterElement.innerHTML = counterValue.toString()
    })

})
