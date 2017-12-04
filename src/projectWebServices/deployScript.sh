#!/bin/bash

LARAVEL_DIR="E:\OneDrive\DeNayer\FASE 3\semester 1\Webservices\Project-Webservices\src\projectWebservicesLaravel"

echo 'deploying Angular project with / as base'
ng build --prod --aot

echo 'copy dist to Laravel'
cp dist/* ${LARAVEL_DIR}"\public"

echo copy ${LARAVEL_DIR}\public\index.html to ${LARAVEL_DIR}\resources\views\index.php
mv ${LARAVEL_DIR}"\public\index.html" ${LARAVEL_DIR}"resources\views\index.php"

echo
echo "Done! Don't forget to add the routes in web.php located in ${LARAVEL_DIR}\routes\web.php"
echo
