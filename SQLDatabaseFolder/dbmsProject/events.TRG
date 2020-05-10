TYPE=TRIGGERS
triggers='CREATE DEFINER=`irotech`@`localhost` trigger UpdateEventDate before INSERT on events for each row set NEW.eventUpdateDate = curdate()'
sql_modes=1436549152
definers='irotech@localhost'
client_cs_names='utf8'
connection_cl_names='utf8_general_ci'
db_cl_names='latin1_swedish_ci'
created=157494917259
