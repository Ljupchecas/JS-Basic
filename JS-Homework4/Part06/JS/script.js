let first = ["Bob", "Jill"]
let last = ["Gregory", "Wurtz", "fsdfds"]

function names(firstNames,lastNames){
    let full = []
    let len = firstNames.length 
    if(firstNames.length  > lastNames.length ){
        len = lastNames.length 
    }
    for(let i=0;i<len ;i++){
        full[i] = `${i+1}. ${firstNames[i]} ${lastNames[i]}`
    }
    console.log(full)
}

names(first,last)