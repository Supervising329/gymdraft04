GREEN HORIZON LANDSCAPING - GIT AND VERCEL ANALYTICS SETUP

WHAT THIS DOES
Git/GitHub tracks your website files and updates.
Vercel Web Analytics tracks visitors, pages, and traffic inside your Vercel dashboard.
Vercel Speed Insights tracks site performance and Core Web Vitals.
Formspree receives estimate form submissions from contact.html.

FORM SETUP
The contact form already points to:
https://formspree.io/f/xjgnoold

When someone submits the form, Formspree sends the message to the email address connected to that Formspree account/form.

HOW TO TURN ON VERCEL WEB ANALYTICS
1. Go to https://vercel.com/dashboard
2. Open your website project.
3. Click Analytics in the sidebar.
4. Click Enable.
5. Vercel will show an HTML/script setup for your site.
6. Look for the script path. It will look something like:
   /_vercel/insights/script.js
   or another unique path Vercel gives you.
7. Open script.js.
8. Find this line near the top:
   const VERCEL_ANALYTICS_SCRIPT_PATH = "";
9. Paste the Vercel script path between the quotes:
   const VERCEL_ANALYTICS_SCRIPT_PATH = "/_vercel/insights/script.js";
10. Save the file.
11. Re-upload or redeploy the website to Vercel.
12. Visit the live site, then check Analytics in Vercel after data starts coming in.

HOW TO TURN ON VERCEL SPEED INSIGHTS
1. Go to https://vercel.com/dashboard
2. Open your website project.
3. Click Speed Insights in the sidebar.
4. Click Enable.
5. Vercel will show a script path for your site.
6. The path may look like this:
   /_vercel/speed-insights/script.js
   or it may be a unique path Vercel gives you.
7. Open script.js.
8. Find this line near the top:
   const VERCEL_SPEED_INSIGHTS_SCRIPT_PATH = "";
9. Paste the Vercel Speed Insights path between the quotes:
   const VERCEL_SPEED_INSIGHTS_SCRIPT_PATH = "/_vercel/speed-insights/script.js";
10. Save the file.
11. Re-upload or redeploy the website to Vercel.
12. Visit the live website, then check Speed Insights after Vercel has collected data.

HOW TO USE GITHUB FOR UPDATES
1. Create a GitHub account at https://github.com/
2. Create a new repository.
3. Upload these website files:
   index.html
   about.html
   services.html
   gallery.html
   contact.html
   style.css
   script.js
   assets
4. Connect that GitHub repository to Vercel.
5. After that, every time you update the GitHub files, Vercel can publish the updated website.

EASY VERSION
If GitHub feels confusing, you can skip it for now.
Just edit the files, zip them, and upload the new zip to your hosting account.
