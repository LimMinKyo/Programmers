WITH RECURSIVE
    GENERATION AS (
        SELECT
            ID,
            PARENT_ID,
            1 AS GEN
        FROM
            ECOLI_DATA
        WHERE
            PARENT_ID IS NULL
        UNION ALL
        SELECT
            ECOLI_DATA.ID,
            ECOLI_DATA.PARENT_ID,
            GENERATION.GEN + 1 AS GEN
        FROM
            ECOLI_DATA
            JOIN GENERATION ON ECOLI_DATA.PARENT_ID = GENERATION.ID
    )
SELECT
    ID
FROM
    GENERATION
WHERE
    GEN = 3
ORDER BY
    ID