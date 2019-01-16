create table student
(
  id         serial primary key,
  firstname  varchar(50) not null,
  lastname   varchar(50) not null,
  email      varchar(50) not null unique,
  age        numeric     not null,
  created_on timestamp   not null default now()
);
