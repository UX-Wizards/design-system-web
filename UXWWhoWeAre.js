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
                And occasionally nerdy. 🤓 We’re unpretentious, playful, and love a good joke or pun.
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
    </div>
  )
}
