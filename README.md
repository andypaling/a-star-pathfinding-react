for updating production reclone to server:
- run ```npm run build```
- rm -rf current contents of the /var/www/html directory
- cp -r the contents of the build dir to the /var/www/html directory
- reload apache
