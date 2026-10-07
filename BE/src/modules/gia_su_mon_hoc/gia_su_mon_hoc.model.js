import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database.js'

const GiaSuMonHoc = sequelize.define(
  'gia_su_mon_hoc',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    ho_so_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    mon_hoc_id: {
      type: DataTypes.INTEGER,
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
    tableName: 'gia_su_mon_hoc',
    timestamps: false,
    underscored: true,
  }
)

export default GiaSuMonHoc
