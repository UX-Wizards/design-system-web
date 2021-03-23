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
{`<h1 class="uxw-h1">
    Hello World
</h1>
`}
          </div>
          <div>
{`.uxw-code {
    padding: 4;
    color: #ff0000;
}`}
          </div>
        </UXWCodePanelHTMLCSS>
      </div>
      <UXWSubsection anchor="introduction--installation-and-usage" title="Installation and Usage">
        <p className="pb-4">
          We include two CSS stylesheets depending on how opinionated you want the CSS to be. Use <span className="uxw-code">uxwcode.css</span> for utility style usage.
          If you want UI elements to be automatically styled for you, we've included <span className="uxw-code">uxw.css</span> for you as well.
          You must always include <span className="uxw-code">uxwcore.css</span> because <span className="uxw-code">uxw.css</span> is dependent on it. To include both
          in your site, see example below.
        </p>
        <UXWCodePanelSingle lang="html">
{`<link href="uxwcore.css" rel="stylesheet">
<link href="uxw.css" rel="stylesheet">`}
        </UXWCodePanelSingle>
      </UXWSubsection>
    </div>
  )
}
