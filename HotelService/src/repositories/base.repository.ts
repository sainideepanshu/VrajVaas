import { Model, CreationAttributes, ModelStatic, WhereOptions } from 'sequelize';

// using abstract keyword we cannot create an object of the class , we can only inherit this class, and the child class will call the constructor by calling super

abstract class BaseRepository<T extends Model> {  // we are making BaseRepository generic but we are also making sure that the type is always of type Model , like any sort of Model and not anything else (T extends Model)

    protected model: ModelStatic<T>;

    constructor(model: ModelStatic<T>) {
        this.model = model;
    }

    async findById(id: number) : Promise<T | null> {          // can return Promise of type T or null when it did not find the record
        const record = await this.model.findByPk(id);
        if (!record) {
            return null;
        }
        return record;
    }

    async findAll(): Promise<T[]> {
        const records = await this.model.findAll({});
        if (!records) {
            return [];
        }
        return records;
    }

    async delete(whereOptions: WhereOptions<T>): Promise<void> {
        const record = await this.model.destroy({
            where: {
                ...whereOptions
            }
        });

        if (!record) {
            throw new Error(`Record not found for deletion with options: ${JSON.stringify(whereOptions)}`);
        }

        return;
    }

    async create(data: CreationAttributes<T>): Promise<T> {
        const record = await this.model.create(data);
        return record;
    }

    async update(id: number, data: Partial<T>): Promise<T | null> {
        const record = await this.model.findByPk(id);
        if (!record) {
            throw new Error(`Record with id ${id} not found`);
        }
        Object.assign(record, data);
        await record.save();
        return record;
    }

}

export default BaseRepository;