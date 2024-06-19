# Use the official Node.js v16 image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR ./XCloud-Bot

# Copy the package.json and package-lock.json (if available) to the working 
COPY ./XCloud-Bot/package*.json ./XCloud-Bot/

# Clean npm cache and install dependencies
RUN npm cache clean --force && npm install

# Copy the rest of the application code to the working directory

COPY .XCloud-Bot ./XCloud-Bot

# Make port 8080 available to the world outside this container
EXPOSE 8090

# Define environment variable
ENV NODE_ENV=production

# Run app using the CMD directive
CMD ["node", "index.js"]
