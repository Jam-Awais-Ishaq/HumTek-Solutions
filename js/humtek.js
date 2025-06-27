
var typed = new Typed(".typing", {
    strings: ['<span style=" color: #f92b5f; font-size:15px; font-weight:800">Welcome</span> <span style="color:#02213ade; font-size:15px letter-spacing:0px; font-weight:800;"> to <span style="font-size:15px;font-weight:800; letter-spacing:0px;">HumTeK</span> Solutions </span>',
      '<span style="font-size:11px; letter-spacing:0px;">HumTek is top service provider company in Pakitan</span>',
      '<span style="font-size:11px; letter-spacing:0px; ">We are happy that you have come to visit our Company</span>',
      '<span style="font-size:15px; letter-spacing:0px;">HumTek will never disappoint you!</span>',
      '<span style="font-size:15px; letter-spacing:0px; ">How we can help you?</span>',],
    TypeSpeed: 0.1,
    BackSpeed: 1,
    // loop: true,
  })
  // =================================================Flickity Carousel================================\\
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    autoplay:true
  });
  function btnServicesPrimary () {
    alert("Site is in under development so please contact Via Email")
  }
  // ======================== cash Counting ===================//
  const counting = document.querySelector("#cashCounting")
  cashCount = document.querySelector(".cashcount")
  
  
  counting.addEventListener("click", () => {
    cashCount.classList.add('show');
  })
  
  const closeButton = document.querySelector("#close_button")
  
  closeButton.addEventListener("click", () => {
    cashCount.classList.remove('show');
  })
  // ====================== Stuffing JS ==================== //
  const btnstuffing = document.querySelector("#stuffing")
  stuffing = document.querySelector(".stuffing")
  btnstuffing.addEventListener("click", () => {
    stuffing.classList.add('show');
  })
  const bottonclose = document.querySelector("#stuffingClose")
  bottonclose.addEventListener("click", () => {
    stuffing.classList.remove('show');
  })
  //======================== bundle binding js ========================//
  const btnbinding = document.querySelector("#binding")
  binding = document.querySelector(".binding")
  btnbinding.addEventListener("click", () => {
    binding.classList.add('show');
  })
  const btnbindingclose = document.querySelector("#bundingclose")
  btnbindingclose.addEventListener("click", () => {
    binding.classList.remove('show');
  })
  // ========================= bundle binding ======================== //
  const btnshrink = document.querySelector("#shrink")
  shrink = document.querySelector(".shrink")
  btnshrink.addEventListener("click", () => {
    shrink.classList.add('show');
  })
  const btnshrinkclose = document.querySelector("#shrinkclose")
  btnshrinkclose.addEventListener("click", () => {
    shrink.classList.remove('show');
  })
  const btnstrap = document.querySelector("#strapp")
  strapp = document.querySelector(".strapp")
  btnstrap.addEventListener("click", () => {
    strapp.classList.add('show');
  })
  const btnstrapclose = document.querySelector("#strappclose")
  btnstrapclose.addEventListener("click", () => {
    strapp.classList.remove('show');
  })
  const btncashbinding = document.querySelector("#cashbinding")
  cashBinding = document.querySelector(".bindingCash")
  btncashbinding.addEventListener("click", () => {
    cashBinding.classList.add('show');
  })
  const btncashbindingclose = document.querySelector("#cashbundingclose")
  btncashbindingclose.addEventListener("click", () => {
    cashBinding.classList.remove('show');
  })
  const btnuv = document.querySelector("#uv")
  uvlamp = document.querySelector(".uv")
  btnuv.addEventListener("click", () => {
    uvlamp.classList.add('show');
  })
  const uvclose = document.querySelector("#uvclose")
  uvclose.addEventListener("click", () => {
    uvlamp.classList.remove('show');
  })
  const btnsami = document.querySelector("#btnSami")
  samiautomatic = document.querySelector(".sami")
  btnsami.addEventListener("click", () => {
    samiautomatic.classList.add('show');
  })
  const btnsamiclose = document.querySelector("#samiclose")
  btnsamiclose.addEventListener("click", () => {
    samiautomatic.classList.remove('show');
  })
  const btnloseValue = document.querySelector("#loseValue")
  loseValue = document.querySelector(".loseValue")
  btnloseValue.addEventListener("click", () => {
    loseValue.classList.add('show');
  })
  const btnloseValueclose = document.querySelector("#loseValueclose")
  btnloseValueclose.addEventListener("click", () => {
    loseValue.classList.remove('show');
  })
  function contact() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let selectCity = document.getElementById('selectCity').value;
    let number = document.getElementById('number').value;
    let address = document.getElementById('address').value;
    let comment = document.getElementById('comment').value;
    if (name === "" || email === "" || selectCity === "" || number === "" || address === "" || comment === "") {
      demo.innerHTML = 'Please Completely fill your Data <i class="fa-sharp fa-solid fa-check text-danger fa-lg" style="color: #e90707;"></i>';
      demo.style.color = "#e90707";
      handling();
      return false;
    }
    else if (name.length < 5) {
      demo.innerHTML = 'Enter Correct Name <i class="fa-sharp fa-solid fa-check text-danger fa-lg" style="color: #e90707;"></i>';
      demo.style.color = "#e90707"
      demo.style.font = "font-wieght:100"
      return false;
    }
    else if (number.length < 12) {
      demo.innerHTML = 'Enter Correct Number <i class="fa-sharp fa-solid fa-check text-danger fa-lg" style="color: #e90707;"></i>';
      demo.style.color = "#e90707"
      demo.style.font = "font-wieght:0"
      return false;
    }
    else if (comment.length < 20) {
      demo.innerHTMl = 'Comment must be 20 characters <i class="fa-sharp fa-solid fa-check text-danger fa-lg" style="color: #e90707;"></i>';
      demo.style.color= "#e90707"
      demo.style.font = "font-weight:0"
      return false;
    }
    else {
      demo.innerHTML = 'Data Submitted Successfully <i class="fa-sharp fa-solid fa-check text-success fa-lg" style="color: #63E6BE;"></i>';
      demo.style.color = 'green'
      refrespage(); 
      return true;
    }
  }
  function refrespage() {
    let refreshIntervals = 2000;
    setTimeout(function(){
      location.reload()
    }, refreshIntervals);
  }
  function handling() {
    let refreshIntervals = 5000;
    setTimeout(function(){
      location.reload()
    }, refreshIntervals);
  }
  function Order(element) {
    let branchAddress = document.getElementById('branchAddress').value;
    let branchCity = document.getElementById('branchCity').value;
    let products = document.getElementById('products').value;
    let model = document.getElementById('model').value;
  
    let choseproduct =document.getElementById('choseproduct').value;
    let chosemodel = document.getElementById('chosemodel').value;
    let chosecity = document.getElementById('chosecity').value;
    let index = document.getElementById('orderdemo').value;
  
    if (branchAddress === "" || branchCity === "" || products === "" || model === "") {
      orderdemo.innerHTML = 'Please enter data <i class="fa-solid fa-xmark" style="color: #e60000;"></i>';
      orderdemo.style.color = "#e90707";
      handlings();
      return false;
    }
     else if (branchCity == chosecity || products == choseproduct  || model == chosemodel ) {
      orderdemo.innerHTML = "Please check data something is missing";
      orderdemo.style.color = "red";
      return false;
    }
    else{
      alert("Site is in Under Development so please Contact via Mail Thanks")
    }
  }
  function handlings() {
    let refreshIntervals = 2000;
    setTimeout(function(){
      location.reload()
    }, refreshIntervals);
  }
  function refresh(){
    let refreshInterval = 600;
    setTimeout(function () {
      location.reload();
    },refreshInterval);
  }
  //========================== Login form ==========================//
  function loginform() {
    alert("Site is under development so please contact via Email Thanks!")
  }