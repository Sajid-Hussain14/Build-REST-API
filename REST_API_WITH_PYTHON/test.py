import requests
import json
#MAIN URL: https://api.stackexchange.com/docs/questions#order=desc&sort=activity&filter=default&site=stackoverflow&run=true

#check above link to see the parameters


response = requests.get('https://api.stackexchange.com//2.3/questions?order=desc&sort=activity&site=stackoverflow')

# print(response.json()['items'])  

for question in response.json()['items']:
    if question['answer_count'] == 0:
        print(question['title'])  
        print(question['link'])
        # print()
    else:
        print("skipped")
    print("success")