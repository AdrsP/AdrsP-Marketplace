"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Item
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/items', methods=['GET'])
def get_items():

    all_items = Item.query.all()

    results = list(map(lambda item : item.serialize(), all_items))

    return jsonify(results), 200
