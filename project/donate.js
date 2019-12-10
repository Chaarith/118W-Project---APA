$("input[name='expiry-data']").mask("00 / 00");

const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('details');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

function send(){
  var donationamount = document.getElementById("dono").value;
  var comment = document.getElementById("comment").value;
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var phonenumber = document.getElementById("phonenum").value;
  detailsRef.push().set({
    donationamount: donationamount,
    comment: comment,
    firstname: firstname,
    lastname: lastname,
    email: email,
    phonenumber: phonenumber,
  });
}
