import { SECRET } from "config";
import { CustomerAccess } from "interfaces/customer";
import jwt from "jsonwebtoken";

/* Create and validate tokens */
export const createToken = (user: CustomerAccess) => {
  const secret = SECRET as string;

  const payload = { idCard: user.idCard, email: user.email };
  const validTime = 60 * 60;

  const token = jwt.sign(payload, secret, { expiresIn: validTime });

  return token;
};

export const validateToken = (token: string) => {
  const secret = SECRET as string;
  jwt.verify(token, secret, (err, user) => {
    console.log(err?.message);
    console.log(user);
  });
};
