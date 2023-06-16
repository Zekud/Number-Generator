let wrapper = document.getElementsByClassName('wrapper')[0]
let btn = document.querySelector('.btn')
let input = document.querySelector('#input')
let label = document.querySelector('label')
label.style.color = 'red'
for(let i=0; i<=10; ++i){
    let div = document.createElement('div')
        div.style.width = '110px'
        div.style.height = '60px'
        div.style.display = 'flex';
        div.style.justifyContent = 'center'
        div.style.alignItems = 'center'
        let flag = 0
        if(i==2){
            div.style.backgroundColor = 'red'
        }else if(true){
            for(let j=2; j<i; j++){
                if(i%j==0){
                    flag++
                }
            }
            if(i==0){
                div.style.backgroundColor = 'green'
            }else if(i==1){
                div.style.backgroundColor = 'yellow'
            }else if(flag==0){
                div.style.backgroundColor = 'red'
            }else if(i%2==0){
                div.style.backgroundColor = 'green'
            }else{
                div.style.backgroundColor = 'yellow'
            }
        }
        div.textContent = i
        div.style.color = 'white'
        div.style.margin = '2px'
        wrapper.appendChild(div)
    }
btn.addEventListener('click', ()=>{
    let inputValue = input.value
    if(inputValue == ''){
        label.textContent = 'Enter a number into the input field to generate numbers'
    }
    else if(isNaN(inputValue)){
        label.textContent = 'input value must be a number'
    }else{
        label.textContent = ''
        generate(inputValue)
    }
})

const generate = function(inputValue){
    wrapper.innerHTML = ''
    for(let i=0; i<=inputValue; i++){
        let div = document.createElement('div')
        div.style.width = '110px'
        div.style.height = '60px'
        div.style.display = 'flex';
        div.style.justifyContent = 'center'
        div.style.alignItems = 'center'
        let flag = 0
        if(i==2){
            div.style.backgroundColor = 'red'
        }else if(true){
            for(let j=2; j<i; j++){
                if(i%j==0){
                    flag++
                }
            }
            if(i==0){
                div.style.backgroundColor = 'green'
            }else if(i==1){
                div.style.backgroundColor = 'yellow'
            }else if(flag==0){
                div.style.backgroundColor = 'red'
            }else if(i%2==0){
                div.style.backgroundColor = 'green'
            }else{
                div.style.backgroundColor = 'yellow'
            }
        }
        div.textContent = i
        div.style.color = 'white'
        div.style.margin = '2px'
        wrapper.appendChild(div)
    }
}