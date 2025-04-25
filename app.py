from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import requests
import os

app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/generate", methods=["POST"])
def generate_blog():
    data = request.json
    topic = data.get("topic", "")
    keywords = data.get("keywords", "")
    tone = data.get("tone", "informative")
    prompt = f"Write a blog post about '{topic}' in a {tone} tone. Include keywords: {keywords}."

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=1000
    )
    blog = response['choices'][0]['message']['content']
    return jsonify({"blog": blog})

@app.route("/check-grammar", methods=["POST"])
def check_grammar():
    data = request.json
    text = data.get("text", "")
    response = requests.post(
        "https://api.languagetool.org/v2/check",
        data={"text": text, "language": "en-US"},
    )
    return jsonify(response.json())

if __name__ == "__main__":
    app.run(debug=True)
