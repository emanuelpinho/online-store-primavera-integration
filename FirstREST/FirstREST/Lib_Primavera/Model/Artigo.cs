using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FirstREST.Lib_Primavera.Model
{
    public class Artigo
    {
        public int ID
        {
            get;
            set;
        }

        public string CodArtigo
        {
            get;
            set;
        }

        public string DescArtigo
        {
            get;
            set;
        }

        public double pvp1
        {
            get;
            set;
        }

        public string Observacoes
        {
            get;
            set;
        }

        public List<Model.ArtigoArmazem> ArmazensStk
        {
            get;
            set;
        }
    }
}