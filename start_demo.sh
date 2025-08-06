#!/bin/bash

# Exit on any error
set -e

# Absolute path resolution (optional)
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

# Step 1: Start device history service
echo "🛰 Starting device-history-service..."
python "$SCRIPT_DIR/device_history_service.py" &

# Save PID to kill later (optional)
echo $! > "$SCRIPT_DIR/device_history_service.pid"

# Step 2: Start Flask app
echo "🚀 Starting Flask app..."
export FLASK_APP=app
export FLASK_ENV=development
flask run --port=5050