import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class QuestionaryAnswer {
  @PrimaryGeneratedColumn()
  idquestionaryanswer: number;

  @Column()
  isformcomplete: boolean;

  @Column({ type: 'json', nullable: true })
  answers: any;

  @ManyToOne(() => Property)
  @JoinColumn({ name: 'ecn' })
  property: Property;

  @Column({ type: 'timestamp' })
  created_time: Date;

  @Column({ type: 'timestamp' })
  updated_time: Date;
}

