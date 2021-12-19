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
      <UXWSubsection anchor="button" title="Primary">
        <div className="flex max-w-prose"></div>
        <div className="max-w-7xl grid grid-cols-2 gap-8 my-10">
          <div>
            <a className="btn-primary" href="#">Primary</a>
          </div>
          <div>
            <UXWCodePanelHTMLCSS noWrap>
              <div>
                {`
<a href="#" className="btn-primary">
  Primary
</a>
`}
              </div>
              <div>
                {`
.btn-primary{
  color: rgba(255,255,255,var(--tw-text-opacity));
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: 300;
  padding: 1rem 3rem 1rem 3rem;
  --tw-gradient-to: var(--uxw-color-magicians-cloak-3);
  --tw-gradient-from: var(--uxw-color-acid-1);
  --tw-gradient-stops: var(--tw-gradient-from),
  var(--tw-gradient-to, rgba(79, 70, 229, 0));
  background-image: linear-gradient(to right,
  var(--tw-gradient-stops));
  border-radius: 0.375rem;
  transition-timing-function: cubic-bezier(0.4,0,0.2,1);
  transition-duration: .5s;
  --tw-text-opacity: 1;
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
            <a className="btn-disabled" href="#">Disabled</a>
          </div>
          <div>
            <UXWCodePanelHTMLCSS noWrap>
              <div>
                {`
 <a href="#" className="btn-disabled" >
  Disabled
 </a>
`}
              </div>
              <div>
                {`
.btn-disabled{
  background-color: var(--uxw-color-merlins-beard-3);
  color:#737887;
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: 300;
  padding: 1rem 3rem 1rem 3rem;
  border-radius: 0.375rem;
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
              <a href="#" className="btn-icon">
                <i className="bi bi-download text-lg pr-4"></i>
                Download
              </a>
          </div>
          <div>
            <UXWCodePanelHTMLCSS noWrap>
              <div>
                {`
 <a href="#" className="btn-icon">
  <i className="bi bi-download text-lg pr-4"></i>
  Download
</a>
`}
              </div>
              <div>
                {`
.btn-icon{
  border: 1px solid rgb(99, 49, 253);
  background-color:var(--uxw-color-merlins-beard-1);
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: 300;
  padding: 1rem 3rem 1rem 3rem;
  border-radius: 0.25rem;
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
