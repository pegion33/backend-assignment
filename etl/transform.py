from datetime import datetime

def validate_event(event):
    required_fields = ["event_id", "timestamp", "action", "user", "course", "metadata"]
    user_subfield = ["id", "name"]
    course_subfield = ["id", "title"]
    metadata_subfield = ["lesson_id", "lesson_title", "duration_minutes"]
    for field in required_fields:
        if field not in event:
            raise ValueError(f"Missing required field: {field}")
        if field == "event-id":
            if not isinstance(event[field], str):
                raise ValueError(f"Incorrect field type: {field}")
        if field == "timestamp":
            try:
                datetime.fromisoformat(event["timestamp"].replace("Z", "+00:00"))
            except ValueError:
                raise ValueError(f"Invalid timestamp format: {event['timestamp']}")
        if field == "action":
            if not isinstance(event[field], str):
                raise ValueError(f"Incorrect field type: {field}")
        if field == "user":
            for sub_field in user_subfield:
                if sub_field not in event[field]:
                    raise ValueError(f"Missing required sub-field: {sub_field} in {field}")
                if sub_field == "id":
                    if not isinstance(event[field][sub_field], int):
                        raise ValueError(f"Incorrect field type: {sub_field} in {field}")
                if sub_field == "name":
                    if not isinstance(event[field][sub_field], str):
                        raise ValueError(f"Incorrect field type: {sub_field} in {field}")

        if field == "course":
            for sub_field in course_subfield:
                if sub_field not in event[field]:
                    raise ValueError(f"Missing required sub-field: {sub_field} in {field}")
                if sub_field == "id":
                    if not isinstance(event[field][sub_field], str):
                        raise ValueError(f"Incorrect field type: {sub_field} in {field}")
                if sub_field == "title":
                    if not isinstance(event[field][sub_field], str):
                        raise ValueError(f"Incorrect field type: {sub_field} in {field}")
        if field == "metadata":
            for sub_field in metadata_subfield:
                if sub_field not in event[field]:
                    raise ValueError(f"Missing required sub-field: {sub_field} in {field}")
                if sub_field == "lesson_id":
                    if not isinstance(event[field][sub_field], str):
                        raise ValueError(f"Incorrect field type: {sub_field} in {field}")
                if sub_field == "lesson_title":
                    if not isinstance(event[field][sub_field], str):
                        raise ValueError(f"Incorrect field type: {sub_field} in {field}")
                if sub_field == "duration_minutes":
                    if not isinstance(event[field][sub_field], int):
                        raise ValueError(f"Incorrect field type: {sub_field} in {field}")

def transform_events(events):
    transformed = []
    for event in events:
        try:
            validate_event(event)
            transformed.append({
                "event_id": event["event_id"],
                "timestamp": event["timestamp"],
                "action": event["action"],
                "user_id": event["user"]["id"],
                "user_name": event["user"]["name"],
                "course_id": event["course"]["id"],
                "course_title": event["course"]["title"],
                "lesson_id": event["metadata"]["lesson_id"],
                "lesson_title": event["metadata"]["lesson_title"],
                "duration_minutes": event["metadata"]["duration_minutes"],
            })
        except Exception as e:
            print(f"Skipping event : {event} due to error: {e}")
    return transformed