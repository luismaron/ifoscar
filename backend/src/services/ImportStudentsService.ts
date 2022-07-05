import { parse } from 'csv-parse';
import fs from 'node:fs';

interface IStudent {
  name: string;
  registration: string;
}

class ImportStudentsService {
  async execute(file: Express.Multer.File): Promise<void> {
    const students = await this.loadStudents(file);

    console.log(students);
  }

  async loadStudents(file: Express.Multer.File): Promise<IStudent[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const students: IStudent[] = [];

      const parseFile = parse({
        delimiter: ' ',
      });

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, registration] = line;

          students.push({
            name,
            registration,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(students);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
}

export { ImportStudentsService };
