FROM node:lts as dependencies
WORKDIR /accessible-event-starter-kit
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /accessible-event-starter-kit
COPY . .
COPY --from=dependencies /accessible-event-starter-kit/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /accessible-event-starter-kit
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /accessible-event-starter-kit/next.config.js ./
COPY --from=builder /accessible-event-starter-kit/public ./public
COPY --from=builder /accessible-event-starter-kit/.next ./.next
COPY --from=builder /accessible-event-starter-kit/node_modules ./node_modules
COPY --from=builder /accessible-event-starter-kit/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]