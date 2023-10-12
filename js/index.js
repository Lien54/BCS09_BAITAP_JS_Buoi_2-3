        /*============== BÀI TẬP TÍNH LƯƠNG ============*/ 
// input: đầu vào
var btnTinhLuong = document.querySelector("#btnTinhLuong");
console.log(btnTinhLuong);

btnTinhLuong.onclick = function () {
    var tienLuong1Ngay = document.getElementById('tienLuong1Ngay').value*1;
    var soNgayLam = document.getElementById('soNgayLam').value*1;
    var tongTien = 0;
// output: tổng tiền lương 
    tongTien = soNgayLam * tienLuong1Ngay;
    console.log(tongTien);
    document.getElementById("ketQuaLuong").innerHTML = `Lương của bạn tháng này là: ${tongTien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`
};



        /*============== BÀI TẬP TÍNH GIÁ TRỊ TRUNG BÌNH ============*/ 
// INPUT: Cho người dùng nhập vào 5 số thực
var btnTrungBinhCong = document.querySelector("#btnTrungBinhCong");
console.log(btnTrungBinhCong);

// CÁC BƯỚC XỬ LÝ
btnTrungBinhCong.onclick = function () {
    var number1 = document.getElementById('number1').value*1;
    var number2 = document.getElementById('number2').value*1;
    var number3 = document.getElementById('number3').value*1;
    var number4 = document.getElementById('number4').value*1;
    var number5 = document.getElementById('number5').value*1;

    var trungBinhCong = 0;
    trungBinhCong = (number1 + number2 + number3 + number4 + number5) / 5;
    console.log(trungBinhCong);
// output: tính trung bình cộng
    document.getElementById("ketQuaTrungBinh").innerHTML = `Trung bình cộng các số này là: ${trungBinhCong}`
};
// OUTPUT: Tính giá trị trung bình và hiển thị ra màn hình



        /*============== BÀI TẬP QUY ĐỔI TIỀN TỆ ============*/ 
// input: đầu vào
const tiGia = 23500;

var btnQuyDoi = document.querySelector("#btnQuyDoi");
console.log(btnQuyDoi);

btnQuyDoi.onclick = function () {
    var tienUSD = document.getElementById('tienUSD').value*1;
    var tienVND = 0;
    
// output: Số tiền USD quy đổi ra VND
    tienVND = tienUSD * tiGia;
    console.log(tienVND);
    document.getElementById("ketQuaDoiTien").innerHTML = `Số tiền bạn đổi là: ${tienVND.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`
};



        /*============== BÀI TẬP TÍNH CHU VI VÀ DIỆN TÍCH HÌNH CHỮ NHẬT ============*/ 
// input: đầu vào
var btnDapAn = document.querySelector("#btnDapAn");
console.log(btnDapAn);

btnDapAn.onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value*1;
    var chieuRong = document.getElementById('chieuRong').value*1;

    var dienTich = 0;
    var chuVi = 0;

// progress: xử lý tính toán
    dienTich = chieuDai * chieuRong;
    console.log(dienTich);

    chuVi = (chieuDai + chieuRong) * 2;
    console.log(chuVi);
// output: chu vi và diện tích
    document.getElementById("dapAnDienTich").innerHTML = `Diện tích hình chữ nhật là: ${dienTich}`
    document.getElementById("dapAnChuVi").innerHTML = `Chu vi hình chữ nhật là: ${chuVi}`
};



        /*============== BÀI TẬP TÍNH TỔNG 2 KÍ SỐ ============*/
// input: đầu vào
var btnKiSo = document.querySelector("#btnKiSo");
console.log(btnKiSo);

btnKiSo.onclick = function () {
    var haiChuSo = document.getElementById('haiChuSo').value*1;

    var hangChuc = Math.floor(haiChuSo / 10);
    var donVi = haiChuSo % 10;
    var tongKiSo = 0;

// progress: xử lý
    tongKiSo = hangChuc + donVi;
    console.log(tongKiSo);

    document.getElementById("ketQuaTongKiSo").innerHTML = `Tổng 2 số là:  ${tongKiSo}`
// Output: Tổng của 2 số nhập vào
};