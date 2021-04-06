const data = [ 
  {
    name: 'Keri',
    role: 'Co-Organizer of UX Wizards',
    image: '/assets/keri.jpg',
    description: 'Organizer of the UX Wizards!',
    link: 'https://www.linkedin.com/in/kerikeri/'
  },
  {
    name: 'Laura',
    role: 'Co-Organizer of UX Wizards',
    image: '/assets/laura.jpg',
    description: 'Laura built the Who We Are Page!',
    link: 'https://www.linkedin.com/in/lewilliams89/'
  },
  {
    name: 'Seiko',
    role: 'Product Designer',
    image: '/assets/seiko.jpg',
    description: 'Seiko built the Logos and Icons Page!',
    link: 'https://www.linkedin.com/in/seikoigi/'
  },
  {
    name: 'Kaisen',
    role: 'Software',
    image: '/assets/kaisen.jpg',
    description: 'Kaisen kept us on track.',
    link: 'https://www.linkedin.com/in/kaisen-lin-02bb0864/'
  },
  {
    name: 'Javi',
    role: 'Frontend Developer',
    image: '/assets/javi.jpg',
    description: 'Javi built the Design Assets page!',
    link: 'https://www.linkedin.com/in/javigme/'
  },
  {
    name: 'Max',
    role: 'Product Designer',
    image: '/assets/max.jpg',
    description: 'My job is to ask why.',
    link: 'http://maxblumcreating.com'
  },
  {
    name: 'Sidney',
    role: 'Product Designer',
    image: '/assets/sidney.jpg',
    description: 'Sidney built the Typography page!',
    link: 'https://www.linkedin.com/in/sidneyrhoads/'
  },
  {
    name: 'Dhruv',
    role: 'Software',
    image: '/assets/dhruv.jpg',
    description: 'Dhruv worked on this page!',
    link: 'https://www.linkedin.com/in/dhruv-madhok-9290a2a3/'
  },
]

const titleStyle = {
  color: "grey"
}

const columnStyle = {
  width: "33.3%",
  marginBottom: "16px",
  padding: "0 8px"
}

const cardStyle = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  fontSize: "16px",
  height: "480px",
  width: "340px",
  margin: "8px",
  paddingLeft: "20px",
  paddingRight: "20px",
  paddingTop: "20px",
  paddingBottom: "20px"
}

const paddingStyle = {
  paddingTop: "6px"
}

const linkStyle = {
  color: "white !important"
}

