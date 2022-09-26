
// const submitBtn = document.querySelector('#submit_btn') ;

// const input = document.querySelectorAll('.form__input')

// console.log (input[1])

// document.getElementById('');
// document.getElementsByClassName('')

// rootElement.innerText = 'Наш кастомный текст';








// const passwordInput = document.getElementById('password');

// console.log (passwordInput.nodeValue);

// passwordInput.addEventListener('input', (event) => {
    //     console.log(event.target.value);
    // });
    
    // document.addEventListener('DOMContentLoaded', () => {
        //     console.log('Work')
        // })
        // console.log(submitBtn);
        
    //     const rootElement = document.getElementById('rootElement');
    //     let customElement = document.createElement('div');
    //     let customClose = document.createElement('span')
    //         customElement.id = 'custom_id';
    //         customElement.className = 'custom';

            
    //         customClose.innerText = 'X'
    //         customClose.className = 'custom_close'
            


    // const btn = document.querySelector('#submit_btn');
        
    // options = {
    //     once: false
    // }

    // btn.addEventListener('click',  ()  => {

    //     customElement.innerText = 'Modal window'
    //     rootElement.appendChild(customElement);
    //     rootElement.appendChild(customClose);
        
    // }, );
    
    // // btn.onclick = () =>{
    // //     customElement.innerText = 'Modal window'
    // //     rootElement.appendChild(customElement);
    // //     rootElement.appendChild(customClose)
    // // }

    // // customClose.onclick = () => {
    // //     customElement.style.display = 'none';
    // //     customClose.style.display = 'none';
    // // }
    


    // customClose.addEventListener('click',   () => {
    //     customElement.style.display = 'none';
    //     customClose.style.display = 'none';
    // } )

        
        
    const inputLogin = document.querySelector('#login');
    const inputPass = document.querySelector('#password');
    const btn = document.querySelector('#submit_btn');

    const checkInput = (a) => {
        return a.textLength;
    }

    btn.addEventListener('click', ()  => { 

        if (checkInput(inputLogin) == 0 && checkInput(inputPass) == 0) {
            alert('введите логин и пароль')
        }else if((checkInput(inputLogin)) == 0) {
            alert('Введите ваш логин')
        }else if((checkInput(inputPass)) == 0) {
            alert('Введите ваш пароль')
        }else alert(`'Ваш пароль: ${inputPass.value} . Ваш логин: ${inputLogin.value}'`);
    });
        
        
        