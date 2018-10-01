delete from cart
where user_id = ${id};

select * from cart 
where user_id = ${id}