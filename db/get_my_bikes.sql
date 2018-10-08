select * from bikes 
where owner_id = $1
order by id desc;