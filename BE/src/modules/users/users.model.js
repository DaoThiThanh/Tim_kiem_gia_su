import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database.js'

const Users = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    ho_ten: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [0, 100] },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [0, 100] },
    },
    so_dien_thoai: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [0, 20] },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [0, 255] },
    },
    vai_tro: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [0, 20] },
    },
    anh_dai_dien: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    trang_thai: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { len: [0, 50] },
    },
    lop_hoc: {
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
    tableName: 'users',
    timestamps: false,
    underscored: true,
  }
)

export default Users
