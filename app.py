from flask import Flask, jsonify

app = Flask(__name__)

# Let's define a sample endpoint
@app.route('/api/patient', methods=['GET'])
def get_patient_data():
    # Implement logic to retrieve patient data
    # Return the data as JSON
    return jsonify({"patient_id": 1, "name": "John Doe", "age": 30})

if __name__ == '__main__':
    app.run(debug=True)