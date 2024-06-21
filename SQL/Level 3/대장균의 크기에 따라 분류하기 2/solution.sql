WITH
    COLONY_DATA AS (
        SELECT
            ID,
            PERCENT_RANK() OVER (
                ORDER BY
                    SIZE_OF_COLONY DESC
            ) AS COLONY_PERCENT_RANK
        FROM
            ECOLI_DATA
    )
SELECT
    ID,
    CASE
        WHEN COLONY.COLONY_PERCENT_RANK <= 0.25 THEN 'CRITICAL'
        WHEN COLONY.COLONY_PERCENT_RANK <= 0.50 THEN 'HIGH'
        WHEN COLONY.COLONY_PERCENT_RANK <= 0.75 THEN 'MEDIUM'
        ELSE 'LOW'
    END AS COLONY_NAME
FROM
    COLONY_DATA AS COLONY
ORDER BY
    ID