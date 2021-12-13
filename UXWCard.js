function UXWCard(props) {
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
      <UXWSubsection anchor="#" title="Card">
        <div className="flex max-w-prose"></div>
        <div className="max-w-7xl grid grid-cols-2 gap-8 my-10 rounded-b-lg">
          <div className="flex flex-col">
                <div className="flex flex-row bg-gray-200 rounded-t-lg">
                  <div className="text-base py-4 pl-6">
                  Card Title
                  </div>
                  <div className="flex-grow "></div>
                  <div className="py-2 pr-4">
                  </div>
                </div>
                <div className="flex flex-row justify-center bg-gray-100 rounded-b-lg">
                  <div style={{height:"130px"}}></div>
                </div>
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
        <hr ></hr>
      </UXWSubsection>
    </div>
  )
}
