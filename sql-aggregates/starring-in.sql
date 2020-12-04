select  "categories"."name"    as "categories",
         count("castMembers"."actorId")  as "Total Performances"
   from "categories"
   join "filmCategory" using ("categoryId")
   join "films"        using ("filmId")
   join "castMembers"  using ("filmId")
   join "actors"       using ("actorId")
   where "actors"."firstName" = 'Lisa'
     and "actors"."lastName"  = 'Monroe'
group by "categories"."name"
