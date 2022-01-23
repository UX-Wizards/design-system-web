function UXWColorClass(props) {
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p className="pb-4 max-w-prose">
            Brand colors are part of uxwcore.css. Use the color’s class name to update a HTML elements color.
          </p>
        </div>
        <div className="flex-grow"></div>
      </div>
      <UXWSubsection anchor="color-class" title="Background Color">
        <div className="flex max-w-prose"></div>
        <div className="max-w-7xl grid grid-cols-2 gap-8 my-10 rounded-b-lg">
          <div className="uxw-bg-acid-2" style={{position:"relative"}}>
           <p style={{ color: "#152145", margin:"0", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)" }}>Hello Wizards!</p>
          </div>
          <div>
            <UXWCodePanelHTMLCSS>
              <div>
                {`
<div class="uxw-bg-acid-2">
  <p>Hello Wizards!</p>
</div>
`}
              </div>
              <div>
                {`
.uxw-bg-acid-2 {
  background-color: var(--uxw-color-merlins-beard-3);
}`}
              </div>
            </UXWCodePanelHTMLCSS>
          </div>
        </div>
        <p className="py-10">
        CSS Color variables is set in 
          <a href="https://github.com/UX-Wizards/design-system-web/blob/main/uxwcore.css" target="_blank">
           uxwcore.css
          </a>
          <br/>
          To see more <a href="https://docs.google.com/spreadsheets/d/1BUleu0hiXhpPBktGeiHm-GSKYveO-F4JCU9KFHeGnJ4/edit?usp=sharing" target="_blank">CSS background classes</a></p>
        <hr ></hr>
      </UXWSubsection>
    </div>
  )
}
