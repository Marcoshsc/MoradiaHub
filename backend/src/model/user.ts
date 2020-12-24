import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'user'
})
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({
    length: 100
  })
  name: string

  @Column({
    length: 15
  })
  phone: string

  @Column({
    length: 100,
    unique: true
  })
  email: string

  @Column('text')
  password: string

  @Column({
    type: 'timestamp',
    default: (): string => 'now()'
  })
  createdAt?: Date

  @Column({
    type: 'timestamp',
    default: (): string => 'now()'
  })
  updatedAt?: Date
}
