-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "videoclip_id" TEXT;

-- CreateTable
CREATE TABLE "VideoClip" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoClip_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_videoclip_id_fkey" FOREIGN KEY ("videoclip_id") REFERENCES "VideoClip"("id") ON DELETE SET NULL ON UPDATE CASCADE;
