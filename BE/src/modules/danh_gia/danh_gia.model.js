import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database.js'

const DanhGia = sequelize.define(
  'danh_gia',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    lich_hoc_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    hoc_vien_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    gia_su_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    so_sao: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    nhan_xet: {
      type: DataTypes.TEXT,
      allowNull: true,
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
    tableName: 'danh_gia',
    timestamps: false,
    underscored: true,
  }
)

export default DanhGia
