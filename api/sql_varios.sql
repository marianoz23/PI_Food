select * from "Diets";

insert into "Diets" (name) values ('Gluten Free');
insert into "Diets" (name) values ('Ketogenic');
insert into "Diets" (name) values ('Vegetarian');
insert into "Diets" (name) values ('Lacto-Vegetarian');
insert into "Diets" (name) values ('Ovo-Vegetarian');
insert into "Diets" (name) values ('Vegan');


insert into "Recipes" (image, title, summary, "healthScore", instructions, diets)
	   values ('https://t1.rg.ltmcdn.com/es/posts/0/4/3/seco_de_res_a_la_nortena_75340_600.jpg',
		   	   'Fejoles con Seco', 'The recipe Homemade Garlic and Basil French Fries is ready in roughly 45 recipes.',
			   85,'prueba 77', '{ "vegetarian","dairy free"}'
);
insert into "Recipes" (image, title, summary, "healthScore", instructions, diets )
	   values ('https://www.comedera.com/wp-content/uploads/2013/05/lomo-saltado-peruano-plato.jpg',
			   'Lomo Saltado', 
			   'The recipe Homemade Garlic and Basil French Fries is ready in roughly 45 recipes.',
			   76,'prueba 77','{"vegan", "dairy free"}'
);
insert into "Recipes" (image, title, summary, "healthScore", instructions, diets)
	   values ('https://recetascocinaperuana.com/wp-content/uploads/2022/09/recetas-de-comidas-peruanas.jpg',
		   	   'Arroz con Pollo', 'The recipe Homemade Garlic and Basil French Fries is ready in roughly 45 recipes.',
			   98,'prueba 77', '{ "dairy free", "vegan"}'
);

Select * from "Recipes";
Select * from "Recipes" order by healthScore desc ;	
select * from "Recipes" where diets="Gluten free";	

select * from "Diets"
Select tipo, count(*) from "Recipes" group by tipo;

update "Recipes" set image='https://recetascocinaperuana.com/wp-content/uploads/2022/09/recetas-de-comidas-peruanas.jpg' where id=7;	   
			   
delete from "Recipes" where id=6

Select * from "Recipes" where name like '%Garlic%';	
Select * from "Diets" where id = 10;	


Select * from "Recipes";	
Select * from "Diets" ;	
select * from "RecipeDiet"