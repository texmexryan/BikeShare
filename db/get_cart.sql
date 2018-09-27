select * 
from bikes b
join cart c on b.id = c.bike_id

where c.user_id = ${id};