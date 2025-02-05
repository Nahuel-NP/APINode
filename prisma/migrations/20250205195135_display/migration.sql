-- CreateTable
CREATE TABLE "display" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "picture_url" TEXT NOT NULL,
    "price_per_day" TEXT NOT NULL,
    "resolution_height" TEXT NOT NULL,
    "resolution_width" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "display_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "display" ADD CONSTRAINT "display_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
