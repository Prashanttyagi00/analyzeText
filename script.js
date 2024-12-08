const textInput = document.getElementById("text-input");
 function touppercase(){
    textInput.value = textInput.value.toUpperCase();

 }
 function tolowercase(){
    textInput.value = textInput.value.toLowerCase();

 }


 function clearText(){
    textInput.value = ''
 }

 function reverse(){
   textInput.value = textInput.value.split('').reverse().join("");
 }

 function copy(){
   const textInput = document.getElementById('text-input');
   navigator.clipboard.writeText(textInput.value)
   .then(()=> alert("text copied to clipboard"))
   .catch((err)=> console.error("error coping text"))
 }
