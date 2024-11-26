use mysql;
drop database if exists quiz;
create database quiz;
use quiz;

create table if not exists QandA (
    id integer auto_increment primary key,
    question text,
    answer integer,
    range_start integer,
    range_end integer,
    dependence integer
);

insert into QandA (
    question,
    answer,
    range_start,
    range_end,
    dependence
)
values (
    'In welchem Jahr wurde die Kiss gegründet?',
     2016, 
     1924, 
     2024,
     1
), (
    'Von wievielen Gründungsmitgliedern wurde die Genossenschaft auf die Beine gestellt?',
    4, 
    0, 
    10,
    1  
), (
    'Wie viele Gemeinden des Kantons Zug haben eine KISS Genossenschaft?', 
    4, 
    0, 
    10,
    1   
), (
    'In wievielen Kantonen gibt es KISS Genossenschaften?',
    7, 
    0, 
    10,
    1 
);

create table if not exists dependence (
    title text,
    nb integer
);

insert into dependence (
    title,
    nb
) values (
    KISS Zug,
    1
);

left join