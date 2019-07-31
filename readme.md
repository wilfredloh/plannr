psql -d tweedr -U wilfredloh -f sql-drop.sql
psql -d tweedr -U wilfredloh -f sql-tables.sql
psql -d tweedr -U wilfredloh -f sql-users.sql
psql -d tweedr -U wilfredloh -f sql-tweets.sql
psql -d tweedr -U wilfredloh -f sql-followers.sql


BUGS
1. After registering, if reload it will run PUT route again --> already got user