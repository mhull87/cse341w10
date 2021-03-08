CREATE TABLE person (
  id SERIAL PRIMARY KEY,
  first VARCHAR(100) NOT NULL,
  last VARCHAR(100) NOT NULL,
  dob DATE
  );

INSERT INTO person (first, last, dob)
  VALUES ('Frank', 'Appleton', '1884-10-12');

INSERT INTO person (first, last, dob)
  VALUES ('Anna', 'Nienhaus', '1887-11-30');

INSERT INTO person (first, last, dob)
  VALUES ('Orville Francis', 'Appleton', '1912-08-11');

INSERT INTO person (first, last, dob)
  VALUES ('Mary Frances', 'Appleton', '1916-03-10');

INSERT INTO person (first, last, dob)
  VALUES ('Robert Joseph', 'Appleton', '1917-11-27');

INSERT INTO person (first, last, dob)
  VALUES ('June Rosemary', 'Behling', '1917-05-06');

INSERT INTO person (first, last, dob)
  VALUES ('Mary Claire', 'Appleton', '1938-11-27');

INSERT INTO person (first, last, dob)
  VALUES ('Frances Robert', 'Appleton', '1941-09-07');

INSERT INTO person (first, last, dob)
  VALUES ('Harry Neil', 'Appleton', '1943-11-18');

INSERT INTO person (first, last, dob)
  VALUES ('Catherine Ann', 'Appleton', '1945-10-23');

CREATE USER familyhistoryuser WITH PASSWORD 'pass';

GRANT SELECT, INSERT, UPDATE ON person TO familyhistoryuser;

GRANT USAGE, SELECT ON SEQUENCE person_id_seq TO familyhistoryuser;