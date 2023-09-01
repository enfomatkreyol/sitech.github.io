var rollV, nameV, genderV, addressV, apV ;

function readFom() {
  rollV = document.getElementById("code").value;
  nameV = document.getElementById("name");
  genderV = document.getElementById("gender");
  addressV = document.getElementById("address");
  var ap = parseFloat(document.getElementById('ap').value);
    var at = parseFloat(document.getElementById('at').value);
    var ip = parseFloat(document.getElementById('ip').value);
    var it = parseFloat(document.getElementById('it').value);
    var total = document.getElementById('total');
    var moyenne = document.getElementById('moyenne');
  //console.log(rollV, nameV, addressV, genderV, apV)

}

 //totalNotes = parseFloat(ap.value) + parseFloat(at.value) + parseFloat(ip.value)+parseFloat(it.value);
 //console.log(totalNotes);
 //total.innerHTML = totalNotes;

  document.getElementById("read").onclick = function () {
    readFom();
    var ap = parseFloat(document.getElementById('ap').value);
    var at = parseFloat(document.getElementById('at').value);
    var ip = parseFloat(document.getElementById('ip').value);
    var it = parseFloat(document.getElementById('it').value);
    var total = document.getElementById('total');
    var moyenne = document.getElementById('moyenne');

    firebase
      .database()
      .ref("student/" + rollV)
      .on("value", function (snap) {
        document.getElementById("code").value = snap.val().rollNo;
        //document.getElementById("gender").value = snap.val().gender;
      // document.getElementById("address").value = snap.val().address;

        var point = 24;
        document.getElementById("codeE").innerHTML = snap.val().rollNo;
        document.getElementById("np").textContent = snap.val().name;
        document.getElementById("sexe").textContent = snap.val().gender;
        document.getElementById("adresse").textContent = snap.val().address;
        document.getElementById("ap").value = snap.val().AnglaisP;
        document.getElementById("at").value = snap.val().AnglaisT;
        document.getElementById("ip").value = snap.val().InfP;
        document.getElementById("it").value = snap.val().InfT;
        document.getElementById("total").textContent = snap.val().Total;
        document.getElementById("moyenne").textContent = snap.val().Moyenne;
       
      }); 
      
  };


  











