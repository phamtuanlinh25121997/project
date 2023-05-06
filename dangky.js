// Lấy các phần tử tên đăng nhập, email hoặc sdt, mật khẩu
let fullNameInput = document.querySelector('.register .log-out:nth-child(1) input');
let emailOrPhoneInput = document.querySelector('.register .log-out:nth-child(2) input');
let passwordInput = document.querySelector('.register .log-out:nth-child(3) input');
let registerButton = document.querySelector('.register button');
console.log(registerButton)

// Đăng ký sự kiện click cho nút đăng ký
registerButton.addEventListener('click', function(e) {
  e.preventDefault()
  // Kiểm tra xem các ô input có được điền đầy đủ không
  if (!fullNameInput.value || !emailOrPhoneInput.value || !passwordInput.value) {
    alert('Vui lòng điền đầy đủ thông tin đăng ký!');
    return;
  }
  // Kiểm tra xem tài khoản đã tồn tại hay chưa
  // Lấy danh sách các tài khoản đã đăng ký từ local
  let registeredAccounts = JSON.parse(localStorage.getItem('registeredAccounts')) || [];
  // Tìm kiếm phần tài khoản đã đăng ký trong local
  let existingAccount = registeredAccounts.find(function(account) {
  // account trong hàm callback này đại diện cho từng phần tử trong mảng 
    return account.emailOrPhone === emailOrPhoneInput.value;
  });
  if (existingAccount) {
    alert('Tài khoản đã tồn tại!');
    return;
  }

  console.log("aaaa")
  // Lưu thông tin đăng ký lên local storage
  let newAccount = {
    fullName: fullNameInput.value,
    emailOrPhone: emailOrPhoneInput.value,
    password: passwordInput.value
  };
  registeredAccounts.push(newAccount);
  localStorage.setItem('registeredAccounts', JSON.stringify(registeredAccounts));
  alert('Đăng ký thành công!');
  // Hiển thị thông báo đăng ký thành công
  window.location = "./trangchu.html"
  console.log("sssss")

});