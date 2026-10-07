import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database.js'

const MonHoc = sequelize.define(
  'mon_hoc',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ten_mon: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [0, 100] },
    },
    mo_ta: {
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
    tableName: 'mon_hoc',
    timestamps: false,
    underscored: true,
  }
)

export default MonHoc
