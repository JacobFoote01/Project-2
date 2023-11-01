import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

export const db = await connectToDB('postgresql:///VehicleLog')

export class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

User.init( 
{
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
      allowNull: false,
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
      allowNull: false,
    },
    difficulty:{
      type: DataTypes.INTEGER
    },
    createdAt:{
      type: DataTypes.TIME
    },
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
      allowNull: false,
    },
    difficulty:{
      type: DataTypes.INTEGER
    },
    createdAt:{
      type: DataTypes.TIME
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
      allowNull: false,
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


User.sync({ force: true })
Vehicle.sync({ force: true })
Maintenance.sync({ force: true })
Modifications.sync({ force: true })
ToDo.sync({ force: true })

// await db.close()