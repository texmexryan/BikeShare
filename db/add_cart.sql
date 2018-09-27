insert into cart
(user_id, bike_id)
VALUES
(${user_id}, ${bike_id});

select * from cart
where user_id = ${user_id}