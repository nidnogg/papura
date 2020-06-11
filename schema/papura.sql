CREATE TABLE "product" (
  "id" int PRIMARY KEY,
  "name" varchar(255),
  "type" int,
  "price" decimal(10,2),
  "stock" int,
  "img_path_id" int,
  "created_at" timestamptz,
  "updated_at" timestamptz
);

CREATE TABLE "prod_type" (
  "id" int PRIMARY KEY,
  "type_name" varchar(255),
  "img_path_id" int,
  "created_at" timestamptz,
  "updated_at" timestamptz
);

CREATE TABLE "img_path" (
  "id" int PRIMARY KEY,
  "path" varchar(255),
  "created_at" timestamptz,
  "updated_at" timestamptz
);

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255),
  "orders" int,
  "lastname" varchar(255),
  "email" varchar(255),
  "created_at" timestamptz,
  "updated_at" timestamptz
);

CREATE TABLE "cart" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "cart_items" int,
  "created_at" timestamptz,
  "updated_at" timestamptz
);

CREATE TABLE "cart_prod" (
  "id" int PRIMARY KEY,
  "prod_id" int,
  "created_at" timestamptz,
  "updated_at" timestamptz
);

CREATE TABLE "order" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "prod_id" int,
  "cart_id" int,
  "created_at" timestamptz,
  "updated_at" timestamptz
);


ALTER TABLE "product" ADD FOREIGN KEY ("type") REFERENCES "prod_type" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("id") REFERENCES "cart_prod" ("prod_id");

ALTER TABLE "cart" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "cart" ADD FOREIGN KEY ("cart_items") REFERENCES "cart_prod" ("card_id");

ALTER TABLE "order" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "img_path" ADD FOREIGN KEY ("id") REFERENCES "product" ("img_path_id");

ALTER TABLE "img_path" ADD FOREIGN KEY ("id") REFERENCES "prod_type" ("img_path_id");

ALTER TABLE "order" ADD FOREIGN KEY ("prod_id") REFERENCES "product" ("id");



