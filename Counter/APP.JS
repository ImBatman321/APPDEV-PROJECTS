//set initial for our count variable
let count = 0;
//select the value buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
//console.log(btns)
btns.forEach((btn) => {
    //console.log(btn)
    btn.addEventListener('click', (e) => {
        //console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')){
            count--
        }//decrease by 1
        else if(styles.contains('increase')){
            count++
        }//increase by 1
        else if(styles.contains('decreaseFive')){
            count = count - 5;
        }
        else if(styles.contains('increaseFive')){
            count = count + 5;
        }
        else if(styles.contains('random')){
            count = Math.floor(Math.random() * 200) - 100;
        }
        else{
            count = 0
        }
        
        if(count > 0){
            value.style.color = "green"
        }
        if(count < 0){
            value.style.color = "red"
        }
        if(count==0){
            value.style.color = "black"
        }
        value.textContent = count
    })
    
});