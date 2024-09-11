create database uas_database;
use uas_database;

create table user(
    id int primary key auto_increment,
    nama varchar(20),
    telepon varchar(12)
);

create table post(
    id int primary key auto_increment,
    judul varchar(20),
    tulisan varchar(12),
    user_id int
);