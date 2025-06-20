def load_into_db(events, conn):
    with conn.cursor() as cur:
        for e in events:
            cur.execute("""
                INSERT INTO users (id, name) VALUES (%s, %s)
                ON CONFLICT (id) DO NOTHING
            """, (e["user_id"], e["user_name"]))
            
            cur.execute("""
                INSERT INTO courses (id, title) VALUES (%s, %s)
                ON CONFLICT (id) DO NOTHING
            """, (e["course_id"], e["course_title"]))

            cur.execute("""
                    INSERT INTO lessons (id, title) VALUES (%s, %s)
                    ON CONFLICT (id) DO NOTHING
                """, (e["lesson_id"], e["lesson_title"]))

            cur.execute("""
                INSERT INTO events (
                    event_id, timestamp, action,
                    "userId", "courseId", "lessonId", duration_minutes
                ) VALUES (%s, %s, %s, %s, %s, %s, %s)
                ON CONFLICT (event_id) DO NOTHING
            """, (
                e["event_id"],
                e["timestamp"],
                e["action"],
                e["user_id"],
                e["course_id"],
                e["lesson_id"],
                e["duration_minutes"]
            ))
        conn.commit()