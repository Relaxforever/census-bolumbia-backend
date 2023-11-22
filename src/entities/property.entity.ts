import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { CensusCollector } from './census-collector.entity';

@Entity()
export class Property {
  @PrimaryColumn()
  ECN: string;

  @Column()
  CFN: number;

  @Column({ nullable: true })
  Direction: string;

  @ManyToOne(() => CensusCollector)
  censusCollector: CensusCollector;
}
