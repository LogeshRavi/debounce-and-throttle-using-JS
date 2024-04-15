let btn = document.querySelector('.increment_btn')
let btnPressed = document.querySelector('.buttonPressed')
let btnTrigger = document.querySelector(".buttonTrigger")


let pressedCount = 0
let triggerCount = 0


//debounce using loadash

// const debouncedCount = _.debounce(()=>{
//    btnTrigger.innerHTML = ++triggerCount
// },800)

//throttle using loadash
// const throttleCount = _.throttle(()=>{
//    btnTrigger.innerHTML = ++triggerCount
// },800)
 

const myDebounce = (cb,d) => {
let timer

return function (...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
         cb(...args)
    },d)
}
}


//debounce
// const debouncedCount = myDebounce(()=>{
//    btnTrigger.innerHTML = ++triggerCount
// },800)

const myThrottle = (cb,d) =>{
    let last = 0

    return (...args)=>{
        let now = new Date().getTime()
        if(now-last < d) return
        last = now
        return cb(...args)
    }
}


//throttle
const throttleCount = myThrottle(()=>{
   btnTrigger.innerHTML = ++triggerCount
},1000)



btn.addEventListener('click',()=>{
    btnPressed.innerHTML = ++pressedCount
    // debouncedCount()
    throttleCount()
})