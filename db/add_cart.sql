insert into cart
(user_id, bike_id, start_date, end_date)
VALUES
(${user_id}, ${bike_id}, ${start_date}, ${end_date});

select * from cart
where user_id = ${user_id}