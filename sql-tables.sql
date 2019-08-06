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
    board_id INTEGER
);

CREATE TABLE IF NOT EXISTS boards (
    id SERIAL PRIMARY KEY,
    title TEXT
);

CREATE TABLE IF NOT EXISTS board_user (
    id SERIAL PRIMARY KEY,
    board_id INTEGER,
    user_id INTEGER
);

CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    title TEXT,
    user_id INTEGER,
    created_time TEXT
);