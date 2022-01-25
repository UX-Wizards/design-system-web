function UXWCard(props) {
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p className="pb-4 max-w-prose">
            Each card contains information of a category.<br />
            Card contains a variety of content types like text, image and multimedia or button and links.
          </p>
        </div>
        <div className="flex-grow"></div>
      </div>
      <div className="flex max-w-prose"></div>
      <div className="max-w-7xl grid grid-cols-2 gap-8 my-10 rounded-b-lg">
        <div>
          <div className="card-top">
            <div className="card-title">
              Card Title
            </div>
          </div>
          <div className="card-bottom">
            <div style={{ height: "150px" }}></div>
          </div>
        </div>
        <div>
          <UXWCodePanelHTMLCSS>
            <div>
              {`
 <div>
  <div class="card-top">
    <div className="card-title">
      Card Title
    </div>
  </div>
  <div class="card-bottom">
    <div style="height=150px"></div>
  </div>
</div>
`}
            </div>
            <div>
              {`
.card-top{
  --tw-bg-opacity: 1;
  background-color: rgba(229,231,235,var(--tw-bg-opacity));
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  }
  
.card-title{
  font-size: 1rem;
  line-height: 1.5rem;
  padding-left: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  }
  
.card-bottom{
  --tw-bg-opacity: 1;
  background-color: rgba(243,244,246,var(--tw-bg-opacity));
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}`}
            </div>
          </UXWCodePanelHTMLCSS>
        </div>
      </div>
      <hr ></hr>
    </div>
  )
}
