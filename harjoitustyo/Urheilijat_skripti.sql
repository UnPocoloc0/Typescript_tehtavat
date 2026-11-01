CREATE DATABASE IF NOT EXISTS urheilija_db;

USE urheilija_db;

CREATE TABLE urheilijat (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	etunimi VARCHAR(50),
	sukunimi VARCHAR(50),
	kutsumanimi VARCHAR(50),
	syntymavuosi DATE,
	paino FLOAT,
	kuvalinkki VARCHAR(255),
	laji VARCHAR(50) NOT NULL,
	saavutukset TEXT
) DEFAULT CHARSET utf8mb4;

#CREATE TABLE saavutukset (
#	id INT AUTO_INCREMENT PRIMARY KEY,
#	urheilja_id INT,
#	saavutus VARCHAR(255),
#	FOREIGN KEY (urheilja_id) REFERENCES urheilijat(id) ON DELETE CASCADE
#);

INSERT INTO 
	urheilijat (etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuvalinkki, laji, saavutukset)
VALUES
# Y-M-D -muoto päivämäärissä
	('Lauri', 'Markkanen', 'Late', '1997-05-22', 109.0, 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Lauri_Markkanen_crop.jpg', 'Koripallo', 'NBA All-Star 2023, NBA Most Improved Player 2023'),
		('Iivo', 'Niskanen', 'Iivo', '1992-01-12', 80.0, 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Iivo_Niskanen_in_2017.jpg', 'Maastohiihto', '3x Olympiakulta (2014, 2018, 2022), Maailmanmestari 2017'),
		('Kalle', 'Rovanperä', 'Kalle', '2000-10-01', 72.0, 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Kalle_Rovanper%C3%A4_2022.jpg', 'Ralli', 'Rallin maailmanmestari 2022, 2023'),
		('Wilma', 'Murto', 'Wilma', '1998-06-11', 68.0, 'https://upload.wikimedia.org/wikipedia/commons/3/30/Wilma_Murto_2022.jpg', 'Seiväshyppy', 'Euroopan-mestari 2022, MM-pronssi 2023'),
		('Teemu', 'Pukki', 'El Pukki', '1990-03-29', 78.0, NULL, 'Jalkapallo', 'Suomen maajoukkueen kaikkien aikojen paras maalintekijä'),
		('Saga', 'Vanninen', 'Saga', '2003-05-04', 65.0, NULL, 'Seitsenottelu', 'MM-hallihopea 2024, Alle 20-v maailmanmestari 2021, 2022'),
		('Matti', 'Nykänen', 'Masai', '1963-07-17', 60.0, 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Matti_Nyk%C3%A4nen.jpg', 'Mäkihyppy', '4x Olympiakulta, 5x Maailmanmestari'),
		('Aleksander', 'Barkov', 'Sasha', '1995-09-02', 98.0, 'https://upload.wikimedia.org/wikipedia/commons/9/91/Aleksander_Barkov_2018.jpg', 'Jääkiekko', 'Stanley Cup -voittaja 2024, Frank J. Selke Trophy 2021, 2024'),
		('Mira', 'Potkonen', 'Mira', '1980-11-17', 60.0, NULL, 'Nyrkkeily', '2x Olympiapronssi (2016, 2020), 2x EM-kulta'),
		('Käärijä', 'Puhakka', 'Jere', '1993-10-21', 75.0, NULL, 'E-urheilu', 'AKK eMotorSport Suomen mestaruus 2020');
	
CREATE USER IF NOT EXISTS 'user'@'localhost' IDENTIFIED BY 'user1';
GRANT SELECT, INSERT, UPDATE, DELETE ON urheilijat TO 'user'@'localhost';
FLUSH PRIVILEGES;

SELECT * FROM urheilijat;