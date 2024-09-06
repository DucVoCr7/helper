const { faker } = require('@faker-js/faker');
const readXlsxFile = require('read-excel-file/node'); // File path.
const axios = require('axios');

('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    const read = async () => {
      const data = [];
      // const response = await axios.get('https://be.moveclient.acomvn.net/customer?page=1&size=200000');
      await readXlsxFile('/Users/ducvo/Downloads/bo.xls').then(async (rows) => {
        // for (let element of rows) {
        //   const code = element[0];
        //   const name = element[1];
        //   const response = await axios.get('http://localhost:8080/customer/product/aaa/' + code);
        //   if (response.data.data) {
        //     console.log(response.data.data);
        //     await axios.post(
        //       'http://localhost:8080/customer/product/aaa/bbb/ccc',
        //       { code, name },
        //       {
        //         headers: {
        //           Authorization:
        //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjA4Y2JiOTk4LTk5NmQtNGMyMy05YWM5LTFiMDQ3Y2Q2MDZjYyIsImVtYWlsIjoiYmwucm9vdC5hZG1pbkBhbnBoYXBldHJvbC5jb20iLCJwaG9uZSI6IjAwMDAwMSIsInR5cGUiOjAsInRvcGljIjoiODQiLCJyZWZyZXNoVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFlYUWlPakUyTVRVeU1UTXhNRFI5LkNQQWRUdkNqWHFEQ0dtT3VpTkVpX3hYNk8yTEVFXzh2QThNdTVwQ3RFTnMiLCJsZXZlbCI6bnVsbCwiaXNDcmVhdG9yIjowLCJpc0NyZWF0ZWRPcmRlciI6MCwicGhvbmVDb2RlIjoiKzg0In0sImlhdCI6MTY3Mzg3MDY5MX0.npef8fxeYVoHVjNRl24_YJLFgB1pP51y7rpf_RCcxsQ',
        //         },
        //       }
        //     );
        //   } else {
        //     data.push({
        //       box_id: faker.datatype.uuid(),
        //       box_code: code,
        //       name: name,
        //       url: 'https://file-services-tt.s3.ap-southeast-1.amazonaws.com/Screenshot%202023-01-09%20232819.png',
        //     });
        //   }
        // }
        console.log(rows.length, 333);
        const info = [];
        rows.map((e) => {
          if (e[0] !== 'Mã hàng hóa') {
            info.push({ code: e[0] });
          }
        });
        console.log(info, 333);
        await axios.post('http://localhost:8080/customer/product/aaa/bbb/ccc', info, {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjA4Y2JiOTk4LTk5NmQtNGMyMy05YWM5LTFiMDQ3Y2Q2MDZjYyIsImVtYWlsIjoiYmwucm9vdC5hZG1pbkBhbnBoYXBldHJvbC5jb20iLCJwaG9uZSI6IjAwMDAwMSIsInR5cGUiOjAsInRvcGljIjoiODQiLCJyZWZyZXNoVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFlYUWlPakUyTVRVeU1UTXhNRFI5LkNQQWRUdkNqWHFEQ0dtT3VpTkVpX3hYNk8yTEVFXzh2QThNdTVwQ3RFTnMiLCJsZXZlbCI6bnVsbCwiaXNDcmVhdG9yIjowLCJpc0NyZWF0ZWRPcmRlciI6MCwicGhvbmVDb2RlIjoiKzg0In0sImlhdCI6MTY3Mzg3MDY5MX0.npef8fxeYVoHVjNRl24_YJLFgB1pP51y7rpf_RCcxsQ',
          },
        });
      });
      // console.log(data)
      return data;
    };
    return await queryInterface.bulkInsert('box', await read());
  },
};
