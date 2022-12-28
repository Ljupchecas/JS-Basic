function animalSay(){
    let animal = {
        name: document.getElementById('name').value,
        kind: document.getElementById('kind').value,
        speak: document.getElementById('says').value,

        dogSay: function() {
            return `${this.kind} ${this.name} says ${this.speak}`;
        }
    }
    document.getElementById('whatSayAnimal').innerHTML = animal.dogSay();
}



