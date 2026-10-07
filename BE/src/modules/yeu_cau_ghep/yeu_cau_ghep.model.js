import { DataTypes } from 'sequelize'
import { sequelize } from '../../config/database.js'

const YeuCauGhep = sequelize.define(
  'yeu_cau_ghep',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nhu_cau_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    gia_su_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    ngay_gui: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    trang_thai: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { len: [0, 50] },
    },
    phan_hoi: {
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
    tableName: 'yeu_cau_ghep',
    timestamps: false,
    underscored: true,
  }
)

export default YeuCauGhep
