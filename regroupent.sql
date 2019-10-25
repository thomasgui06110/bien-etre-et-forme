SELECT YEAR AS ANNEE, id, customer_id, amount AS Montant, 
(january + february + march + april) AS TOTAL,
amount - (january + february + march + april) AS Reste
 FROM invoice ORDER BY YEAR