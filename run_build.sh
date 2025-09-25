pm2 delete nextjs_gold_price
pm2 start "yarn start -p 3000" --name nextjs_gold_price
pm2 save
