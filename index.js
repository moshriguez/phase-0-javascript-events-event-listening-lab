function addingEventListener() {
    const input = document.getElementById('input');
    const div5 = document.querySelector('div div div div div');

    function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert); 

    div5.addEventListener('click', clickAlert);
}
addingEventListener();