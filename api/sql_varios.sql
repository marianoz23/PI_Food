select * from "Diets";

insert into "Diets" (name) values ('Gluten Free');
insert into "Diets" (name) values ('Ketogenic');
insert into "Diets" (name) values ('Vegetarian');
insert into "Diets" (name) values ('Lacto-Vegetarian');
insert into "Diets" (name) values ('Ovo-Vegetarian');
insert into "Diets" (name) values ('Vegan');


insert into "Recipes" (image, title, summary, healthscore, instructions, diets, "dishTypes")
	   values ('https://t1.rg.ltmcdn.com/es/posts/0/4/3/seco_de_res_a_la_nortena_75340_600.jpg',
		   	   'Fejoles con Seco', 'The recipe Homemade Garlic and Basil French Fries is ready in roughly 45 recipes.',
			   85,'prueba 77', '{ "vegetarian","dairy free"}', '{"lunch"}'
);
insert into "Recipes" (image, title, summary, healthscore, instructions, diets, "dishTypes")
	   values ('https://www.comedera.com/wp-content/uploads/2013/05/lomo-saltado-peruano-plato.jpg',
			   'Lomo Saltado', 
			   'The recipe Homemade Garlic and Basil French Fries is ready in roughly 45 recipes.',
			   76,'prueba 77','{"vegan", "dairy free"}','{"lunch", "dinner"}'
);
insert into "Recipes" (image, title, summary, healthscore, instructions, diets, "dishTypes")
	   values ('https://recetascocinaperuana.com/wp-content/uploads/2022/09/recetas-de-comidas-peruanas.jpg',
		   	   'Arroz con Pollo', 'The recipe Homemade Garlic and Basil French Fries is ready in roughly 45 recipes.',
			   98,'prueba 77', '{ "dairy free"}', '{"lunch"}'
);

Select tipo, count(*) from "Recipes" group by tipo;

Select * from "Recipes" order by title;
Select * from "Recipes" order by healthScore desc ;	

select * from "Recipes" where diets="Gluten free";	


select * from "Diets"




update "Recipes" set image='https://recetascocinaperuana.com/wp-content/uploads/2022/09/recetas-de-comidas-peruanas.jpg' where id=7;	   
			   
delete from "Recipes" where id=6

Select * from "Recipes" where name like '%Garlic%';	
Select * from "Recipes" where name like '%Sou%';	

drop table xrecipe;
drop table xdiet;drop table diet_recipe;
create table xrecipe (idRecipe varchar(4), title varchar(20) ) ;
create table xdiet (idDiet varchar(2), descrip varchar(20) ) ;
create table diet_recipe (idRecipe int, idDiet int);

insert into xrecipe (idRecipe, title) values ('0001','Fejoles con Seco');
insert into xrecipe (idRecipe, title) values ('0002','Arroz con Pollo');
insert into xrecipe (idRecipe, title) values ('0003','Aji de Gallina');

insert into xdiet (idDiet, descrip) values ('01','Gluten Free');
insert into xdiet (idDiet, descrip) values ('02','Ketogenic');
insert into xdiet (idDiet, descrip) values ('03','Vegetarian');
insert into xdiet (idDiet, descrip) values ('04','Lacto-Vegetarian');
insert into xdiet (idDiet, descrip) values ('05','Ovo-Vegetarian');
insert into xdiet (idDiet, descrip) values ('06','Vegan');

select * from xrecipe r
select * from xdiet d



select * from xrecipes r, xdiet d 
where r.idDiet = d.idDiet 
