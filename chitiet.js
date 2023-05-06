
  
// gọi ra nút đăng nhập trong ô đăng nhập
let loginButton = document.querySelector('.login');    
// gọi ra ô đăng nhập
let btnLogin = document.querySelector('#btnLogin');

checkLogin();

function checkLogin() {
  // Lấy thông tin tài khoản đã đăng ký từ Local Storage
  let registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts"));
  
  // Lấy trạng thái đăng nhập từ Local Storage
  let isLogin = JSON.parse(localStorage.getItem("isLogin"));
console.log(isLogin);
  if (isLogin) {
    // Nếu đã đăng nhập thì thay đổi nút đăng nhập thành chào mừng
    let textHello = "Xin chào " + isLogin.fullName ;
    btnLogin.textContent = textHello;
    return true;
  } else {
    // Nếu chưa đăng nhập thì giữ nút đăng nhập ban đầu
    return false;
  }
}

loginButton.addEventListener('click', function() {
  // gọi ra phần email hoặc sdt
  let contactInput = document.querySelector('.communicate');
  // gọi ra phần pass
  let passwordInput = document.querySelectorAll('.communicate')[1];
  let contact = contactInput.value.trim();
  let password = passwordInput.value.trim();
  // Lấy thông tin đăng ký từ Local Storage
  let registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts"));

  for (let i = 0; i < registeredAccounts.length; i++) {
    if (contact === registeredAccounts[i].emailOrPhone && password === registeredAccounts[i].password) {
      alert('Đăng nhập thành công');
      // Lưu thông tin đăng nhập vào Local Storage
      localStorage.setItem('isLogin', true);
      localStorage.setItem('fullName', registeredAccounts[i].fullName);
      // Thay đổi nút đăng nhập thành chào mừng
      let textHello = "Xin chào " + registeredAccounts[i].fullName;
      btnLogin.textContent = textHello;
      return true;
    }
  }
  alert('Đăng nhập không thành công');
  return false;
});


getDataByID();

function getDataByID () {
  let checkIsLogin = checkLogin();
  //lấy id đưa lên url
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let catID = urlParams.get('catID')
  console.log("catID==>", catID);
  // nếu đã đăng nhập
  if(checkIsLogin) {
    // lấy danh sách mèo đã lưu trên local
    let listCatOfLocalstorage = localStorage.getItem("catMenus")
    console.log("listCatOfLocalstorage==>", listCatOfLocalstorage);
    // biến về dạng mảng
    let listCatConvert = JSON.parse(listCatOfLocalstorage);
    console.log("listCatConvert==>", listCatConvert);
    // lọc ra phần tử trong mảng listCatConvert mà có thuộc tính id bằng với giá trị của biến catID.
    let itemFilter = listCatConvert.filter(obj => obj.id == catID)
    console.log("itemFilter==>", itemFilter);
    //lấy ra phần tử đầu tiên trong mảng được lọc ra 
    let itemById = itemFilter[0]
    console.log("itemById==>", itemById);

    let chitietmeo= document.getElementById("chitietmeo")
    chitietmeo.innerHTML=`
    <div class="col">
      <img src="${itemById.img}" class="card-img-top" alt="...">
    </div>
    <div class=" col col-detail">
      <div class="name-detail">
          <h5 class="card-title">${itemById.name}</h5>
      </div>
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <div>
                  <span><strong>Chi tiết về bé</strong></span>
                  <ul>
                      <li>Giống:${itemById.name}</li>
                      <li>${itemById.age}</li>
                      <li>${itemById.weight}</li>
                      <li>${itemById.sex}</li>
                      <li>${itemById.price}</li>
                  </ul>
                  <a href="./giohang.html?catID=${itemById.id}&name=${itemById.name}&price=${itemById.price}"><button class="button-buy">Mua Hàng</button></a>
              </div>
          </div>
      </div>
    </div>`;
  } else {
    // alert user not login
    alert('Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục')
  }
}