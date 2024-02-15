const frm=document.querySelector('#frm');
const output=document.querySelector('#output');
const spinner=document.querySelector('#loading');
const qrcodeElement=document.querySelector('#qrcode');
const btnSave=document.querySelector('#btn-save');



function generateQRCode(e){
   // console.log("hi");
    e.preventDefault();   
    const url=document.querySelector('#url').value;
    const size=document.querySelector('#size').value;
    const clrDark=document.querySelector('#colorDark').value;
    const clrLight=document.querySelector('#colorLight').value;

   // console.log(url,size,colorDark,colorLight);
    
   if(url==="")
   {
    alert("please enter your website link");
   }
   else{
    spinner.style.display='flex';
    setTimeout(()=>{
      spinner.style.display='none';

      qrcodeElement.innerHTML="";
                      //inbuild class
      const qrcode=new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
        colorDark: clrDark,
        colorLight: clrLight,
        correctLevel: QRCode.CorrectLevel.H
      })

    },1000);
   }

}
frm.addEventListener('submit', generateQRCode);

btnSave.addEventListener('click',()=>{
  setTimeout(()=>{
  const imgsrc=qrcodeElement.querySelector('img').src;
  btnSave.href=imgsrc;
  btnSave.download='qrcode';

},50);
});