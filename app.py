from flask import Flask, render_template, send_from_directory
import os
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_babies')
def get_babies():
    images_path = os.path.join(app.static_folder, 'images')
    all_images = os.listdir(images_path)
    random_images = random.sample(all_images, 2)
    return {
        'baby1': f'/static/images/{random_images[0]}',
        'baby2': f'/static/images/{random_images[1]}'
    }

if __name__ == '__main__':
    app.run(debug=True)
