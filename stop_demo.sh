#!/bin/bash

# Gracefully kill the device-history-service if running
if [ -f device_history_service.pid ]; then
    kill "$(cat device_history_service.pid)" && echo "🛑 device-history-service stopped"
    rm device_history_service.pid
fi