select * from "Diets";

insert into "Diets" (name) values ('Gluten Free');
insert into "Diets" (name) values ('Ketogenic');
insert into "Diets" (name) values ('Vegetarian');
insert into "Diets" (name) values ('Lacto-Vegetarian');
insert into "Diets" (name) values ('Ovo-Vegetarian');
insert into "Diets" (name) values ('Vegan');

Select * from "Recipes";	
insert into "Recipes" (title, summary, "healthScore" instructions,  diets, "dishTypes")
	   values ('Homemade Garlic and Basil French Fries', 
			   'The recipe Homemade Garlic and Basil French Fries is ready in roughly 45 recipes.',
			   89,
			   'prueba 77',
			   ARRAY["vegan", "vegetarian", "dairy free"],
			   ARRAY["lunch", "dinner"]
);
			   '{"vegan", "vegetarian","dairy free"}',
			   '{"lunch", "dinner"]'

delete from "Recipes" where id=1

Select * from "Recipes" where name like '%Garlic%';	
Select * from "Recipes" where name like '%Sou%';	
