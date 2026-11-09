-- CreateTable
CREATE TABLE `Subject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `SubjectCode` VARCHAR(191) NOT NULL,
    `Subjectname` VARCHAR(191) NOT NULL,
    `objective` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `credit` VARCHAR(191) NOT NULL,
    `teacher` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Subject_SubjectCode_key`(`SubjectCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
