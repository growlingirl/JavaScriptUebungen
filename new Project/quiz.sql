use mysql;
drop database if exists quiz;
create database quiz;
use quiz;

create table if not exists QuizText (
    title text,
    quiz_text text,
    dependence_id integer auto_increment primary key
);

insert into QuizText (
    title,
    quiz_text,
    dependence_id
) values (
    "KISS Zug",
    "Gute Nachbarn von Jung bis Alt sind Gold wert. Bei uns GEBEN und NEHMEN die bald 300 Mitglieder untereinander auf einfache 
        und unbürokratische Art Unterstützung: beim Einkaufen, Gesellschaft leisten, Spazieren gehen, 
        im Haushalt etwas zur Hand gehen und vielem mehr. 
        Auch der Kontakt untereinander wird rege gepflegt. Die meisten unserer Mitglieder wohnen in der Stadt Zug. 
        Wir haben aber auch Genossenschafter aus den anderen Zuger Gemeinden, die meisten aus Baar.
        Die KISS Genossenschaft Zug wurde am 5. September 2016 gegründet. 
        Die Gründung geht auf eine Initiative von Susanna Fassbind, Heidi Lehner, Ingrid Spiess und Edith Stocker zurück. 
        Diese vier Frauen hatten zuvor bereits KISS Kanton Zug und den Verein KISS Schweiz (heute Fondation KISS) mit aufgebaut. 
        Verschiedene Quartiervereine unterstützten die Gründung von KISS Zug. Im Kanton Zug gibt es heute vier KISS Genossenschaften. 
        Neben der Stadt Zug sind dies Cham, Hünenberg und Risch. 
        KISS Genossenschaften und Vereine gibt es ausserdem in den Kantonen 
        Schwyz, Aargau, Glarus, St. Gallen, Zürich, Wallis und Basel-Landschaft. ",
    1
);

create table if not exists QandA (
    id integer auto_increment primary key,
    question text,
    answer text,
    multiple_joice1 text,
    multiple_joice2 text,
    multiple_joice3 text,
    multiple_joice4 text,
    range_start integer,
    range_end integer,
    dependence integer,
        foreign key (dependence) references QuizText(dependence_id)
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


