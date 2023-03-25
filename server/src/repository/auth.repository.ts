/* Sign up,login and logout functionalities */
import { Customer } from "entities/customer";
import { CustomerAccess, CustomerType } from "interfaces/customer";
import { EntityRepository } from "typeorm";

@EntityRepository(Customer)
export default class AuthRepo {
  public async signUp(customer: CustomerType) {
    //if customer exists
    try {
      const cus = await Customer.findOne({
        where: { idCard: customer.idCard },
      });
      if (cus) {
        throw `User already exists for given idCard`;
      }
      //password hashing

      //customer.dob = new Date();
      const createCus = Customer.create({ ...customer });
      createCus.loans = [];
      await createCus.save();
      return createCus;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  public async login(customer: CustomerAccess) {
    //if customer exists
    try {
      const cus = await Customer.findOne({
        where: { idCard: customer.idCard },
      });
      if (!cus) {
        throw `User does not exist for given idCard`;
      }

      //customer exists
      //match passwords
      const match: boolean = cus.password === customer.password;
      if (!match) {
        throw `Invalid password for user `;
      }

      return customer;
    } catch (err) {
      console.log(err)
      return null;
    }
  }
  public async logout(customer: CustomerAccess) {
    try {
      const cus = await Customer.findOne({
        where: { idCard: customer.idCard },
      });

      if (!cus) {
        throw `User requesting is not user`;
      }

      return cus;
    } catch (err) {}
  }
}
