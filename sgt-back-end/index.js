const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred.' });
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'GradeId must be a positive integer' });
    return;
  }
  const sql = `
    select *
      from "grades"
     where "gradeId" = $1
     `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with GradeId: ${gradeId}` });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occured.' });
    });
});

app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const score = req.body.score;
  const course = req.body.course;
  const scoreNum = parseInt(score, 10);
  if (!name || !score || !course) {
    res.status(400).json({ error: 'Grade must include a name, course, and score' });

  } else if (score < 1 || score > 100 || isNaN(scoreNum)) {
    res.status(400).json({ error: 'Score must be a number between 1-100' });

  }
  const params = [name, course, score];
  const sql = `
    insert into "grades" ("name", "course", "score")
         values ($1, $2, $3)
         returning *;
  `;
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occured' });
    });

});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const score = req.body.score;
  const scoreNum = parseInt(score, 10);
  const gradeId = parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'GradeId must be a positive integer' });
    return;
  } else if (score < 1 || score > 100 || isNaN(scoreNum)) {
    res.status(400).json({ error: 'Score must be a number between 1-100' });

  }
  const params = [score, gradeId];
  const sql = `
    update "grades"
       set "score" = $1
     where "gradeId" = $2
     returning *
  `;
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with GradeId: ${gradeId}` });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'GradeId must be a positive integer' });
    return;
  }
  const params = [gradeId];
  const sql = `
    delete from "grades"
          where "gradeId" = $1
    returning *;
  `;
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with GradeId: ${gradeId}` });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ Error: 'An unexpected error has occurred' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
