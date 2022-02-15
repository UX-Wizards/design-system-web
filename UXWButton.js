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
      <div className="flex max-w-prose"></div>
      <div className="max-w-7xl grid grid-cols-2 gap-8 my-10">
        <div>
          <a className="btn-primary" href="#">Primary</a>
        </div>
        <div>
          <UXWCodePanelHTMLCSS>
            <div>
              {`
<a href="#" class="btn-primary">
  Primary
</a>
`}
            </div>
            <div>
              {`
a.btn-primary{
  color:var(--merlinsbeard-1);
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: 300;
  padding: 1rem 3rem 1rem 3rem;
  background-image: linear-gradient(to right, #6331FD, #3F18B4);
  border-radius: 0.375rem;
  transition-timing-function: cubic-bezier(0.4,0,0.2,1);
  transition-duration: .5s;
}`}
            </div>
          </UXWCodePanelHTMLCSS>
        </div>
      </div>
      <hr class="pb-10"></hr>
      <div className="flex max-w-prose"></div>
      <div className="max-w-7xl grid grid-cols-2 gap-8 my-10">
        <div>
          <a className="btn-disabled" href="#">Disabled</a>
        </div>
        <div>
          <UXWCodePanelHTMLCSS>
            <div>
              {`
 <a href="#" class="btn-disabled" >
  Disabled
 </a>
`}
            </div>
            <div>
              {`
a.btn-disabled{
  background-color: var(--merlinsbeard-3);
  color: var(--merlinsbeard-4);
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
      <div className="flex max-w-prose"></div>
      <div className="max-w-7xl grid grid-cols-2 gap-8 my-10">
        <div>
          <a href="#" className="btn-icon">
            <i className="bi bi-download text-lg pr-4"></i>
            Download
          </a>
        </div>
        <div>
          <UXWCodePanelHTMLCSS>
            <div>
              {`
 <a href="#" class="btn-icon">
  <i class="bi bi-download text-lg pr-4"></i>
  Download
</a>
`}
            </div>
            <div>
              {`
a.btn-icon{
  border: 1px solid rgb(99, 49, 253);
  background-color:var(--merlinsbeard-1);
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
    </div>
  )
}
