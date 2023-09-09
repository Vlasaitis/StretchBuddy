import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("exercises.db");

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS exercises (id INTEGER PRIMARY KEY AUTOINCREMENT, category TEXT, image TEXT, description TEXT);`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

const addInitialData = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO exercises (category, image, description) VALUES 
        ('Butt', 'assets/images/test1.png', 'Sitty sit'),
        ('Butt', 'assets/images/test2.png', 'Tighten your butt, lift slowly'),
        ('Legs', 'assets/images/test3.png', 'Breathe in and breathe out')`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

const getExercises = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM exercises",
        [],
        (_, result) => {
          resolve(result.rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

const clearDatabase = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM exercises",
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export { setupDatabaseAsync, addInitialData, getExercises, clearDatabase };
