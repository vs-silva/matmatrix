# Stage 1: Base image for dependencies
FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Builder
FROM base AS builder
WORKDIR /app
COPY . .
# We run the build via nx.
# Replace 'matmatrix-core' with your actual buildable target if needed
RUN npx nx build matmatrix-core --prod

# Stage 3: Runner (Production)
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only the built assets and production node_modules
# Note: For Nx libraries, you might need to copy the dist folder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# If this were a microservice/API, you'd expose a port here
# EXPOSE 3000

CMD ["node", "dist/libs/matmatrix-core/index.js"]