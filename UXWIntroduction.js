function UXWIntroduction(props) {
  return (
    <div className="container">
      <div className="flex flex-row">
        <p className="md:w-4/5 pr-8">
          Welcome to the UX Wizards Design System! We created this so we could build out future websites faster based on our brand and style guide.
          It is not a Javascript component library, but rather a CSS framework with prebuilt UI elements.
          As you look through our design system, you'll find usable code snippets (as shown in the panel on the right) with relevant HTML and/or CSS.
          If you run into any issues, feel free to file them in our <a href="https://github.com/UX-Wizards/design-system-web" target="_blank">Github project</a>.
        </p>
        <div className="flex-grow"></div>
        <UXWCodePanelHTMLCSS>
          <div>
{`
<h1 class="uxw-h1">
  Hello World
</h1>
`}
          </div>
          <div>
{`
.uxw-code {
  padding: 4;
  color: #ff0000;
}`}
          </div>
        </UXWCodePanelHTMLCSS>
      </div>
      <UXWSubsection anchor="introduction--installation-and-usage" title="Installation and Usage">
        <p className="pb-4">
          We include two CSS stylesheets depending on how opinionated you want the CSS to be. Use <span className="uxw-code">uxwcore.css</span> for utility style usage.
          If you want UI elements to be automatically styled for you, we've included <span className="uxw-code">uxw.css</span> for you as well.
          You must always include <span className="uxw-code">uxwcore.css</span> because <span className="uxw-code">uxw.css</span> is dependent on it. See below
          for a full example.
        </p>
        <UXWCodePanelSingle lang="html">
{`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://designsystem.uxwizards.org/uxwcore.css" rel="stylesheet">
    <link href="https://designsystem.uxwizards.org/uxw.css" rel="stylesheet">
  </head>
  <body class="uxw-bg-merlins-beard-2">
    <div style="display: flex; justify-content: center;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h1>Hello from UX Wizards!</h1>
        <img width="200" height="200" src="https://designsystem.uxwizards.org/logo.png">
        <p>Welcome to the sample page for the <a href="https://designsystem.uxwizards.org/">UX Wizards Design System</a></p>
      </div>
    </div>
  </body>
</html>
`}
        </UXWCodePanelSingle>
      </UXWSubsection>
    </div>
  )
}
