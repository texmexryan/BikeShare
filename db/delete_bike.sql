delete from bikes 
where id = ${id};

select * from bikes
where owner_id = ${user_id}