function finish() {
	wrong = [];
	if(document.getElementById("q1").value != 1)
		wrong.push(1);
	if(	document.getElementById("q2_1").checked == true ||
		document.getElementById("q2_2").checked == true ||
		document.getElementById("q2_3").checked == true ||
		document.getElementById("q2_4").checked == false)
		wrong.push(2);
	if(document.getElementById("q3").value != "1969-10-29")
		wrong.push(3);
	if(document.getElementById("q4").value != 5)
		wrong.push(4);
	if(document.getElementById("side_client").checked == false)
		wrong.push(5);
	if(document.getElementById("q6").value.toLowerCase() != "html")
		wrong.push(6);
	if(wrong.length == 0) {
		alert("Вы правильно ответили на все вопросы!");
	} else {
		alert("Количество правильных ответов: " + (6-wrong.length) + "\nВы ошиблись в следующих вопросах: " + wrong);
	}
}