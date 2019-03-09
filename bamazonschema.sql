CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL auto_increment,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO bamazon.products (product_name, department_name, price, stock_quantity)
VALUES ("Froger_DR", "HomeFoods", 12, 100),
("Froger_MR", "HomeFoods", 10, 100),
("Froger_LR", "HomeFoods", 11, 100),
("Lasagna", "HomeFoods", 5, 80),
("Pickles", "HomeFoods", 1, 199),
("New Girl", "Tech", 5, 14),
("Rug", "HomeDecor", 11, 100),
("Bug Fighter", "Outdoor", 5, 80),
("Yams", "HomeFoods", 1, 17)
