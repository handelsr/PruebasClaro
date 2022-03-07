﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Escuela.Models
{
    public partial class AppDbContext : DbContext
    {
        public AppDbContext()
        {
        }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Asignatura> Asignaturas { get; set; } = null!;
        public virtual DbSet<AsignaturaEstudiante> AsignaturaEstudiantes { get; set; } = null!;
        public virtual DbSet<Estudiante> Estudiantes { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=AR-IT-02\\SQLEXPRESS;Initial Catalog=Escuela;User ID=sa;Password=Handelsr");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Asignatura>(entity =>
            {
                entity.ToTable("Asignatura");

                entity.Property(e => e.AsignaturaId).HasColumnName("AsignaturaID");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AsignaturaEstudiante>(entity =>
            {
                entity.ToTable("AsignaturaEstudiante");

                entity.Property(e => e.AsignaturaEstudianteId).HasColumnName("AsignaturaEstudianteID");

                entity.Property(e => e.AsignaturaId).HasColumnName("AsignaturaID");

                entity.Property(e => e.EstudianteId).HasColumnName("EstudianteID");

                entity.HasOne(d => d.Asignatura)
                    .WithMany(p => p.AsignaturaEstudiantes)
                    .HasForeignKey(d => d.AsignaturaId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AsignaturaEstudiante_Asignatura");

                entity.HasOne(d => d.Estudiante)
                    .WithMany(p => p.AsignaturaEstudiantes)
                    .HasForeignKey(d => d.EstudianteId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AsignaturaEstudiante_Estudiante");
            });

            modelBuilder.Entity<Estudiante>(entity =>
            {
                entity.ToTable("Estudiante");

                entity.Property(e => e.EstudianteId).HasColumnName("EstudianteID");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Direccion)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Latitud).HasColumnType("decimal(18, 10)");

                entity.Property(e => e.Longitud).HasColumnType("decimal(18, 10)");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
