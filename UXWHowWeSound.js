function UXWHowWeSound(props) {
  return (
    <div className="container">
        <UXWSubsection anchor="voice--ref" title="Reference">
          <p className="pb-4 max-w-prose">
            When referring to the group, we use “UX Wizards” for external, public-facing copy.
          </p>
          <p className="pb-4 max-w-prose">
            This may be abbreviated “UXW” in more informal or internal documentation, but should be introduced in parentheses after the full terminology for its first use — e.g. “UX Wizards (UXW) is the bee’s knees!”
          </p>
          <p className=" max-w-prose">
            We may informally refer to ourselves or other members as Wizards.
          </p>
        </UXWSubsection>


        <UXWSubsection anchor="voice--voice" title="Voice">
          <p className="pb-4 max-w-prose">
            Our voice is what remains consistent across all the content we create. It should reflect our values and personality and define us easily.
          </p>
          <div className="flex flex-col gap-4 pt-4 max-w-prose">
            <div className="flex flex-row"> {/* first box - Friendly */}
              <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-top">
                <p className="max-w-prose">
                  <img className="w-20 pb-4" src="assets/icon_hands.svg" alt="handshake" />
                  We are <span className="text-lg font-bold">friendly</span> but not inappropriately so.
                </p>
              </div>
              <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg">
              <p className="pl-4 py-2 max-w-prose">
                <ul className="list-disc">
                  <li>Consider others as friends, Wizards, or other familiar names.</li>
                  <li>Use conversational and casual language, as if you’ve known them for a while.</li>
                  <li>Keep references or innuendos wholesome, relevant, and relatable.</li>
                </ul>
              </p>
              </div>
            </div>

            <div className="flex flex-row"> {/* second box - Fun */}
              <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-top">
                <p className="max-w-prose">
                  <img className="w-20 pb-4" src="assets/icon_confetti.png" alt="confetti" />
                  We are <span className="text-lg font-bold">fun</span> but not juvenile.
                </p>
              </div>
              <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg">
              <p className="pl-4 py-2 max-w-prose">
                <ul className="list-disc">
                  <li>Feature colorful (as in “full of life”) content, whether illustrations, stories, or anecdotes.</li>
                  <li>Take advantage of any reason to celebrate events, people, or things.</li>
                  <li>Be expressive; use exclamation points, all caps, or emojis when appropriate.</li>
                  <li>Make jokes, nerdy references, and get a little punny sometimes.</li>
                  <li>Let humor and wit come naturally.</li>
                  <li>Use explicit language sparingly and purposefully.</li>
                </ul>
              </p>
              </div>
            </div>

            <div className="flex flex-row"> {/* third box - Inviting */}
              <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-top">
                <p className="max-w-prose">
                  <img className="w-20 pb-4" src="assets/icon_greeting.png" alt="invitation" />
                  We are <span className="text-lg font-bold">inviting</span> but not pushy.
                </p>
              </div>
              <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg">
              <p className="pl-4 py-2 max-w-prose">
                <ul className="list-disc">
                  <li>Share activities and events, and extend the invite to all.</li>
                  <li>Be approachable, warm, and genuine.</li>
                  <li>Be inclusive and refer to the audience mindfully — avoid gender-specific references (e.g. Try using "Hey everyone!" instead of "Hey guys!").</li>
                  <li>Keep interactions guilt-free and allow the viewer space to remain autonomous.</li>
                </ul>
              </p>
              </div>
            </div>

            <div className="flex flex-row"> {/* fourth box - Informative */}
              <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-top">
                <p className="max-w-prose">
                  <img className="w-20 pb-4" src="assets/icon_chat.png" alt="chat bubbles" />
                  We are <span className="text-lg font-bold">informative</span> but not pretentious.
                </p>
              </div>
              <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg">
                <p className="pl-4 py-2 max-w-prose">
                  <ul className="list-disc">
                    <li>Ask questions and learn; do not assume.</li>
                    <li>Offer solutions as personal truths, not universal truths.</li>
                    <li>Take the stance of a learner, not an expert.</li>
                    <li>Ask permission when appropriate.</li>
                    <li>Evaluate your motives before you speak.</li>
                    <li>Be helpful in ways that other people value.</li>
                    <li>Give advice only when it’s solicited.</li>
                    <li>Avoid sounding patronizing or boastful.</li>
                  </ul>
                </p>
              </div>
            </div>

          </div>
        </UXWSubsection>
        <UXWSubsection anchor="voice--tone" title="Tone">
          <p className="pb-4 max-w-prose">
            Our tone changes depending on our message. This should guide you in conveying different attitudes:
          </p>

          <div className="flex flex-col gap-4 max-w-prose">
          <div className="flex flex-row"> {/* first box - General */}
            <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-center">
              <p className="text-lg">
                General
              </p>
            </div>
            <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg">
              <p className="max-w-prose">
                Our tone is casual and energetic to express our excitement to our friends. We believe that emotions are infectious, and we want our peers to be as hyped about our content as we are!
              </p>
            </div>
          </div>

          <div className="flex flex-row"> {/* second box - Announcements */}
            <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-center">
              <p className="text-lg">
                Announcements
              </p>
            </div>
            <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg">
              <p className="max-w-prose">
                Announcements should convey happiness and cheer because we have passion for what we do and are eager for what we have yet to do.
              </p>
            </div>
          </div>

          <div className="flex flex-row"> {/* third box - Conversations */}
            <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-center">
              <p className="text-lg">
                Conversations
              </p>
            </div>
            <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg">
              <p className="max-w-prose">
                Conversations should be encouraging. We support others and empower them.
              </p>
            </div>
          </div>


          <div className="flex flex-row"> {/* fourth box - Professional */}
            <div className="flex flex-none w-40 p-4 justify-center bg-gray-200 rounded-l-lg items-center">
              <p className="text-lg">
              Professional
              </p>
            </div>
            <div className="flex w-4/5 px-6 py-4 bg-gray-100 rounded-r-lg">
              <p className="max-w-prose">
              A lot of what we do together is related to our careers. For any content related to our industry, exercise restraint and use a more professional tone.  Strive to be direct and respectful, yet still positive.
              </p>
            </div>
          </div>

        </div>
          
        </UXWSubsection>
        <UXWSubsection anchor="voice--styling" title="Styling Tips">

          <p className="mb-4 max-w-prose">
            Use the active voice and positive language.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-10 max-w-prose "> {/* Active Voice ex. */}
            <div className="flex flex-col"> {/* col left */}
              <div className="flex flex-row h-2 bg-red-500 rounded-t-lg"> {/* red colored top */}
                &nbsp;
              </div> 
              <div className="flex flex-row p-4 justify-left bg-gray-200 rounded-b-lg">
                <img className="w-10 h-10 mr-4" src="assets/icon_sad.png" alt="frown" />
                <p><span className="font-bold">OKAY</span><br/>
                Merlin's beard really impressed the other wizards.</p>
              </div> 
            </div>  
            <div className="flex flex-col"> {/* col right */}
              <div className="flex flex-row h-2 bg-green-500 rounded-t-lg"> {/* green colored top */}
                  &nbsp;
                </div> 
                <div className="flex flex-row p-4 justify-left bg-gray-200 rounded-b-lg">
                  <img className="w-10 h-10 mr-4" src="assets/icon_smile.png" alt="happy" />
                  <p><span className="font-bold">BETTER</span><br/>
                  The other wizards were really impressed with Merlin’s beard.</p>
                </div>  
            </div>  
          </div> {/* end Active Voice ex. */}

          <p className="mb-4 max-w-prose">
            Don't overthink it or you'll overdo it. Keep it short and simple.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-10 max-w-prose "> {/* KISS ex. */}
            <div className="flex flex-col"> {/* col left */}
              <div className="flex flex-row h-2 bg-red-500 rounded-t-lg"> {/* red colored top */}
                &nbsp;
              </div> 
              <div className="flex flex-row p-4 justify-left bg-gray-200 rounded-b-lg">
                <img className="w-10 h-10 mr-4" src="assets/icon_sad.png" alt="frown" />
                <p><span className="font-bold">OKAY</span><br/>
                On the night of the 13th we will be holding an event at the wizarding hour.</p>
              </div> 
            </div>  
            <div className="flex flex-col"> {/* col right */}
              <div className="flex flex-row h-2 bg-green-500 rounded-t-lg"> {/* green colored top */}
                  &nbsp;
                </div> 
                <div className="flex flex-row p-4 justify-left bg-gray-200 rounded-b-lg">
                  <img className="w-10 h-10 mr-4" src="assets/icon_smile.png" alt="happy" />
                  <p><span className="font-bold">BETTER</span><br/>
                  The event is on<br /> Friday 13th, 3:00am. </p>
                </div>  
            </div>  
          </div> {/* end KISS ex. */}



          <p className="mb-4 max-w-prose">
            Be smart about using jargon and buzzwords.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-10 max-w-prose "> {/* Jargon ex. */}
            <div className="flex flex-col"> {/* col left */}
              <div className="flex flex-row h-2 bg-red-500 rounded-t-lg"> {/* red colored top */}
                &nbsp;
              </div> 
              <div className="flex flex-row p-4 justify-left bg-gray-200 rounded-b-lg">
                <img className="w-10 h-10 mr-4" src="assets/icon_sad.png" alt="frown" />
                <p><span className="font-bold">OKAY</span><br/>
                  Take a look at my <span className="font-bold">lo-fi</span> prototype.
                </p>
              </div> 
            </div>  
            <div className="flex flex-col"> {/* col right */}
              <div className="flex flex-row h-2 bg-green-500 rounded-t-lg"> {/* green colored top */}
                  &nbsp;
                </div> 
                <div className="flex flex-row p-4 justify-left bg-gray-200 rounded-b-lg">
                  <img className="w-10 h-10 mr-4" src="assets/icon_smile.png" alt="happy" />
                  <p><span className="font-bold">BETTER</span><br/>
                    Take a look at my low-fidelity prototype.
                  </p>
                </div>  
            </div>  
          </div> {/* end Jargon ex. */}

          <p className="mb-4 max-w-prose">
            Bigger words aren’t necessarily better words.
          </p>
           
          <div className="grid grid-cols-2 gap-8 mb-10 max-w-prose "> {/* Bigger Words ex. */}
            <div className="flex flex-col"> {/* col left */}
              <div className="flex flex-row h-2 bg-red-500 rounded-t-lg"> {/* red colored top */}
                &nbsp;
              </div> 
              <div className="flex flex-row p-4 justify-left bg-gray-200 rounded-b-lg">
                <img className="w-10 h-10 mr-4" src="assets/icon_sad.png" alt="frown" />
                <p><span className="font-bold">OKAY</span><br/>
                <span className="italic">Wingardium Leviosa?</span></p>
              </div> 
            </div>  
            <div className="flex flex-col"> {/* col right */}
              <div className="flex flex-row h-2 bg-green-500 rounded-t-lg"> {/* green colored top */}
                  &nbsp;
                </div> 
                <div className="flex flex-row p-4 justify-left bg-gray-200 rounded-b-lg">
                  <img className="w-10 h-10 mr-4" src="assets/icon_smile.png" alt="happy" />
                  <p><span className="font-bold">BETTER</span><br/>
                  <span className="italic">Levitate.</span></p>
                </div>  
            </div>  
          </div> {/* end Bigger Words ex. */}
            
          <p className="mb-4 max-w-prose">
            We use exclamation marks! But we aim for no more than two in a message. Tempted to use more? Try adding emojis in its stead.
          </p>
           
          <div className="grid grid-cols-2 gap-8 mb-10 max-w-prose "> {/* Exclaim ex. */}
            <div className="flex flex-col"> {/* col left */}
              <div className="flex flex-row h-2 bg-red-500 rounded-t-lg"> {/* red colored top */}
                &nbsp;
              </div> 
              <div className="flex flex-row p-4 justify-left bg-gray-200 rounded-b-lg">
                <img className="w-10 h-10 mr-4" src="assets/icon_sad.png" alt="frown" />
                <p><span className="font-bold">OKAY</span><br/>
                Hey Wizards!! I hope you are having the bestest of days! Don’t forget to sign up for the latest event! It’s going to be SUPER fun! See you there!!</p>
              </div> 
            </div>  
            <div className="flex flex-col"> {/* col right */}
              <div className="flex flex-row h-2 bg-green-500 rounded-t-lg"> {/* green colored top */}
                  &nbsp;
                </div> 
                <div className="flex flex-row p-4 justify-left bg-gray-200 rounded-b-lg">
                  <img className="w-10 h-10 mr-4" src="assets/icon_smile.png" alt="happy" />
                  <p><span className="font-bold">BETTER</span><br/>
                  Hey Wizards! I hope you’re having a great day. A friendly reminder here to sign up for the latest event. It’s going to be super fun! See you there~</p>
                </div>  
            </div>  
          </div> {/* end Exclaim ex. */}



          <p className="mb-4 max-w-prose">
            ALL CAPS are sometimes useful. But using more than one short sentence or phrase is probably OVERKILL.
          </p>
           
          <div className="grid grid-cols-2 gap-8 mb-10 max-w-prose items-stretch"> {/* All Caps ex. */}
            <div className="flex flex-col"> {/* col left */}
              <div className="flex flex-row h-2 bg-red-500 rounded-t-lg"> {/* red colored top */}
                &nbsp;
              </div> 
              <div className="flex flex-row p-4 justify-left bg-gray-200 rounded-b-lg">
                <img className="w-10 h-10 mr-4" src="assets/icon_sad.png" alt="frown" />
                <p><span className="font-bold">OKAY</span><br/>
                DID YOU CAST MAGIC MISSLE?</p>
              </div> 
            </div>  
            <div className="flex flex-col"> {/* col right */}
              <div className="flex flex-row h-2 bg-green-500 rounded-t-lg"> {/* green colored top */}
                  &nbsp;
                </div> 
                <div className="flex flex-row p-4 justify-left bg-gray-200 rounded-b-lg">
                  <img className="w-10 h-10 mr-4" src="assets/icon_smile.png" alt="happy" />
                  <p><span className="font-bold">BETTER</span><br/>
                  Did YOU just cast Magic Missle?</p>
                </div>  
            </div>  
          </div> {/* end All Caps ex. */}
          

         
          
        </UXWSubsection>
    </div>
  )
}

