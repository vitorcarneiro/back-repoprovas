CREATE TABLE "terms" (
	"id" serial NOT NULL,
	"number" serial NOT NULL UNIQUE,
	CONSTRAINT "terms_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "disciplines" (
	"id" serial NOT NULL,
	"number" serial NOT NULL UNIQUE,
	"termId" integer NOT NULL,
	CONSTRAINT "disciplines_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "teachersDisciplines" (
	"id" serial NOT NULL,
	"number" serial NOT NULL UNIQUE,
	"teacherId" integer NOT NULL,
	"disciplineId" integer NOT NULL,
	CONSTRAINT "teachersDisciplines_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "teachers" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tests" (
	"id" serial NOT NULL,
	"name" serial NOT NULL UNIQUE,
	"pdfUrl" TEXT NOT NULL,
	"categoryId" integer NOT NULL,
	"teacherDisciplineId" integer NOT NULL,
	CONSTRAINT "tests_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "users" (
	"id" serial NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "disciplines" ADD CONSTRAINT "disciplines_fk0" FOREIGN KEY ("termId") REFERENCES "terms"("id");

ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_fk0" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id");
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_fk1" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id");


ALTER TABLE "tests" ADD CONSTRAINT "tests_fk0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("teacherDisciplineId") REFERENCES "teachersDisciplines"("id");