import { getEvents } from "./events.js";

const cssClasses = {
    WRAPPER: 'keyboard__wrapper',
    CONTAINER: 'keyboard__container',
    KEYBOARD: 'keyboard',
    ROW: 'keyboard__row',
    BUTTON: 'keyboard__button',
    WRITE: 'keyboard__write-field',
    SPAN: 'keyboard__span',
    SPAN_ALT: 'keyboard__span_alt',
    TEXTAREA: 'keyboard__textarea',
}

export function getStructure(keys) {
    if(!Array.isArray(keys)){
        throw TypeError('Virtual keyboard error. Keys array is invalid')
    }
    const component = createElement('section', cssClasses.KEYBOARD);
    const wrapper = createElement('div', cssClasses.WRAPPER);
    component.append(wrapper);
    const cardContainer = createElement('div',cssClasses.CONTAINER);
    wrapper.append(cardContainer);
    const textarea = createElement('textarea',cssClasses.TEXTAREA);
    cardContainer.append(textarea);
    const rows = [];
    let row;
    for(let i = 0; i < 5; i++){
        row = createElement('div',cssClasses.ROW);
         rows.push(row);
         cardContainer.append(rows[i]);
     };
    const buttons = [];
    for(let i = 0; i < 14; i++){
       let button = createElement(keys[i].tag, keys[i].class, keys[i].key, keys[i].altKey, keys[i].subclass);
        buttons.push(button);
       rows[0].append(buttons[i])
    }
    for(let i = 14; i < 29; i++){
        let button = createElement(keys[i].tag, keys[i].class, keys[i].key, keys[i].altKey, keys[i].subclass);
         buttons.push(button);
        rows[1].append(buttons[i])
     }
     for(let i = 29; i < 42; i++){
        let button = createElement(keys[i].tag, keys[i].class, keys[i].key, keys[i].altKey, keys[i].subclass);
         buttons.push(button);
        rows[2].append(buttons[i])
     }
     for(let i = 42; i < 56; i++){
        let button = createElement(keys[i].tag, keys[i].class, keys[i].key, keys[i].altKey, keys[i].subclass);
         buttons.push(button);
        rows[3].append(buttons[i])
     }
     for(let i = 56; i < 65; i++){
        let button = createElement(keys[i].tag, keys[i].class, keys[i].key, keys[i].altKey, keys[i].subclass);
         buttons.push(button);
        rows[4].append(buttons[i])
     }
    getEvents(buttons, rows, component, wrapper, cardContainer,textarea,keys)
    return component;
}

function createElement(tagName, className , innerText = '', altKey = '', subclass = ''){
    const element = document.createElement(tagName);
    element.classList.add(className);
    if(subclass){
        element.classList.add(subclass); 
    }
    if(className=== 'keyboard__key'){
        let keyboardSpan = createElement('span', cssClasses.SPAN)
        if(altKey){
        let keyboardSpanAlt = createElement('span', cssClasses.SPAN_ALT)
        element.append(keyboardSpanAlt)
        keyboardSpanAlt.innerText = altKey;}
        element.append(keyboardSpan)
        keyboardSpan.innerText = innerText //innerText[0].toUpperCase() + innerText.slice(1);
        
    }
    
    return element;
}