function UXWWhoWeAre(props) {
  return (
    <div className="container">
      <UXWSubsection anchor="about--about" title="About Us">
        <p className="pb-4 max-w-prose">
          UX Wizards is a community of passionate, supportive learners and UX enthusiasts.
        </p>
        <p className="pb-4 max-w-prose">
          Together we host a variety of events each month that include casual hangouts, game nights, and learning events. You can find us active on the UX Wizards MeetUp group, our dedicated Slack, and our hangout Discord.
        </p>
        <p className="pb-4 max-w-prose">
          Membership is completely free! We welcome all that want to participate and join with the intention of making real connections, a willingness to support others, and an interest in learning together.
        </p>
      </UXWSubsection>
      <UXWSubsection anchor="about--mission" title="Our Mission">
        <p className="pb-4 max-w-prose italic">
          Our mission is a compass to guide our decisions made in the name of the community. It ensures that every event we hold, every project we start, and every piece of content we create is working toward the same goal in order to best serve our fellow Wizards.
          </p>
        <div className="flex max-w-prose p-8 my-4 uxw-bg-steel-2 rounded-lg border-black rounded-md shadow-inner">
          <p className="max-w-prose">
            To provide a variety of opportunities for UX enthusiasts to connect so that they may find support and growth through sharing experiences.
            </p>
        </div>
      </UXWSubsection>
      <UXWSubsection anchor="about--personality" title="Personality">
        <div className="grid grid-cols-2 gap-8 pt-4 pb-8 max-w-prose ">
          <div className="flex flex-col">   {/* first box - Fun & Whimsical */}
            <div className="flex flex-row justify-center bg-gray-200 rounded-t-lg">
              <div className="p-4">
                <img className="w-40" src="assets/icon_unicorn.svg" alt="party unicorn" />
              </div>
            </div>
            <div className="flex flex-row py-4 px-6 justify-center bg-gray-100 text-lg font-bold">
              <p>Fun &amp; Whimsical</p>
            </div>
            <div className="flex flex-row px-6 pb-4 justify-left bg-gray-100 rounded-b-lg">
              <p>
                And occasionally nerdy 🤓. We’re unpretentious, playful, and love a good joke or pun.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch"> {/* second box - Passionate & Excited */}
            <div className="flex flex-row justify-center bg-gray-200 rounded-t-lg">
              <div className="p-4">
                <img className="w-40" src="assets/icon_magic.svg" alt="hand holding magic sparkle" />
              </div>
            </div>
            <div className="flex flex-row py-4 px-6 justify-center bg-gray-100 text-lg font-bold">
              <p>Passionate &amp; Excited</p>
            </div>
            <div className="flex flex-row px-6 pb-4 justify-left bg-gray-100 rounded-b-lg">
              <p>
                We’re eager to learn and share knowledge with others.
                  </p>
            </div>
          </div>
          <div className="flex flex-col"> {/* third box - Motivated & Scrappy */}
            <div className="flex flex-row justify-center bg-gray-200 rounded-t-lg">
              <div className="p-4">
                <img className="w-40" src="assets/icon_megaphone.svg" alt="checklist" />
              </div>
            </div>
            <div className="flex flex-row py-4 px-6 justify-center bg-gray-100 text-lg font-bold">
              <p>Motivated &amp; Scrappy</p>
            </div>
            <div className="flex flex-row px-6 pb-4 justify-left bg-gray-100 rounded-b-lg">
              <p>
                We’re willing to jump in and take risks. You don't need a title to be a leader. We encourage everyone to take a stab at it.
                  </p>
            </div>
          </div>
          <div className="flex flex-col"> {/* fourth box - Empathetic & Approachable */}
            <div className="flex flex-row justify-center bg-gray-200 rounded-t-lg">
              <div className="p-4">
                <img className="w-40" src="assets/icon_hands.svg" alt="hands holding" />
              </div>
            </div>
            <div className="flex flex-row py-4 px-6 justify-center bg-gray-100 text-lg font-bold">
              <p>Empathetic &amp; Approachable</p>
            </div>
            <div className="flex flex-row px-6 pb-4 justify-left bg-gray-100 rounded-b-lg">
              <p>
                We’re understanding and unpretentious. Everyone has a voice here.
                  </p>
            </div>
          </div>
          <div className="flex flex-col"> {/* fifth box - Adventurous & Imaginative */}
            <div className="flex flex-row justify-center bg-gray-200 rounded-t-lg">
              <div className="p-4">
                <img className="w-40" src="assets/icon_rocket.svg" alt="rocket blasting off" />
              </div>
            </div>
            <div className="flex flex-row py-4 px-6 justify-center bg-gray-100 text-lg font-bold">
              <p>Adventurous &amp; Imaginative</p>
            </div>
            <div className="flex flex-row px-6 pb-4 justify-left bg-gray-100 rounded-b-lg">
              <p>
                We’re interested in all ideas, even if it’s just a random thought or a little out of the box.
                  </p>
            </div>
          </div>
        </div>

      </UXWSubsection>
      <UXWSubsection anchor="about--values" title="Values">

        <div className="flex flex-col gap-4 pt-4 max-w-prose">
          <div className="flex flex-row">
            <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-center">
              <p className="text-lg">
                Friendship
                </p>
            </div>
            <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg">
              <p className="max-w-prose">
                Doing things with friends makes it all that much more fun.
                </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-center">
              <p className="text-lg">
                Curiosity
                </p>
            </div>
            <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg ">
              <p className="max-w-prose">
                A passion to learn. There is no such thing as a stupid question.
                </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-center">
              <p className="text-lg">
                Inclusion
                </p>
            </div>
            <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg ">
              <p className="max-w-prose">
                All are welcome. People, opinions, backgrounds. All.
                </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-center">
              <p className="text-lg">
                Growth
                </p>
            </div>
            <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg">
              <p className="max-w-prose">
                We’re not looking for experts or perfection. We strive for new experiences, never perfection.
                </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-none w-40 p-4 justify-center self-auto bg-gray-200 rounded-l-lg items-center">
              <p className="text-lg">
                Collaboration
              </p>
            </div>
            <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg ">
              <p className="max-w-prose">
                Share knowledge and work together. Learn from others and in return teach others, so we may rise together.
                </p>
            </div>
          </div>

          <div className="flex flex-row flex-shrink-0">
            <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-center ">
              <p className="text-lg">
                Initiative
                </p>
            </div>
            <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg ">
              <p className="max-w-prose">
                We exist thanks to volunteers that step up and get things done.
                </p>
            </div>

          </div>
        </div>

      </UXWSubsection>
      <UXWSubsection anchor="about--wizards" title="Contributors">
        <div className="flex flex-wrap">
          {data.map(({image, name, role, description, link}) => (
          <div className="card" style={cardStyle}>
            <img src={image} alt={name} style={{width: '300px', height: '300px'}} />
            <div className="container">
            <h2 style={paddingStyle}>{name}</h2>
            <p className="title" style={titleStyle}>{role}</p>
            <p>{description}</p>
            <br></br>
            <a href={link} className="text-white py-4 px-12 from-indigo-600 to-indigo-900 bg-gradient-to-r rounded-md uppercase tracking-widest font-light hover:shadow-2xl transition duration-500 ease-in-out hover:bg-opacity-40"><span style ={{color: "#ffffff"}}>Contact</span></a>
          </div>
        </div>
        ))}
      </div>
      </UXWSubsection>
    </div>
  )
}
