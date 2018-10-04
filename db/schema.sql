create table users (
    id serial primary key,
    username varchar(100),
    email varchar(100),
    picture text,
    auth_id text,   
)

create table bikes (
    id serial primary key,
    owner_id int references users(id),
    brand varchar(50),
    type varchar(50),
    image text,
    description varchar(250),
    price int,
    location point

create table cart (
  id serial primary key,
  user_id integer references users(id),
  bike_id integer references bikes(id),
  start_date text,
  end_date text
);



)
//join  for users and bikes

select * from bikes, users.username, users.id, users.picture 
join users on users.id = bikes.owner_id
where bikes.owner_id = $1



create table users_bikes (

    id not null serial primary key,
    bikes_id int references bikes(id)
    users_id int references users(id)
)
insert into bikes (owner_id, brand, type, image, description, price)
values (1, 'trek', 'road bike', 'myImage', 'Brand new. Rides Great!', 20)

insert into bikes (owner_id, brand, type, image, description, price)
values (2, 'mongoose', 'mountain bike', 'myImage', 'For off road use. Return clean', 20)