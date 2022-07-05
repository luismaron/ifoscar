class ImportStudentsService {
  async execute(file: Express.Multer.File): Promise<void> {
    console.log(file);
  }
}

export { ImportStudentsService };
