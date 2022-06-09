const names = [];
const div = document.querySelector('div');
const btn = document.querySelector('button');

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    if(input.value.length){
        for( item of names ) {
            if( item === newName) {
                alert('Istnieje już takie imię!')
                return
            }
        }
        names.push(newName);
        //console.log(names);
        div.textContent += `${newName}, `;
        input.value = "";
    }
    
}

btn.addEventListener('click', addName);