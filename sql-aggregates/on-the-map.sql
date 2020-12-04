select "co"."name"  as "country",
       count("c".*) as "Total Cities"
  from "countries"  as "co"
  join "cities"     as "c" using ("countryId")
  group by "countryId";
