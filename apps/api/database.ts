import sqlite3 from 'sqlite3';

import { Project } from './types';

let db: sqlite3.Database;

export async function init(): Promise<void> {
  return new Promise((resolve, reject) => {
    db = new sqlite3.Database('sample-database.sqlite', (err) => {
      return err ? reject(err) : resolve();
    });
  });
}

export async function getProjects(): Promise<Project> {
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT id, url, status, country FROM projects LIMIT 10',
      (err, rows) => {
        // @ts-expect-error - ignore unknown query response
        return err ? reject(err) : resolve(rows);
      },
    );
  });
}
