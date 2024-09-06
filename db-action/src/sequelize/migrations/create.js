'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('warehouse_receipt_store', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.CHAR(36),
      },
      code: {
        unique: true,
        allowNull: false,
        type: DataTypes.CHAR(12),
      },
      sender_representative_id: {
        type: DataTypes.CHAR(36),
        comment: 'Id người gửi',
      },
      sender_representative_name: {
        type: DataTypes.STRING(100),
        comment: 'Tên người gửi',
      },
      sender_code: {
        allowNull: false,
        type: DataTypes.CHAR(10),
        comment: 'Code cửa hàng gửi',
      },
      sender_name: {
        allowNull: false,
        type: DataTypes.STRING(100),
        comment: 'Tên cửa hàng gửi',
      },
      sender_phone: {
        allowNull: false,
        type: DataTypes.STRING(20),
        comment: 'Phone cửa hàng gửi',
      },
      sender_address: {
        allowNull: false,
        type: DataTypes.TEXT,
        comment: 'Địa chỉ cửa hàng gửi',
      },
      recipient_representative_id: {
        type: DataTypes.CHAR(36),
        comment: 'Id người nhận',
      },
      recipient_representative_name: {
        type: DataTypes.STRING(100),
        comment: 'Tên người nhận',
      },
      recipient_code: {
        allowNull: false,
        type: DataTypes.CHAR(10),
        comment: 'Code cửa hàng nhận',
      },
      recipient_name: {
        allowNull: false,
        type: DataTypes.STRING(100),
        comment: 'Tên cửa hàng nhận',
      },
      recipient_phone: {
        allowNull: false,
        type: DataTypes.STRING(20),
        comment: 'Phone cửa hàng nhận',
      },
      recipient_address: {
        allowNull: false,
        type: DataTypes.TEXT,
        comment: 'Địa chỉ cửa hàng nhận',
      },
      total_quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      total_price: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      status: {
        allowNull: false,
        type: DataTypes.TINYINT,
        comment: '0: Lưu nháp, 1: Chờ xác nhận, 2: Hoàn thành, 3: Huỷ',
      },
      type: {
        allowNull: false,
        type: DataTypes.TINYINT,
        comment: '0: Cùng tỉnh, 1 khác tỉnh',
      },
      note: {
        type: DataTypes.TEXT,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      created_by: {
        type: DataTypes.CHAR(36),
      },
      updated_by: {
        type: DataTypes.CHAR(36),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('warehouse_receipt_store');
  },
}; // OK