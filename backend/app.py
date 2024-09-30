from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from config import app, db
from models import Expense, Income

with app.app_context():
    db.create_all()

@app.route("/expenses", methods=["GET", "POST"])
def manage_expenses():
    if request.method == "POST":
        data = request.get_json()
        new_expense = Expense(amount=data["amount"], category=data["category"], description=data["description"])
        db.session.add(new_expense)
        db.session.commit()
        return jsonify({"message": "Expense added successfully"}), 201
    
    expenses = Expense.query.all()
    return jsonify([expense.serialize() for expense in expenses]), 200

@app.route("/incomes", methods=["GET", "POST"])
def manage_incomes():
    if request.method == "POST":
        data = request.get_json()
        new_income = Income(amount=data["amount"], source=data["source"], description=data["description"])
        db.session.add(new_income)
        db.session.commit()
        return jsonify({"message": "Income added successfully"}), 201
    
    incomes = Income.query.all()
    return jsonify([income.serialize() for income in incomes]), 200

@app.route("/summary", methods=["GET"])
def get_summary():
    total_income = db.session.query(db.func.sum(Income.amount)).scalar() or 0
    total_expense = db.session.query(db.func.sum(Expense.amount)).scalar() or 0
    balance = total_income - total_expense
    return jsonify({
        "total_income": total_income,
        "total_expense": total_expense,
        "balance": balance
    }), 200

if __name__ == "__main__":
    app.run(debug=True)

