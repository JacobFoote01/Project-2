import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

export const db = await connectToDB('postgresql:///vehiclelog')

export class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

User.init( 
{
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  
{
    modelName: 'user',
    sequelize: db,
}
);

export class Vehicle extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

Vehicle.init(
  {
    vehicleId:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    img:{
      type:DataTypes.STRING
    },
    make:{
      type: DataTypes.STRING
    },
    model:{
      type: DataTypes.STRING
    },
    year:{
      type: DataTypes.INTEGER
    },
    userId:{
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'user_id',
      },
    },
  },
  {
    modelName: 'vehicle',
    sequelize: db,
  }
  )
  
export class Maintenance extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}
  
Maintenance.init(
  {
    maintenanceId:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name:{
      type: DataTypes.STRING
    },
    difficulty:{
      type: DataTypes.INTEGER
    },
    vehicleId:{
      type: DataTypes.INTEGER,
      references: {
        model: Vehicle,
        key: 'vehicle_id',
      },
    },
  },
  {
    modelName: 'maintenance',
    sequelize: db,
  }
)
    
export class Modification extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}
    
Modification.init(
  {
    modificationId:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name:{
      type: DataTypes.STRING
    },
    difficulty:{
      type: DataTypes.INTEGER
    },
    vehicleId:{
      type: DataTypes.INTEGER,
      references: {
        model: Vehicle,
        key: 'vehicle_id',
      },
    },
  },
  {
    modelName: 'modification',
    sequelize: db,
  }
)
  
export class ToDo extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

ToDo.init(
  {
    toDoId:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name:{
      type: DataTypes.STRING
    },
    difficulty:{
      type: DataTypes.INTEGER
    },
    dueDate:{
      type: DataTypes.INTEGER
    },
    vehicleId:{
      type: DataTypes.INTEGER,
      references: {
        model: Vehicle,
        key: 'vehicle_id',
      },
    },  
  },
  {
    modelName: 'todo',
    sequelize: db,
  }
)

User.hasMany(Vehicle, { foreignKey: 'userId' })
Vehicle.belongsTo(User, { foreignKey: 'userId' })

Vehicle.hasMany(Maintenance, { foreignKey: 'vehicleId' })
Maintenance.belongsTo(Vehicle, { foreignKey: 'vehicleId' })

Vehicle.hasMany(Modification, { foreignKey: 'vehicleId' })
Modification.belongsTo(Vehicle, { foreignKey: 'vehicleId' })

Vehicle.hasMany(ToDo, { foreignKey: 'vehicleId' })
ToDo.belongsTo(Vehicle, { foreignKey: 'vehicleId' })