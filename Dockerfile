FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:24-alpine AS runner
WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder --chown=appuser:appgroup /app/.output ./.output
COPY --chown=appuser:appgroup package.json package-lock.json ./

USER appuser

EXPOSE 3000
CMD ["npm", "run", "start"]