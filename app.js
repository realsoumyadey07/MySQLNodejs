import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2002",
  database: "college",
});

console.log("MySQL connected successfully!");

// await db.execute("CREATE DATABASE IF NOT EXISTS college");

// console.log(await db.execute("SHOW DATABASES"));

await db.execute(`CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL);`);
