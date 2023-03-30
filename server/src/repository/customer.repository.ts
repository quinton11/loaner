import { Customer } from "../entities/customer";
import { EntityRepository } from "typeorm";
import { CustomerType } from "../interfaces/customer";

//CRUD operations

@EntityRepository()
export default class CustomerRepository {
  public async cusCreate(customer: Customer) {
    try {
      const cus = await Customer.findOne({
        where: { idCard: customer.idCard },
      });
      if (cus) {
        throw `User already exists for given idCard`;
      }

      const createCus = Customer.create({ ...customer });
      await createCus.save();
      return createCus;
    } catch (err) {}
  }
  public async cusRead(customer: CustomerType) {
    try {
      const cus = await Customer.findOne({
        where: { idCard: customer.idCard },
      });
      if (!cus) {
        throw `No entry for customer with given idCard`;
      }

      return cus;
    } catch (err) {}
  }
  public async cusReadAll(): Promise<CustomerType[]> {
    const customers: CustomerType[] = await Customer.find();

    return customers;
  }
  public async cusUpdate() {
    //update password
  }
  public async cusDelete(customer: CustomerType) {
    try {
      const cus = await Customer.findOne({
        where: { idCard: customer.idCard },
      });
      if (!cus) {
        throw `No entry ofr customer with given idCard`;
      }

      await Customer.delete({ idCard: customer.idCard });
      return cus;
    } catch (err) {}
  }
}
