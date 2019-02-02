var data = [
	{
	"question": "Who is the leader of BTS?",
	"options": ["Park Jimin", "Jeon Jungkook", "Kim Taehyung", "Kim Namjoon"],
	"crctans" : "3",
	"hints" : ["A smart guy","IQ 148"],
	"crctmsg": 'Kim Namjoon is the leader of BTS. 😍😍',
	"incrctmsg" : "Incorrect! What are you doing??? Give me the crct answer 😡"
   },
   {
   	"question": "In which year did the album 'WINGS' release?",
	"options": ["2016", "2013", "2018", "2014"],
	"crctans" : "0",
	"hints" : ["The year they received a MAMA Artist of the year award","The year they received a Melon Artist of the year award"],
	"crctmsg" : 'You got it right!!! 2016 is the year 💜💜 Some purple hearts for you.',
	"incrctmsg" : "Incorrect! What are you doing??? Give me the crct answer 😡"
   },
   {
   	"question": "What is BTS's famous V Live show ?",
	"options": ["Bangtan TV", "RUN BTS", "Bangtan Gayo", "BTS Bomb"],
	"crctans" : "1",
	"hints" : ["It has a name of the song","Started in year 2014/2015"],
	"crctmsg" : 'Yes!! Its RUN BTS... which is super fun🏃‍♂️',
	"incrctmsg" : "Incorrect! What are you doing??? Give me the crct answer 😡"
   },
   {
   	"question": "What is the name of the GAME that jungkook used to play",
	"options": ["Just Cause 3", "San Andreas", "Counter Strike","GTA vice city"],
	"crctans" : "2",
	"hints" : ["He played with few armies as well","It is a shooting game"],
	"crctmsg" : 'Its counter strike!!! 🎮💨💨',
	"incrctmsg" : "Incorrect! What are you doing??? Give me the crct answer 😡"
   }
];

load();

function load() {
	for (var i = data.length - 1; i >= 0; i--) {
		var str = '<div id = \"question' + i +   '" class="jumbotron jumbotron-fluid" style = "border-radius: 15px; background-color: white;"></div';
		var body = document.getElementById("quesbody");
		body.insertAdjacentHTML('afterend', str);
		var quesbody = document.getElementById('question' + i);
		var quescontainer = '<div id = "cont' + i + '"class = "container"></div>';
		quesbody.insertAdjacentHTML('afterbegin', quescontainer);
		var quescont = document.getElementById('cont' + i);
		var questxt = '<h4 id = "ques' + i + '">' + data[i].question +'</h4>';
		quescont.insertAdjacentHTML('afterbegin', questxt);
		var questxt = document.getElementById("ques" + i);

		// For putting hints

		var hintstr = '<p><button id = "hintbt' + i + '" class = "btn btn-warning" style = "float: right" type = "button" data-toggle = "collapse" data-target = "#collapseExample' + i + '" aria-expanded = "false" aria-controls = "collapseExample">\
		HINT\
		</button><br><br>\
		</p>\
		<div class="collapse" id="collapseExample' + i + '">\
		  <div class="card card-body">\
		  <div id = "hinttxt' + i +'" class = "row">\
		<span style = "margin-left: 23%; font-size: 150%">' + data[i].hints[0] + '</span>\
		<br>\
		</div>\
		<div class = "row">\
		<div class = "col-md-6">\
			<button id = "p' + i +'"type="button" class="btn btn-primary" style = "margin-left: 20%" onclick = "hinttextchange(this)" >Previous</button>\
        </div>\
        <div class = "col-md-6">\
  			<button id = "n' + i +'"type="button" class="btn btn-primary" style = "margin-left: 65%" onclick = "hinttextchange(this)" >Next</button>\
  		</div>\
  		</div>\
		  </div>\
		</div>'

		questxt.insertAdjacentHTML('afterend', hintstr);

		//Options
		var optstr = '<div class = "optionrow" id = "option' + i +'">';
		var length = data[i].options.length;
		for (var j = 0; j < 4; j++) {
			optstr = optstr + '<label><input id = "'+ j + " " + i + '" type = "radio" name = "optradio" value = "a1" onclick = "validation(this)">' + data[i].options[j] + '</label><br>';
			if (j === 3) {
				optstr = optstr + '</div>';
			}
		}
		
		var hintcard = document.getElementById("collapseExample" + i);
		hintcard.insertAdjacentHTML('afterend', optstr);
		var wrngalert = '<div id = "wrongalert'+i+'"class="alert alert-danger" role="alert" style = "display: none;">\
        <p> <strong>Incorrect!</strong> ' + data[i].incrctmsg + '</p></div>';
        var wrngmsg = document.getElementById("option" + i);
        wrngmsg.insertAdjacentHTML('afterend', wrngalert);
        var crctmsg ='<div id = "crctalert'+i+'"class="alert alert-success" role="alert" style = "display: none;">\
  		<p> <strong>Correct!</strong> ' + data[i].crctmsg + '</p></div>';
        var crct = document.getElementById('wrongalert' + i);
        crct.insertAdjacentHTML('afterend', crctmsg);
	}
};

function hinttextchange(button) {
	var splitid = button.id.split("");
	if(splitid[0] == "p") {
		document.getElementById("hinttxt" + splitid[1]).innerHTML = '<span style = "margin-left: 23%; font-size: 150%">' + data[splitid[1]].hints[0] + '</span>;'
		document.getElementById("n" + splitid[1]).disabled = false;
		document.getElementById("p"+splitid[1]).disabled = true;
	} else {
		document.getElementById("hinttxt" + splitid[1]).innerHTML = '<span style = "margin-left: 23%; font-size: 150%">' + data[splitid[1]].hints[1] + '</span>;'
		document.getElementById("p"+splitid[1]).disabled = false;
		document.getElementById("n"+splitid[1]).disabled = true;
	}
};

function validation(radio) {
	// console.log(radio);
	var splitansid = radio.id.split("");
	console.log(splitansid);
	if(splitansid[0] === data[splitansid[2]].crctans) {
		document.getElementById("crctalert"+splitansid[2]).style.display = "block";
		document.getElementById("hintbt"+ splitansid[2]).disabled = true;
	} else {
		console.log(document.getElementById("wrongalert"+splitansid[2]).style.display);
		document.getElementById("wrongalert"+splitansid[2]).style.display = "block";
		document.getElementById("hintbt"+ splitansid[2]).disabled = true;
	}
}