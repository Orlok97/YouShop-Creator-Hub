from flask import Blueprint, request, jsonify
from google import genai
import os

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

gemini_bp=Blueprint('gemini_bp', __name__)

@gemini_bp.route('',methods=['GET','POST'])
def chat():
    json=request.get_json()
    prompt=json['content']
    if request.method == 'POST':
        if prompt == "":
            return jsonify({
                "status":"sucesso",
                "response":"prompt inválido."
            }),200
        response = client.models.generate_content(
        model="gemini-3.1-flash-lite",
        contents=prompt
        )
        return jsonify({
            "status":"sucesso",
            "response":response.text
        }),200