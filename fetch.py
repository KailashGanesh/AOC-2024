import os
import requests
import datetime


py_file_path = os.path.dirname(os.path.abspath(__file__))
cookie_file = os.path.join(py_file_path, 'cookie.txt')

year = datetime.datetime.now().year
day = datetime.datetime.now().day
print(year, day)

url = f'https://adventofcode.com/{year}/day/{day}/input'


if not os.path.exists(cookie_file):
    print('Cookie file not found')
    exit(1)

with open(cookie_file, 'r') as f:
   cookie_name, cookie  = f.read().strip().split(' ')


file = requests.get(url, cookies={cookie_name: cookie})

folder = os.path.join(py_file_path, f'day-{day:02}')
os.makedirs(folder, exist_ok=True)
with open(os.path.join(folder, 'input.txt'), 'w') as f:
    f.write(file.text)

print(file.text)
