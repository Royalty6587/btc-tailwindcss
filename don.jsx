var swiper = new Swiper(".main", {
    speed:600,
    effect:'circle',
    autoplay:{
        delay:5000,
        disableOnInteraction:false
    }
});

let coach = document.querySelector('.media')
function slide(){
    coach.classList.toggle('slideout')
};


setInterval(() => {
    const date = new Date();
    const Hour = date.getHours();
    const Minutes = date.getMinutes();
    const Seconds = date.getSeconds();

    document.getElementById('Hour').textContent = Hour.toString().padStart(2,'1');
    document.getElementById('Minutes').textContent = Minutes.toString().padStart(2, '0');
    document.getElementById('Seconds').textContent = Seconds.toString().padStart(2, '0');

}, 1000);





function popout(){
  document.getElementById('overlay').style.display = 'block'

};

function popin(){
  document.getElementById('overlay').style.display = 'none'
};

function popout(){
  document.getElementById('gon').style.display = 'block'
};




document.getElementById('connectWallet').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts =  await ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      document.getElementById('sendEth').disabled = false;
      document.getElementById('wallet').textContent = `wallet Address: ${accounts[0]}`
      alert('Wallet connected');
    } catch (error) {
      console.error(error);
    }
  } else {
    alert('Please install MetaMask!');
  }
});


document.getElementById('sendEth').addEventListener('click', async () => {
  const recipientAddress = '0x9dd8a078Ddd73691d86829066118498519FB937D';
  const amountInEth = '0.009';
  const accounts = await web3.eth.getAccounts();
  const fromAddress = accounts[0];

  try {
    await web3.eth.sendTransaction({
      from: fromAddress,
      to: recipientAddress,
      value: web3.utils.toWei(amountInEth, 'ether')
    });
    alert('Transaction sent!');
  } catch (error) {
    console.error(error);
  }
});


// const fileupload = document.getElementById('fileUpload');
// const formData = new FormData();
// formData.append('files',fileupload.files[0])

// fetch('/upload',{
//     method:'post',
//     body: 'formData'
// });

// this is for image upload


// const profileImage = document.getElementById('profileImage');
// const imageUpload = document.getElementById('imageUpload');
// const uploadButton = document.getElementById('uploadButton');

// imageUpload.addEventListener('change', (e) => {
//   const file = imageUpload.files[0];
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = () => {
//     const imageData = reader.result;
//     profileImage.src = imageData;
//   };
// });

// uploadButton.addEventListener('click', () => {
//   imageUpload.click();
// });

// const imageUpload = document.getElementById('imageUpload');
// const uploadedImage = document.getElementById('uploadedImage');

// imageUpload.addEventListener('change', (e) => {
//   const file = imageUpload.files[0];
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = () => {
//     const imageData = reader.result;
//     uploadedImage.src = imageData;
   
//   };
// });

// document.getElementById('connect-phantom').addEventListener('click', async () => {
//   if (window.solana && window.solana.isPhantom){
//     try {
//       const response = await window.solana.connect();
//       document.getElementById('wallet-Address').textContent = `Wallet address: ${response.publicKey.toString()}`;
//     } catch (error){
//       console.error('user declined the request', error)
//     }
//   } else {
//     alert('this wallet is not installed.');
//   }
// })

setInterval(() => {

})

