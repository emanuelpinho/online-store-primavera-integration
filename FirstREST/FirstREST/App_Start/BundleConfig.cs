﻿using System.Web;
using System.Web.Optimization;

namespace FirstREST
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
       
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/angular.min.js",
                        "~/Scripts/angular-route.min.js",
                        "~/Scripts/angular-resource.min.js",
                        "~/Scripts/angular-cookies.min.js",
                        "~/Scripts/angular-animate.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        /*
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css",
                        */
                        "~/Content/themes/base/bootstrap.min.css",
                        "~/Content/themes/base/bootstrap-theme.min.css"));

            bundles.Add(new StyleBundle("~/Content/store-styles").Include(
                        //"~/Content/store-styles/animate.css",
                        "~/Content/store-styles/bootstrap.min.css",
                        "~/Content/store-styles/bootstrap-theme.min.css"
                        /*"~/Content/store-styles/bootstrap-theme.min.css",
                        "~/Content/store-styles/font-awesome.css",
                        "~/Content/store-styles/main.css",
                        "~/Content/store-styles/prettyPhoto.css",
                        "~/Content/store-styles/price-range.css",
                        "~/Content/store-styles/responsive.css"*/
                ));
        }
    }
}