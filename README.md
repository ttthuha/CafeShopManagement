# CafeShopManagement
Đồ án môn học về quản lý quán cà phê


Đồ án chia làm 3 phần
1) Database: Thiết kế bằng SQL Server 2017
2) BackEnd: Dùng NetCore 2.1 thiết kế API, Thiết kế theo chuẩn restful, quản lý mọi thứ theo resources
3) FrontEnd: Dựa trên nền tảng NodeJs, Sử dụng Angular 6 + Material Design của google để làm giao diện

Phương thức giao tiếp:

          ------>             ----http (api)----->
 DATABASE          BACK END                       FRONT END
          <-----              <---http (api)-----
II) Môi trường:

1) Cài đặt Visual Studio 2017 Comunity. Lưu ý: Chọn NetCore option khi cài đặt
  source: https://visualstudio.microsoft.com/downloads/
2) Cài đặt Visual Studio Code:
  source: https://visualstudio.microsoft.com/downloads/
3) Cài đặt NodeJs: https://nodejs.org/en/download/
4) Mở CommandLine lên chạy câu lệnh: 
npm install -g @angular/cli
Mục đích: Cài đặt angular commandline

		  
Cách chạy:

1) Import Database bằng Script
2) Backend: vào thư mục CafeShop, chạy câu lệnh sau để run back end api
dotnet restore
dotnet run
hoặc: mở visualstudio lên, nhấn F5 để chạy
3) FrontEnd: chạy thứ tự câu lệnh sau
npm install
npm run start
mở http://localhost:4200 để chạy giao diện


