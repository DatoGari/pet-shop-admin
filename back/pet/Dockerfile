# Base image with node
FROM node:18-alpine

# სამუშაო დირექტორია
WORKDIR /app

# package.json და package-lock.json/ yarn.lock-ის კოპირება
COPY package*.json ./

# დეპენდენციების ინსტალაცია
RUN npm install

# პროექტის ყველა ფაილის კოპირება
COPY . .

# TypeScript კომპილაცია + Vite build
RUN npm run build

# Nginx server სიმარტივისთვის
FROM nginx:alpine

# Build ფაილების გადატანა Nginx-ში
COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
