// ĐỌC FILE EXCEL DUNG LƯỢNG LỚN
var XLSX = require('xlsx');
console.log(33333);
var data;
(async () => {
  var workbook = XLSX.readFile('/Users/ducvo/Downloads/DANHSACHKHACHHANG444.xls');
  var sheet_name_list = workbook.SheetNames;
  data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  console.log(data[0]);
})();

console.log(4);
