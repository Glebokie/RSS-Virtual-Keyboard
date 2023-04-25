const cssClasses = {
    WRAPPER: 'keyboard__wrapper',
    CONTAINER: 'keyboard__container',
    KEYBOARD: 'keyboard',
    ROW: 'keyboard__row',
    BUTTON: 'keyboard__button',
    WRITE: 'keyboard__write-field',
}

export function getStructure(keys) {
    console.log(keys)
    if(!Array.isArray(keys)){
        throw TypeError('Virtual keyboard error. Keys array is invalid')
    }
    const component = createElement('section', cssClasses.KEYBOARD);
    const wrapper = createElement('div', cssClasses.WRAPPER);
    component.append(wrapper);
    const cardContainer = createElement('div',cssClasses.CONTAINER);
    wrapper.append(cardContainer);
    const rows = [];
    let row;
    for(let i = 0; i < 5; i++){
        row = createElement('div',cssClasses.ROW);
         rows.push(row);
         cardContainer.append(rows[i]);
     };
    const buttons = [];
    for(let i = 0; i < 14; i++){
       let button = createElement(keys[i].tag, keys[i].class, keys[i].key, keys[i].altKey);
        buttons.push(button);
       rows[0].append(buttons[i])
    }
    for(let i = 14; i < 29; i++){
        let button = createElement(keys[i].tag, keys[i].class, keys[i].key, keys[i].altKey);
         buttons.push(button);
        rows[1].append(buttons[i])
     }
    return component;
}

function createElement(tagName, className, innerText = ''){
    const element = document.createElement(tagName);
    element.classList.add(className);
    element.innerText = innerText;
    return element;
}
