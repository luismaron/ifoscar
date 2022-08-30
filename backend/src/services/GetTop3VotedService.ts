import { Category } from '@prisma/client';

import { prisma } from '../database';

interface IDataChampions {
  name: string;
  category: Category;
  count: number;
}

class GetTop3VotedService {
  async execute() {
    const dataActors = (await prisma.$queryRaw`
      SELECT * FROM (
      select row_number() over (PARTITION BY  "category" ORDER BY COUNT("Student"."id") DESC) as r, "name", "category", count ("Student"."id")
      FROM "Vote" INNER JOIN "Student" ON "Vote"."student_voted_id" = "Student"."id"
      GROUP BY "name", "category"
      ) x 
      WHERE x.r >=1 AND x.r <= 3
    `) as IDataChampions[];

    const dataVideoClips = (await prisma.$queryRaw`
      SELECT * FROM (
      select row_number() over (PARTITION BY  "category" ORDER BY COUNT("VideoClip"."id") DESC) as r, "name", "category", count ("VideoClip"."id")
      FROM "Vote" INNER JOIN "VideoClip" ON "Vote"."videoclip_voted_id" = "VideoClip"."id"
      GROUP BY "name", "category"
      ) x 
      WHERE x.r >=1 AND x.r <= 3
    `) as IDataChampions[];

    const dataFormatted = {
      bestActors: dataActors.filter((data) => data.category === 'ACTOR'),
      bestActress: dataActors.filter((data) => data.category === 'ACTRESS'),
      bestSupportingActors: dataActors.filter(
        (data) => data.category === 'SUPPORTING_ACTOR'
      ),
      bestSupportingActress: dataActors.filter(
        (data) => data.category === 'SUPPORTING_ACTRESS'
      ),
      bestVideoClips: dataVideoClips.filter(
        (data) => data.category === 'VIDEO_CLIP'
      ),
      bestCostumes: dataVideoClips.filter(
        (data) => data.category === 'COSTUME'
      ),
      bestEditions: dataVideoClips.filter(
        (data) => data.category === 'EDITION'
      ),
    };

    return dataFormatted;
  }
}

export { GetTop3VotedService };
