from db import get_db_connection

def create_tables():
    commands = [
        """
        CREATE TABLE IF NOT EXISTS users (
            id INT PRIMARY KEY,
            name TEXT NOT NULL
        )
        """,
        """
        CREATE TABLE IF NOT EXISTS courses (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL
        )
        """,
        """
        CREATE TABLE IF NOT EXISTS lessons (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL
        )
        """,
        """
        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            event_id TEXT UNIQUE NOT NULL,
            timestamp TIMESTAMPTZ NOT NULL,
            action TEXT NOT NULL,
            "userId" INT REFERENCES users(id) NOT NULL,
            "courseId" TEXT REFERENCES courses(id) NOT NULL,
            "lessonId" TEXT REFERENCES lessons(id) NOT NULL,
            duration_minutes INT NOT NULL
        )
        """
    ]

    conn = get_db_connection()
    cur = conn.cursor()
    for command in commands:
        cur.execute(command)
    conn.commit()
    cur.close()
    conn.close()
    print("✅ Database tables created successfully.")
