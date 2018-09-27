select * from bikes, users.username, users.id, users.picture 
join users on users.id = bikes.owner_id
where bikes.owner_id = $1;