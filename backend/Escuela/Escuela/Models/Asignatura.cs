using System;
using System.Collections.Generic;

namespace Escuela.Models
{
    public partial class Asignatura
    {
        public Asignatura()
        {
            AsignaturaEstudiantes = new HashSet<AsignaturaEstudiante>();
        }

        public int AsignaturaId { get; set; }
        public string Nombre { get; set; } = null!;
        public bool Estado { get; set; }

        public virtual ICollection<AsignaturaEstudiante> AsignaturaEstudiantes { get; set; }
    }
}
