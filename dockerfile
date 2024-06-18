# Use the official Node.js v16 image as the base image
FROM node:16-alpine


# Install any needed packages specified in package.json
RUN npm install

# Make port 8080 available to the world outside this container
EXPOSE 8085

# Define environment variable
ENV NODE_ENV=production

# Run app using the CMD directive
CMD ["node", "index..js"]
