import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database.js'

const NhuCauTimGiaSu = sequelize.define(
  'nhu_cau_tim_gia_su',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    hoc_vien_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    mon_hoc_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lop_trinh_do: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { len: [0, 50] },
    },
    muc_tieu_hoc_tap: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ngan_sach: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    thoi_gian_hoc: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    so_buoi: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hinh_thuc_hoc: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { len: [0, 50] },
    },
    khu_vuc: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    yeu_cau_them: {
      type: DataTypes.TEXT,
      allowNull: true,
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
    tableName: 'nhu_cau_tim_gia_su',
    timestamps: false,
    underscored: true,
  }
)

export default NhuCauTimGiaSu
