FROM python:3.9  # Use Python 3.9 base image
WORKDIR /app  # Set working directory inside the container
COPY requirements.txt .  # Copy dependencies file
RUN pip install -r requirements.txt  # Install dependencies
COPY . .  # Copy all files from backend directory to container
CMD ["python", "app.py"]  # Command to run the Flask app

