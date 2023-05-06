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



// lấy danh sách mèo đã lưu trên local
let listCatConvert = JSON.parse(localStorage.getItem("catMenus"));
console.log("listCatConvert==>", listCatConvert);
// lấy danh sách sản phẩm lưu trong giỏ hàng
let cartList = JSON.parse(localStorage.getItem("cartList"));
console.log("cartList===>",cartList);
tbody.innerHTML = "";
for(let i=0;i<cartList.length;i++){
  // console.log(cartList[i].image);
  tbody.innerHTML = tbody.innerHTML+
  `<tr>
      <th scope="row"><input type="checkbox" class="checkbox"></th>
      <td><img src=${cartList[i].img} class="card-img-top" alt="..."></td>
      <td>${cartList[i].name}</td>
      <td>${cartList[i].price}</td>
  </tr>`;
}


let money = document.getElementById("money");
// tạo 1 biến bằng 0 để để lưu trữ tổng số tiền và tổng số sản phẩm đã được chọn trong giỏ hàng.
let totalMoney = 0;
let numProductsChecked = 0;
for (let i = 0; i < cartList.length; i++) {
  tbody.onclick = function(e) {
    if (e.target.classList.contains("checkbox")) {
      let checkbox = e.target;
      console.log("checkbox==>",checkbox);
      let price = cartList[i].price;
      console.log("price===>",price);
      // kiểm tra xem checkbox đã được chọn hay chưa. Nếu đã được chọn (checked) thì tiếp tục thực hiện, còn không thì bỏ qua.
      if (checkbox.checked) {
        // Nếu checkbox đã được chọn,tăng tổng số tiền của các sản phẩm được chọn lên với giá của sản phẩm hiện tại.
        totalMoney += price;
        // tăng số lượng sản phẩm được chọn lên
        numProductsChecked++;
      } else {
        totalMoney -= price;
        numProductsChecked--;
      }
      //cập nhật lại giá trị  của phần tổng thanh toán .
      money.textContent = `(${numProductsChecked} sản phẩm )${totalMoney}VND `;
      console.log(money);
    }
  }
}



let nameInput = document.getElementById("input-name");
let name = nameInput;
let phoneInput = document.getElementById("input-phone");
let phone = phoneInput;
let addressInput = document.getElementById("input-address");
let address = addressInput;
let btnEnd = document.getElementById("btnEnd");

btnEnd.onclick = function(e) {
  console.log(name.value,phone.value,address.value);
  if (name.value.trim() === "" || phone.value.trim() === "" || address.value.trim() === "") {
    alert("Hãy điền đầy đủ thông tin");
  } else {
    alert("Bạn đã đặt hàng thành công. Cảm ơn bạn.");
  }
};


let cartQuantity = document.getElementById("cart-quantity") 
 for (let i = 0; i < cartList.length; i++) {
 cartQuantity.innerHTML = cartList.length
  
 }