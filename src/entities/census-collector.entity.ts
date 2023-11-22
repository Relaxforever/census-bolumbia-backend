import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CensusCollector {
  @PrimaryGeneratedColumn()
  idcensuscollector: number;
}
