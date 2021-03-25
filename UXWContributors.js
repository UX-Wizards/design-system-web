const data = [ 
  {
    name: 'Keri',
    role: 'Product Designer',
    email: 'example@example.com',
    image: '/assets/keri.jpg'
  },
  {
    name: 'Laura',
    role: 'Co-Organizer of UX Wizards',
    email: 'example@example.com',
    image: '/assets/laura.jpg'
  },
  {
    name: 'Seiko',
    role: 'Product Designer',
    email: 'example@example.com',
    image: '/assets/seiko.jpg'
  },
  {
    name: 'Kaisen',
    role: 'Software',
    email: 'example@example.com',
    image: '/assets/kaisen.jpg'
  },
  {
    name: 'Javi',
    role: 'Frontend Developer',
    email: 'example@example.com',
    image: '/assets/javi.jpg'
  },
  {
    name: 'Max',
    role: 'Product Designer',
    email: 'example@example.com',
    image: '/assets/max.jpg'
  },
  {
    name: 'Sidney',
    role: 'Product Designer',
    email: 'example@example.com',
    image: '/assets/sidney.jpg'
  },
  {
    name: 'Dhruv',
    role: 'Software',
    email: 'example@example.com',
    image: '/assets/dhruv.jpg'
  },
]

const buttonStyle = {
  outline: "0",
  display: "inline-block",
  padding: "8px",
  "font-size":"16px",
  color: "white",
  "background-color": "#6331FD",
  "text-align": "center",
  cursor: "pointer",
  width: "100%"
}

const titleStyle = {
  color: "grey"
}

const columnStyle = {
  float: "left",
  width: "33.3%",
  "margin-bottom": "16px",
  padding: "0 8px"
}

const cardStyle = {
  "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  "font-size": "16px"
}

function UXWContributors(props) {
  return (
    <div className="container">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <h1>Meet The UX Wizards!</h1>
      <List>
      {data.map(({name, role, email, image}) => (
      <div className="row">
        <div className="column" style={columnStyle}>
          <div className="card" style={cardStyle}>
            <img src={image} alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>{name}</h2>
              <p className="title" style={titleStyle}>{role}</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>{email}</p>
              <p><button className="button" style={buttonStyle}>Contact</button></p>
            </div>
          </div>
        </div>
        </div>))}
      </List>
    </div>
  );
}
