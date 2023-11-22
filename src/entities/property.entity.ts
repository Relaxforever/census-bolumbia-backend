import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CensusCollector } from './census-collector.entity';

@Entity()
export class Property {
  @PrimaryColumn()
  ecn: string;

  @Column()
  cfn: number;

  @Column({ nullable: true })
  direction: string;

  @ManyToOne(() => CensusCollector)
  @JoinColumn({ name: 'idcensuscollector' }) // Explicitly specifying the column name
  censuscollector: CensusCollector;
}
