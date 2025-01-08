import uuid
import random
import pandas as pd
from datetime import datetime, timedelta

# Constants
POST_TYPES = ['Carousel', 'Reel', 'Static']
ENGAGEMENT_WEIGHTS = {
    'Carousel': {'likes': (200, 500), 'shares': (50, 150), 'comments': (30, 100)},
    'Reel': {'likes': (300, 700), 'shares': (100, 300), 'comments': (50, 200)},
    'Static': {'likes': (50, 200), 'shares': (10, 50), 'comments': (5, 30)}
}
START_DATE = datetime(2024, 12, 1)
END_DATE = datetime(2024, 12, 10)
NUM_SAMPLES = 1000  # Number of samples to generate

# Function to generate a random date within a given range
def generate_random_date(start, end):
    return start + timedelta(days=random.randint(0, (end - start).days))

# Generate data
data = {
    'Post_ID': [],
    'Post_Type': [],
    'Likes': [],
    'Shares': [],
    'Comments': [],
    'Date_Posted': []
}

for _ in range(NUM_SAMPLES):
    post_id = str(uuid.uuid4())
    post_type = random.choices(POST_TYPES, weights=[40, 40, 20], k=1)[0]  # Bias: Carousel & Reel are more frequent
    likes = random.randint(*ENGAGEMENT_WEIGHTS[post_type]['likes'])
    shares = random.randint(*ENGAGEMENT_WEIGHTS[post_type]['shares'])
    comments = random.randint(*ENGAGEMENT_WEIGHTS[post_type]['comments'])
    date_posted = generate_random_date(START_DATE, END_DATE)
    
    data['Post_ID'].append(post_id)
    data['Post_Type'].append(post_type)
    data['Likes'].append(likes)
    data['Shares'].append(shares)
    data['Comments'].append(comments)
    data['Date_Posted'].append(date_posted)

# Create DataFrame
df = pd.DataFrame(data)

# Save dataset to CSV and JSON
df.to_csv('mock_social_media_data_1000.csv', index=False)
df.to_json('mock_social_media_data_1000.json', orient='records', date_format='iso')

print(f"Mock dataset with {NUM_SAMPLES} samples created.")
