function Form() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  if (nama == "") {
    alert("Nama Harus diisi");
  } else if (email == "") {
    alert("email harus diisi");
  } else if (alamat == "") {
    alert("Kolom alamat harus diisi");
  }
}
