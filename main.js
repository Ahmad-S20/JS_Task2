
//Session 6

//var user_email = prompt('Please enter your email');
//to scan from a user

var a = ["a", "b", "c", "d", "e"];

console.log(a.length);


// how to add an html content from js

var data = "";
data += "<h2>Ahmad</h2>";
data += "<h2>Samer</h2>";
document.querySelector("div").innerHTML = data; 

var date = "";
for (var i = 1950; i <= 2003; i++)
{
    date += `<option> ${i} </option>`;
}
document.querySelector("select").innerHTML = date;

//Task

var names = [
    "Tariq", "Ali", "Rami", "Sara", "Huda", "Lina", "Ahmad", "Yara", "Mona", "Omar",
    "Noor", "Amira", "Fadi", "Hassan", "Aya", "Khalid", "Leila", "Samer", "Zain", "Nadine",
    "Ibrahim", "Hana", "Mahmoud", "Nour", "Rania", "Salim", "Rasha", "Adel", "Basma", "Waleed",
    "Yousef", "Mariam", "Samira", "Issa", "Farah", "Bilal", "Laila", "Jana", "Mustafa", "Naji",
    "Dina", "Hatem", "Maya", "Tamer", "Loubna", "Saif", "Fayez", "Salma", "Reem", "Zahra",
    "Yazan", "Nabil", "Ola", "Rita", "Jawad", "Shadi", "Kamil", "Nada", "Ibtisam", "Basel",
    "Ziad", "Manal", "Tala", "Anas", "Ghada", "Jamil", "Rabab", "Sami", "Rayan", "Fatima",
    "Walid", "Nourhan", "Karim", "Maysa", "Firas", "Amal", "Lamis", "Sahar", "Rafik", "Iman",
    "Mohammad", "Lamar", "Majed", "Tania", "Ayman", "Shereen", "Qasem", "Haifa", "Bassam", "Nada",
    "Alaa", "Marwa", "Sameh", "Noura", "Murad", "Afaf", "Nizar", "Rida", "Aziz", "Dalia"
    ];
var tr="";
for(var i=0; i<names.length;i++){
    tr+= `<tr><td>${names[i]}</td></tr>`;
}

document.querySelector(".task-table").innerHTML = tr;