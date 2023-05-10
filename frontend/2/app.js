
// When window is finished loading
window.addEventListener("load", () => {

    // Grabbing answers for first page
    buttons = document.getElementsByClassName('answer')   
    
    // Adding event listners to each button to reroute
    for (let i = 0; i < buttons.length; i ++) {
        button = buttons[i]
        button.addEventListener("click", () => {
            window.location.href = 'index_second.html'
        })
    } 

    // Grabbing answers for second page
    buttons = document.getElementsByClassName('answer_second')   
    
    // Adding event listners to each button to reroute
    for (let i = 0; i < buttons.length; i ++) {
        button = buttons[i]
        button.addEventListener("click", () => {
            window.location.href = 'index_third.html'
        })
    } 

    // Grabbing answers for third page
    buttons = document.getElementsByClassName('answer_third')   
    
    // Adding event listners to each button to reroute
    for (let i = 0; i < buttons.length; i ++) {
        button = buttons[i]
        button.addEventListener("click", () => {
            window.location.href = 'finish.html'
        })
    } 
})
