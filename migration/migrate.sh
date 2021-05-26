sleep 10
mysql -h $DB_HOST -u $DB_USER --password=$DB_PASS $DB_NAME < schema.sql
echo "Migration done"
