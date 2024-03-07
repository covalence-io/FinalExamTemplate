CREATE TABLE Categories (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Books (
  id INT NOT NULL AUTO_INCREMENT,
  category_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL,
  price DECIMAL(5,2) NOT NULL DEFAULT '0.00',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES Categories (id)
);

CREATE TABLE Users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(60) NOT NULL,
  password VARCHAR(60) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO Categories VALUES (1,'Science Fiction'), (2,'Fantasy'), (3,'Political Fiction'), (4,'Thriller'), (5,'Mystery');
INSERT INTO Books VALUES (2,2,'The Hobbit','J.R.R. Tolkien',9.99,'2019-02-26 13:06:09'), (3,3,'1984','George Orwell',7.49,'2019-02-26 13:08:52'), (4,4,'The Outsider','Stephen King',20.63,'2019-02-26 13:11:07'), (5,5,'The Adventures of Sherlock Holmes','Sin Arthur Conan Doyle',8.99,'2019-02-26 13:12:33'), (11,1,'The Martian','Andy Weir',12.99,'2019-02-27 13:28:04');