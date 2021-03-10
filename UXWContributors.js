function UXWContributors(props) {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style dangerouslySetInnerHTML={{__html: "\nhtml {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\n.column {\n  float: left;\n  width: 33.3%;\n  margin-bottom: 16px;\n  padding: 0 8px;\n}\n\n@media screen and (max-width: 650px) {\n  .column {\n    width: 100%;\n    display: block;\n  }\n}\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); font-size:12px\n}\n\n.container {\n  padding: 0 16px;\n}\n\n.container::after, .row::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.title {\n  color: grey;\n}\n\n.button {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n\n  color: white;\n  background-color: #6331FD;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n}\n\n.button:hover {\n  background-color: #555;\n}\n" }} />
      <h1>Meet The Ux Wizards!</h1>
      <br />
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="/assets/keri.jpg" alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>Keri</h2>
              <p className="title">Product Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="/assets/laura.jpg" alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>Laura</h2>
              <p className="title">Co Organizer of UX Wizards</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="/assets/seiko.jpg" alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>Seiko</h2>
              <p className="title">Product Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="/assets/kaisen.jpg" alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>Kaisen</h2>
              <p className="title">Software</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="/assets/javi.jpg" alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>Javi</h2>
              <p className="title">Frontend Software Engineer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="/assets/max.jpg" alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>Max</h2>
              <p className="title">Product Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src="/assets/sidney.jpg" alt="Jane" style={{width: '100%'}} />
          <div className="container">
            <h2>Sidney</h2>
            <p className="title">Product Designer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src="/assets/dhruv.jpg" alt="Jane" style={{width: '100%'}} />
          <div className="container">
            <h2>Dhruv</h2>
            <p className="title">Software</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  );
}
