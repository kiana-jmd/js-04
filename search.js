function search(a , b){
    if(a.includes(b)){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
let text = prompt("Enter your text :")
let word = prompt("Enter the word you are looking for :")

search(text , word)