function UXWButton(props) {
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p className="pb-4 max-w-prose">
          Buttons indicates an action therefore text or icon + text on the button expresses what action will occur when you press it.
          </p>
        </div>
        <div className="flex-grow"></div>
      </div>
      <UXWSubsection anchor="#" title="Primary">
        <div className="flex max-w-prose"><p className="max-w-prose">Use CSS class names on your HTML elements to apply the style. You don’t need to write CSS once you included <span className="uxw-code">uxwcore.css </span> and <span className="uxw-code">uxw.css</span> on your file.</p></div>
        <div className="max-w-7xl grid grid-cols-2 gap-8 my-10">
          <div>
          1
          </div>
          <div>
          <UXWCodePanelHTMLCSS noWrap>
          <div>
{`
<h1 class="uxw-text-heading">
Hello Wizards!
</h1>
`}
          </div>
          <div>
{`
.uxw-text-heading {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.75rem;
}`}
          </div>
        </UXWCodePanelHTMLCSS>
          </div>
        </div>
      </UXWSubsection>
    </div>
  )
}
