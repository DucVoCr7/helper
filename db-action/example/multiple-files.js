const { faker } = require('@faker-js/faker');
const readXlsxFile = require('read-excel-file/node'); // File path.
const axios = require('axios');

('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    const read = async () => {
      const data = [];
      const files = [
       '/Users/ducvo/Downloads/untitled\ folder/bep.xlsx', 
       '/Users/ducvo/Downloads/untitled\ folder/cong\ cu\ dung\ cu.xlsx', 
       '/Users/ducvo/Downloads/untitled\ folder/dich\ vu.xlsx', 
       '/Users/ducvo/Downloads/untitled\ folder/du\ phong\ v3.xlsx', 
       '/Users/ducvo/Downloads/untitled\ folder/gas\ du.xlsx', 
       '/Users/ducvo/Downloads/untitled\ folder/hang\ hoa\ v3.xlsx', 
       '/Users/ducvo/Downloads/untitled\ folder/khuyen\ mai.xlsx', 
       '/Users/ducvo/Downloads/untitled\ folder/linh\ kien.xlsx', 
       '/Users/ducvo/Downloads/untitled\ folder/may\ hut\ mui.xlsx', 
       '/Users/ducvo/Downloads/untitled\ folder/nguyen\ lieu\ sx.xlsx', 
       '/Users/ducvo/Downloads/untitled\ folder/phu\ kien.xlsx', 
       '/Users/ducvo/Downloads/untitled\ folder/san\ pham\ gia\ dung.xlsx', 
       '/Users/ducvo/Downloads/untitled\ folder/vo.xlsx'
      ]
      for(let e of files) {
        await readXlsxFile(e).then((rows) => {
          console.log(rows)
          for (let i = 1; i < rows.length; i++) {
            const element = {
              code: rows[i][0],
              name: rows[i][1],
              weight: rows[i][2] ? rows[i][2] : null,
              in_stock: rows[i][3] === 'Hết' ? 0 : 1,            
              type: rows[i][6],
              merchandise_type: rows[i][5],
              unit: rows[i][7],
              track_type: rows[i][8] ? rows[i][8] : null,
              description: rows[i][4] ? rows[i][4] : null,
              category: rows[i][11],
              tax: (rows[i][9] || typeof rows[i][9] ==='number') ? rows[i][9] : null,
              brand: rows[i][10]
            }
            data.push(element)
          }
        });
      }
      // console.log(data)
      return data;
    };
    return await queryInterface.bulkInsert('merchandise', await read());
  },
};
