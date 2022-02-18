
showNotes()

let addBtn= document.getElementById('addBtn');
addBtn.addEventListener("click", function(e) {
	let addtxt=document.getElementById('txtArea')
	let addtitle=document.getElementById('addtitle')
	let notes = localStorage.getItem("notes")
	if (notes == null) {
		notesobj=[];
	} else {
		notesobj=JSON.parse(notes)
	}
	let myobj={
		title:addtitle.value,
		text:addtxt.value
	}
	notesobj.push(myobj);
	localStorage.setItem("notes", JSON.stringify(notesobj))
	addtxt.value="";
	addtitle.value="";
	showNotes();





})

function showNotes(){
	let  notes=localStorage.getItem("notes")

	if (notes == null) {
		notesObj=[];
	} else {
		notesObj=JSON.parse(notes)
	}

	let html="";
	notesObj.forEach(function(element, index){
		html+= 
		` 
		<div class="Notecard mx-2 my-2" style="width: 18rem;">
  		<div class="card-body">
    	<h5 class="card-title"> ${element.title} </h5>
    	<p class"card-text"> ${element.text}</p>
    	<button id=${index} onClick="deleteNote(this.id)" class="btn btn-primary " id="delbtn"> - </button>
  		</div>
		</div>
		
		`
	})
	let notesElemnt=document.getElementById("notes")
	if (notesObj.length != 0 ) {
		notesElemnt.innerHTML= html;
	} 
	else{
		notesElemnt.innerHTML=`no notes please write some more notes`
	}
}



function deleteNote(index) {
	console.log("i am deleting")
	let notes= localStorage.getItem("notes")
	if (notes == null) {
		notesobj=[]
	} else {
		notesobj=JSON.parse(notes)
	}

	notesobj.splice(index, 1)
	localStorage.setItem("notes", JSON.stringify(notesobj));
	showNotes();

}




let search = document.getElementById("Search")
search.addEventListener("input" , function(){

	let input=search.value.toLowerCase();
	let noteCard=document.getElementsByClassName("Notecard");
	Array.from(noteCard).forEach(function(element){
		let cardcontent = element.getElementsByTagName("p")[0].innerText;
		let cardtitle = element.getElementsByTagName("h5")[0].innerText;
		if (cardcontent.includes(input) || cardtitle.includes(input)) {
			element.style.display="block"
		} else {
			element.style.display="none"
		}
	})
})