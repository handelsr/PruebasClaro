SELECT
    T0.Nombre "Asignatura",
    (
        SELECT
            TN2."Nombre"
        FROM
            Estudiante TN2
        WHERE
            T1.EstudianteID = TN2."EstudianteID"
    ) "Nombre",
    (
        SELECT
            TN2."Apellido"
        FROM
            Estudiante TN2
        WHERE
            T1.EstudianteID = TN2."EstudianteID"
    ) "Apellido",
    T1.Calificacion
FROM
    Asignatura T0
    INNER JOIN AsignaturaEstudiante T1 ON T0.AsignaturaID = T1.AsignaturaID
WHERE
    T0.Estado = 1
    AND T1.Calificacion > (
        SELECT
            AVG(TN0.Calificacion)
        FROM
            AsignaturaEstudiante TN0
        WHERE
            TN0.AsignaturaID = T0.AsignaturaID
    )