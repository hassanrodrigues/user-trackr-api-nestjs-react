CREATE SCHEMA postgres;

CREATE TABLE postgres.profiles (
    profile_id SERIAL PRIMARY KEY,
    profile_name VARCHAR(100),
    profile_status BOOLEAN
);

-- USER table
CREATE TABLE postgres.users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(100),
    user_surname VARCHAR(100),
    user_email VARCHAR(100),
    user_password VARCHAR(255),
    user_refresh_token VARCHAR(150),
    user_status BOOLEAN,
    user_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_deleted BOOLEAN DEFAULT FALSE,
    profile_id INT,
    CONSTRAINT fk_USER_PROFILE FOREIGN KEY (profile_id) REFERENCES profiles.PROFILE(profile_id)
);