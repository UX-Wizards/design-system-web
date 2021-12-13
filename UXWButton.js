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
        <div className="flex max-w-prose"></div>
        <div className="max-w-7xl grid grid-cols-2 gap-8 my-10">
          <div>
          <a className="text-white py-4 px-12 from-indigo-600 to-indigo-900 bg-gradient-to-r rounded-md uppercase tracking-widest font-light hover:shadow-2xl transition duration-500 ease-in-out hover:bg-opacity-40" href="#"><span style={{color: "#ffffff"}}>Primary</span></a>
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
    <hr class="pb-10"></hr>
    </UXWSubsection>
    
    <UXWSubsection anchor="#" title="Disabled">
        <div className="flex max-w-prose"></div>
        <div className="max-w-7xl grid grid-cols-2 gap-8 my-10">
          <div>
          <a className="py-4 px-12  rounded-md uppercase uxw-bg-merlins-beard-3 tracking-widest font-light" href="#"><span style={{color: "#737887"}}>Disabled</span></a>
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
    <hr class="pb-10"></hr>
    </UXWSubsection>
    <UXWSubsection anchor="#" title="Button with icon">
        <div className="flex max-w-prose"></div>
        <div className="max-w-7xl grid grid-cols-2 gap-8 my-10">
          <div>
          <a href="#">
              <button className="uxw-bg-merlins-beard-1 font-light uppercase tracking-widest  py-4 px-12 rounded inline-flex items-center" style={{border:'1px solid #6331FD'}}>
              <i className="bi bi-download text-lg pr-4"></i>
              Download
              </button>
          </a>
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
    <hr class="pb-10"></hr>
    </UXWSubsection>
    </div>
  )
}
