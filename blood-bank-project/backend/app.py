from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# Connect to MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="sayy",
    database="blood_bank"
)
cursor = db.cursor()

@app.route('/api/donors', methods=['POST'])
def add_donor():
    data = request.get_json()
    name = data['name']
    blood_type = data['bloodType']
    dob = data['dob']
    contact = data['contact']

    query = "INSERT INTO donors (name, blood_type, dob, contact_info) VALUES (%s, %s, %s, %s)"
    values = (name, blood_type, dob, contact)
    cursor.execute(query, values)
    db.commit()

    return jsonify({'message': 'Donor added successfully!'}), 201

if __name__ == '__main__':
    app.run(debug=True)
