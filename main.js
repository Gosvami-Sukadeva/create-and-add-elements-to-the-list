let size = 10;
let orderElement = 1;

const init = () => {
    console.log('działa!');
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    btnReset.textContent = 'Reset';
    btn.textContent = 'Dodaj 10 elementów do listy';
    btn.style.marginRight = size + 'px';
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', () => {
        document.querySelector('ul').textContent = "";
        size = 10;
        orderElement = 1;
    })
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {

        const li = document.createElement('li');
        li.textContent = `element${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(li);

    }

}

init()