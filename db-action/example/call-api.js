const { faker } = require('@faker-js/faker');
const readXlsxFile = require('read-excel-file/node'); // File path.
const axios = require('axios');

('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    const read = async () => {
      const data = [];
      const response = await axios.get(
        'https://be.moveclient.acomvn.net/customer?page=1&size=200000',
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjA4Y2JiOTk4LTk5NmQtNGMyMy05YWM5LTFiMDQ3Y2Q2MDZjYyIsImVtYWlsIjoiYmwucm9vdC5hZG1pbkBhbnBoYXBldHJvbC5jb20iLCJwaG9uZSI6IjAwMDAwMSIsInR5cGUiOjAsInRvcGljIjoiODQiLCJyZWZyZXNoVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFlYUWlPakUyTVRVeU1UTXhNRFI5LkNQQWRUdkNqWHFEQ0dtT3VpTkVpX3hYNk8yTEVFXzh2QThNdTVwQ3RFTnMiLCJsZXZlbCI6bnVsbCwiaXNDcmVhdG9yIjowLCJpc0NyZWF0ZWRPcmRlciI6MCwicGhvbmVDb2RlIjoiKzg0In0sImlhdCI6MTY3Mzg3MDY5MX0.npef8fxeYVoHVjNRl24_YJLFgB1pP51y7rpf_RCcxsQ'
          }
        }
      );
      const customersData = response.data.data.customers
      for(let e of customersData) {
        const element = {
          id: faker.datatype.uuid(),
          customer_id: e.id,
          full_name: e.fullName,
          phone: e.phone,
          apartment_street: e.apartmentStreet,
          ward_cd: e.wardCd,
          ward: e.ward,
          district_cd: e.districtCd,
          district: e.district,
          city_cd: e.cityCd,
          city: e.city,
          quarter: e.quarter,
          status: 1,
          lat: null,
          lon: null,
          note: null,
          branch_name: null,
          series_system: null,
          store_code: null,
          refill_station_code: null,
          refill_station_id: null,
          representative_name: e.fullName,
          representative_phone: e.phone,
          representative_phone_code: '+84',
          type: 1,
          market_development_officer_id: null,
          street: e.street,
          apartment: e.apartment,
          country: 'Việt Nam',
          full_address: e.fullAddress,
          group_customer: e.groupCustomer,          
        }
        data.push(element)
      }
      // console.log(data)
      return data;
    };
    return await queryInterface.bulkInsert('address_customer', await read());
  },
};
