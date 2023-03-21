import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from "typeorm";
import { CustomerType } from "interfaces/customer";
import { Loan } from "./loan";

@Entity()
export class Customer extends BaseEntity implements CustomerType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(["idCard"])
  idCard: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  telephone: number;

  @Column()
  dob: Date;

  @Column()
  employed: boolean;

  @OneToMany(() => Loan, (loan) => loan.customer)
  loans: Loan[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
