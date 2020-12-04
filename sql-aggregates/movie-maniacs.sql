select "customers"."firstName",
       "customers"."lastName",
        sum("payments"."amount") as "Total Paid"
  from "customers"
  join "payments" using ("customerId")

  group by "customers"."firstName",
           "customers"."lastName"
  order by "Total Paid" desc;



-- select "amount",
--        "firstName",
--        "lastName"
--   from "payments"
--   join "customers" using ("customerId")
--   order by "amount" desc
--   limit 10;
