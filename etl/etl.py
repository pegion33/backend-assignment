from extract import extract_data
from transform import transform_events
from load import load_into_db
from db import get_db_connection
from init_db import create_tables

def main():
    print("🔄 Starting ETL process...")
    create_tables()
    raw_events = extract_data("activity_logs.json")
    transformed_events = transform_events(raw_events)
    conn = get_db_connection()
    load_into_db(transformed_events, conn)
    conn.close()
    print("✅ ETL process completed.")

if __name__ == "__main__":
    main()
