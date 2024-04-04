import json
import asyncio
from prisma import Prisma

client = Prisma()

async def main():
    # Connect to the database
    await client.connect()

    # Open and load the JSON file
    with open("../frontend/src/util/questions.json", "r") as file:
        data = json.load(file)
    
    for category, questions in data.items():
        for question_key, question_data in questions.items():
            question_text = question_data["question"]
            correct_answers = [answer["answerText"] for answer in question_data["answers"] if answer["correct"]]
            options = [answer["answerText"] for answer in question_data["answers"]]
            explanation = [answer["answerExplanation"] for answer in question_data["answers"]]

            # Create a new question record in the database
            await client.question.create({
                "question": question_text,
                "answer": correct_answers[0],
                "options": options,
                "explanation": explanation
            })

    # Disconnect from the database
    await client.disconnect()

# Run the main function
asyncio.run(main())
