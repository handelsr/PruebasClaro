﻿using System;
using System.Collections.Generic;

namespace Escuela.Models
{
    public partial class AsignaturaEstudiante
    {
        public int AsignaturaEstudianteId { get; set; }
        public int AsignaturaId { get; set; }
        public int EstudianteId { get; set; }
        public double Calificacion { get; set; }
        public bool Estado { get; set; }

        public virtual Asignatura Asignatura { get; set; } = null!;
        public virtual Estudiante Estudiante { get; set; } = null!;
    }
}
