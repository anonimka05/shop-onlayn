import { Column, DataType, Table, Model } from 'sequelize-typescript';

@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model {
  @Column({ type: DataType.TEXT, allowNull: false })
  name: string;
}
