-- First, connect to PostgreSQL and create the database if it doesn't exist
-- Run this command separately first:
-- CREATE DATABASE top_users;

-- Then connect to the database and run these commands:

-- Drop tables if they exist
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS categories;

-- Create categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create items table
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    price DECIMAL(10,2) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample categories
INSERT INTO categories (name, description) VALUES
    ('Electronics', 'Electronic devices and accessories'),
    ('Books', 'Physical and digital books'),
    ('Clothing', 'Apparel and accessories'),
    ('Sports', 'Sports equipment and gear'),
    ('Home & Garden', 'Home improvement and gardening tools');

-- Insert sample items
INSERT INTO items (name, category_id, price, description) VALUES
    ('iPhone 13', 1, 999.99, 'Latest Apple smartphone'),
    ('MacBook Pro', 1, 1299.99, '13-inch, M1 chip'),
    ('The Lord of the Rings', 2, 29.99, 'Complete trilogy set'),
    ('Harry Potter Collection', 2, 89.99, 'Complete 7 book series'),
    ('Nike Air Max', 3, 129.99, 'Running shoes, various sizes'),
    ('Levi''s 501', 3, 59.99, 'Classic fit jeans'),
    ('Tennis Racket', 4, 79.99, 'Professional grade racket'),
    ('Garden Hose', 5, 24.99, '50ft expandable hose'); 