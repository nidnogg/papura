# refresh
createdb -U postgres papura-db
dropdb -U postgres papura-db
psql -U postgres -d papura-db -f *sql file*

# running
psql -U postgres -d papura-db
