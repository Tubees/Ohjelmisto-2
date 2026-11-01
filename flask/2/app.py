from flask import Flask
import json


app = Flask(__name__)

with open("dictionary.json", "r") as f:
    dictionary = json.load(f)


@app.route("/translate/<word>")
def translate(word):
    word = word.lower()
    if word in dictionary:
        response = {
            "word": word,
            "translation": dictionary[word]
        }
        return response
    else:
        return {"error": "Word not found"}, 404
    



if __name__ == "__main__":
    app.run(use_reloader=True, host='127.0.0.1', port=3000)
