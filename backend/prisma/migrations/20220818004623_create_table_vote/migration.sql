-- CreateEnum
CREATE TYPE "Category" AS ENUM ('ACTOR', 'ACTRESS', 'SUPPORTING_ACTOR', 'SUPPORTING_ACTRESS', 'EDITION', 'VIDEO_CLIP', 'COSTUME');

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" "Category" NOT NULL,
    "student_id" TEXT NOT NULL,
    "student_voted_id" TEXT,
    "videoclip_voted_id" TEXT,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_student_voted_id_fkey" FOREIGN KEY ("student_voted_id") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_videoclip_voted_id_fkey" FOREIGN KEY ("videoclip_voted_id") REFERENCES "VideoClip"("id") ON DELETE SET NULL ON UPDATE CASCADE;
