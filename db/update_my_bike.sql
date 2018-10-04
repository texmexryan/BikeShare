UPDATE bikes
SET brand = ${brand}, type = ${type}, image = ${image}, price = ${price}, description = ${description}
WHERE id = ${id};

SELECT * FROM bikes
where owner_id = ${owner_id}
