import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js';

export class Artist extends Model {}

Artist.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    nom: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [2, 50],
          msg: "Le nom de l'artiste doit contenir entre 2 et 50 caractères.",
        },
      },
    },

    prenom: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: {
            args: [2, 50],
            msg: "Le prénom de l'artiste doit contenir entre 2 et 50 caractères.",
            },
        },
    },

    nom_scene: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [2, 100],
                msg: "Le nom de scène doit contenir entre 2 et 100 caractères.",
            },
        },
    },

    date_naissance: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: {
                msg: "La date de naissance doit être une date valide.",
            },
        },
    },

    nationalite: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: {
                args: [2, 50],
                msg: "La nationalité doit contenir entre 2 et 50 caractères.",
            },
        },
    },  

  },
  {
    sequelize,
    modelName: 'Artist',
    tableName: 'artists',
    timestamps: true,
  }
);