import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SupportStaff {
  @PrimaryGeneratedColumn()
  idsupportstaff: number;

  @Column({ length: 45 })
  ss_email: string;

  @Column({ length: 45 })
  ss_password: string;
}
