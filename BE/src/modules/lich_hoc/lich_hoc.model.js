import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database.js'

const LichHoc = sequelize.define(
  'lich_hoc',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    yeu_cau_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    ngay_hoc: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    gio_bat_dau: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gio_ket_thuc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dia_diem: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    hinh_thuc_hoc: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { len: [0, 50] },
    },
    trang_thai: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { len: [0, 50] },
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: 'lich_hoc',
    timestamps: false,
    underscored: true,
  }
)

export default LichHoc
