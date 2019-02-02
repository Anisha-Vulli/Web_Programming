var key = "123456789";
var values = [];

function post() {
	var check = all();
	console.log(check);
	var password = document.getElementById('pwd').value;
	if (check) {
		if (password === key) {
			var check = all();
			if (check) {
				var comment = document.getElementById('comment').value;
				document.getElementById('comment').value = "";
				document.getElementById('authen_go').style.display = 'block';
				document.getElementById('authen_fail').style.display = 'none';
				values.push(comment);
				console.log(values);
				display();
			}
		} else {
			var check = all();
			if (check) {
				document.getElementById('pwd_alert').style.display = 'block';
				document.getElementById('authen_go').style.display = 'none';
			}
		}
	}
};

function display() {
	var length_of_array = values.length;
	console.log(length_of_array);
	
	for (var i = length_of_array - 1; i >= 0; i--) {
		if (i === length_of_array - 1) {
			var display = '<br><div class="card" style ="border: 2px solid #6699ff" id = "card_to_be_displayed"><div class="container"><p>'
			var name = document.getElementById('name').value;
			console.log(name);
			var nxt2 = '</p><h4 style = "font-family: Lucida Calligraphy; font-size: 35px; margin-left: 10%">';
			var nxt = '</h4></div></div>';
			document.getElementById('card_to_be_displayed').insertAdjacentHTML('afterend', display + name + nxt2 + values[i] + nxt);
		}
	}
}

function all(argument) {
	var name = document.getElementById('name').value;
	var cmt = document.getElementById('comment').value;
	console.log(cmt);
	if (name === "" || cmt === "") {
		document.getElementById('authen_fail').style.display = 'block';
		document.getElementById('authen_go').style.display = 'none';
		return false;
	} else {
		document.getElementById('authen_fail').style.display = 'none';
		document.getElementById('authen_go').style.display = 'none';
		return true;
	}
}