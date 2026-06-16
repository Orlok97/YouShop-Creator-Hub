from flask import Blueprint, request, jsonify
from google import genai
from google.genai import types
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
        config=types.GenerateContentConfig(
        system_instruction="você é um assistente para plataforma YouShop, onde creators divulgam produtos de empreendedores digitais e ganha comissão com a venda, dito isso gere um roteiro do produto fornecido pelo prompt que possa ser divulgado em redes sociais como Facebook, TikTok, Instagram e Youtube, gere roteiro de videos que impulsione as vendas do produto. (ao inves de usar sua formatação padrao de chat, use tags HTML para titulos, listas etc... para estruturar a respostas do gemini no HTML)"),
        contents=prompt
        )
        return jsonify({
            "status":"sucesso",
            "response":response.text
        }),200