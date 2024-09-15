#!/bin/bash

rm -rf ${SERVER_HOME_DIR}/src-${GITHUB_REF_NAME}/storage/{,.[!.],..?}* 2>/dev/null
mv ${SERVER_HOME_DIR}/src/.env ${SERVER_HOME_DIR}/src-${GITHUB_REF_NAME} 2>/dev/null
mv ${SERVER_HOME_DIR}/src/database/database.sqlite ${SERVER_HOME_DIR}/src-${GITHUB_REF_NAME}/database 2>/dev/null
mv ${SERVER_HOME_DIR}/src/public/.htaccess ${SERVER_HOME_DIR}/src-${GITHUB_REF_NAME}/public 2>/dev/null
mv ${SERVER_HOME_DIR}/src/storage/ ${SERVER_HOME_DIR}/src-${GITHUB_REF_NAME}/ 2>/dev/null

rm -rf ${SERVER_HOME_DIR}/src/{,.[!.],..?}*
rm -rf ${SERVER_HOME_DIR}/src/
mv ${SERVER_HOME_DIR}/src-${GITHUB_REF_NAME}/ ${SERVER_HOME_DIR}/src/

mkdir -p ${SERVER_HOME_DIR}/src/storage/{app,public,framework,logs}
mkdir -p ${SERVER_HOME_DIR}/src/storage/framework/{cache,sessions,testing,views}
mkdir -p ${SERVER_HOME_DIR}/src/storage/framework/cache/data/
chmod 0644 ${SERVER_HOME_DIR}/src/public/index.php
chmod 0755 ${SERVER_HOME_DIR}/src/
chmod -R 0755 ${SERVER_HOME_DIR}/src/storage/

rm -R ${SERVER_HOME_DIR}/public_html
ln -s ${SERVER_HOME_DIR}/src/public ${SERVER_HOME_DIR}/public_html

cd ${SERVER_HOME_DIR}/src/

ea-php83 artisan optimize
ea-php83 artisan queue:restart
