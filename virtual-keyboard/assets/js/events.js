export function getEvents(buttons, rows, component, wrapper, cardContainer,textarea,keys){
    let spaceKey = buttons[59];
    let capsLockKey = buttons[29];
    let shiftRightKey = buttons[55];
    let shiftLeftKey = buttons[42];
    let ctrlRightKey = buttons[61];
    let ctrlLeftKey = buttons[56];
    let altRightKey = buttons[60];
    let altLeftKey = buttons[58];
    let winKey = buttons[57];
    let enterKey = buttons[41];
    let deleteKey = buttons[28];
    let tabKey = buttons[14]
    let backspaceKey = buttons[13]
    console.log(shiftLeftKey)


    buttons.forEach(button => {
        if(button.classList.value === 'keyboard__key'){
        button.addEventListener('mousedown', function(e){
          let key = keys.find(item => item.key === button.innerText);
          if(capsLockKey.classList.contains('active')){
            textarea.value += key.key.toUpperCase();
          } else {
            textarea.value += key.key;
          }
          button.classList.add('active');
        });
    }
        button.addEventListener('mouseup', function(e){
          button.classList.remove('active');
          setTimeout(()=>{
            button.classList.remove('remove');
          },200);
        });
      });
      
      capsLockKey.addEventListener('click', function(e){
        capsLockKey.classList.toggle('active');
      });
      
      spaceKey.addEventListener('mousedown', function(e){
        spaceKey.classList.add('active');
      });
      
      shiftRightKey.addEventListener('mousedown', function(e){
        shiftRightKey.classList.add('active');
      });
      
      shiftLeftKey.addEventListener('mousedown', function(e){
        shiftLeftKey.classList.add('active');
      });
      
      ctrlRightKey.addEventListener('mousedown', function(e){
        ctrlRightKey.classList.add('active');
      });
      
      ctrlLeftKey.addEventListener('mousedown', function(e){
        ctrlLeftKey.classList.add('active');
      });
      
      altRightKey.addEventListener('mousedown', function(e){
        altRightKey.classList.add('active');
      });
      
      altLeftKey.addEventListener('mousedown', function(e){
        altLeftKey.classList.add('active');
      });
      
      winKey.addEventListener('mousedown', function(e){
        winKey.classList.add('active');
      });
      
      enterKey.addEventListener('mousedown', function(e){
        enterKey.classList.add('active');
      });
      
      deleteKey.addEventListener('mousedown', function(e){
        deleteKey.classList.add('active');
      });
      
      tabKey.addEventListener('mousedown', function(e){
        tabKey.classList.add('active');
      });
      
      backspaceKey.addEventListener('mousedown', function(e){
        backspaceKey.classList.add('active');
      });
      
      window.addEventListener('mouseup', function(e){
        buttons.forEach(button => {
          button.classList.remove('active');
          setTimeout(()=>{
            button.classList.remove('remove');
          },200);
        });
        
       
        spaceKey.classList.remove('active');
        spaceKey.classList.remove('remove');
        shiftRightKey.classList.remove('active');
        shiftLeftKey.classList.remove('active');
        ctrlRightKey.classList.remove('active');
        ctrlRightKey.classList.remove('remove');
        ctrlLeftKey.classList.remove('active');
        ctrlRightKey.classList.remove('remove');
        altRightKey.classList.remove('active');
        altLeftKey.classList.remove('active');
        winKey.classList.remove('active');
        enterKey.classList.remove('active');
        deleteKey.classList.remove('active');
        tabKey.classList.remove('active');
        backspaceKey.classList.remove('active');

        
       
      });

window.addEventListener('keydown', function(e){
    for(let i = 0; i< buttons.length; i++) {
        if(e.key === buttons[i].innerText.toLowerCase() || e.key === buttons[i].innerText.toUpperCase()){
            let key = keys.find(item => item.key === buttons[i].innerText);
            if(capsLockKey.classList.contains('active')){
            textarea.value += key.key.toUpperCase()} 
            else { textarea.value += key.key}
            buttons[i].classList.add('active')
        }
        
        if(e.code == 'CapsLock') {
            capsLockKey.classList.toggle('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'ShiftLeft') {
            shiftLeftKey.classList.add('active')
        }
        if(e.code == 'ShiftRight') {
            shiftRightKey.classList.add('active')
        }
        if(e.code == 'ControlLeft') {
            ctrlLeftKey.classList.add('active')
        }
        if(e.code == 'ControlRight') {
            ctrlRightKey.classList.add('active')
        }
        if(e.code == 'AltLeft') {
            altLeftKey.classList.add('active')
        }
        if(e.code == 'AltRight') {
            altRightKey.classList.add('active')
        }
        if(e.code == 'MetaLeft') {
            winKey.classList.add('active')
        }
        if(e.code == 'Enter') {
            enterKey.classList.add('active')
        }
        if(e.code == 'Delete') {
            deleteKey.classList.add('active')
        }
        if(e.code == 'Tab') {
            tabKey.classList.add('active')
        }
        if(e.code == 'Backspace') {
            backspaceKey.classList.add('active')
        }
       
        console.log(e.code)
    }
})
window.addEventListener('keyup', function(e){
    for(let i = 0; i< buttons.length; i++) {
        if(e.key === buttons[i].innerText.toLowerCase() || e.key === buttons[i].innerText.toUpperCase()){
            buttons[i].classList.remove('active')
            buttons[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active')
            spaceKey.classList.add('remove')
        }
        if(e.code == 'ShiftLeft') {
            shiftLeftKey.classList.remove('active')
            shiftLeftKey.classList.remove('remove')
            
        }
        if(e.code == 'ShiftRight') {
            shiftRightKey.classList.remove('active')
            shiftRightKey.classList.remove('remove')
            
        }
        if(e.code == 'ControlLeft') {
            ctrlLeftKey.classList.remove('active')
            ctrlLeftKey.classList.remove('remove')
            
        }
        if(e.code == 'ControlRight') {
            ctrlRightKey.classList.remove('active')
            ctrlRightKey.classList.remove('remove')
            
        }
        if(e.code == 'AltLeft') {
            altLeftKey.classList.remove('active')
            altLeftKey.classList.remove('remove')
            
        }
        if(e.code == 'AltRight') {
            altRightKey.classList.remove('active')
            altRightKey.classList.remove('remove')
            
        }
        if(e.code == 'MetaLeft') {
            winKey.classList.remove('active')
            winKey.classList.remove('remove')
        }
        if(e.code == 'Enter') {
            enterKey.classList.remove('active')
            enterKey.classList.remove('remove')
        }
        if(e.code == 'Delete') {
            deleteKey.classList.remove('active')
            deleteKey.classList.remove('remove')
        }
        if(e.code == 'Tab') {
            tabKey.classList.remove('active')
            tabKey.classList.remove('remove')
        }
        if(e.code == 'Backspace') {
            backspaceKey.classList.remove('active')
            backspaceKey.classList.remove('remove')
        }
        setTimeout(()=>{
            buttons[i].classList.remove('remove')
        },200)
    }
})

}