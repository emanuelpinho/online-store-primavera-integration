using System.Web.Mvc;

namespace FirstREST.Areas.Views
{
    public class ViewsAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Views";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "Views_default",
                "Views/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
