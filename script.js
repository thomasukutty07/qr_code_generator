const generateBTN = document.getElementById("Generate-btn");
const qrText = document.getElementById("qr-text");
const qrImage = document.getElementById("QR-image");
const imageBox = document.getElementById("img-box");

function qrCodeGenerate() {
  const qrCodeUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent(qrText.value);

  qrImage.src = qrCodeUrl;
  if (qrText.value === ""){
    imageBox.style.display = 'none'
    qrText.classList.add("error")
    setTimeout(()=>{
        qrText.classList.remove("error")
    },1000)
  }else {
    qrImage.onload = () => {
        imageBox.classList.add("show-img");
        imageBox.style.display = "block";
      };
  }
}

generateBTN.addEventListener("click", () => {
  qrCodeGenerate();
});
