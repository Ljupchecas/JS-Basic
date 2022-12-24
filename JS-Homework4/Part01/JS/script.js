let story = ['Ljupche', 'happy', 'eating'];


function tellStory(array){
    let fullStory = `This is ${array[0]}. ${array[0]} is a nice person. Today they are ${array[1]}. They are ${array[2]} all day. The end.`
    return fullStory
}

function getArray(){
    let name, mood, activity
    name = prompt("Type a name")
    mood = prompt("What mood are they in")
    activity = prompt("What are they doing")
    if(  name == ""){
        console.log("Wrong ");
    } else if( mood == ""){
            console.log("Wrong ");
        } else if(activity == ""){
            console.log("Wrong ");
            } else{
                console.log(tellStory([name,mood,activity]));
                    }
}

getArray()
