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
      <UXWSubsection anchor="#" title="Background Color">
        <div className="flex max-w-prose"></div>
        <div className="max-w-7xl grid grid-cols-2 gap-8 my-10 rounded-b-lg">
          <div style={{ background: "#D8CBFF", position:"relative"}}>
            <a className="" href="#"><span style={{ color: "#152145", margin:"0", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)" }}>As always, the mystics remain</span></a>
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
        <p className="py-10">To see more <a href="https://docs.google.com/spreadsheets/d/1BUleu0hiXhpPBktGeiHm-GSKYveO-F4JCU9KFHeGnJ4/edit?usp=sharing" target="_blank">CSS background classes</a></p>
        <hr ></hr>
      </UXWSubsection>
    </div>
  )
}
