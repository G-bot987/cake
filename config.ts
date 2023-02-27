require('dotenv').config();

export const config: {
  endPoint?: String;
  endPoint2?: string;
  secretCake?: string;
} = {
  secretCake: process.env.SECRET_CAKE,
  endPoint: process.env.E_P,
  endPoint2: process.env.E_P2,

};