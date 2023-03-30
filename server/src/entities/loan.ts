import { LoanType } from "interfaces/loan";
import {
  BaseEntity,
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import { Customer } from "./customer";

@Entity("loan")
export class Loan extends BaseEntity implements LoanType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  principal: number;

  @Column()
  rate: number;

  @Column()
  redeemed: number;

  @Column()
  duration: number;

  @ManyToOne(() => Customer, (customer) => customer.loans)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @Column()
  issueDate: Date;

  @Column()
  payDate: Date;
}
