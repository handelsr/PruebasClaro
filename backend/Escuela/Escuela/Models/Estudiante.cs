using System;
using System.Collections.Generic;

namespace Escuela.Models
{
    public partial class Estudiante
    {
        public Estudiante()
        {
            AsignaturaEstudiantes = new HashSet<AsignaturaEstudiante>();
        }

        public int EstudianteId { get; set; }
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string? Direccion { get; set; }
        public decimal? Latitud { get; set; }
        public decimal? Longitud { get; set; }
        public bool Estado { get; set; }

        public virtual ICollection<AsignaturaEstudiante> AsignaturaEstudiantes { get; set; }
    }
}
