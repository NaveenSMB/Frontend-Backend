from flask import Flask, jsonify  # Import Flask and jsonify (for JSON responses)

app = Flask(__name__)  # Create a Flask web application

@app.route('/health')  # Define an endpoint `/health`
def health():
    return jsonify({"message": "Backend is running!"})  # Return a JSON response

if __name__ == '__main__':  # Run the app only if this script is executed directly
    app.run(host='0.0.0.0', port=5000)  # Start the Flask server on port 5000

