// const expensive(){

// }
// let flag = time 
const throttle = (func, limit) => {
    let flag = 0
    return function(){
        const now = Date.now()
        if(now - flag >= limit){
            func.apply(this, arguments); 

        
        flag = now
        }
     
    }
}
console.log(flag)
console.log(throttle                                                            )

const expensive = () => {
    console.log("expensive")
}

