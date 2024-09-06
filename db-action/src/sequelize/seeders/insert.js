// ĐỌC FILE EXCEL DUNG LƯỢNG LỚN
const { faker } = require('@faker-js/faker');
const XLSX = require('xlsx');

('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const read = async () => {
        const data = [];
        const getFull = (data) => {
          const { apartmentStreet, apartment, street, quarter, ward, district, city } = data;
          let fullAddress = '';
          if (city) fullAddress = `${city}` + fullAddress;
          if (district) fullAddress = `${district}, ` + fullAddress;
          if (ward) fullAddress = `${ward}, ` + fullAddress;
          if (quarter) fullAddress = `${quarter}, ` + fullAddress;
          if (apartmentStreet) fullAddress = `${apartmentStreet}, ` + fullAddress;
          else {
            if (street) fullAddress = `${street}, ` + fullAddress;
            if (apartment) fullAddress = `${apartment}, ` + fullAddress;
          }
          return fullAddress;
        };
        var workbook = XLSX.readFile('/Users/ducvo/Downloads/DANHSACHKHACHHANG.xlsx');
        var sheet_name_list = workbook.SheetNames;
        var rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];

          const phoneArray = row.sub_phone ? `${row.sub_phone}`.split(',') : [];
          const phoneNumber = phoneArray.length ? phoneArray[phoneArray.length - 1] : null;
          const full_address = getFull({
            apartmentStreet: row.apartment_street,
            apartment: row.apartment,
            street: row.street,
            quarter: row.quarter,
            ward: row.ward,
            district: row.district,
            city: row.city,
          });
          const element = {
            id: faker.datatype.uuid(),
            code: row.code ? row.code : null,
            full_name: row.full_name ? row.full_name : null,
            email: row.email ? row.email : null,
            sub_phone: row.sub_phone ? `${row.sub_phone}` : null,
            group_customer: row.group_customer ? row.group_customer : null,
            note: row.note ? row.note : null,
            complaint: row.complaint ? row.complaint : null,
            price_column_enjoy: +row.price_column_enjoy ? +row.price_column_enjoy : null,
            code_khkt: row.code_khkt ? row.code_khkt : null,
            no_debt: +row.no_debt,
            no_transaction: +row.no_transaction,
            name_in_contract: row.name_in_contract ? row.name_in_contract : null,
            address_in_contract: row.address_in_contract ? row.address_in_contract : null,
            phone: phoneNumber ? phoneNumber : null,
            vendor_code: row.vendor_code ? row.vendor_code : null,
            zone: row.zone ? row.zone : null,
            tax_code: row.tax_code ? row.tax_code : null,
            quarter: row.quarter ? row.quarter : null,
            apartment: row.apartment ? row.apartment : null,
            street: row.street ? row.street : null,
            apartment_street: row.apartment_street ? row.apartment_street : null,
            ward: row.ward ? row.ward : null,
            district: row.district ? row.district : null,
            city: row.city ? row.city : null,
            max_debt_value: +row.max_debt_value,
            limit_cylinders: +row.limit_cylinders,
            old_debt_value: +row.old_debt_value,
            period: +row.period ? +row.period : null,
            string_system: row.string_system ? row.string_system : null,
            warning_contract_date: row.warning_contract_date ? row.warning_contract_date : null,
            code_dktt: row.code_dktt ? row.code_dktt : null,
            legal_representative: row.legal_representative ? row.legal_representative : null,
            birthday: row.birthday ? row.birthday : null,
            status: 1,
            bill_print: 0,
            cumulative_amount: 0,
            refresh_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDAxNjM2NDh9.FWYbdAFO2kMxC6yQEPfqV1y-EQmZRn1GjCc2IQiDpKc',
            password: '$2b$10$jUC5hgoSzOZgNNfPji2Hx.f/Qd1vnPSQAIpT/GMGc3XYo5TeX8HFG',
            full_address: full_address ? full_address : null,
          };
          if (i === 0) {
            console.log(element);
          }
          data.push(element);
        }
        return data;
      };
      return await queryInterface.bulkInsert('customer', await read());
    } catch (error) {
      console.log(error);
    }
  },
};
