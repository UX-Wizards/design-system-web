function UXWWhoWeAre(props) {
  return (
    <div className="container">
      <UXWSubsection anchor="about--about" title="About Us">
        <p className="pb-1">
          UX Wizards is a community of passionate, supportive learners and UX enthusiasts.
        </p>
        <p className="pb-1">
          Together we host a variety of events each month that include casual hangouts, game nights, and learning events. You can find us active on the UX Wizards MeetUp group, our dedicated Slack, and our hangout Discord.
        </p>
        <p className="pb-1">
          Membership is completely free! We welcome all that want to participate and join with the intention of making real connections, a willingness to support others, and an interest in learning together.
        </p>
      </UXWSubsection>
      <UXWSubsection anchor="about--mission" title="Our Mission">
        <blockquote>
          <p className="italic leading-relaxed px-4 text-lg">
            Our mission is a compass to guide our decisions made in the name of the community. It ensures that every event we hold, every project we start, and every piece of content we create is working toward the same goal in order to best serve our fellow Wizards.
          </p>
        </blockquote>
      </UXWSubsection>
      <UXWSubsection anchor="about--personality" title="Personality">
        <h3 className="text-lg">Fun &amp; Whimsical</h3>
        <p className="pb-2">
          And occasionally nerdy. 🤓 We’re unpretentious, playful, and love a good joke or pun.
        </p>
        <h3 className="text-lg">Passionate &amp; Excited</h3>
        <p className="pb-2">
          Eager to learn and share knowledge with others
        </p>
        <h3 className="text-lg">Motivated &amp; Scrappy</h3>
        <p className="pb-2">
          We’re willing to take risks and just get out there. Doesn’t need a title to be a leader. We encourage everyone to give it a whirl.
        </p>
        <h3 className="text-lg">Empathetic &amp; Approachable</h3>
        <p className="pb-2">
          Understanding, unpretentious, and accessible.
        </p>
        <h3 className="text-lg">Adventurous &amp; Imaginative </h3>
        <p className="pb-2">
            Interested in ideas that are a little out there even if it’s just a random thought
        </p>
      </UXWSubsection>
        <UXWSubsection anchor="about--values" title="Values">
          <ul className="list-disc list-inside">
            <li className="pb-1"><span className="font-semibold">Friendship</span> — Doing things with friends makes it all that much more fun.</li>
            <li className="pb-1"><span className="font-semibold">Curiosity</span> — A passion to learn. There is no such thing as a stupid question.</li>
            <li className="pb-1"><span className="font-semibold">Inclusion</span> — All are welcome. People, opinions, backgrounds. All.</li>
            <li className="pb-1"><span className="font-semibold">Growth</span> — We’re not looking for experts or perfection. We strive for new experiences, never perfection.</li>
            <li className="pb-1"><span className="font-semibold">Collaboration</span> — Share knowledge and work together. Learn from others and in return teach others, so we may rise together.</li>
            <li className="pb-1"><span className="font-semibold">Initiative</span> — We wouldn’t be here without the volunteers that step up and get things done.</li>
          </ul>
        </UXWSubsection>
    </div>
  )
}
