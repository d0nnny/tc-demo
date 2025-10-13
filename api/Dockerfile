# ---- Base image ----
FROM node:22-alpine

# ---- Set working directory ----
WORKDIR /app

# ---- Copy dependency files and install ----
COPY package*.json ./
RUN npm install --omit=dev

# ---- Copy the rest of the app ----
COPY . .

# ---- Expose port 80 for ECS/ALB ----
EXPOSE 80

# ---- Start the app ----
CMD ["node", "app.js"]
