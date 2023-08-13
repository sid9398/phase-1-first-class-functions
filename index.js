function receivesAFunction (callback){
    callback()
}
function spy(){   
}
receivesAFunction(spy)

function returnsANamedFunction(Sid){
    return function Sid(){ 
    }
}
function returnsAnAnonymousFunction(){
    return function(){
    return ''
    }
}