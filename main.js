function generate(){
    document.getElementById("output").innerHTML = "";
    let number = document.getElementById("number").value;
    for(let count = 1; count <= 10; count++){
        console.log(number + " x " + count + " = " + count * number)
        document.getElementById("output").innerHTML += `
        <p> ${number} x ${count} = ${count * number} </p>
        `;

        
    }

}