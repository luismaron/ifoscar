/*
  Warnings:

  - You are about to drop the column `videoclip_id` on the `Student` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[actor_id]` on the table `VideoClip` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[actress_id]` on the table `VideoClip` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[supporting_actor_id]` on the table `VideoClip` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[supporting_actress_id]` on the table `VideoClip` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `actor_id` to the `VideoClip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actress_id` to the `VideoClip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supporting_actor_id` to the `VideoClip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supporting_actress_id` to the `VideoClip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_videoclip_id_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "videoclip_id";

-- AlterTable
ALTER TABLE "VideoClip" ADD COLUMN     "actor_id" TEXT NOT NULL,
ADD COLUMN     "actress_id" TEXT NOT NULL,
ADD COLUMN     "supporting_actor_id" TEXT NOT NULL,
ADD COLUMN     "supporting_actress_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "VideoClip_actor_id_key" ON "VideoClip"("actor_id");

-- CreateIndex
CREATE UNIQUE INDEX "VideoClip_actress_id_key" ON "VideoClip"("actress_id");

-- CreateIndex
CREATE UNIQUE INDEX "VideoClip_supporting_actor_id_key" ON "VideoClip"("supporting_actor_id");

-- CreateIndex
CREATE UNIQUE INDEX "VideoClip_supporting_actress_id_key" ON "VideoClip"("supporting_actress_id");

-- AddForeignKey
ALTER TABLE "VideoClip" ADD CONSTRAINT "VideoClip_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoClip" ADD CONSTRAINT "VideoClip_actress_id_fkey" FOREIGN KEY ("actress_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoClip" ADD CONSTRAINT "VideoClip_supporting_actor_id_fkey" FOREIGN KEY ("supporting_actor_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoClip" ADD CONSTRAINT "VideoClip_supporting_actress_id_fkey" FOREIGN KEY ("supporting_actress_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
