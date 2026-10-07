import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database.js'

const HoSoGiaSu = sequelize.define(
  'ho_so_gia_su',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    gioi_thieu: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    trinh_do: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { len: [0, 100] },
    },
    kinh_nghiem: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    bang_cap: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    hoc_phi: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    hinh_thuc_day: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { len: [0, 50] },
    },
    khu_vuc: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    thoi_gian_day: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    trang_thai_duyet: {
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
    tableName: 'ho_so_gia_su',
    timestamps: false,
    underscored: true,
  }
)

export default HoSoGiaSu
