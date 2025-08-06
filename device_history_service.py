# device_history_service.py
import socket
import json

mock_db = {
    "lila@example.com": ["MacBook Pro", "Dell XPS", "ThinkPad"],
    "bob@example.com": ["Surface Pro"]
}

HOST = "localhost"
PORT = 9002

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()

    print(f"📡 device-history-service running on {HOST}:{PORT}")
    while True:
        conn, addr = s.accept()
        with conn:
            email = conn.recv(1024).decode().strip()
            devices = mock_db.get(email, [])
            data = {
                "email": email,
                "count": len(devices),
                "models": devices
            }
            conn.sendall((json.dumps(data) + "\n").encode())