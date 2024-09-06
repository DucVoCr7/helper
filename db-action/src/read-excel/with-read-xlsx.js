const readXlsxFile = require('read-excel-file/node'); // File path.
const { faker } = require('@faker-js/faker');
const axios = require('axios');

const read = async () => {
  const data = [];
  // const response = await axios.get('https://be.acomvn.net/sale/gas-cylinders');
  // const dataReal = response.data.data.gasCylinders;
  await readXlsxFile('/Users/ducvo/Downloads/DANHSACHKHACHHANG.xlsx').then((rows) => {
    for (let i = 4; i < rows.length; i++) {
      const des = rows[i][2];
      const indexOf = des.toUpperCase().indexOf('kg');
      const numb = des.slice(indexOf - 2, indexOf);
      const dataNew = {
        gas_cylinder_id: faker.datatype.uuid(),
        name: rows[i][2],
        code: rows[i][1],
        weight_cylinder: isNaN(+numb) ? null : +numb,
        type: 0,
        price: 0,
        price_loan: 0,
        gas_cylinder_type: 'COL',
        brand_id: null,
        color_name: null,
        color_code: null,
      };
      const checkExistCode = dataReal.some((e) => {
        return e.code.toUpperCase() === dataNew.code.toUpperCase();
      });
      if (!checkExistCode) data.push(dataNew);
    }
  });
  console.log(data);
  console.log(data.length, 'Length array cylinder chuẩn bị thêm vào!');
  return data;
};
read();
