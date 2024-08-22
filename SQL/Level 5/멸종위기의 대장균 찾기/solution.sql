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
            ECOLI_DATA.ID AS ID,
            ECOLI_DATA.PARENT_ID AS PARENT_ID,
            GENERATION.GEN + 1 AS GEN
        FROM
            ECOLI_DATA
            JOIN GENERATION ON (ECOLI_DATA.PARENT_ID = GENERATION.ID)
    )
SELECT
    COUNT(*) AS COUNT,
    GEN AS GENERATION
FROM
    GENERATION AS A
WHERE
    ID NOT IN (
        SELECT
            PARENT_ID
        FROM
            GENERATION AS B
        WHERE
            B.GEN = A.GEN + 1
    )
GROUP BY
    GEN
ORDER BY
    GEN