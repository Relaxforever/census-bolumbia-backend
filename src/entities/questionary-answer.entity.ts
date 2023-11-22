import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class QuestionaryAnswer {
  @PrimaryGeneratedColumn()
  idQuestionaryAnswer: number;

  @Column()
  isFormComplete: boolean;

  @Column({ type: 'json', nullable: true })
  answers: JSON;

  @ManyToOne(() => Property)
  @JoinColumn({ name: 'ECN' })
  property: Property;

  @Column({ type: 'timestamp' })
  created_time: Date;

  @Column({ type: 'timestamp' })
  updated_time: Date;
}
