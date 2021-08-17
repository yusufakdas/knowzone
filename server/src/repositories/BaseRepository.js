class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  create(record) {
    try {
      this.model.create(record);
      return 'created new record';
    } catch (err) {
      return err.message;
    }
  }

  async findAll() {
    const records = await this.model.find({});
    return records;
  }

  async findById(id) {
    const record = await this.model.findById(id);
    return record;
  }

  async updateById(id, record) {
    await this.model.findByIdAndUpdate(id, record);
    return 'Update a record by the id in the request';
  }

  async deleteById(id) {
    await this.model.findByIdAndRemove(id);
    return 'Delete a record by id';
  }

  async deleteAll() {
    await this.model.deleteMany({});
    return 'Delete all records';
  }
}

module.exports = BaseRepository;