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
    created TEXT,
    edited TEXT,
    user_id INTEGER,
    category INTEGER
);

CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    title TEXT,
    todo_id INTEGER
);