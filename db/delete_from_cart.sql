 delete from cart
where id = ${id};

select * 
from bikes
join cart on bikes.id = cart.id

where cart.user_id = ${user_id};