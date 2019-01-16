create table course
(
  id         serial primary key,
  name  varchar(50) not null,
  created_on timestamp   not null default now()
);


create table subject
(
  id         serial primary key,
  course_id integer not null references course (id),
  name  varchar(50) not null,
  created_on timestamp   not null default now()
);

insert into course (name) values ('Maths'), ('Art');