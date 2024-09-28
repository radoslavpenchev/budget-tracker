from config import db

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Float, nullable=False)
    cateory = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(200))

    def serialize(self):
        return {
            "id": self.id,
            "amount": self.amount,
            "category": self.category,
            "description": self.description
        }

class Income(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Float, nullable=False)
    source = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(200))

    def serialize(self):
        return {
            "id": self.id,
            "amount": self.amount,
            "source": self.source,
            "description": self.description
        }