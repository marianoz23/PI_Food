select * from "Diets";

insert into "Diets" (name) values ('Gluten Free');
insert into "Diets" (name) values ('Ketogenic');
insert into "Diets" (name) values ('Vegetarian');
insert into "Diets" (name) values ('Lacto-Vegetarian');
insert into "Diets" (name) values ('Ovo-Vegetarian');
insert into "Diets" (name) values ('Vegan');

Select * from "Recipes";	
insert into "Recipes" (name, summary) values ('Homemade Garlic and Basil French Fries', 'The recipe Homemade Garlic and Basil French Fries is ready in roughly 45 minutes and is definitely a similar recipes.');

Select * from "Recipes" where name like '%Garlic%';	
