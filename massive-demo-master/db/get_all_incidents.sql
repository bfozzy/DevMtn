select
incidents.id,
incidents.us_state,
injuries.name as injury_name,
affected_areas.name as affected_area,
causes.name as cause
from incidents
join injuries on incidents.injury_id = injuries.id
join affected_areas on affected_areas.id = injuries.affected_area_id
join causes on causes.id = incidents.cause_id
where causes.name = $1 --the $1 is the first argument in the db.get_all_incidents
--it would look like this
--db.get_all_incidents([firstArgument, secondArgument, etc], function(err, products){
--})





-- we want
-- incidents.id
-- incidents.us_state
-- injuries.name
-- affected_areas.name
-- causes.name
