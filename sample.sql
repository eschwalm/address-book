CREATE DATABASE contacts;

USE contacts;

CREATE TABLE people (
	id   INTEGER PRIMARY KEY AUTO_INCREMENT,
	first_name	VARCHAR(255) NOT NULL,
	last_name	VARCHAR(255) NOT NULL,
	street_address VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL,
	state VARCHAR(255) NOT NULL,
	zip VARCHAR(255) NOT NULL
) CHARACTER SET utf8;

SHOW TABLES;

INSERT INTO people (first_name, last_name, street_address, city, state, zip) 
VALUES("Whitfield","Pogue", "7391 Noble Via", "Black Forest", "Kentucky", "41555");

INSERT INTO people (first_name, last_name, street_address, city, state, zip) 
VALUES("Niall", "Krug", "6729 Dusty Elk Freeway", "Arnsberg", "Missouri", "63424");

INSERT INTO people (first_name, last_name, street_address, city, state, zip) 
VALUES("Malik","Brindle", "5684 Honey Pike", "Kipling", "North Carolina", "28636");

INSERT INTO people (first_name, last_name, street_address, city, state, zip) 
VALUES("Wylie","Pendergast", "318 Green Road", "Willow Springs", "Pennsylvania", "15797");

SELECT * FROM people
