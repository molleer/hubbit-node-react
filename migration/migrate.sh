mysql -h $DB_HOST -u $DB_USER --password=$DB_PASS $DB_NAME < schema.sql
echo "Migration done"
mysql -h $DB_HOST -u $DB_USER --password=$DB_PASS $DB_NAME < seeding.sql
echo "Seeding done"
