function UXWIntroduction(props) {
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="flex flex-col pb-8">
          <p className="pb-4 max-w-prose">
            Welcome to the UX Wizards Design System! We created this so we could build out future websites faster based on our brand and style guide.
            It is not a Javascript component library, but rather a CSS framework with prebuilt UI elements.
            As you look through our design system, you'll find usable code snippets with relevant HTML and/or CSS.
          </p>
          <p className="max-w-prose">
            If you have any questions or feedback, feel free to create an issue on our <a href="https://github.com/UX-Wizards/design-system-web" target="_blank">Github project</a>.
            If you need help creating an issue, please refer to the <a href="https://docs.github.com/en/github/managing-your-work-on-github/creating-an-issue">Github documentation</a>
          </p>
          <div className="flex flex-row bg-gray-200 mt-4 rounded-lg">
            <div className="text-base py-4 pl-6">
              Download Our Latest Brand Guide
            </div>
            <div className="flex-grow "></div>
            <div className="py-2 pr-4">
              <a href="assets/UXW Brand Guide.pdf" download>
                <button className=" uxw-bg-merlins-beard-1 font-light uppercase text-xs py-1 px-4 rounded inline-flex items-center">
                  <i className="bi bi-download text-lg pr-4"></i>
                  <span>Download</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="flex-grow"></div> */}
      </div>
      <UXWSubsection anchor="introduction--installation-and-usage" title="Installation and Usage">
        <p className="pb-4 max-w-prose">
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
