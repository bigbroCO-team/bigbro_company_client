#!/bin/sh

cd /home/ubuntu/app

docker pull DOCKER_USERNAME_PLACEHOLDER/bigbro_company-client:latest

if [ "$(docker ps -q -f name=bigbro_company-client-blue)" ]; then
  NEW_COLOR=green
  OLD_COLOR=blue
  NEW_PORT=3001
  OLD_PORT=3000
else
  NEW_COLOR=blue
  OLD_COLOR=green
  NEW_PORT=3000
  OLD_PORT=3001
fi

docker run -d \
  --name bigbro_company-client-${NEW_COLOR} \
  -p ${NEW_PORT}:${NEW_PORT} \
  -e NEXT_PUBLIC_API_BASE_URL=NEXT_PUBLIC_API_BASE_URL_PLACEHOLDER \
  DOCKER_USERNAME_PLACEHOLDER/bigbro_company-client:latest

docker stop bigbro_company-client-${OLD_COLOR} || true
docker rm bigbro_company-client-${OLD_COLOR} || true
