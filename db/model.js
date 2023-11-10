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
    make:{
      type: DataTypes.STRING
    },
    model:{
      type: DataTypes.STRING
    },
    year:{
      type: DataTypes.INTEGER
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
    }
  },
  {
    modelName: 'maintenance',
    sequelize: db,
  }
)
    
export class Modifications extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}
    
Modifications.init(
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
  },
  {
    modelName: 'modifications',
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
  },
  {
    modelName: 'todo',
    sequelize: db,
  }
)

User.hasMany(Vehicle, { foreignKey: 'vehicleId' })
Vehicle.hasMany(Maintenance, { foreignKey: 'maintenanceId' })
Vehicle.hasMany(Modifications, { foreignKey: 'modificationId' })
Vehicle.hasMany(ToDo, { foreignKey: 'toDoId' })