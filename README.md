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

Cách chạy:

1) Import Database bằng Script
2) Mở thư mục CafeShop, chạy câu lệnh: dotnet restore sau đó dotnet run để chạy backend api
3) FrontEnd:
   npm install
   ng s

mở http://localhost:4200 để chạy giao diện
