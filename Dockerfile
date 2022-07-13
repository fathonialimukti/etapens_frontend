FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm install
ENV NODE_ENV production

EXPOSE 3000

ENV PORT 3000

CMD ["pnpm", "run", "dev"]