CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT,
    email TEXT
);

CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    quadrant INTEGER,
    completed BOOLEAN DEFAULT false,
    created_date TEXT,
    created_day INTEGER,
    edited_date TEXT,
    completed_date TEXT,
    completed_day INTEGER,
    user_id INTEGER,
    categories,
);

CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS proj_user (
    id SERIAL PRIMARY KEY,
    project_id INTEGER,
    user_id INTEGER
)